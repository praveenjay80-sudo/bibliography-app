"use client";

import React, { useState, useCallback } from 'react';
import { taxonomyData, TaxonomyNode } from '@/data/taxonomy';

interface BibliographyState {
  loading: boolean;
  data: string;
  error: string;
  topic: string;
}

function TaxonomyTree({ 
  node, 
  depth = 0, 
  onSelectTopic 
}: { 
  node: TaxonomyNode; 
  depth?: number; 
  onSelectTopic: (id: string, name: string) => void;
}) {
  const [expanded, setExpanded] = useState(depth < 2);
  const hasChildren = node.children && node.children.length > 0;
  const isLeaf = !hasChildren;

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isLeaf) {
      onSelectTopic(node.id, node.name);
    }
  };

  return (
    <div className="select-none">
      <div
        className={`flex items-center py-1 px-2 rounded cursor-pointer transition-colors
          ${isLeaf 
            ? 'hover:bg-blue-100 dark:hover:bg-blue-900/30' 
            : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={hasChildren ? toggleExpand : handleClick}
      >
        {hasChildren && (
          <span className="mr-1 text-gray-500 w-4 text-center">
            {expanded ? '▼' : '▶'}
          </span>
        )}
        {!hasChildren && (
          <span className="mr-1 text-blue-500 w-4 text-center">•</span>
        )}
        <span 
          className={`text-sm ${isLeaf 
            ? 'text-blue-600 dark:text-blue-400' 
            : 'font-medium text-gray-700 dark:text-gray-300'
          }`}
        >
          {node.name}
        </span>
      </div>
      {hasChildren && expanded && (
        <div>
          {node.children!.map(child => (
            <TaxonomyTree 
              key={child.id} 
              node={child} 
              depth={depth + 1} 
              onSelectTopic={onSelectTopic}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function BibliographyDisplay({ bibliography }: { bibliography: BibliographyState }) {
  if (bibliography.loading) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Generating bibliography...</p>
      </div>
    );
  }

  if (bibliography.error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
        <p className="text-red-600 dark:text-red-400">{bibliography.error}</p>
      </div>
    );
  }

  if (!bibliography.data) {
    return (
      <div className="text-center p-8 text-gray-500 dark:text-gray-400">
        <p className="text-lg">Select a topic from the taxonomy to generate a bibliography</p>
      </div>
    );
  }

  const references = bibliography.data
    .split('\n')
    .filter(line => /^\d+\./.test(line.trim()))
    .map(line => line.trim());

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Bibliography for: 
          <span className="text-blue-600 dark:text-blue-400 ml-2">{bibliography.topic}</span>
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {references.length} references generated
        </p>
      </div>
      <div className="space-y-3">
        {references.map((ref, index) => (
          <div 
            key={index}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
          >
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{ref}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [bibliography, setBibliography] = useState<BibliographyState>({
    loading: false,
    data: '',
    error: '',
    topic: '',
  });

  const handleSelectTopic = useCallback(async (id: string, name: string) => {
    setBibliography({
      loading: true,
      data: '',
      error: '',
      topic: name,
    });

    try {
      const response = await fetch('/api/bibliography', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic: name, count: 15 }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate bibliography');
      }

      setBibliography({
        loading: false,
        data: data.bibliography,
        error: '',
        topic: name,
      });
    } catch (err) {
      setBibliography({
        loading: false,
        data: '',
        error: err instanceof Error ? err.message : 'Unknown error occurred',
        topic: name,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Formal Sciences Bibliography Generator</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Browse taxonomy and generate academic bibliographies</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Taxonomy Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="font-semibold text-gray-800 dark:text-gray-200">Taxonomy Browser</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Click on a leaf topic to generate bibliography</p>
              </div>
              <div className="p-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                <TaxonomyTree 
                  node={taxonomyData} 
                  onSelectTopic={handleSelectTopic}
                />
              </div>
            </div>
          </div>

          {/* Bibliography Display */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="font-semibold text-gray-800 dark:text-gray-200">Generated Bibliography</h2>
              </div>
              <div className="p-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                <BibliographyDisplay bibliography={bibliography} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Powered by OpenRouter API • Next.js • Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}