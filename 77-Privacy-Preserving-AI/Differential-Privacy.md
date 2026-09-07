# Differential Privacy

> Differential Privacy provides a mathematically rigorous guarantee that the output of an algorithm or model does not reveal whether any individual participant's record was included in the training dataset.

## 🎯 What to Learn

- Pure differential privacy (epsilon) vs. approximate differential privacy (epsilon, delta)
- Laplace, Gaussian, and Exponential noise mechanisms
- DP-SGD: Per-sample gradient clipping and calibrated noise addition
- Privacy accounting: Renyi Differential Privacy (RDP) and the Moments Accountant
- Local Differential Privacy (LDP) vs. Central Differential Privacy (CDP)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [A Course In Differential Privacy (Gautam Kamath)](https://www.youtube.com/playlist?list=PLWtzhu7GZ_2xYk47iT-qW7i1qP3pGvD4Y)
  - Type: University Video Course
  - Language: English
  - Level: Advanced
  - Why recommended: The definitive full video lecture series on differential privacy algorithms, taught by University of Waterloo professor Gautam Kamath.

### 📖 Documentation & References

- [Opacus (PyTorch)](https://opacus.ai/) — High-speed PyTorch library for training neural networks with differential privacy.
- [OpenDP Documentation](https://docs.opendp.org/) — Harvard OpenDP core framework for privacy-preserving data analysis and statistical queries.
- [Diffprivlib (IBM)](https://diffprivlib.readthedocs.io/) — General-purpose Python library for machine learning with differential privacy.

### 🎓 Courses

- [CS 860: Algorithms for Private Data Analysis](https://www.gautamkamath.com/courses/cs860-fa2020.html) — Full lecture notes, problem sets, and reading lists on differential privacy.

### ▶️ YouTube — English

- [Gautam Kamath: Video Guides & Tutorials (Gautam Kamath)](https://www.youtube.com/results?search_query=Gautam%20Kamath%20Gautam%20Kamath%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Gautam Kamath
  - Language: English
  - Type: Playlist
  - Level: Advanced
  - Why: Comprehensive academic lectures covering DP definitions, mechanisms, composition, and ML applications.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [The Algorithmic Foundations of Differential Privacy](https://www.cis.upenn.edu/~aaroth/Papers/privacybook.pdf) — Cynthia Dwork & Aaron Roth seminal book covering the mathematical core of privacy guarantees.

### 💻 GitHub / Implementations

- [pytorch/opacus](https://github.com/pytorch/opacus) — PyTorch's flagship DP-SGD implementation.
- [opendp/opendp](https://github.com/opendp/opendp) — A modular, versatile suite of differential privacy algorithms.

## 📄 Foundational Papers

- [Calibrating Noise to Sensitivity in Private Data Analysis](https://link.springer.com/chapter/10.1007/11681878_14) — Dwork, McSherry, Nissim, and Smith (2006) foundational paper formulating Differential Privacy.
- [Deep Learning with Differential Privacy](https://arxiv.org/abs/1607.00133) — Abadi et al. (2016) formulation of DP-SGD and the moments accountant.

### 🧪 Practice

- [Opacus PyTorch Tutorials](https://opacus.ai/tutorials/) — Practical hands-on notebooks for differentially private image classification and text generation.

### 🛠️ Projects

- [DP-SGD Medical Image Classifier](https://opacus.ai/tutorials/building_image_classifier) — Train a ResNet on medical data with provable (epsilon, delta) privacy bounds to prevent patient reconstruction.

## 🧭 Recommended Learning Path

1. Grasp the concept of neighboring datasets and the fundamental definition of (epsilon, delta)-DP.
2. Study basic mechanisms: Laplace mechanism for L1 sensitivity, Gaussian mechanism for L2 sensitivity.
3. Learn sequential and advanced composition theorems and privacy budget management.
4. Implement DP-SGD in PyTorch using Opacus to clip per-sample gradients and inject noise.
5. Measure and plot the empirical trade-off curve between privacy budget (epsilon) and model accuracy.

## ⭐ Top 3 Resources

1. A Course In Differential Privacy (Gautam Kamath)
2. Opacus PyTorch Library
3. The Algorithmic Foundations of Differential Privacy (Dwork & Roth)

