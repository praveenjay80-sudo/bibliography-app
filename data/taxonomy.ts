export interface TaxonomyNode {
  id: string;
  name: string;
  children?: TaxonomyNode[];
}

export const taxonomyData: TaxonomyNode = {
  id: "formal-sciences",
  name: "Formal Sciences",
  children: [
    {
      id: "mathematics",
      name: "Mathematics",
      children: [
        {
          id: "foundations",
          name: "Foundations of Mathematics",
          children: [
            { id: "mathematical-logic", name: "Mathematical Logic" },
            { id: "set-theory", name: "Set Theory" },
            { id: "model-theory", name: "Model Theory" },
            { id: "proof-theory", name: "Proof Theory" },
            { id: "computability-theory", name: "Computability Theory" },
            { id: "category-theory", name: "Category Theory" }
          ]
        },
        {
          id: "number-theory",
          name: "Number Theory",
          children: [
            { id: "elementary-number-theory", name: "Elementary Number Theory" },
            { id: "analytic-number-theory", name: "Analytic Number Theory" },
            { id: "algebraic-number-theory", name: "Algebraic Number Theory" },
            { id: "geometric-number-theory", name: "Geometric Number Theory" },
            { id: "arithmetic-geometry", name: "Arithmetic Geometry" },
            { id: "computational-number-theory", name: "Computational Number Theory" }
          ]
        },
        {
          id: "algebra",
          name: "Algebra",
          children: [
            { id: "elementary-algebra", name: "Elementary Algebra" },
            { id: "linear-algebra", name: "Linear Algebra" },
            { id: "abstract-algebra", name: "Abstract Algebra" },
            { id: "homological-algebra", name: "Homological Algebra" },
            { id: "commutative-algebra", name: "Commutative Algebra" },
            { id: "boolean-algebra", name: "Boolean Algebra" }
          ]
        },
        {
          id: "geometry",
          name: "Geometry",
          children: [
            { id: "euclidean-geometry", name: "Euclidean Geometry" },
            { id: "non-euclidean-geometry", name: "Non-Euclidean Geometry" },
            { id: "differential-geometry", name: "Differential Geometry" },
            { id: "algebraic-geometry", name: "Algebraic Geometry" },
            { id: "discrete-geometry", name: "Discrete Geometry" },
            { id: "computational-geometry", name: "Computational Geometry" }
          ]
        },
        {
          id: "topology",
          name: "Topology",
          children: [
            { id: "point-set-topology", name: "Point-Set Topology" },
            { id: "algebraic-topology", name: "Algebraic Topology" },
            { id: "geometric-topology", name: "Geometric Topology" },
            { id: "differential-topology", name: "Differential Topology" }
          ]
        },
        {
          id: "analysis",
          name: "Analysis",
          children: [
            { id: "real-analysis", name: "Real Analysis" },
            { id: "complex-analysis", name: "Complex Analysis" },
            { id: "functional-analysis", name: "Functional Analysis" },
            { id: "harmonic-analysis", name: "Harmonic Analysis" },
            { id: "differential-equations", name: "Differential Equations" },
            { id: "calculus-of-variations", name: "Calculus of Variations" }
          ]
        },
        {
          id: "probability-statistics",
          name: "Probability and Statistics",
          children: [
            { id: "probability-theory", name: "Probability Theory" },
            { id: "mathematical-statistics", name: "Mathematical Statistics" }
          ]
        },
        {
          id: "applied-mathematics",
          name: "Applied Mathematics",
          children: [
            { id: "numerical-analysis", name: "Numerical Analysis" },
            { id: "optimization", name: "Optimization" },
            { id: "operations-research", name: "Operations Research" },
            { id: "cryptography", name: "Cryptography" },
            { id: "mathematical-physics", name: "Mathematical Physics" },
            { id: "dynamical-systems", name: "Dynamical Systems" },
            { id: "control-theory", name: "Control Theory" },
            { id: "information-theory", name: "Information Theory" }
          ]
        }
      ]
    },
    {
      id: "logic",
      name: "Logic",
      children: [
        {
          id: "formal-logic",
          name: "Formal Logic",
          children: [
            { id: "classical-logic", name: "Classical Logic" },
            { id: "modal-logic", name: "Modal Logic" },
            { id: "many-valued-logic", name: "Many-Valued Logic" },
            { id: "substructural-logic", name: "Substructural Logic" },
            { id: "intuitionistic-logic", name: "Intuitionistic Logic" },
            { id: "paraconsistent-logic", name: "Paraconsistent Logic" }
          ]
        },
        {
          id: "philosophical-logic",
          name: "Philosophical Logic",
          children: []
        },
        {
          id: "applied-logic",
          name: "Applied Logic",
          children: [
            { id: "computational-logic", name: "Computational Logic" },
            { id: "linguistic-logic", name: "Linguistic Logic" },
            { id: "legal-logic", name: "Legal Logic" }
          ]
        }
      ]
    },
    {
      id: "statistics",
      name: "Statistics",
      children: [
        { id: "theoretical-statistics", name: "Theoretical Statistics" },
        { id: "mathematical-statistics", name: "Mathematical Statistics" },
        { id: "statistical-modeling", name: "Statistical Modeling" }
      ]
    },
    {
      id: "computer-science",
      name: "Computer Science / Information Theory",
      children: [
        {
          id: "theoretical-cs",
          name: "Theoretical Computer Science",
          children: [
            { id: "automata-theory", name: "Automata Theory" },
            { id: "formal-languages", name: "Formal Language Theory" },
            { id: "computability", name: "Computability Theory" },
            { id: "complexity-theory", name: "Complexity Theory" },
            { id: "algorithms", name: "Algorithms and Data Structures" },
            { id: "type-theory", name: "Type Theory" }
          ]
        },
        {
          id: "information-theory",
          name: "Information Theory",
          children: [
            { id: "shannon-theory", name: "Shannon Information Theory" },
            { id: "algorithmic-info", name: "Algorithmic Information Theory" },
            { id: "quantum-info", name: "Quantum Information Theory" }
          ]
        },
        {
          id: "coding-theory",
          name: "Coding Theory",
          children: []
        },
        {
          id: "formal-methods",
          name: "Formal Methods",
          children: []
        }
      ]
    },
    {
      id: "systems-science",
      name: "Systems Science and Decision Sciences",
      children: [
        {
          id: "systems-theory",
          name: "Systems Theory",
          children: []
        },
        {
          id: "game-theory",
          name: "Game Theory",
          children: [
            { id: "non-cooperative", name: "Non-Cooperative Game Theory" },
            { id: "cooperative", name: "Cooperative Game Theory" },
            { id: "algorithmic-game", name: "Algorithmic Game Theory" },
            { id: "combinatorial-game", name: "Combinatorial Game Theory" }
          ]
        },
        {
          id: "decision-theory",
          name: "Decision Theory",
          children: []
        }
      ]
    },
    {
      id: "interdisciplinary",
      name: "Interdisciplinary Formal Fields",
      children: [
        { id: "mathematical-linguistics", name: "Mathematical Linguistics" },
        { id: "formal-epistemology", name: "Formal Epistemology" },
        { id: "computational-social-choice", name: "Computational Social Choice" },
        { id: "quantum-computing-theory", name: "Quantum Computing Theory" }
      ]
    }
  ]
};

export function flattenTopics(node: TaxonomyNode): { id: string; name: string }[] {
  const topics: { id: string; name: string }[] = [];
  
  function traverse(current: TaxonomyNode) {
    if (!current.children || current.children.length === 0) {
      topics.push({ id: current.id, name: current.name });
    } else {
      current.children.forEach(child => traverse(child));
    }
  }
  
  traverse(node);
  return topics;
}

export function getAllLeafNodes(): { id: string; name: string }[] {
  return flattenTopics(taxonomyData);
}