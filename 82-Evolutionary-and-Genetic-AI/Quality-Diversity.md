# Quality Diversity

> Quality Diversity (QD) algorithms discard the single-objective paradigm to discover a vast archive of high-performing, behaviorally distinct solutions, illuminating the entire search space rather than converging on one peak.

## 🎯 What to Learn

- The Quality Diversity paradigm: illuminated search spaces vs. objective optimization
- MAP-Elites (Multi-dimensional Archive of Phenotypic Elites) algorithm
- Behavioral characterization (feature descriptors) and tessellation (Centroidal Voronoi Tessellations - CVT-MAP-Elites)
- Lineage tracking and novelty search (Novelty Search with Local Competition - NSLC)
- Hardware-accelerated QD: QDax (JAX-based Quality Diversity) and pyribs

## 📚 Best Learning Resources

### 🥇 Best Overall

- [pyribs: A Bare-Bones Python Library for Quality Diversity](https://pyribs.org/)
  - Type: Official Docs & Framework
  - Language: English
  - Level: Intermediate
  - Why recommended: pyribs is a fast, highly modular, and user-friendly Python library that implements modern Quality Diversity algorithms with extensive tutorials and visualization tools.

### 📖 Documentation & References

- [pyribs Documentation](https://docs.pyribs.org/) — Comprehensive guides covering MAP-Elites, CVT-MAP-Elites, CMA-ME, and archive visualization.
- [QDax Documentation](https://qdax.readthedocs.io/) — GPU-accelerated Quality Diversity framework implemented in JAX for robotic benchmarks.

### 🎓 Courses

- [Quality Diversity Algorithms Tutorial (GECCO)](https://quality-diversity.github.io/) — Annual conference tutorial and repository resource maintained by the international QD research community.

### ▶️ YouTube — English

- [Jean-Baptiste Mouret: Video Guides & Tutorials (Jean-Baptiste Mouret)](https://www.youtube.com/results?search_query=Jean-Baptiste%20Mouret%20Jean-Baptiste%20Mouret%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Jean-Baptiste Mouret
  - Language: English
  - Type: Keynote / Talk
  - Level: Intermediate
  - Why: Jean-Baptiste Mouret explains why discovering diverse, high-performing solutions revolutionizes robotics and optimization.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Why Greatness Cannot Be Planned: The Secret to the Objective Paradox](https://link.springer.com/book/10.1007/978-3-319-15524-1) — Kenneth Stanley and Joel Lehman foundational exploration of novelty search and non-objective discovery.

### 💻 GitHub / Implementations

- [icaros-usc/pyribs](https://github.com/icaros-usc/pyribs) — A bare-bones Python library for quality diversity optimization.
- [adaptive-intelligent-robotics/QDax](https://github.com/adaptive-intelligent-robotics/QDax) — Accelerated Quality Diversity algorithms in JAX running 100x faster on GPUs.

## 📄 Foundational Papers

- [Illuminating search spaces by mapping elites](https://arxiv.org/abs/1504.04909) — Mouret and Clune (2015) landmark paper introducing the MAP-Elites algorithm.
- [Robots that can adapt like animals](https://www.nature.com/articles/nature14422) — Cully, Clune, Tarapore, and Mouret (Nature 2015) landmark demonstration of physical robot damage recovery using quality diversity.

### 🧪 Practice

- [pyribs Tutorials](https://docs.pyribs.org/en/stable/tutorials.html) — Hands-on notebooks on illuminating lunar lander trajectories, arm kinematics, and generative art.

### 🛠️ Projects

- [Fault-Tolerant Hexapod Robot Controller Archive](https://pyribs.org/) — Use MAP-Elites to generate thousands of diverse walking gaits so a 6-legged robot can instantly recover when a physical leg is damaged.

## 🧭 Recommended Learning Path

1. Understand the 'objective paradox': why pursuing a strict objective often traps optimizers in local optima.
2. Study the MAP-Elites algorithm: discretizing behavioral space into a multi-dimensional grid of elites.
3. Implement a 2D arm kinematics illuminator using pyribs.
4. Learn CMA-ME (Covariance Matrix Adaptation MAP-Elites) for high-dimensional continuous domains.
5. Explore QDax to scale quality diversity algorithms across GPU clusters.

## ⭐ Top 3 Resources

1. pyribs (pyribs.org)
2. Illuminating search spaces by mapping elites (Mouret & Clune)
3. Why Greatness Cannot Be Planned (Stanley & Lehman)

