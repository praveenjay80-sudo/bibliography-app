const taxonomyData = [
    {
        name: "Formal Sciences",
        type: "kingdom",
        class: "formal",
        fields: [
            {
                name: "Mathematics",
                subfields: [
                    {
                        name: "Algebra",
                        concepts: [
                            "Group Theory", "Abelian Groups", "Non-abelian Groups", "Cyclic Groups", "Permutation Groups", "Sylow Theorems", "Group Actions", "Quotient Groups", "Isomorphism Theorems", 
                            "Ring Theory", "Commutative Rings", "Non-commutative Rings", "Ideal Theory", "Principal Ideal Domains", "Unique Factorization Domains", "Noetherian Rings", "Artinian Rings",
                            "Field Theory", "Field Extensions", "Algebraic Extensions", "Transcendental Extensions", "Finite Fields", "Splitting Fields", "Galois Theory", "Galois Groups", "Solvability by Radicals",
                            "Module Theory", "Free Modules", "Projective Modules", "Injective Modules", "Flat Modules", "Tensor Products", "Linear Algebra", "Vector Spaces", "Linear Transformations", "Eigenvalues", "Eigenvectors", "Characteristic Polynomials", "Jordan Canonical Form", "Inner Product Spaces", "Dual Spaces", 
                            "Abstract Algebra", "Homological Algebra", "Chain Complexes", "Exact Sequences", "Derived Functors", "Ext Functor", "Tor Functor", "Cohomology of Groups",
                            "Representation Theory", "Character Theory", "Lie Algebras", "Root Systems", "Universal Enveloping Algebra", "Weight Theory", "Dynkin Diagrams",
                            "Commutative Algebra", "Hilbert Basis Theorem", "Zariski Topology", "Spec of a Ring", "Primary Decomposition",
                            "Universal Algebra", "Boolean Algebra", "Lattice Theory", "Distributive Lattices", "Modular Lattices", "Complete Lattices", "Heyting Algebras",
                            "Associative Algebras", "Clifford Algebras", "Quaternions", "Octonions", "Cayley-Dickson Construction"
                        ]
                    },
                    {
                        name: "Real Analysis",
                        concepts: [
                            "Limits", "Continuity", "Uniform Continuity", "Differentiation", "Riemann Integration", "Sequences", "Series", "Power Series", "Taylor Series", "Metric Spaces", "Open Sets", "Closed Sets", "Compactness", "Heine-Borel Theorem", "Connectedness", "Completeness", "Cauchy Sequences", 
                            "Measure Theory", "Sigma-algebras", "Borel Sets", "Lebesgue Measure", "Measurable Functions", "Lebesgue Integration", "Monotone Convergence Theorem", "Dominated Convergence Theorem", "Fatou's Lemma", "Lp Spaces", "Convergence in Measure",
                            "Banach Spaces", "Hilbert Spaces", "Bounded Linear Operators", "Functional Analysis", "Baire Category Theorem", "Open Mapping Theorem", "Closed Graph Theorem", "Hahn-Banach Theorem", "Uniform Boundedness Principle",
                            "Total Variation", "Absolute Continuity", "Radon-Nikodym Theorem", "Fubini's Theorem", "Pointwise Convergence", "Uniform Convergence", "Equicontinuity", "Arzelà-Ascoli Theorem", "Stone-Weierstrass Theorem"
                        ]
                    },
                    {
                        name: "Complex Analysis",
                        concepts: [
                            "Holomorphic Functions", "Meromorphic Functions", "Cauchy-Riemann Equations", "Complex Integration", "Cauchy's Integral Theorem", "Cauchy's Integral Formula", "Residue Theorem", "Calculus of Residues", "Conformal Mappings", "Möbius Transformations", "Riemann Mapping Theorem", "Riemann Surfaces", "Uniformization Theorem", "Analytic Continuation", "Monodromy Theorem", "Entire Functions", "Liouville's Theorem", "Picard's Theorems", "Argument Principle", "Rouché's Theorem", "Laurent Series", "Singularities", "Essential Singularities", "Poles", "Zeroes", "Maximum Modulus Principle", "Schwarz Lemma", "Elliptic Functions", "Weierstrass P-function", "Gamma Function", "Zeta Function"
                        ]
                    },
                    {
                        name: "Topology",
                        concepts: [
                            "Point-set Topology", "Hausdorff Spaces", "Topological Spaces", "Basis of a Topology", "Neighborhoods", "Interior and Closure", "Homeomorphisms", "Product Topology", "Quotient Topology", "Tychonoff's Theorem", "Countability Axioms", "Separation Axioms",
                            "Algebraic Topology", "Fundamental Group", "Homotopy", "Homotopy Equivalence", "Van Kampen Theorem", "Covering Spaces", "Simplicial Complexes", "Homology Theory", "Singular Homology", "Cohomology Theory", "Poincaré Duality", "Euler Characteristic",
                            "Differential Topology", "Differentiable Manifolds", "Tangent Spaces", "Smooth Maps", "Diffeomorphisms", "Immersions", "Submersions", "Vector Bundles", "Fiber Bundles", "Characteristic Classes", "Stiefel-Whitney Classes", "Chern Classes",
                            "Knot Theory", "Jones Polynomial", "Alexander Polynomial", "Surgery Theory", "Cobordism", "Morse Theory", "Transversality"
                        ]
                    },
                    {
                        name: "Number Theory",
                        concepts: [
                            "Prime Numbers", "Distribution of Primes", "Prime Number Theorem", "Modular Arithmetic", "Chinese Remainder Theorem", "Quadratic Reciprocity", "Arithmetic Functions", "Euler's Totient Function", "Möbius Function", "Dirichlet Convolution",
                            "Algebraic Number Theory", "Number Fields", "Ring of Integers", "Ideal Class Group", "Class Number", "Dedekind Domains", "Dirichlet's Unit Theorem", "Valuations", "Local Fields", "p-adic Numbers",
                            "Analytic Number Theory", "Dirichlet L-functions", "Riemann Hypothesis", "Prime Geodesic Theorem", "Circle Method", "Sieve Methods",
                            "Diophantine Equations", "Fermat's Last Theorem", "Mordell's Conjecture", "Rational Points on Curves", "Elliptic Curves", "Modular Forms", "Hecke Operators", "L-functions", "Langlands Program", "Transcendental Number Theory", "Baker's Theorem", "Lindemann-Weierstrass Theorem"
                        ]
                    },
                    {
                        name: "Geometry",
                        concepts: [
                            "Euclidean Geometry", "Axioms of Euclid", "Congruence", "Similarity", "Pythagorean Theorem", "Non-Euclidean Geometry", "Hyperbolic Geometry", "Elliptic Geometry", "Parallel Postulate",
                            "Differential Geometry", "Curvature", "Torsion", "Riemannian Manifolds", "Metric Tensor", "Levi-Civita Connection", "Geodesics", "Sectional Curvature", "Ricci Curvature", "Scalar Curvature", "Gauss-Bonnet Theorem",
                            "Algebraic Geometry", "Affine Varieties", "Projective Varieties", "Schemes", "Sheaves", "Cohomology of Sheaves", "Divisors", "Algebraic Curves", "Algebraic Surfaces", "Birationally Equivalent",
                            "Projective Geometry", "Homogeneous Coordinates", "Duality", "Projective Transformations", "Cross-ratio",
                            "Affine Geometry", "Convex Geometry", "Convex Hulls", "Minkowski Sum", "Discrete Geometry", "Packing and Covering", "Voronoi Diagrams", "Delaunay Triangulation", "Computational Geometry"
                        ]
                    },
                    {
                        name: "Combinatorics",
                        concepts: [
                            "Enumerative Combinatorics", "Permutations", "Combinations", "Binomial Coefficients", "Inclusion-Exclusion Principle", "Generating Functions", "Partition Theory", "Recurrence Relations",
                            "Extremal Combinatorics", "Turán's Theorem", "Sperner's Theorem", "Graph Theory", "Adjacency Matrix", "Planar Graphs", "Graph Coloring", "Hamiltonian Cycles", "Eulerian Paths", "Network Flow", "Matching Theory",
                            "Algebraic Combinatorics", "Schur Polynomials", "Young Tableaux", "Probabilistic Combinatorics", "Erdős–Rényi Model", "Random Graphs", 
                            "Matroid Theory", "Greedy Algorithm", "Independence Systems", "Ramsey Theory", "Ramsey Numbers", "Van der Waerden's Theorem", "Design Theory", "Block Designs", "Latin Squares"
                        ]
                    },
                    {
                        name: "Probability Theory",
                        concepts: [
                            "Probability Spaces", "Random Variables", "Probability Distributions", "Cumulative Distribution Function", "Probability Density Function", "Expected Value", "Variance", "Covariance", "Independence", "Conditional Probability", "Bayes' Theorem",
                            "Limit Theorems", "Law of Large Numbers", "Central Limit Theorem", "Characteristic Functions", "Moment Generating Functions",
                            "Stochastic Processes", "Markov Chains", "Poisson Processes", "Brownian Motion", "Wiener Process", "Martingales", "Stopping Times", "Itô Calculus", "Stochastic Differential Equations",
                            "Ergodic Theory", "Invariant Measures", "Mixing", "Random Matrices", "Tracy-Widom Distribution", "Percolation Theory", "Phase Transitions", "Large Deviations"
                        ]
                    },
                    {
                        name: "Differential Equations",
                        concepts: [
                            "Ordinary Differential Equations", "Existence and Uniqueness", "Picard-Lindelöf Theorem", "Linear Differential Equations", "Wronskian", "Systems of ODEs", "Boundary Value Problems", "Sturm-Liouville Theory",
                            "Partial Differential Equations", "Elliptic PDEs", "Parabolic PDEs", "Hyperbolic PDEs", "Laplace Equation", "Heat Equation", "Wave Equation", "Navier-Stokes Equations", "Maxwell's Equations", "Schrödinger Equation", "Sobolev Spaces", "Weak Solutions", "Distributions",
                            "Dynamical Systems", "Phase Space", "Orbits", "Attractors", "Strange Attractors", "Chaos Theory", "Butterfly Effect", "Bifurcation Theory", "Hopf Bifurcation", "Stability Theory", "Lyapunov Functions", "Control Theory", "Feedback", "Observability", "Controllability"
                        ]
                    },
                    {
                        name: "Numerical Analysis",
                        concepts: [
                            "Error Analysis", "Floating Point Arithmetic", "Rounding Errors", "Stability", "Condition Number",
                            "Interpolation", "Lagrange Interpolation", "Spline Interpolation", "Numerical Quadrature", "Trapezoidal Rule", "Simpson's Rule", "Gaussian Quadrature",
                            "Numerical Linear Algebra", "LU Decomposition", "QR Decomposition", "SVD Decomposition", "Iterative Methods", "Jacobi Method", "Gauss-Seidel", "Conjugate Gradient", "Eigenvalue Algorithms", "QR Algorithm",
                            "Numerical Solutions of ODEs", "Runge-Kutta Methods", "Euler Method", "Multistep Methods",
                            "Numerical Solutions of PDEs", "Finite Difference Method", "Finite Element Method", "Boundary Element Method", "Spectral Methods", "Fast Fourier Transform"
                        ]
                    },
                    {
                        name: "Foundations & Logic",
                        concepts: [
                            "Propositional Logic", "Logical Connectives", "Truth Tables", "Predicate Logic", "Quantifiers", "First-order Logic", "Higher-order Logic", "Soundness", "Completeness",
                            "Set Theory", "Zermelo-Fraenkel Set Theory", "Axiom of Choice", "Ordinal Numbers", "Cardinal Numbers", "Transfinite Induction", "Continuum Hypothesis",
                            "Model Theory", "Elementary Equivalence", "Lowenheim-Skolem Theorem", "Proof Theory", "Natural Deduction", "Sequent Calculus", "Normalization",
                            "Recursion Theory", "Computability", "Turing Machines", "Halting Problem", "Church-Turing Thesis", "Gödel's Incompleteness Theorems", "Consistency", "Independence Results"
                        ]
                    },
                    {
                        name: "Category Theory",
                        concepts: [
                            "Categories", "Objects", "Morphisms", "Functors", "Natural Transformations", "Adjunctions", "Adjoint Functors", "Limits and Colimits", "Pullbacks", "Pushouts", "Yoneda Lemma", "Exonential Objects",
                            "Toposes", "Elementary Topos", "Grothendieck Topos", "Subobject Classifier",
                            "Monoidal Categories", "Braid Groups", "Enriched Categories", "Operads", "Higher Categories", "2-categories", "n-categories", "Infinity-categories", "Higher Inductive Types", "Topos Theory"
                        ]
                    }
                ]
            },
            {
                name: "Logic",
                subfields: [
                    {
                        name: "Propositional Logic",
                        concepts: ["Negation", "Conjunction", "Disjunction", "Conditional", "Biconditional", "Truth Tables", "Tautology", "Contradiction", "Logical Equivalence", "Conjunctive Normal Form", "Disjunctive Normal Form", "Inference Rules", "Resolution", "Satisfiability", "DPLL Algorithm", "Functional Completeness"]
                    },
                    {
                        name: "Predicate Logic",
                        concepts: ["Universal Quantifier", "Existential Quantifier", "Domain of Discourse", "Variables", "Constants", "Predicates", "Function Symbols", "Interpretations", "Models", "Validity", "Soundness", "Completeness Theorem", "Skolemization", "Unification", "Herbrand Universe"]
                    },
                    {
                        name: "Modal Logic",
                        concepts: ["Necessity", "Possibility", "Kripke Semantics", "Possible Worlds", "Accessibility Relations", "System K", "System T", "System S4", "System S5", "Epistemic Logic", "Deontic Logic", "Temporal Logic", "LTL", "CTL"]
                    },
                    {
                        name: "Set Theory",
                        concepts: ["Axiom of Extensionality", "Axiom of Regularity", "Axiom of Foundation", "Axiom of Choice", "Well-ordering Theorem", "Ordinal Numbers", "Cardinal Numbers", "Aleph Numbers", "Beth Numbers", "Continuum Hypothesis", "Forcing", "Constructible Universe", "Large Cardinals", "Measurable Cardinals", "ZFC Axioms"]
                    },
                    {
                        name: "Model Theory",
                        concepts: ["Structures", "Elementary Equivalence", "Elementary Substructures", "Ultraproducts", "Compactness Theorem", "Lowenheim-Skolem Theorem", "Types", "Saturation", "Stability Theory", "Omega-categoricity"]
                    },
                    {
                        name: "Proof Theory",
                        concepts: ["Sequent Calculus", "Natural Deduction", "Cut Elimination", "Hilbert Systems", "Ordinal Analysis", "Normalization", "Curry-Howard Correspondence", "Linear Logic", "Typed Lambda Calculus"]
                    },
                    {
                        name: "Computability Theory",
                        concepts: ["Turing Machines", "Universal Turing Machine", "Partial Recursive Functions", "Halting Problem", "Rice's Theorem", "Turing Reducibility", "Turing Degrees", "Degrees of Unsolvability", "Post's Problem", "Church-Turing Thesis"]
                    },
                    {
                        name: "Alternative Logics",
                        concepts: ["Fuzzy Logic", "Membership Functions", "Intuitionistic Logic", "Many-valued Logic", "Paraconsistent Logic", "Dialetheism", "Relevance Logic", "Non-monotonic Logic"]
                    }
                ]
            },
            {
                name: "Computer Science",
                subfields: [
                    {
                        name: "Theory of Computation",
                        concepts: ["Finite Automata", "Deterministic Finite Automata", "Nondeterministic Finite Automata", "Regular Expressions", "Pushdown Automata", "Context-free Languages", "Context-free Grammars", "Chomsky Hierarchy", "Turing Machines", "Complexity Classes", "P vs NP", "NP-completeness", "Polynomial-time Reduction", "EXP", "PSPACE", "Log-space", "Decidability", "Undecidable Languages"]
                    },
                    {
                        name: "Algorithms & Data Structures",
                        concepts: ["Big O Notation", "Time Complexity", "Space Complexity", "Quicksort", "Mergesort", "Heap Sort", "Binary Search", "Dijkstra's Algorithm", "Bellman-Ford", "Floyd-Warshall", "A* Search", "Dynamic Programming", "Knapsack Problem", "Greedy Algorithms", "Divide and Conquer", "Linked Lists", "Binary Search Trees", "AVL Trees", "Red-Black Trees", "B-Trees", "Heaps", "Hash Tables", "Bloom Filters", "Tries", "Disjoint Set Union", "Backtracking"]
                    },
                    {
                        name: "Artificial Intelligence",
                        concepts: ["Heuristic Search", "Knowledge Representation", "Ontologies", "Expert Systems", "Automated Planning", "Natural Language Processing", "Tokenization", "Stemming", "Sentiment Analysis", "Computer Vision", "Convolutional Neural Networks", "Image Recognition", "Recurrent Neural Networks", "LSTMs", "Reinforcement Learning", "Q-learning", "Markov Decision Processes", "Transformers", "Attention Mechanism", "Generative Adversarial Networks", "Diffusion Models", "Large Language Models", "Prompt Engineering"]
                    },
                    {
                        name: "Programming Languages",
                        concepts: ["Abstract Syntax Tree", "Lexical Analysis", "Parsing", "Type Inference", "Static Typing", "Dynamic Typing", "Polymorphism", "Operational Semantics", "Denotational Semantics", "Compilers", "Interpreters", "Virtual Machines", "Garbage Collection", "Reference Counting", "Concurrency", "Parallelism", "Monads", "Higher-order Functions", "Object-oriented Programming", "Inheritance", "Encapsulation"]
                    },
                    {
                        name: "Software Engineering",
                        concepts: ["Software Development Life Cycle", "Agile Methodology", "Scrum", "Kanban", "Design Patterns", "Singleton", "Factory Pattern", "Observer Pattern", "Unit Testing", "Integration Testing", "Version Control", "Git", "DevOps", "CI/CD", "Requirements Engineering", "Software Architecture", "Microservices", "Monolithic Architecture", "Refactoring", "Test-driven Development"]
                    },
                    {
                        name: "Databases",
                        concepts: ["Relational Model", "SQL", "Normal Forms", "First Normal Form", "Second Normal Form", "Third Normal Form", "ACID Properties", "Atomicity", "Consistency", "Isolation", "Durability", "Transactions", "B-trees", "Hash Indexes", "Query Optimization", "NoSQL", "Document Stores", "Key-value Stores", "Graph Databases", "Distributed Databases", "CAP Theorem", "Sharding"]
                    },
                    {
                        name: "Computer Networks",
                        concepts: ["OSI Model", "TCP/IP Stack", "IP Addressing", "Subnetting", "Routing", "BGP", "OSPF", "DNS", "HTTP", "HTTPS", "TLS/SSL", "UDP", "Sockets", "Congestion Control", "Network Topology", "Load Balancing", "Content Delivery Networks"]
                    },
                    {
                        name: "Operating Systems",
                        concepts: ["Kernel", "Process Management", "Thread Synchronization", "Mutexes", "Semaphores", "CPU Scheduling", "Round Robin", "Memory Management", "Paging", "Segmentation", "Virtual Memory", "Page Replacement Algorithms", "File Systems", "Deadlocks", "Shell", "Interrupts", "Device Drivers", "Virtualization"]
                    },
                    {
                        name: "Computer Security",
                        concepts: ["Symmetric Encryption", "Asymmetric Encryption", "RSA", "Public Key Infrastructure", "Hashing", "MD5", "SHA-256", "Digital Signatures", "Salting", "Authentication", "Multi-factor Authentication", "Authorization", "Access Control Lists", "Malware", "Ransomware", "Buffer Overflow", "XSS", "SQL Injection", "Firewalls", "Intrusion Detection Systems"]
                    },
                    {
                        name: "Distributed Systems",
                        concepts: ["Distributed Consensus", "Paxos", "Raft", "Replication", "Fault Tolerance", "Byzantine Generals Problem", "Vector Clocks", "Eventual Consistency", "Remote Procedure Call", "MapReduce", "Gossip Protocols", "Leader Election"]
                    },
                    {
                        name: "Computer Graphics",
                        concepts: ["Rendering Pipeline", "Rasterization", "Ray Tracing", "Shaders", "GLSL", "HLSL", "Madelbrot Set", "Texture Mapping", "Anti-aliasing", "Transformations", "Quaternions", "3D Modeling", "Animation", "GPU Computing", "CUDA"]
                    },
                    {
                        name: "Human-Computer Interaction",
                        concepts: ["User Interface Design", "User Experience", "Usability Testing", "Accessibility", "Fitts's Law", "Mental Models", "Affordance", "Wireframing", "Prototyping", "Eye Tracking"]
                    },
                    {
                        name: "Robotics",
                        concepts: ["Kinematics", "Forward Kinematics", "Inverse Kinematics", "Dynamics", "PID Control", "SLAM", "Path Planning", "Actuators", "Sensors", "Lidar", "Odometry", "Manipulation"]
                    },
                    {
                        name: "Quantum Computing",
                        concepts: ["Qubits", "Quantum Superposition", "Quantum Entanglement", "Quantum Gates", "Hadamard Gate", "Quantum Circuits", "Shor's Algorithm", "Grover's Algorithm", "Quantum Error Correction", "Decoherence", "Quantum Supremacy"]
                    }
                ]
            },
            {
                name: "Statistics",
                subfields: [
                    {
                        name: "Descriptive Statistics",
                        concepts: ["Arithmetic Mean", "Median", "Mode", "Variance", "Standard Deviation", "Range", "Interquartile Range", "Skewness", "Kurtosis", "Percentiles", "Box Plots", "Histograms"]
                    },
                    {
                        name: "Inferential Statistics",
                        concepts: ["Hypothesis Testing", "Null Hypothesis", "Alternative Hypothesis", "Confidence Intervals", "P-value", "Type I Error", "Type II Error", "T-test", "Chi-square Test", "ANOVA", "F-test", "Statistical Power", "Degree of Freedom", "Effect Size"]
                    },
                    {
                        name: "Bayesian Statistics",
                        concepts: ["Prior Distribution", "Posterior Distribution", "Likelihood Function", "Bayes' Theorem", "Conjugate Priors", "MCMC", "Gibbs Sampling", "Metropolis-Hastings", "Bayesian Networks", "Credible Intervals"]
                    },
                    {
                        name: "Regression Analysis",
                        concepts: ["Simple Linear Regression", "Multiple Linear Regression", "Ordinary Least Squares", "Logistic Regression", "Polynomial Regression", "Ridge Regression", "Lasso", "Elastic Net", "R-squared", "Adjusted R-squared", "Residuals", "Multicollinearity"]
                    },
                    {
                        name: "Multivariate Statistics",
                        concepts: ["Principal Component Analysis", "Factor Analysis", "Cluster Analysis", "K-means Clustering", "Hierarchical Clustering", "Discriminant Analysis", "MANOVA", "Canonical Correlation"]
                    },
                    {
                        name: "Time Series",
                        concepts: ["Stationarity", "Autocorrelation", "Partial Autocorrelation", "ARIMA", "SARIMA", "GARCH", "Exponential Smoothing", "Seasonal Decomposition", "Forecasting"]
                    },
                    {
                        name: "Nonparametric Statistics",
                        concepts: ["Mann-Whitney U Test", "Wilcoxon Signed-Rank Test", "Kruskal-Wallis Test", "Spearman Rank Correlation", "Bootstrapping", "Jackknife Resampling", "Kernel Density Estimation"]
                    },
                    {
                        name: "Statistical Learning",
                        concepts: ["Cross-validation", "Bias-Variance Tradeoff", "Regularization", "Ensemble Learning", "Bagging", "Boosting", "Random Forests", "Support Vector Machines", "K-nearest Neighbors", "Overfitting"]
                    },
                    {
                        name: "Experimental Design",
                        concepts: ["Randomization", "Blocking", "Factorial Design", "Latin Squares", "A/B Testing", "Sample Size Determination", "Blinding"]
                    },
                    {
                        name: "Biostatistics",
                        concepts: ["Survival Analysis", "Hazard Ratio", "Kaplan-Meier Estimator", "Cox Regression", "Epidemiology", "Clinical Trials", "Relative Risk", "Odds Ratio", "Meta-analysis"]
                    },
                    {
                        name: "Spatial Statistics",
                        concepts: ["Geostatistics", "Kriging", "Spatial Autocorrelation", "Moran's I", "Point Processes", "Variogram"]
                    }
                ]
            },
            {
                name: "Information Theory",
                subfields: [
                    {
                        name: "Key Concepts",
                        concepts: ["Shannon Entropy", "Mutual Information", "Conditional Entropy", "Joint Entropy", "Kullback-Leibler Divergence", "Channel Capacity", "Source Coding Theorem", "Noisy-Channel Coding Theorem", "Huffman Coding", "Arithmetic Coding", "Shannon-Fano Coding", "Hamming Distance", "Error-correcting Codes", "Kolmogorov Complexity"]
                    }
                ]
            },
            {
                name: "Systems Science",
                subfields: [
                    {
                        name: "Key Concepts",
                        concepts: ["General Systems Theory", "Cybernetics", "Positive Feedback", "Negative Feedback", "Homeostasis", "Emergence", "Self-organization", "Complex Adaptive Systems", "Chaos Theory", "Strange Attractors", "System Dynamics", "Control Theory", "Network Theory", "Agent-based Modeling", "Holism"]
                    }
                ]
            },
            {
                name: "Decision & Game Theory",
                subfields: [
                    {
                        name: "Key Concepts",
                        concepts: ["Utility Theory", "Expected Utility", "Marginal Utility", "Risk Aversion", "Nash Equilibrium", "Dominant Strategy", "Zero-sum Games", "Prisoner's Dilemma", "Cooperative Games", "Shapley Value", "Mechanism Design", "Auction Theory", "Pareto Optimality", "Minimax Theorem", "Backward Induction", "Bayesian Games", "Evolutionary Game Theory", "Social Choice Theory", "Arrow's Impossibility Theorem", "Voting Theory", "Condorcet Paradox"]
                    }
                ]
            }
        ]
    },
    {
        name: "Natural Sciences",
        type: "kingdom",
        class: "natural",
        fields: [
            {
                name: "Physics",
                subfields: [
                    {
                        name: "Classical Mechanics",
                        concepts: ["Newton's Laws Of Motion", "First Law Of Motion", "Second Law Of Motion", "Third Law Of Motion", "Inertia", "Lagrangian", "Hamiltonian", "Action Principle", "Conservation Of Energy", "Conservation Of Momentum", "Conservation Of Angular Momentum", "Rigid Body Dynamics", "Moment Of Inertia", "Torque", "Simple Harmonic Motion", "Damped Oscillation", "Resonance", "Fluid Statics", "Fluid Dynamics", "Pascal's Principle", "Archimedes' Principle", "Viscosity", "Elasticity", "Acoustics", "Orbital Mechanics", "Kepler's Laws", "Gyroscopic Effect", "Coriolis Force", "Centripetal Force", "Projectile Motion", "Friction", "Aerodynamic Drag"]
                    },
                    {
                        name: "Electromagnetism",
                        concepts: ["Maxwell Equations", "Gauss's Law", "Gauss's Law For Magnetism", "Faraday's Law", "Ampere's Law", "Coulomb Law", "Lorentz Force Law", "Electric Field", "Magnetic Field", "Electromagnetic Waves", "Poynting Vector", "Polarization Of Light", "Diffraction", "Interference", "Refraction", "Reflection", "Snell's Law", "Inductance", "Capacitance", "Impedance", "Reactance", "Waveguides", "Antenna Theory", "Electromagnetic Spectrum", "Radio Waves", "Microwaves", "Infrared", "Visible Light", "Ultraviolet", "X-rays", "Gamma Rays"]
                    },
                    {
                        name: "Thermodynamics & Statistical Mechanics",
                        concepts: ["Zeroth Law Of Thermodynamics", "First Law Of Thermodynamics", "Second Law Of Thermodynamics", "Third Law Of Thermodynamics", "Entropy", "Enthalpy", "Gibbs Free Energy", "Helmholtz Free Energy", "Partition Functions", "Boltzmann Distribution", "Fermi-Dirac Statistics", "Bose-Einstein Statistics", "Maxwell-Boltzmann Distribution", "Phase Transitions", "Critical Point", "Triple Point", "Heat Engines", "Carnot Cycle", "Kinetic Theory Of Gases", "Equipartition Theorem", "Blackbody Radiation", "Stefan-Boltzmann Law", "Wien's Displacement Law"]
                    },
                    {
                        name: "Quantum Mechanics",
                        concepts: ["Wave-particle Duality", "Schrodinger Equation", "Heisenberg Uncertainty Principle", "Quantum Superposition", "Quantum Entanglement", "Pauli Exclusion Principle", "Quantum Spin", "Angular Momentum Operator", "Quantum Harmonic Oscillator", "Hydrogen Atom Model", "Perturbation Theory", "Quantum Scattering", "Quantum Tunneling", "Dirac Equation", "Path Integral Formulation", "Density Matrix", "Quantum Decoherence", "Bell's Theorem", "Measurement Problem", "EPR Paradox"]
                    },
                    {
                        name: "Relativity",
                        concepts: ["Special Relativity", "Lorentz Transformations", "Time Dilation", "Length Contraction", "Mass-energy Equivalence", "General Relativity", "Einstein Field Equations", "Spacetime Curvature", "Geodesics", "Gravitational Waves", "Black Hole Physics", "Event Horizon", "Cosmological Constant", "Schwarzschild Metric", "Kerr Metric", "Frame Dragging", "Gravitational Lensing", "Gravitational Redshift", "Equivalence Principle"]
                    },
                    {
                        name: "Nuclear & Particle Physics",
                        concepts: ["Standard Model Of Particle Physics", "Quarks", "Leptons", "Gauge Bosons", "Strong Nuclear Force", "Weak Nuclear Force", "Higgs Mechanism", "Feynman Diagrams", "Quantum Electrodynamics", "Quantum Chromodynamics", "Electroweak Unification", "Neutrino Oscillation", "CP Violation", "Nuclear Fission", "Nuclear Fusion", "Radioactive Decay", "Alpha Decay", "Beta Decay", "Gamma Decay", "Half-life", "Nuclear Binding Energy", "Isotopes"]
                    },
                    {
                        name: "Condensed Matter Physics",
                        concepts: ["Crystal Structure", "Lattice Vibrations", "Reciprocal Lattice", "Band Theory", "Valence Band", "Conduction Band", "Semiconductors", "Superconductivity", "Superfluidity", "Magnetism", "Ferromagnetism", "Antiferromagnetism", "Phonon", "Fermi Surface", "Topological Insulator", "Quantum Hall Effect", "Bose-Einstein Condensate", "Liquid Crystals", "Polymer Physics", "Amorphous Solids", "Quasicrystal"]
                    },
                    {
                        name: "Optics",
                        concepts: ["Geometric Optics", "Wave Optics", "Lenses", "Focal Length", "Mirrors", "Fiber Optics", "Laser Physics", "Holography", "Nonlinear Optics", "Photonics", "Spectroscopy", "Raman Scattering", "Brillouin Scattering", "Optical Coherence", "Fourier Optics", "Aberration"]
                    },
                    {
                        name: "Plasma Physics",
                        concepts: ["Debye Shielding", "Plasma Frequency", "Magnetohydrodynamics", "Plasma Confinement", "Magnetic Confinement Fusion", "Tokamak", "Inertial Confinement Fusion", "Plasma Waves", "Landau Damping", "Magnetic Reconnection"]
                    },
                    {
                        name: "Astrophysics & Cosmology",
                        concepts: ["Stellar Structure", "Stellar Evolution", "Nucleosynthesis", "Main Sequence", "Red Giant", "Supernova", "Neutron Star", "Pulsar", "White Dwarf", "Galaxy Classification", "Dark Matter", "Dark Energy", "Cosmic Microwave Background", "Big Bang Model", "Inflationary Universe", "Large Scale Structure Of The Universe", "Redshift", "Hubble's Law", "Friedmann Equations", "Exoplanetology"]
                    },
                    {
                        name: "Atomic & Molecular Physics",
                        concepts: ["Atomic Spectral Lines", "Molecular Bonding", "Covalent Bond", "Ionic Bond", "Molecular Spectroscopy", "Laser Cooling", "Magneto-optical Trap", "Atomic Clock", "Photoionization", "Stark Effect", "Zeeman Effect"]
                    },
                    {
                        name: "Acoustics & Fluid Dynamics",
                        concepts: ["Sound Waves", "Acoustic Resonance", "Doppler Effect", "Navier-Stokes Equations", "Turbulent Flow", "Laminar Flow", "Reynolds Number", "Bernoulli's Equation", "Vorticity", "Boundary Layer", "Compressible Flow", "Shock Wave", "Mach Number"]
                    }
                ]
            },
            {
                name: "Chemistry",
                subfields: [
                    {
                        name: "Organic Chemistry",
                        concepts: ["Functional Groups", "IUPAC Nomenclature", "Hydrocarbons", "Alkanes", "Alkenes", "Alkynes", "Cycloalkanes", "Aromaticity", "Benzene", "Alcohols", "Phenols", "Aldehydes", "Ketones", "Carboxylic Acids", "Amines", "Amides", "Esters", "Ethers", "Polymerization", "Stereochemistry", "Chirality", "Enantiomers", "Diastereomers", "Reaction Mechanisms", "Nucleophilic Substitution", "Electrophilic Addition", "Elimination Reaction", "Free Radical Reaction", "Oxidation Reduction", "Heterocyclic Compounds", "NMR Spectroscopy", "Infrared Spectroscopy", "Mass Spectrometry", "Retrosynthetic Analysis", "Protecting Groups"]
                    },
                    {
                        name: "Inorganic Chemistry",
                        concepts: ["Coordination Chemistry", "Ligand", "Chelation", "Crystal Field Theory", "Ligand Field Theory", "Organometallic Chemistry", "Bioinorganic Chemistry", "Solid State Chemistry", "Main Group Elements", "Transition Metals", "Lanthanide", "Actinide", "Cluster Compounds", "Inorganic Catalysis"]
                    },
                    {
                        name: "Physical Chemistry",
                        concepts: ["Chemical Thermodynamics", "Chemical Kinetics", "Reaction Rate", "Arrhenius Equation", "Transition State Theory", "Activation Energy", "Electrochemistry", "Galvanic Cell", "Electrolysis", "Surface Chemistry", "Adsorption", "Colloids", "Photochemistry", "Quantum Chemistry", "Molecular Orbital Theory", "Valence Bond Theory", "Statistical Thermodynamics", "Phase Diagrams", "Chemical Equilibrium", "Le Chatelier's Principle"]
                    },
                    {
                        name: "Analytical Chemistry",
                        concepts: ["Chromatography", "Gas Chromatography", "High-performance Liquid Chromatography", "Mass Spectrometry", "Spectrophotometry", "Atomic Absorption", "Titration", "Acid-base Titration", "Redox Titration", "Electroanalytical Methods", "Potentiometry", "Separation Science", "Qualitative Chemical Analysis", "Quantitative Chemical Analysis", "Chemical Sensors", "Calibration Curve"]
                    },
                    {
                        name: "Biochemistry",
                        concepts: ["Amino Acids", "Peptide Bond", "Protein Structure", "Enzyme Kinetics", "Michaelis-Menten Kinetics", "Carbohydrates", "Monosaccharide", "Polysaccharide", "Lipids", "Phospholipids", "Nucleic Acids", "DNA Double Helix", "RNA Structure", "Central Dogma Of Molecular Biology", "Metabolism", "Glycolysis", "Citric Acid Cycle", "Oxidative Phosphorylation", "Signal Transduction", "Protein Folding", "Gene Expression Regulation"]
                    },
                    {
                        name: "Nuclear Chemistry",
                        concepts: ["Nuclear Radioactivity", "Radioactive Half-life", "Nuclear Fission", "Nuclear Fusion", "Radiochemistry", "Isotopic Labeling", "Nuclear Medicine", "Radiometric Dating", "Synthetic Radioisotopes"]
                    },
                    {
                        name: "Environmental Chemistry",
                        concepts: ["Atmospheric Chemistry", "Ozone Depletion", "Water Chemistry", "Water Hardness", "Soil Chemistry", "Pollutants", "Pesticides", "Acid Rain", "Greenhouse Gases", "Biogeochemical Cycles", "Carbon Cycle", "Nitrogen Cycle"]
                    },
                    {
                        name: "Materials Chemistry",
                        concepts: ["Ceramics", "Composite Materials", "Nanochemistry", "Nanoparticles", "Carbon Nanotubes", "Graphene", "Polymer Science", "Biomaterials", "Semiconducting Materials", "Superconducting Materials", "Smart Materials"]
                    },
                    {
                        name: "Computational Chemistry",
                        concepts: ["Molecular Dynamics", "Density Functional Theory", "Ab Initio Method", "Semi-empirical Method", "Molecular Mechanics", "Molecular Docking", "QSAR"]
                    }
                ]
            },
            {
                name: "Biology",
                subfields: [
                    {
                        name: "Cell Biology",
                        concepts: ["Cell Membrane", "Phospholipid Bilayer", "Cytoplasm", "Nucleus", "Mitochondria", "Chloroplast", "Endoplasmic Reticulum", "Golgi Apparatus", "Lysosome", "Peroxisome", "Ribosome", "Cytoskeleton", "Microtubules", "Actin Filaments", "Cell Signaling", "Active Transport", "Passive Transport", "Endocytosis", "Exocytosis", "Cell Cycle", "Mitosis", "Meiosis", "Apoptosis"]
                    },
                    {
                        name: "Genetics",
                        concepts: ["Mendelian Inheritance", "Laws Of Inheritance", "Allele", "Genotype", "Phenotype", "Homozygous", "Heterozygous", "DNA Replication", "Transcription", "Translation", "Genetic Code", "Gene Regulation", "Operon", "Epigenetics", "DNA Methylation", "Histone Modification", "Genetic Mutation", "Point Mutation", "Frameshift Mutation", "Genetic Recombination", "Chromosome Structure", "Gene Mapping", "Population Genetics", "Hardy-Weinberg Principle", "Quantitative Genetics", "Genomics", "CRISPR", "Gene Therapy"]
                    },
                    {
                        name: "Molecular Biology",
                        concepts: ["Double Helix Structure", "RNA Processing", "Splicing", "Protein Synthesis", "Gene Expression", "Molecular Cloning", "Restriction Enzymes", "Plasmids", "PCR", "Polymerase Chain Reaction", "Gel Electrophoresis", "Southern Blot", "Western Blot", "DNA Sequencing", "Proteomics", "Metabolomics"]
                    },
                    {
                        name: "Ecology",
                        concepts: ["Ecosystem", "Food Web", "Trophic Level", "Energy Pyramid", "Biogeochemical Cycles", "Population Dynamics", "Carrying Capacity", "Community Ecology", "Biodiversity", "Species Richness", "Conservation Biology", "Ecological Succession", "Biomes", "Niche Theory", "Island Biogeography", "Landscape Ecology", "Symbiosis", "Mutualism", "Commensalism", "Parasitism"]
                    },
                    {
                        name: "Evolution",
                        concepts: ["Natural Selection", "Adaptation", "Genetic Drift", "Speciation", "Allopatric Speciation", "Sympatric Speciation", "Phylogenetics", "Phylogenetic Tree", "Molecular Evolution", "Adaptive Radiation", "Convergent Evolution", "Coevolution", "Sexual Selection", "Evolutionary Developmental Biology", "Evo-devo", "Fossil Record", "Cladistics"]
                    },
                    {
                        name: "Microbiology",
                        concepts: ["Bacteria", "Gram Stain", "Archaea", "Extremophiles", "Viruses", "Viral Replication", "Fungi", "Protozoa", "Bacteriophage", "Microbial Ecology", "Pathogenesis", "Virulence Factors", "Antibiotic Resistance", "Biofilm", "Metagenomics", "Virology", "Medical Microbiology"]
                    },
                    {
                        name: "Physiology",
                        concepts: ["Nervous System", "Action Potential", "Synapse", "Cardiovascular System", "Respiratory System", "Gas Exchange", "Digestive System", "Enzymatic Digestion", "Endocrine System", "Hormonal Regulation", "Renal System", "Filtration", "Musculoskeletal System", "Reproductive System", "Homeostasis", "Negative Feedback", "Thermoregulation", "Osmoregulation"]
                    },
                    {
                        name: "Botany",
                        concepts: ["Plant Anatomy", "Xylem", "Phloem", "Photosynthesis", "Calvin Cycle", "Light Reactions", "Plant Hormones", "Auxin", "Gibberellin", "Transpiration", "Stomata", "Germination", "Pollination", "Plant Ecology", "Plant Taxonomy", "Ethnobotany"]
                    },
                    {
                        name: "Zoology",
                        concepts: ["Animal Classification", "Taxonomy", "Comparative Anatomy", "Animal Behavior", "Ethology", "Fixed Action Pattern", "Entomology", "Ornithology", "Herpetology", "Ichthyology", "Mammalogy", "Marine Biology"]
                    },
                    {
                        name: "Neuroscience",
                        concepts: ["Neuron", "Dendrite", "Axon", "Synaptic Transmission", "Neurotransmitters", "Dopamine", "Serotonin", "Brain Anatomy", "Cerebral Cortex", "Hippocampus", "Amygdala", "Neural Circuit", "Neuroplasticity", "Cognitive Neuroscience", "Neuroimaging", "fMRI", "Electrophysiology", "EEG", "Computational Neuroscience"]
                    },
                    {
                        name: "Immunology",
                        concepts: ["Innate Immunity", "Adaptive Immunity", "Antibodies", "Immunoglobulins", "T Cells", "B Cells", "Cytokines", "Complement System", "MHC", "Autoimmunity", "Allergy", "Vaccination", "Immunotherapy"]
                    },
                    {
                        name: "Bioinformatics",
                        concepts: ["Sequence Alignment", "BLAST", "Genome Assembly", "Phylogenetic Analysis", "Gene Prediction", "Protein Structure Prediction", "Biological Databases", "GenBank", "Systems Biology"]
                    }
                ]
            },
            {
                name: "Earth Sciences",
                subfields: [
                    {
                        name: "Geology",
                        concepts: ["Minerals", "Crystallography", "Igneous Rocks", "Sedimentary Rocks", "Metamorphic Rocks", "Rock Cycle", "Plate Tectonics", "Subduction", "Continental Drift", "Earthquake Seismology", "Volcanology", "Erosion", "Sedimentation", "Stratigraphy", "Geological Time Scale", "Fossilization", "Petrology", "Structural Geology", "Faults", "Folds", "Geomorphology", "Hydrogeology"]
                    },
                    {
                        name: "Oceanography",
                        concepts: ["Ocean Current", "Gulf Stream", "Tides", "Surface Waves", "Thermohaline Circulation", "Marine Ecosystems", "Coral Reef", "Deep Sea Vent", "Ocean Chemistry", "Ocean Acidification", "Sea Level Rise", "El Nino Southern Oscillation"]
                    },
                    {
                        name: "Atmospheric Science",
                        concepts: ["Weather Systems", "Climate Dynamics", "Atmospheric Circulation", "Hadley Cell", "Coriolis Effect", "Weather Fronts", "Cyclones", "Anticyclones", "Hurricanes", "Tornadoes", "Precipitation", "Atmospheric Chemistry", "Radiation Balance", "Jet Stream", "Monsoon"]
                    },
                    {
                        name: "Climate Science",
                        concepts: ["Greenhouse Effect", "Global Warming", "Climate Model", "General Circulation Model", "Paleoclimatology", "Ice Core Analysis", "Sea Ice Dynamics", "Carbon Cycle", "Climate Feedback", "Climate Sensitivity", "Milankovitch Cycles"]
                    },
                    {
                        name: "Soil Science",
                        concepts: ["Soil Formation", "Pedogenesis", "Soil Horizon", "Soil Classification", "Soil Chemistry", "Cation Exchange Capacity", "Soil Biology", "Soil Erosion", "Soil Fertility"]
                    },
                    {
                        name: "Hydrology",
                        concepts: ["Hydrological Cycle", "Groundwater", "Aquifer", "Water Table", "Watershed", "Streamflow", "Flood Plain", "Water Quality", "Evapotranspiration"]
                    },
                    {
                        name: "Geophysics",
                        concepts: ["Seismology", "Seismic Waves", "P-wave", "S-wave", "Earth Interior", "Geomagnetism", "Magnetic Reversal", "Gravity Anomaly", "Geothermal Heat Flow", "Paleomagnetism", "Geodesy"]
                    }
                ]
            },
            {
                name: "Astronomy",
                subfields: [
                    {
                        name: "Observational Astronomy",
                        concepts: ["Optical Telescope", "Refracting Telescope", "Reflecting Telescope", "Radio Astronomy", "Infrared Astronomy", "X-ray Astronomy", "Gamma-ray Astronomy", "Gravitational Wave Observatory", "LIGO", "Interferometry", "Adaptive Optics", "Astronomical Spectroscopy", "Photometry"]
                    },
                    {
                        name: "Stellar Astronomy",
                        concepts: ["Stellar Classification", "OBAFGKM", "Hertzsprung-Russell Diagram", "Main Sequence", "Stellar Evolution", "Red Giant", "White Dwarf", "Neutron Star", "Degeneracy Pressure", "Black Hole", "Binary Star System", "Variable Star", "Star Formation", "Stellar Nucleosynthesis", "Protostar"]
                    },
                    {
                        name: "Planetary Science",
                        concepts: ["Solar System", "Sun", "Terrestrial Planet", "Gas Giant", "Ice Giant", "Moons", "Asteroid Belt", "Comet", "Kuiper Belt", "Oort Cloud", "Planetary Atmosphere", "Planetary Geology", "Exoplanet", "Transit Method", "Radial Velocity", "Astrobiology", "Habitability"]
                    },
                    {
                        name: "Galactic Astronomy",
                        concepts: ["Milky Way Galaxy", "Galactic Bulge", "Galactic Disk", "Spiral Arm", "Galaxy Classification", "Spiral Galaxy", "Elliptical Galaxy", "Irregular Galaxy", "Active Galactic Nucleus", "Quasar", "Galaxy Cluster", "Intergalactic Medium", "Galaxy Formation", "Local Group"]
                    },
                    {
                        name: "Cosmology",
                        concepts: ["Big Bang Theory", "Cosmic Inflation", "Dark Matter", "Dark Energy", "Cosmic Microwave Background", "Baryon Acoustic Oscillation", "Large Scale Structure", "Cosmological Constant", "Lambda-CDM Model", "Friedmann Equations", "Fate Of The Universe", "Multiverse Hypothesis"]
                    }
                ]
            }
        ]
    },
    {
        name: "Social Sciences",
        type: "kingdom",
        class: "social",
        fields: [
            {
                name: "Economics",
                subfields: [
                    {
                        name: "Microeconomics",
                        concepts: ["Supply and Demand", "Elasticity", "Consumer Theory", "Producer Theory", "Market Structures", "Perfect Competition", "Monopoly", "Oligopoly", "Monopolistic Competition", "Game Theory in Economics", "Welfare Economics", "Externalities", "Public Goods", "Asymmetric Information", "Moral Hazard", "Adverse Selection", "Principal-agent Problem", "General Equilibrium", "Partial Equilibrium", "Indifference Curves", "Budget Constraints", "Marginal Utility", "Marginal Cost", "Price Discrimination", "Edgeworth Box", "Pareto Efficiency", "Market Failure", "Coase Theorem"]
                    },
                    {
                        name: "Macroeconomics",
                        concepts: ["GDP", "Inflation", "Unemployment", "Aggregate Demand", "Aggregate Supply", "Fiscal Policy", "Monetary Policy", "Central Banking", "Interest Rates", "Money Supply", "Phillips Curve", "Business Cycles", "Economic Growth", "Solow Model", "IS-LM Model", "AD-AS Model", "Multiplier Effect", "Crowding Out", "National Income Accounting", "Balance of Payments", "Exchange Rates", "Open Economy", "Recession", "Stagflation", "Quantitative Easing", "Modern Monetary Theory"]
                    },
                    {
                        name: "Econometrics",
                        concepts: ["Regression Analysis", "Time Series", "Panel Data", "Instrumental Variables", "Difference-in-differences", "Regression Discontinuity", "Propensity Score Matching", "Maximum Likelihood", "GMM", "Cointegration", "Granger Causality", "Heteroskedasticity", "Autocorrelation", "Endogeneity", "Natural Experiments", "Causal Inference"]
                    },
                    {
                        name: "International Economics",
                        concepts: ["Trade Theory", "Comparative Advantage", "Heckscher-Ohlin", "Trade Policy", "Tariffs", "Quotas", "Trade Agreements", "WTO", "Exchange Rate Regimes", "Balance of Payments", "Capital Flows", "Foreign Direct Investment", "International Monetary System", "Globalization", "Trade Deficits"]
                    },
                    {
                        name: "Development Economics",
                        concepts: ["Poverty", "Inequality", "Human Capital", "Institutional Economics", "Microfinance", "Foreign Aid", "Structural Transformation", "Industrialization", "Rural Development", "Gini Coefficient", "HDI", "Capability Approach", "Demographic Transition"]
                    },
                    {
                        name: "Behavioral Economics",
                        concepts: ["Prospect Theory", "Bounded Rationality", "Heuristics", "Biases", "Framing Effects", "Loss Aversion", "Endowment Effect", "Anchoring", "Mental Accounting", "Nudge Theory", "Time Inconsistency", "Hyperbolic Discounting", "Social Preferences", "Fairness"]
                    },
                    {
                        name: "Financial Economics",
                        concepts: ["Asset Pricing", "CAPM", "Portfolio Theory", "Efficient Market Hypothesis", "Options Pricing", "Black-Scholes", "Risk Management", "Derivatives", "Bonds", "Equities", "Interest Rate Theory", "Term Structure", "Credit Risk", "Behavioral Finance", "Market Microstructure"]
                    },
                    {
                        name: "Public Economics",
                        concepts: ["Taxation", "Public Expenditure", "Social Insurance", "Public Choice Theory", "Voting", "Rent-seeking", "Government Failure", "Cost-benefit Analysis", "Redistribution", "Optimal Taxation", "Pigouvian Taxes"]
                    },
                    {
                        name: "Labor Economics",
                        concepts: ["Labor Supply", "Labor Demand", "Wage Determination", "Human Capital Theory", "Discrimination", "Unions", "Minimum Wage", "Unemployment Theory", "Search and Matching", "Migration", "Education Economics"]
                    },
                    {
                        name: "Environmental Economics",
                        concepts: ["Externalities", "Pollution", "Carbon Pricing", "Emissions Trading", "Natural Resource Economics", "Sustainability", "Cost-benefit Analysis", "Valuation Methods", "Commons", "Tragedy of the Commons", "Green GDP"]
                    }
                ]
            },
            {
                name: "Psychology",
                subfields: [
                    {
                        name: "Cognitive Psychology",
                        concepts: ["Perception", "Attention", "Memory", "Working Memory", "Long-term Memory", "Encoding", "Retrieval", "Forgetting", "Decision Making", "Problem Solving", "Reasoning", "Language Processing", "Mental Models", "Cognitive Load", "Schemas", "Heuristics", "Cognitive Biases", "Metacognition", "Executive Functions", "Categorization", "Concept Formation"]
                    },
                    {
                        name: "Developmental Psychology",
                        concepts: ["Piaget Stages", "Vygotsky", "Attachment Theory", "Erikson Stages", "Moral Development", "Language Acquisition", "Cognitive Development", "Adolescent Development", "Aging", "Lifespan Development", "Nature vs Nurture", "Critical Periods", "Theory of Mind", "Object Permanence", "Scaffolding"]
                    },
                    {
                        name: "Social Psychology",
                        concepts: ["Attitudes", "Persuasion", "Conformity", "Obedience", "Group Dynamics", "Social Identity", "Stereotypes", "Prejudice", "Discrimination", "Attribution Theory", "Cognitive Dissonance", "Bystander Effect", "Social Facilitation", "Deindividuation", "Groupthink", "Self-concept", "Social Comparison", "Aggression", "Prosocial Behavior", "Interpersonal Attraction"]
                    },
                    {
                        name: "Clinical Psychology",
                        concepts: ["Psychopathology", "Anxiety Disorders", "Mood Disorders", "Personality Disorders", "Schizophrenia", "PTSD", "OCD", "Eating Disorders", "Substance Abuse", "Psychotherapy", "CBT", "Psychoanalysis", "Humanistic Therapy", "DBT", "Assessment", "Diagnosis", "DSM", "Clinical Interviewing"]
                    },
                    {
                        name: "Neuropsychology",
                        concepts: ["Brain-behavior Relationships", "Lateralization", "Aphasia", "Agnosia", "Apraxia", "Amnesia", "Traumatic Brain Injury", "Neuropsychological Assessment", "Rehabilitation", "Plasticity", "Split-brain Studies"]
                    },
                    {
                        name: "Personality Psychology",
                        concepts: ["Trait Theory", "Big Five", "Psychodynamic Theory", "Humanistic Theory", "Self-actualization", "Temperament", "Personality Assessment", "MBTI", "Factor Analysis of Personality", "Person-situation Debate", "Narcissism", "Attachment Styles"]
                    },
                    {
                        name: "Industrial-Organizational Psychology",
                        concepts: ["Job Satisfaction", "Motivation", "Leadership", "Organizational Culture", "Performance Appraisal", "Selection", "Training", "Team Dynamics", "Work-life Balance", "Organizational Justice", "Job Analysis", "Ergonomics"]
                    },
                    {
                        name: "Educational Psychology",
                        concepts: ["Learning Theories", "Behaviorism", "Constructivism", "Motivation in Education", "Instructional Design", "Assessment", "Intelligence Testing", "Learning Disabilities", "Gifted Education", "Classroom Management", "Transfer of Learning", "Self-regulated Learning"]
                    },
                    {
                        name: "Evolutionary Psychology",
                        concepts: ["Natural Selection and Behavior", "Mate Selection", "Kin Selection", "Parental Investment", "Reciprocal Altruism", "Evolved Psychological Mechanisms", "Domain-specific Cognition", "Inclusive Fitness"]
                    },
                    {
                        name: "Health Psychology",
                        concepts: ["Stress", "Coping", "Psychoneuroimmunology", "Health Behavior", "Chronic Illness", "Pain Management", "Placebo Effect", "Adherence", "Health Promotion", "Biopsychosocial Model"]
                    },
                    {
                        name: "Psychometrics",
                        concepts: ["Reliability", "Validity", "Item Response Theory", "Classical Test Theory", "Factor Analysis", "Test Construction", "Norms", "Standardization", "Measurement Scales", "Cronbach Alpha", "Structural Equation Modeling"]
                    }
                ]
            },
            {
                name: "Sociology",
                subfields: [
                    {
                        name: "Social Stratification",
                        concepts: ["Class", "Caste", "Social Mobility", "Inequality", "Poverty", "Wealth Distribution", "Status", "Prestige", "Meritocracy", "Intersectionality", "Pierre Bourdieu Capital Theory", "Weber Class Status Party"]
                    },
                    {
                        name: "Sociological Theory",
                        concepts: ["Functionalism", "Conflict Theory", "Symbolic Interactionism", "Structuralism", "Post-structuralism", "Social Constructionism", "Critical Theory", "Feminist Theory", "Queer Theory", "Postcolonial Theory", "Actor-network Theory", "Rational Choice Theory", "Durkheim", "Weber", "Marx", "Parsons", "Giddens", "Foucault", "Habermas"]
                    },
                    {
                        name: "Sociology of Culture",
                        concepts: ["Norms", "Values", "Beliefs", "Cultural Capital", "Subcultures", "Countercultures", "Cultural Production", "Popular Culture", "Media", "Religion", "Secularization", "Cultural Globalization", "Cultural Relativism", "Ethnocentrism"]
                    },
                    {
                        name: "Urban Sociology",
                        concepts: ["Urbanization", "Gentrification", "Segregation", "Urban Planning", "Community", "Neighborhoods", "Homelessness", "Suburbs", "Smart Cities", "Urban Ecology"]
                    },
                    {
                        name: "Sociology of Education",
                        concepts: ["Educational Inequality", "Tracking", "Hidden Curriculum", "Credentialism", "Cultural Reproduction", "School-to-prison Pipeline", "Higher Education", "Literacy", "Educational Policy", "Socialization"]
                    },
                    {
                        name: "Medical Sociology",
                        concepts: ["Social Determinants of Health", "Medicalization", "Illness Behavior", "Doctor-patient Relationship", "Health Disparities", "Disability", "Mental Health Stigma", "Healthcare Systems", "Bioethics"]
                    },
                    {
                        name: "Criminology",
                        concepts: ["Crime Theories", "Strain Theory", "Labeling Theory", "Social Control", "Deterrence", "Recidivism", "White Collar Crime", "Organized Crime", "Victimology", "Restorative Justice", "Mass Incarceration", "Policing", "Juvenile Delinquency"]
                    },
                    {
                        name: "Demography",
                        concepts: ["Population Growth", "Fertility", "Mortality", "Migration", "Age Structure", "Demographic Transition", "Census", "Life Tables", "Population Pyramids", "Dependency Ratio", "Urbanization Trends"]
                    },
                    {
                        name: "Political Sociology",
                        concepts: ["Power", "Authority", "State", "Democracy", "Political Participation", "Social Movements", "Revolution", "Political Parties", "Civil Society", "Nationalism", "Populism", "Political Socialization"]
                    },
                    {
                        name: "Sociology of Religion",
                        concepts: ["Secularization", "Religious Institutions", "Cults", "Sects", "Civil Religion", "Fundamentalism", "Religious Pluralism", "Rituals", "Sacred and Profane", "Weber Protestant Ethic"]
                    },
                    {
                        name: "Race and Ethnicity",
                        concepts: ["Racial Formation", "Systemic Racism", "Ethnic Identity", "Assimilation", "Multiculturalism", "Diaspora", "Immigration", "Xenophobia", "Racial Inequality", "Affirmative Action", "Colorblindness Ideology"]
                    },
                    {
                        name: "Gender Studies",
                        concepts: ["Gender Roles", "Patriarchy", "Feminism Waves", "Masculinities", "Gender Socialization", "Gender Pay Gap", "Reproductive Rights", "Gender Identity", "Transgender Studies", "Work and Gender"]
                    }
                ]
            },
            {
                name: "Political Science",
                subfields: [
                    {
                        name: "Political Theory",
                        concepts: ["Liberalism", "Conservatism", "Socialism", "Anarchism", "Libertarianism", "Communitarianism", "Republicanism", "Feminism", "Social Contract", "Justice", "Rights", "Freedom", "Equality", "Power", "Sovereignty", "Legitimacy", "Rawls", "Nozick", "Marx", "Locke", "Hobbes", "Rousseau", "Mill"]
                    },
                    {
                        name: "Comparative Politics",
                        concepts: ["Regime Types", "Democratization", "Authoritarianism", "Political Parties", "Electoral Systems", "Federalism", "Unitary Systems", "Parliamentary vs Presidential", "Coalition Government", "Political Culture", "State Capacity", "Failed States", "Hybrid Regimes"]
                    },
                    {
                        name: "International Relations",
                        concepts: ["Realism", "Liberalism", "Constructivism", "Neorealism", "Neoliberalism", "English School", "Balance of Power", "Hegemony", "Security Dilemma", "Deterrence", "Alliances", "International Organizations", "UN", "NATO", "EU", "International Law", "Human rights", "Humanitarian Intervention", "Globalization", "Soft Power", "Hard Power", "Diplomacy", "Foreign Policy", "Conflict Resolution", "Arms Control", "Nuclear Proliferation", "Terrorism"]
                    },
                    {
                        name: "Public Policy",
                        concepts: ["Policy Cycle", "Agenda Setting", "Policy Formulation", "Implementation", "Evaluation", "Policy Analysis", "Evidence-based Policy", "Regulatory Policy", "Welfare State", "Healthcare Policy", "Education Policy", "Environmental Policy", "Cost-benefit Analysis"]
                    },
                    {
                        name: "Public Administration",
                        concepts: ["Bureaucracy", "Governance", "Accountability", "Transparency", "Decentralization", "E-government", "Public Management", "Merit System", "Civil Service", "Administrative Law", "Regulatory Agencies"]
                    },
                    {
                        name: "Constitutional Law",
                        concepts: ["Constitutionalism", "Judicial Review", "Separation of Powers", "Checks and Balances", "Federalism", "Bill of Rights", "Due Process", "Equal Protection", "Amendment Process", "Constitutional Interpretation", "Rule of Law"]
                    }
                ]
            },
            {
                name: "Anthropology",
                subfields: [
                    {
                        name: "Cultural Anthropology",
                        concepts: ["Ethnography", "Participant Observation", "Kinship", "Marriage Systems", "Reciprocity", "Gift Exchange", "Ritual", "Myth", "Symbolism", "Cultural Relativism", "Thick Description", "Reflexivity", "Globalization", "Transnationalism", "Identity", "Power", "Agency", "Postcolonialism", "Indigenous Rights", "Ethnocentrism", "Emic and Etic"]
                    },
                    {
                        name: "Physical/Biological Anthropology",
                        concepts: ["Human Evolution", "Primatology", "Paleoanthropology", "Forensic Anthropology", "Human Variation", "Population Genetics", "Bioarchaeology", "Skeletal Analysis", "Bipedalism", "Hominin Fossils", "Australopithecus", "Homo erectus", "Neanderthals", "Modern Human Origins"]
                    },
                    {
                        name: "Archaeology",
                        concepts: ["Excavation", "Stratigraphy", "Dating Methods", "Radiocarbon", "Dendrochronology", "Artifact Analysis", "Settlement Patterns", "Cultural Resource Management", "Ethnoarchaeology", "Landscape Archaeology", "Experimental Archaeology", "Zooarchaeology", "Lithic Analysis"]
                    },
                    {
                        name: "Linguistic Anthropology",
                        concepts: ["Language and Culture", "Sapir-Whorf Hypothesis", "Sociolinguistics", "Discourse Analysis", "Language Socialization", "Endangered Languages", "Language Revitalization", "Code-switching", "Pidgins and Creoles", "Ethnography of Communication", "Pragmatics", "Semiotics"]
                    },
                    {
                        name: "Medical Anthropology",
                        concepts: ["Illness vs Disease", "Medical Pluralism", "Ethnomedicine", "Healing Practices", "Global Health", "Structural Violence", "Syndemics", "Embodiment", "Biocultural Approach", "Pharmaceutical Anthropology"]
                    }
                ]
            },
            {
                name: "Geography",
                subfields: [
                    {
                        name: "Human Geography",
                        concepts: ["Population Geography", "Urban Geography", "Economic Geography", "Cultural Geography", "Political Geography", "Geopolitics", "Migration", "Settlement Patterns", "Land Use", "Spatial Interaction", "Place Identity", "Territoriality"]
                    },
                    {
                        name: "Physical Geography",
                        concepts: ["Geomorphology", "Climatology", "Biogeography", "Pedology", "Hydrology", "Glaciology", "Coastal Processes", "Weathering", "Landforms", "Plate Tectonics"]
                    },
                    {
                        name: "Geographic Information Science",
                        concepts: ["GIS", "Remote Sensing", "Cartography", "Spatial Analysis", "GPS", "Geocoding", "Spatial Databases", "Geovisualization", "Web Mapping", "Spatial Statistics", "Digital Elevation Models"]
                    },
                    {
                        name: "Environmental Geography",
                        concepts: ["Human-environment Interaction", "Land Degradation", "Deforestation", "Desertification", "Resource Management", "Sustainability", "Environmental Hazards", "Environmental Justice", "Conservation Geography"]
                    }
                ]
            },
            {
                name: "Linguistics",
                subfields: [
                    {
                        name: "Phonetics & Phonology",
                        concepts: ["Vowels", "Consonants", "IPA", "Articulatory Phonetics", "Acoustic Phonetics", "Phonemes", "Allophones", "Syllable Structure", "Stress", "Intonation", "Prosody", "Tone", "Phonological Rules", "Distinctive Features", "Minimal Pairs", "Suprasegmentals"]
                    },
                    {
                        name: "Morphology",
                        concepts: ["Morphemes", "Affixes", "Inflection", "Derivation", "Compounding", "Allomorphy", "Morphological Typology", "Agglutination", "Fusional", "Isolating", "Polysynthetic", "Word Formation", "Reduplication", "Clitics"]
                    },
                    {
                        name: "Syntax",
                        concepts: ["Phrase Structure", "Constituency", "Dependency", "Transformational Grammar", "Minimalism", "Government and Binding", "X-bar Theory", "Movement", "Agreement", "Case", "Tense", "Aspect", "Mood", "Clause Types", "Coordination", "Subordination", "Grammatical Relations", "Anaphora", "Binding Theory"]
                    },
                    {
                        name: "Semantics",
                        concepts: ["Meaning", "Reference", "Sense", "Truth Conditions", "Compositionality", "Quantification", "Tense Logic", "Presupposition", "Entailment", "Implicature", "Lexical Semantics", "Word Meaning", "Polysemy", "Synonymy", "Antonymy", "Hyponymy", "Prototype Theory", "Frame Semantics", "Cognitive Semantics"]
                    },
                    {
                        name: "Pragmatics",
                        concepts: ["Speech Acts", "Grice Maxims", "Implicature", "Politeness Theory", "Deixis", "Context", "Discourse Analysis", "Conversation Analysis", "Relevance Theory", "Presupposition"]
                    },
                    {
                        name: "Sociolinguistics",
                        concepts: ["Dialects", "Language Variation", "Language Change", "Pidgins", "Creoles", "Bilingualism", "Diglossia", "Language Policy", "Language Attitudes", "Code-switching", "Language and Gender", "Language and Power", "Linguistic Landscape", "Language Endangerment", "Language Death"]
                    },
                    {
                        name: "Psycholinguistics",
                        concepts: ["Language Acquisition", "Language Processing", "Speech Production", "Speech Perception", "Reading", "Bilingual Cognition", "Aphasia", "Language Disorders", "Mental Lexicon", "Sentence Processing", "Garden Path Sentences"]
                    },
                    {
                        name: "Historical Linguistics",
                        concepts: ["Language Change", "Sound Change", "Grimm's Law", "Verner's Law", "Comparative Method", "Reconstruction", "Proto-languages", "Language Families", "Indo-European", "Etymlogy", "Borrowing", "Analogy", "Grammaticalization"]
                    },
                    {
                        name: "Computational Linguistics",
                        concepts: ["Natural Language Processing", "Parsing", "Machine Translation", "Speech Recognition", "Text Generation", "Sentiment Analysis", "Information Extraction", "Word Embeddings", "Language Models", "Corpus Linguistics", "Annotation"]
                    }
                ]
            },
            {
                name: "Education",
                subfields: [
                    {
                        name: "Curriculum Studies",
                        concepts: ["Curriculum Design", "Assessment", "Standards", "Hidden Curriculum", "Critical Pedagogy", "Multicultural Education", "Curriculum Theory", "Backward Design"]
                    },
                    {
                        name: "Pedagogy",
                        concepts: ["Teaching Methods", "Differentiated Instruction", "Inquiry-based Learning", "Project-based Learning", "Cooperative Learning", "Direct Instruction", "Socratic Method", "Experiential Learning", "Scaffolding"]
                    },
                    {
                        name: "Philosophy of Education",
                        concepts: ["Dewey", "Freire", "Montessori", "Steiner", "Progressivism", "Essentialism", "Perennialism", "Reconstructionism", "Critical Pedagogy", "Banking Model"]
                    },
                    {
                        name: "Higher Education",
                        concepts: ["University Governance", "Academic Freedom", "Tenure", "Research Methodology", "Peer Review", "Accreditation", "Student Development", "Access and Equity"]
                    },
                    {
                        name: "Educational Technology",
                        concepts: ["E-learning", "Blended Learning", "Learning Management Systems", "MOOCs", "Gamification", "Adaptive Learning", "Digital Literacy", "Educational Data Mining", "AI in Education"]
                    },
                    {
                        name: "Special Education",
                        concepts: ["Inclusive Education", "Learning Disabilities", "IEP", "Gifted Education", "Autism Spectrum", "Behavioral Disorders", "Universal Design for Learning", "Assistive Technology"]
                    }
                ]
            },
            {
                name: "Law",
                subfields: [
                    {
                        name: "Jurisprudence",
                        concepts: ["Natural Law", "Legal Positivism", "Legal Realism", "Critical Legal Studies", "Feminist Jurisprudence", "Law and Economics", "Hart", "Dworkin", "Fuller", "Kelsen", "Raz"]
                    },
                    {
                        name: "Constitutional Law",
                        concepts: ["Separation of Powers", "Judicial Review", "Fundamental Rights", "Federalism", "Due Process", "Equal Protection", "Constitutional Interpretation", "Amendment", "Sovereignty"]
                    },
                    {
                        name: "Criminal Law",
                        concepts: ["Actus Reus", "Mens Rea", "Homicide", "Theft", "Assault", "Defenses", "Sentencing", "Criminal Procedure", "Evidence", "Due Process", "Double Jeopardy", "Plea Bargaining"]
                    },
                    {
                        name: "Civil Law",
                        concepts: ["Contracts", "Torts", "Property", "Negligence", "Strict Liability", "Damages", "Injunctions", "Restitution", "Agency", "Fiduciary Duties"]
                    },
                    {
                        name: "International Law",
                        concepts: ["Treaties", "Customary Law", "Sovereignty", "Jurisdiction", "Humanitarian Law", "Law of the Sea", "Human Rights Law", "International Courts", "ICJ", "ICC", "Diplomatic Immunity", "State Responsibility", "Jus Cogens"]
                    },
                    {
                        name: "Administrative Law",
                        concepts: ["Regulatory Agencies", "Rulemaking", "Adjudication", "Judicial Review of Agencies", "Administrative Procedure", "Delegation", "Discretion"]
                    }
                ]
            },
            {
                name: "History",
                subfields: [
                    {
                        name: "Historiography",
                        concepts: ["Primary Sources", "Secondary Sources", "Historical Method", "Periodization", "Causation", "Narrative", "Counterfactual", "Oral History", "Archives", "Bias", "Annales School", "Social History", "Microhistory", "Global History", "Postcolonial History", "Gender History", "Environmental History", "Digital Humanities", "Public History", "Historical Memory"]
                    }
                ]
            },
            {
                name: "Communication Studies",
                subfields: [
                    {
                        name: "Mass Communication",
                        concepts: ["Media Theory", "Agenda Setting", "Framing", "Cultivation Theory", "Uses and Gratifications", "Media Effects", "Propaganda", "Public Opinion", "Journalism", "Media Ethics", "Media Literacy", "Digital Media", "Social Media"]
                    },
                    {
                        name: "Interpersonal Communication",
                        concepts: ["Verbal and Nonverbal Communication", "Listening", "Conflict Resolution", "Self-disclosure", "Relational Communication", "Communication Competence", "Intercultural Communication"]
                    },
                    {
                        name: "Rhetoric",
                        concepts: ["Classical Rhetoric", "Aristotle Ethos Pathos Logos", "Rhetorical Analysis", "Persuasion", "Public Speaking", "Argumentation", "Visual Rhetoric", "Digital Rhetoric"]
                    },
                    {
                        name: "Organizational Communication",
                        concepts: ["Internal Communication", "Corporate Communication", "Crisis Communication", "Leadership Communication", "Organizational Culture", "Knowledge Management"]
                    }
                ]
            },
            {
                name: "Social Work",
                subfields: [
                    {
                        name: "Clinical Social Work",
                        concepts: ["Case Management", "Counseling", "Mental Health", "Substance Abuse", "Family Therapy", "Crisis Intervention", "Trauma-informed Care", "Group Work"]
                    },
                    {
                        name: "Community Social Work",
                        concepts: ["Community Organizing", "Advocacy", "Social Justice", "Empowerment", "Policy Practice", "Program Evaluation", "Needs Assessment", "Asset-based Development"]
                    },
                    {
                        name: "Social Welfare Policy",
                        concepts: ["Poverty Programs", "Social Insurance", "Child Welfare", "Healthcare Access", "Housing Policy", "Disability Rights", "Aging Services", "Immigration Policy"]
                    }
                ]
            }
        ]
    }
];