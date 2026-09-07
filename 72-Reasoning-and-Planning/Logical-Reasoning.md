# Logical Reasoning

> Formal logic benchmarks, first-order logic reasoning engines, satisfiability solvers, and deductive verification architectures.

## 🎯 What to Learn

- Deductive vs Inductive vs Abductive reasoning in artificial intelligence
- First-Order Logic (FOL) representation: Predicates, variables, functions, and existential/universal quantifiers
- FOLIO: Large-scale dataset for natural language reasoning with first-order logic annotations and automated theorem provers
- PrOntoQA: Synthetic benchmark evaluating multi-step deductive reasoning chains against ground-truth formal proofs
- Neuro-symbolic verification: Translating natural language arguments into Z3/SMT solver constraints to prove validity
- Common logical fallacies in LLMs: Affirming the consequent, denying the antecedent, and hallucinated premises

## 📚 Best Learning Resources

### 🥇 Best Overall

- [FOLIO Benchmark](https://github.com/Yale-LILY/FOLIO)
  - Type: First-Order Logic Benchmark
  - Language: English
  - Level: Intermediate
  - Why recommended: Yale University's benchmark pairing natural language reasoning problems with expert-annotated First-Order Logic formulas and automated theorem-prover verification.

### 🎓 Courses

- [Stanford CS157: Computational Logic](https://cs157.stanford.edu/) — Michael Genesereth's course on propositional logic, first-order logic, and automated deduction.

### ▶️ YouTube — English

- [Abulhair Saparov / Stanford: Video Guides & Tutorials](https://www.youtube.com/@StanfordOnline)
  - Channel: Abulhair Saparov / Stanford
  - Language: English
  - Type: Talk
  - Level: Intermediate
  - Why: Technical lecture exploring how language models fail as deductive proof length increases.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Logic in Computer Science by Michael Huth and Mark Ryan (Cambridge)](https://www.cambridge.org/core/books/logic-in-computer-science/4568453CC530A24C9F200A5212A85501) — The definitive textbook on modeling, reasoning, and formal verification.

### 💻 GitHub / Implementations

- [FOLIO](https://github.com/Yale-LILY/FOLIO) — Natural language reasoning benchmark.
- [PrOntoQA](https://github.com/asaparov/prontoqa) — Deductive reasoning dataset.

## 📄 Foundational Papers

- [FOLIO: Natural Language Reasoning with First-Order Logic](https://arxiv.org/abs/2209.00840) — Han et al. landmark paper introducing the benchmark pairing English text with formal first-order logic.

### 🧪 Practice

- [Z3 Python Interactive Tutorial](https://ericpony.github.io/z3py-tutorial/guide-examples.htm) — Solve logic puzzles and satisfiability equations using the `z3-solver` Python library in your browser.

### 🛠️ Projects

- [Neuro-Symbolic Logic Verifier](https://github.com/Yale-LILY/FOLIO) — Build a Python pipeline where an LLM translates natural language arguments into Z3 first-order logic constraints, checking if conclusions are mathematically valid.

## 🧭 Recommended Learning Path

1. Master propositional calculus and First-Order Logic syntax (predicates, $orall$, $exists$, $ightarrow$).
2. Learn how Satisfiability Modulo Theories (SMT) solvers work with Microsoft Z3.
3. Explore the failure modes of pure LLMs on multi-step deductive chains in PrOntoQA.
4. Build a pipeline that translates natural language text into formal Z3 statements.
5. Verify logical consistency and detect contradictions automatically.

## ⭐ Top 3 Resources

1. FOLIO Benchmark (Yale University)
2. Microsoft Z3 Theorem Prover
3. Stanford CS157 Computational Logic Course

