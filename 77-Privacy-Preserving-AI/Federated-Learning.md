# Federated Learning

> Federated Learning (FL) is a distributed machine learning approach where decentralized edge clients collaboratively train a shared global model while retaining all raw training data locally on their devices.

## 🎯 What to Learn

- Federated Averaging (FedAvg) and optimization challenges (FedProx, FedOpt)
- Non-IID (heterogeneous) data distribution across client nodes
- Communication efficiency: gradient compression and selective client participation
- Cross-silo vs. cross-device federated architectures
- Federated evaluation, client poisoning attacks, and Byzantine robustness

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Flower (A Friendly Federated Learning Framework)](https://flower.ai/)
  - Type: Official Platform & Framework
  - Language: English
  - Level: Intermediate
  - Why recommended: Flower is the leading open-source federated learning framework, supporting PyTorch, TensorFlow, JAX, Hugging Face, and scaling from simulated laptops to millions of edge devices.

### 📖 Documentation & References

- [Flower Documentation](https://flower.ai/docs/framework/) — Comprehensive guides covering quickstarts, client simulation, custom aggregation strategies, and Docker deployment.
- [FedML Documentation](https://doc.fedml.ai/) — Open-source research and MLOps platform for federated learning and distributed AI.
- [NVIDIA FLARE](https://nvflare.readthedocs.io/) — NVIDIA's enterprise-grade federated learning application runtime environment.

### 🎓 Courses

- [Intro to Federated Learning (DeepLearning.AI & Flower)](https://www.deeplearning.ai/short-courses/intro-to-federated-learning/) — Short practical course taught by Flower founders on building federated training pipelines.

### ▶️ YouTube — English

- [Flower Labs: Video Guides & Tutorials](https://www.youtube.com/@FlowerLabs)
  - Channel: Flower Labs
  - Language: English
  - Type: Playlist
  - Level: Intermediate
  - Why: Step-by-step tutorial series on launching federated simulations and writing custom aggregation strategies.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Federated Learning: Systems and Foundations](https://www.morganclaypool.com/) — Comprehensive text on system design, statistical challenges, and security in federated networks.

### 💻 GitHub / Implementations

- [adap/flower](https://github.com/adap/flower) — A unified approach to federated learning, analytics, and evaluation.
- [FedML-AI/FedML](https://github.com/FedML-AI/FedML) — Federated learning library and MLOps platform for decentralized machine learning.

## 📄 Foundational Papers

- [Communication-Efficient Learning of Deep Networks from Decentralized Data](https://arxiv.org/abs/1602.05629) — McMahan et al. (Google 2017) seminal paper introducing Federated Learning and the FedAvg algorithm.
- [Advances and Open Problems in Federated Learning](https://arxiv.org/abs/1912.04977) — Kairouz et al. (100+ co-authors) definitive survey outlining challenges in heterogeneity, privacy, and scalability.

### 🧪 Practice

- [Flower Quickstart Examples](https://github.com/adap/flower/tree/main/examples) — PyTorch, Hugging Face, scikit-learn, and JAX federated training examples.

### 🛠️ Projects

- [Federated LLM Fine-Tuning on Edge Nodes](https://github.com/adap/flower/tree/main/examples/quickstart-huggingface) — Fine-tune a language model across distributed clients without raw prompt data ever leaving individual nodes.

## 🧭 Recommended Learning Path

1. Understand the client-server architecture of Federated Learning and why centralized data collection is avoided.
2. Implement a basic 3-client Federated Averaging (FedAvg) simulation in Flower.
3. Handle non-IID data skew across clients using algorithmic adjustments (e.g. FedProx).
4. Add secure aggregation and differential privacy to protect gradient updates against reconstruction.
5. Deploy a federated fine-tuning pipeline on mobile or distributed cloud instances.

## ⭐ Top 3 Resources

1. Flower (flower.ai)
2. Communication-Efficient Learning of Deep Networks (McMahan et al.)
3. FedML Open Source Platform

