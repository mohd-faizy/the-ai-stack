# Efficient Computing

> Hardware-aware neural architecture search, Once-for-All networks, sparse execution runtimes, and green deployment architectures.

## 🎯 What to Learn

- Green AI principle: Prioritizing computational efficiency and energy consumption alongside benchmark accuracy
- Once-for-All (OFA - MIT HAN Lab): Train once, specialize for many—decoupling training from deployment across laptops, phones, and GPUs
- Neural Architecture Search (NAS): Automatically designing compact neural architectures optimized for specific hardware latency limits
- SparseML (Neural Magic): Deep learning software acceleration using sparsity and pruning to run models at GPU speeds on standard CPUs
- Dynamic frequency scaling and voltage control (DVFS): Reducing clock speeds during memory-bound operations to save power
- Maximizing FLOPs per Watt: Comparing datacenter hardware efficiency (NVIDIA B200, Google TPU v5e, Groq LPU, Apple M-series)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Once-for-All (OFA - MIT HAN Lab)](https://github.com/mit-han-lab/once-for-all)
  - Type: Efficient Architecture Standard
  - Language: English
  - Level: Advanced
  - Why recommended: MIT's breakthrough framework that trains a single supernet from which diverse subnetworks can be sampled for thousands of edge and server hardware constraints without retraining.

### 🎓 Courses

- [MIT 6.5940: TinyML and Efficient Deep Learning Computing by Song Han](https://efficientml.ai/) — The definitive global curriculum covering pruning, quantization, NAS, and green AI.

### ▶️ YouTube — English

- [Song Han / MIT: Video Guides & Tutorials](https://www.youtube.com/@hanlab)
  - Channel: Song Han / MIT
  - Language: English
  - Type: Lecture
  - Level: Advanced
  - Why: Prof. Song Han explains how progressive shrinking decouples training cost from deployment diversity.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Efficient Deep Learning by Marion Le Borgne (O'Reilly)](https://www.oreilly.com/library/view/efficient-deep-learning/9781098105464/) — The definitive guide to optimizing neural networks for edge, cloud, and green efficiency.

### 💻 GitHub / Implementations

- [Once-for-All](https://github.com/mit-han-lab/once-for-all) — Train one network for multiple devices.
- [Torch-Pruning](https://github.com/VainF/Torch-Pruning) — Model size reduction.
- [SparseML](https://github.com/neuralmagic/sparseml) — Create sparse, efficient models.

## 📄 Foundational Papers

- [Once-for-All: Train One Network and Specialize it for Efficient Deployment](https://arxiv.org/abs/1908.09791) — Cai et al. landmark paper winning the low-power visual recognition challenge.
- [Green AI](https://arxiv.org/abs/1907.10597) — Schwartz, Dodge, Smith, and Etzioni landmark paper advocating for efficiency as an evaluation metric alongside accuracy.

### 🧪 Practice

- [Once-for-All Interactive Playground](https://github.com/mit-han-lab/once-for-all#demo) — Sample a customized subnetwork meeting a specific mobile latency constraint in 10 lines of Python.

### 🛠️ Projects

- [Hardware-Specialized Subnet Deployer](https://github.com/mit-han-lab/once-for-all) — Use the OFA supernet to extract specialized vision models for iPhone, Raspberry Pi, and server GPU without retraining.

## 🧭 Recommended Learning Path

1. Understand the 'Green AI' manifesto: Measuring floating point operations and energy alongside accuracy.
2. Explore the Once-for-All supernet concept and Progressive Shrinking.
3. Sample subnets meeting specific latency and energy budgets without retraining.
4. Study SparseML and DeepSparse for high-performance CPU inference.
5. Profile energy draw per query across mobile and cloud targets.

## ⭐ Top 3 Resources

1. Once-for-All (MIT HAN Lab)
2. MIT 6.5940 Efficient Deep Learning Course
3. Green AI Landmark Paper (Schwartz et al.)

