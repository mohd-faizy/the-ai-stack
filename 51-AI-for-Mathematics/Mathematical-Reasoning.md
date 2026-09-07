# Mathematical Reasoning

> Neural theorem provers, automated premise selection, and large language models fine-tuned to solve Olympiad-level mathematical reasoning problems.

## 🎯 What to Learn

- Neural theorem proving: Using LLMs as tactic generators guided by formal proof environments
- LeanDojo: Open-source environment enabling LLMs to interact with Lean through Python APIs and extract proof trees
- MiniF2F & ProofNet: Standard benchmarks evaluating formal automated reasoning on high school and undergraduate math
- DeepSeek-Prover & AlphaProof: Reinforcement learning systems trained on formal mathematical reasoning achieving silver-medal IMO performance
- Autoformalization: Translating informal natural language mathematical proofs into formal Lean 4/Isabelle code
- Search strategies: Monte Carlo Tree Search (MCTS) and best-first search over proof tactic spaces

## 📚 Best Learning Resources

### 🥇 Best Overall

- [LeanDojo](https://github.com/lean-dojo/LeanDojo)
  - Type: LLM-Proof Assistant Bridge
  - Language: English
  - Level: Advanced
  - Why recommended: The essential open-source framework interfacing LLMs with Lean 4, extracting premise graphs and enabling automated tactic generation in Python.

### 🎓 Courses

- [Carnegie Mellon CS: Automated Reasoning and Satisfiability](https://www.cs.cmu.edu/) — Covers automated theorem proving, SAT/SMT solvers, and neural-guided search.

### ▶️ YouTube — English

- [AI Explained / Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: AI Explained / Yannic Kilcher
  - Language: English
  - Type: Deep Dive
  - Level: Advanced
  - Why: Technical breakdown of combining informal mathematical reasoning with formal Lean 4 proof verification.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Handbook of Automated Reasoning by Alan Robinson and Andrei Voronkov](https://www.sciencedirect.com/book/9780444508133/handbook-of-automated-reasoning) — The definitive academic encyclopedia on formal deduction, resolution, and proof theory.

### 💻 GitHub / Implementations

- [MiniF2F](https://github.com/openai/miniF2F) — Formal mathematics benchmark.
- [LeanDojo](https://github.com/lean-dojo/LeanDojo) — Machine learning for theorem proving.
- [ProofNet](https://github.com/zhangir-azerbayev/ProofNet) — Benchmark for undergraduate math.
- [INT](https://github.com/albertqjiang/INT) — Theorem proving for transformers.
- [DeepSeek-Prover](https://github.com/deepseek-ai/DeepSeek-Prover-V1.5) — Theorem proving with LLMs.

## 📄 Foundational Papers

- [LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](https://arxiv.org/abs/2306.15626) — Yang et al. landmark paper introducing the open environment and ReProver architecture.
- [DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Formal Theorem Proving](https://arxiv.org/abs/2408.08152) — Demonstrated Monte Carlo Tree Search and RLAIF applied to formal Lean proof generation.

### 🧪 Practice

- [LeanDojo Benchmark Notebooks](https://github.com/lean-dojo/LeanDojo) — Extract tactic states and test a pretrained LLM predicting next proof tactics in Python.

### 🛠️ Projects

- [Automated Formal Proof Search Engine](https://github.com/lean-dojo/LeanDojo) — Build a best-first tree search algorithm that queries an LLM to generate candidate Lean tactics and checks them against the Lean REPL.

## 🧭 Recommended Learning Path

1. Understand why LLM generated proofs in English are unreliable (subtle logical gaps).
2. Learn how formal proof checkers provide an infallible automated verification signal.
3. Install LeanDojo and extract proof steps from Lean 4 repositories.
4. Train or fine-tune an LLM on Lean tactic prediction.
5. Implement a tree search loop that validates tactic candidates in Lean until proof completion.

## ⭐ Top 3 Resources

1. LeanDojo (Yang et al. / Caltech & MIT)
2. DeepSeek-Prover (DeepSeek AI)
3. MiniF2F Benchmark (OpenAI)

