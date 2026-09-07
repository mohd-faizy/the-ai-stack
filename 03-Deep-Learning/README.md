# 03 - Deep Learning

> Deep artificial neural networks, distributed multi-GPU training architectures, optimization algorithms, and automated neural topology discovery.

## 🌐 Overview & Architectural Importance

Deep learning is the algorithmic foundation of the modern AI revolution. By composing parameterized non-linear transformations into deep hierarchical graphs, neural networks automatically learn complex invariant representations from raw data—powering breakthroughs from large language models to autonomous robotics.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Frameworks**](Frameworks.md) — PyTorch, JAX, TensorFlow, and high-level training abstractions powering modern research and production.
* [**Distributed Training**](Distributed-Training.md) — Data parallelism (DDP), ZeRO memory optimization, tensor parallelism, pipeline parallelism, and FSDP.
* [**Training Utilities**](Training-Utilities.md) — PyTorch Lightning, Hugging Face Accelerate, Weights & Biases experiment tracking, and model checkpointing.
* [**Neural Architecture Search**](Neural-Architecture-Search.md) — Automated exploration of neural topologies, differentiable architecture search (DARTS), and hardware-aware pruning.

## 🧭 Recommended Study Sequence

1. **Core Computational Graph Mechanics**: Tensor operations, automatic differentiation, and autograd engines in PyTorch.
2. **Network Topologies**: Multilayer Perceptrons (MLPs), CNNs, Residual Connections (ResNets), and Transformers.
3. **Training Stability**: Weight initialization (He, Xavier), normalization (LayerNorm, BatchNorm, RMSNorm), and learning rate schedules.
4. **Distributed Scaling**: Moving from single-GPU training to DistributedDataParallel (DDP), DeepSpeed ZeRO, and FSDP.
5. **Production Tooling**: Experiment tracking, distributed checkpointing, and mixed-precision (FP16/BF16) training.

## 🗝️ Foundational Prerequisites

- Multivariable calculus and the chain rule.
- Linear algebra: matrix multiplications, tensor operations, and broadcasting.
- Strong Python programming and basic GPU/CUDA memory understanding.

---

[← Back to Main Repository](../README.md)
