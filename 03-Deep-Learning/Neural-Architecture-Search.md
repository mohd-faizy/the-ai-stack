# Neural Architecture Search

> Neural Architecture Search (NAS) automates the design of artificial neural network topologies to optimize task performance and hardware execution efficiency.

## 🎯 What to Learn

- NAS search spaces: cell-based, macro-architecture, and hierarchical search spaces
- Search strategies: Reinforcement Learning (RL controller), Genetic / Evolutionary algorithms, and Bayesian optimization
- Differentiable Architecture Search (DARTS): continuous relaxation of discrete architectures and bi-level optimization
- One-Shot NAS and weight-sharing supernets
- Hardware-aware NAS: multi-objective optimization balancing accuracy against latency, FLOPS, and memory footprint
- Model compression via automated pruning and knowledge distillation

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Microsoft NNI (Neural Network Intelligence)](https://nni.readthedocs.io/en/stable/)
  - Type: Toolkit & Documentation
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: Microsoft NNI provides a battle-tested open-source toolkit for AutoML, Neural Architecture Search, and model compression supporting diverse search spaces.

### 📖 Documentation & References

- [NNI Neural Architecture Search Guide](https://nni.readthedocs.io/en/stable/nas.html) — Comprehensive documentation covering DARTS, ENAS, ProxylessNAS, and one-shot algorithms.
- [AutoKeras Documentation](https://autokeras.com/) — Automated deep learning library based on Keras, developed by DATA Lab at Texas A&M University.

### 🎓 Courses

- [MIT 6.S965: TinyML and Efficient Deep Learning Computing (Prof. Song Han)](https://efficientml.ai/) — Premier university course covering hardware-aware NAS, pruning, and quantization.

### ▶️ YouTube — English

- [MIT OpenCourseWare (Song Han): Video Guides & Tutorials](https://www.youtube.com/@mitocw)
  - Channel: MIT OpenCourseWare (Song Han)
  - Language: English
  - Type: Lecture
  - Level: Intermediate to Advanced
  - Why: Prof. Song Han covers reinforcement learning NAS, DARTS, ProxylessNAS, and Once-for-All (OFA) networks.

### ▶️ YouTube — Hindi / Hinglish

- [100 Days of Deep Learning in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Comprehensive 100-day Hindi deep learning course covering ANN, CNN, RNN, and PyTorch.


### 📚 Books

- [Automated Machine Learning (Hutter, Kotthoff, Vanschoren) — Chapter 3: Neural Architecture Search](https://www.automl.org/book/) — Rigorous academic survey on search spaces, optimization methods, and performance estimation strategies.

### 💻 GitHub / Implementations

- [NNI](https://github.com/microsoft/nni) — Neural architecture search and model compression.
- [AutoKeras](https://github.com/keras-team/autokeras) — Neural architecture search for Keras.
- [DARTS](https://github.com/quark0/darts) — Differentiable architecture search.
- [Once-for-All](https://github.com/mit-han-lab/once-for-all) — Train one network and specialize it for diverse hardware.

### 🧪 Practice

- [NNI NAS Retiarii Playground](https://nni.readthedocs.io/en/stable/nas/quickstart.html) — Run a simple DARTS search on CIFAR-10 exploring convolution cell combinations.

### 🛠️ Projects

- [Hardware-Aware Mobile Architecture Search](https://github.com/mit-han-lab/once-for-all) — Train a Once-for-All supernet and extract sub-networks tailored to specific edge hardware latency budgets.

## 🧭 Recommended Learning Path

1. Understand the motivation for NAS vs manual architecture design (ResNet, MobileNet).
2. Study RL-based search (Zoph & Le) and why supernets / weight-sharing were invented to reduce compute cost.
3. Dive into DARTS (Differentiable Architecture Search) and continuous softmax over candidate operations.
4. Explore Hardware-Aware NAS: measuring latency on target devices (mobile NPU, GPU) during search.
5. Apply model pruning and knowledge distillation to shrink discovered architectures for edge deployment.

## ⭐ Top 3 Resources

1. [MIT 6.S965 EfficientML (Song Han)](https://efficientml.ai/) — The finest modern academic course on hardware-aware NAS and efficient computing.
2. [Microsoft NNI](https://nni.readthedocs.io/en/stable/) — The most flexible and well-documented open-source NAS framework.
3. [Once-for-All (OFA) Network (MIT Han Lab)](https://github.com/mit-han-lab/once-for-all) — Breakthrough approach for training once and specializing for diverse deployment targets.

