# Causal Discovery

> Causal Discovery algorithms learn the underlying causal graph (DAG) directly from observational data, recovering directionality and causal relationships without prior expert domain knowledge.

## 🎯 What to Learn

- Markov equivalence classes and Completed Partially Directed Acyclic Graphs (CPDAGs)
- Constraint-based discovery methods: PC Algorithm and FCI (handling unobserved confounders)
- Score-based methods: Greedy Equivalence Search (GES)
- Continuous optimization for DAG learning: NOTEARS formulation
- Time-series causal discovery (Granger causality, PCMCI in Tigramite)
- Identifiability conditions and non-Gaussianity (LiNGAM)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Causal-Learn (Python Library for Causal Discovery)](https://causal-learn.readthedocs.io/)
  - Type: Official Docs & Framework
  - Language: English
  - Level: Advanced
  - Why recommended: Causal-learn (developed by CMU, MPI, and collaborating institutions) is the Python equivalent of Tetrad, providing production-grade implementations of PC, FCI, GES, LiNGAM, and score-based causal discovery algorithms.

### 📖 Documentation & References

- [Causal-Learn Documentation](https://causal-learn.readthedocs.io/) — Comprehensive documentation covering constraint-based, score-based, and functional causal discovery methods.
- [Tigramite Documentation](https://jakobrunge.github.io/tigramite/) — Python framework for causal discovery in complex, time-dependent multivariate time series.
- [gCastle (Huawei Noah's Ark Lab)](https://github.com/huawei-noah/trustworthyAI/tree/master/gCastle) — End-to-end causal structure learning toolkit with benchmark datasets.

### 🎓 Courses

- [Causal Discovery & Reasoning (CMU)](https://www.cmu.edu/) — Graduate-level curriculum on graphical causal models and discovery algorithms.

### ▶️ YouTube — English

- [Microsoft Research: Video Guides & Tutorials](https://www.youtube.com/@MicrosoftResearch)
  - Channel: Microsoft Research
  - Language: English
  - Type: Lecture / Talk
  - Level: Advanced
  - Why: Clear exposition of constraint-based and score-based methods for learning causal graphs from data.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Elements of Causal Inference: Foundations and Learning Algorithms](https://mitpress.mit.edu/9780262037310/elements-of-causal-inference/) — Jonas Peters, Dominik Janzing, and Bernhard Schölkopf seminal MIT Press book on causal discovery.

### 💻 GitHub / Implementations

- [py-why/causal-learn](https://github.com/py-why/causal-learn) — Python module for causal discovery, the Python translation of the Java Tetrad library.
- [jakobrunge/tigramite](https://github.com/jakobrunge/tigramite) — Causal discovery for time series datasets using PCMCI algorithms.

## 📄 Foundational Papers

- [DAGs with NO TEARS: Continuous Optimization for Causal Structure Learning](https://arxiv.org/abs/1803.01422) — Zheng et al. (NeurIPS 2018) groundbreaking reformulation of combinatorial DAG search into smooth continuous optimization.
- [A Linear Non-Gaussian Acyclic Model for Causal Discovery](https://www.jmlr.org/papers/v7/shimizu06a.html) — Shimizu et al. (JMLR 2006) introducing the LiNGAM approach to discover full DAG directionality.

### 🧪 Practice

- [Causal-Learn Tutorials](https://github.com/py-why/causal-learn/tree/main/tests) — Sample notebooks applying PC, GES, and LiNGAM to benchmark datasets.

### 🛠️ Projects

- [Macroeconomic Causal Graph Discovery](https://causal-learn.readthedocs.io/) — Run the PC and NOTEARS algorithms on multi-decade financial time series to discover causal dependencies between inflation, interest rates, and employment.

## 🧭 Recommended Learning Path

1. Understand conditional independence testing and faithfulness assumptions.
2. Learn how the PC algorithm prunes skeleton edges and directs v-structures (colliders).
3. Explore how non-Gaussian noise enables full graph directionality via LiNGAM.
4. Study the NOTEARS continuous optimization loss function and its algebraic acyclicity constraint.
5. Apply the PCMCI algorithm in Tigramite to reconstruct causal graphs from climate or financial time series.

## ⭐ Top 3 Resources

1. Causal-Learn (py-why/causal-learn)
2. Elements of Causal Inference (Peters, Janzing, Schölkopf)
3. DAGs with NO TEARS (Zheng et al.)

