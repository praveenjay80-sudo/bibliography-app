class ScienceApp {
    constructor(data) {
        this.data = data;
        this.userAdditions = JSON.parse(localStorage.getItem('userAdditions') || '[]');
        this.suggestionsCache = JSON.parse(localStorage.getItem('suggestionsCache') || '{}');
        this.bibCache = JSON.parse(localStorage.getItem('bibCache') || '{}');
        this.lessonCache = JSON.parse(localStorage.getItem('lessonCache') || '{}');
        this.allConcepts = new Set();
        this.duplicates = new Set();
        this.root = document.getElementById('taxonomyRoot');
        this.theme = 'light';
        this.activeSubfield = null;
        this.activeHierarchy = null;
        this.currentSuggestions = [];
        
        this.init();
    }

    init() {
        this.applyUserAdditions();
        this.detectDuplicates();
        this.render();
        this.setupEventListeners();
        this.updateStats();
    }

    applyUserAdditions() {
        this.userAdditions.forEach(add => {
            const traverse = (nodes) => {
                for(let node of nodes) {
                    if (node.name === add.subfield && node.concepts) {
                        if (!node.concepts.some(c => (typeof c === 'string' ? c : c.name) === add.concept)) {
                            node.concepts.push({ name: add.concept, userAdded: true, aiSuggested: add.aiSuggested });
                        }
                        return true;
                    }
                    if (node.fields && traverse(node.fields)) return true;
                    if (node.subfields && traverse(node.subfields)) return true;
                }
                return false;
            };
            traverse(this.data);
        });
    }

    detectDuplicates() {
        const seen = new Set();
        this.duplicates = new Set();
        this.allConcepts = new Set();
        const traverse = (nodes) => {
            nodes.forEach(n => {
                if(n.fields) traverse(n.fields);
                if(n.subfields) traverse(n.subfields);
                const concepts = n.concepts || [];
                concepts.forEach(c => {
                    const normalized = (typeof c === 'string' ? c : c.name).toLowerCase().trim();
                    if(seen.has(normalized)) this.duplicates.add(normalized);
                    seen.add(normalized);
                    this.allConcepts.add(normalized);
                });
            });
        };
        traverse(this.data);
    }

    createNodeElement(item, level = 0, hierarchy = []) {
        const node = document.createElement('div');
        const currentHierarchy = [...hierarchy, item.name];
        node.className = `tree-node ${item.type || ''} ${item.class || ''}`;
        let childrenCount = 0;
        if (item.fields) childrenCount = item.fields.length;
        else if (item.subfields) childrenCount = item.subfields.length;
        else if (item.concepts) childrenCount = item.concepts.length;
        const header = document.createElement('div');
        header.className = 'node-header';
        let actionButtons = '';
        if (item.type === 'subfield') actionButtons = `<button class="btn-mini add-concept-btn" title="AI Suggest Additional Concepts">+</button>`;
        header.innerHTML = `<span class="arrow">▼</span><span class="node-name">${item.name}</span>${actionButtons}<span class="badge">${childrenCount}</span>`;
        header.onclick = (e) => {
            if (e.target.classList.contains('add-concept-btn')) {
                e.stopPropagation();
                this.openAddModal(item, currentHierarchy);
                return;
            }
            e.stopPropagation();
            header.parentElement.classList.toggle('collapsed');
        };
        node.appendChild(header);
        const content = document.createElement('div');
        content.className = 'node-content';
        if (item.fields) {
            item.fields.forEach(f => {
                f.type = 'field';
                content.appendChild(this.createNodeElement(f, level + 1, currentHierarchy));
            });
        } else if (item.subfields) {
            item.subfields.forEach(s => {
                s.type = 'subfield';
                content.appendChild(this.createNodeElement(s, level + 1, currentHierarchy));
            });
        } else if (item.concepts) {
            const grid = document.createElement('div');
            grid.className = 'concepts-grid';
            item.concepts.forEach(c => {
                const conceptName = typeof c === 'string' ? c : c.name;
                const isUserAdded = typeof c === 'object' && c.userAdded;
                const isAiSuggested = typeof c === 'object' && c.aiSuggested;
                const tag = document.createElement('div');
                tag.className = 'concept-tag';
                if(isUserAdded) tag.classList.add('user-added');
                if(isAiSuggested) tag.classList.add('ai-added');
                if(this.duplicates.has(conceptName.toLowerCase().trim())) {
                    tag.classList.add('duplicate');
                    tag.title = "Duplicate detected!";
                }
                tag.innerHTML = `<span>${conceptName}</span>
                    <span class="lesson-btn" title="AI School Lesson">💡</span>
                    <span class="bib-btn" title="Bibliography">🔖</span>`;
                
                tag.querySelector('.bib-btn').onclick = (e) => {
                    e.stopPropagation();
                    this.showBibliography(conceptName);
                };
                tag.querySelector('.lesson-btn').onclick = (e) => {
                    e.stopPropagation();
                    this.showLesson(conceptName);
                };

                grid.appendChild(tag);
            });
            content.appendChild(grid);
        }
        node.appendChild(content);
        return node;
    }

    openAddModal(subfield, hierarchy) {
        this.activeSubfield = subfield;
        this.activeHierarchy = hierarchy;
        this.currentSuggestions = [];
        document.getElementById('modalTitle').textContent = `Add to ${subfield.name}`;
        document.getElementById('aiSuggestionsList').innerHTML = '';
        document.getElementById('addSelectedAI').classList.add('hidden');
        document.getElementById('suggestMoreAI').classList.add('hidden');
        document.getElementById('completeMessage').classList.add('hidden');
        document.getElementById('modalStats').classList.add('hidden');
        document.getElementById('apiWarning').classList.add('hidden');
        const apiKey = localStorage.getItem('openrouter_api_key');
        if (!apiKey) {
            document.getElementById('apiWarning').classList.remove('hidden');
        } else {
            const cacheKey = `${hierarchy.join(' > ')}`;
            if (this.suggestionsCache[cacheKey]) {
                this.currentSuggestions = this.suggestionsCache[cacheKey];
                this.displaySuggestions(this.currentSuggestions);
            } else {
                this.getAISuggestions();
            }
        }
        document.getElementById('addModal').classList.add('active');
    }

    async getAISuggestions(isMore = false) {
        const apiKey = localStorage.getItem('openrouter_api_key');
        if (!apiKey) return;
        const loading = document.getElementById('loadingAI');
        const refreshBtn = document.getElementById('refreshAI');
        const moreBtn = document.getElementById('suggestMoreAI');
        const completeMsg = document.getElementById('completeMessage');
        const list = document.getElementById('aiSuggestionsList');
        loading.classList.remove('hidden');
        completeMsg.classList.add('hidden');
        refreshBtn.disabled = true;
        moreBtn.disabled = true;
        
        if (!isMore) {
            list.innerHTML = '';
            this.currentSuggestions = [];
        }

        const subfield = this.activeSubfield.name;
        const kingdom = this.activeHierarchy[0];
        const field = this.activeHierarchy[1];
        const existingInSubfield = this.activeSubfield.concepts.map(c => typeof c === 'string' ? c : c.name);
        const allKnown = [...new Set([...existingInSubfield, ...this.currentSuggestions])];
        const existingList = allKnown.join(', ');
        try {
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
                body: JSON.stringify({
                    "model": "google/gemini-2.0-flash-001",
                    "messages": [
                        { "role": "system", "content": "You are an expert academic taxonomy assistant. Suggest additional real, established concepts that are missing from the given list. Only suggest concepts that genuinely belong in this subfield. Do NOT repeat any concept already in the list. Return ONLY a JSON array of strings. If there are no more real concepts to suggest, return an empty array []. No markdown, no explanation." },
                        { "role": "user", "content": `Subfield: ${subfield} in ${field} (${kingdom}). These concepts already exist: ${existingList}. Suggest 10-20 MORE concepts that are DIFFERENT from all of these. If no more exist, return [].` }
                    ]
                })
            });
            const data = await response.json();
            if (data.choices && data.choices[0]) {
                const content = data.choices[0].message.content.trim();
                const jsonStr = content.match(/\[.*\]/s)?.[0] || content;
                const newSuggestions = JSON.parse(jsonStr);
                if (newSuggestions.length === 0) {
                    completeMsg.classList.remove('hidden');
                    moreBtn.classList.add('hidden');
                } else {
                    this.currentSuggestions = [...this.currentSuggestions, ...newSuggestions];
                    const cacheKey = `${this.activeHierarchy.join(' > ')}`;
                    this.suggestionsCache[cacheKey] = this.currentSuggestions;
                    localStorage.setItem('suggestionsCache', JSON.stringify(this.suggestionsCache));
                    this.displaySuggestions(this.currentSuggestions);
                }
            }
        } catch (error) {
            list.innerHTML += `<p style="color:red; font-size:0.8rem;">Error: ${error.message}</p>`;
        } finally {
            loading.classList.add('hidden');
            refreshBtn.disabled = false;
            moreBtn.disabled = false;
        }
    }

    displaySuggestions(suggestions) {
        const list = document.getElementById('aiSuggestionsList');
        const stats = document.getElementById('modalStats');
        list.innerHTML = '';
        let existingInAppCount = 0;
        suggestions.forEach((concept, index) => {
            const normalized = concept.toLowerCase().trim();
            const exists = this.allConcepts.has(normalized);
            if (exists) existingInAppCount++;
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.innerHTML = `<input type="checkbox" id="sug-${index}" value="${concept}" ${exists ? 'disabled' : ''}><label for="sug-${index}" style="${exists ? 'opacity:0.5; text-decoration:line-through;' : ''}">${concept} ${exists ? '<span style="font-size:0.7rem;">(Exists)</span>' : ''}</label>`;
            list.appendChild(div);
        });
        document.getElementById('sugCount').textContent = `${suggestions.length} suggestions available`;
        document.getElementById('addedCount').textContent = `${existingInAppCount} already in taxonomy`;
        stats.classList.remove('hidden');
        document.getElementById('addSelectedAI').classList.remove('hidden');
        document.getElementById('suggestMoreAI').classList.remove('hidden');
    }

    addSelectedAI() {
        const checkboxes = document.querySelectorAll('#aiSuggestionsList input[type="checkbox"]:checked');
        checkboxes.forEach(cb => {
            const val = cb.value;
            if (!this.allConcepts.has(val.toLowerCase().trim())) {
                this.activeSubfield.concepts.push({ name: val, userAdded: true, aiSuggested: true });
                this.userAdditions.push({ subfield: this.activeSubfield.name, concept: val, aiSuggested: true });
            }
        });
        this.saveAndRefresh();
    }

    addManual() {
        const input = document.getElementById('newConceptInput');
        const name = input.value.trim();
        if (name && !this.allConcepts.has(name.toLowerCase().trim())) {
            this.activeSubfield.concepts.push({ name: name, userAdded: true, aiSuggested: false });
            this.userAdditions.push({ subfield: this.activeSubfield.name, concept: name, aiSuggested: false });
            input.value = '';
            this.saveAndRefresh();
        }
    }

    saveAndRefresh() {
        localStorage.setItem('userAdditions', JSON.stringify(this.userAdditions));
        this.detectDuplicates();
        this.render();
        this.updateStats();
        this.displaySuggestions(this.currentSuggestions);
    }

    async showLesson(concept) {
        document.getElementById('bibTitle').textContent = concept;
        const lessonSection = document.getElementById('lessonSection');
        const lessonContent = document.getElementById('lessonContent');
        const bibRefs = document.getElementById('bibRefs');
        
        lessonSection.classList.remove('hidden');
        bibRefs.parentElement.classList.add('hidden'); // Hide refs while showing lesson
        document.getElementById('bibPanel').classList.add('active');

        if (this.lessonCache[concept]) {
            lessonContent.innerHTML = this.lessonCache[concept];
            return;
        }

        const apiKey = localStorage.getItem('openrouter_api_key');
        if (!apiKey) {
            lessonContent.innerHTML = `<p class="api-key-warning">Please set your OpenRouter API key in Settings.</p>`;
            return;
        }

        lessonContent.innerHTML = `<div class="spinner"></div><p style="text-align:center;">Preparing a school lesson for you...</p>`;

        try {
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
                body: JSON.stringify({
                    "model": "google/gemini-2.0-flash-001",
                    "messages": [
                        { "role": "system", "content": "You are a friendly school teacher. Explain the given science concept to a 10-year-old child. Break it down into 3 simple steps. Use a fun analogy. End with a real-life example of why we learn this. Format with simple HTML: use <div> with class 'lesson-step' for each step." },
                        { "role": "user", "content": `Explain '${concept}' to a child.` }
                    ]
                })
            });
            const data = await response.json();
            const content = data.choices[0].message.content;
            this.lessonCache[concept] = content;
            localStorage.setItem('lessonCache', JSON.stringify(this.lessonCache));
            lessonContent.innerHTML = content;
        } catch (e) { lessonContent.innerHTML = "Error: " + e.message; }
    }

    async showBibliography(concept) {
        document.getElementById('bibTitle').textContent = concept;
        document.getElementById('lessonSection').classList.add('hidden');
        document.getElementById('bibRefs').parentElement.classList.remove('hidden');
        document.getElementById('bibPanel').classList.add('active');
        
        const refs = document.getElementById('bibRefs');
        const w = document.getElementById('linkWiki'), s = document.getElementById('linkScholar'), p = document.getElementById('linkSEP');
        const query = encodeURIComponent(concept);
        w.href = `https://en.wikipedia.org/wiki/${concept.replace(/\s+/g, '_')}`;
        s.href = `https://scholar.google.com/scholar?q=${query}`;
        p.href = `https://plato.stanford.edu/search/searcher.py?query=${query}`;

        if (this.bibCache[concept]) {
            this.displayBibliography(concept, this.bibCache[concept]);
            return;
        }

        const apiKey = localStorage.getItem('openrouter_api_key');
        if (!apiKey) {
            refs.innerHTML = `<p class="api-key-warning">Set API key in Settings.</p>`;
            return;
        }

        refs.innerHTML = `<div class="spinner"></div><p style="text-align:center;">Finding references...</p>`;
        try {
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
                body: JSON.stringify({
                    "model": "google/gemini-2.0-flash-001",
                    "messages": [
                        { "role": "system", "content": "Academic assistant. List 5 real references for the concept. Format: Author (Year). Title. Publisher. Add 1-line importance check. No hallucinations." },
                        { "role": "user", "content": `References for ${concept}` }
                    ]
                })
            });
            const data = await response.json();
            const content = data.choices[0].message.content.trim();
            this.bibCache[concept] = content;
            localStorage.setItem('bibCache', JSON.stringify(this.bibCache));
            this.displayBibliography(concept, content);
        } catch (e) { refs.innerHTML = "Error: " + e.message; }
    }

    displayBibliography(concept, content) {
        const refs = document.getElementById('bibRefs');
        refs.innerHTML = `<div class="ref-item">${content.replace(/\n/g, '<br>')}</div><div style="margin-top:10px; font-size:0.7rem; opacity:0.7;">⚠️ AI generated. Verify on Google Scholar.</div>`;
    }

    render() {
        this.root.innerHTML = '';
        this.data.forEach(item => { this.root.appendChild(this.createNodeElement(item)); });
    }

    updateStats() {
        let k = 0, f = 0, s = 0, c = 0;
        this.data.forEach(kingdom => {
            k++;
            kingdom.fields?.forEach(field => {
                f++;
                field.subfields?.forEach(sub => {
                    s++;
                    c += sub.concepts?.length || 0;
                });
            });
        });
        document.getElementById('statKingdoms').textContent = k;
        document.getElementById('statFields').textContent = f;
        document.getElementById('statSubfields').textContent = s;
        document.getElementById('statConcepts').textContent = c;
    }

    setupEventListeners() {
        document.getElementById('settingsBtn').onclick = () => {
            document.getElementById('apiKeyInput').value = localStorage.getItem('openrouter_api_key') || '';
            document.getElementById('settingsModal').classList.add('active');
        };
        document.getElementById('saveSettings').onclick = () => {
            localStorage.setItem('openrouter_api_key', document.getElementById('apiKeyInput').value.trim());
            document.getElementById('settingsModal').classList.remove('active');
        };
        document.getElementById('refreshAI').onclick = () => this.getAISuggestions(false);
        document.getElementById('suggestMoreAI').onclick = () => this.getAISuggestions(true);
        document.getElementById('addSelectedAI').onclick = () => this.addSelectedAI();
        document.getElementById('submitManualAddition').onclick = () => this.addManual();
        document.getElementById('exportAdditions').onclick = () => {
            const blob = new Blob([JSON.stringify(this.userAdditions, null, 2)], {type: 'application/json'});
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `taxonomy_additions_${new Date().toISOString().split('T')[0]}.json`;
            a.click();
        };
        document.getElementById('themeToggle').onclick = () => {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', this.theme);
        };
        document.getElementById('expandAll').onclick = () => { document.querySelectorAll('.tree-node').forEach(n => n.classList.remove('collapsed')); };
        document.getElementById('collapseAll').onclick = () => { document.querySelectorAll('.tree-node').forEach(n => n.classList.add('collapsed')); };
        document.getElementById('exportJson').onclick = () => {
            const blob = new Blob([JSON.stringify(this.data, null, 2)], {type: 'application/json'});
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `taxonomy_complete_${new Date().toISOString().split('T')[0]}.json`;
            a.click();
        };
        document.getElementById('searchInput').oninput = (e) => { this.filter(e.target.value.toLowerCase()); };
    }

    filter(term) {
        document.querySelectorAll('.concept-tag').forEach(tag => {
            tag.classList.toggle('hidden', term && !tag.textContent.toLowerCase().includes(term));
        });
        ['.subfield', '.field', '.kingdom'].forEach(selector => {
            document.querySelectorAll(selector).forEach(node => {
                const nameMatch = node.querySelector('.node-name').textContent.toLowerCase().includes(term);
                const hasVisible = node.querySelectorAll('.concept-tag:not(.hidden), .subfield:not(.hidden), .field:not(.hidden)').length > 0;
                node.classList.toggle('hidden', term && !nameMatch && !hasVisible);
                if (term && (nameMatch || hasVisible)) node.classList.remove('collapsed');
            });
        });
    }
}
