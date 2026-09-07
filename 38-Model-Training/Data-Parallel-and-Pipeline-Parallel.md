# Data Parallel & Pipeline Parallel

> Core distributed parallelization paradigms, parameter sharding techniques, and pipeline execution schedules required to train massive neural networks.

## 🎯 What to Learn

- Data Parallelism (DP & DDP): Replicating model weights and synchronizing gradients via All-Reduce
- Fully Sharded Data Parallel (FSDP): PyTorch native implementation of ZeRO-3 parameter, gradient, and optimizer sharding
- Pipeline Parallelism (PP): Partitioning sequential transformer layers across separate GPUs
- Pipeline bubble problem and schedules: 1F1B (One Forward, One Backward) and Interleaved 1F1B
- Activation checkpointing (rematerialization): Trading computation for memory by recomputing forward passes
- Sequence Parallelism (SP): Splitting the sequence length dimension across attention heads

## 📚 Best Learning Resources

### 🥇 Best Overall

- [PyTorch Fully Sharded Data Parallel (FSDP)](https://pytorch.org/docs/stable/fsdp.html)
  - Type: Distributed Parallelism Standard
  - Language: English
  - Level: Advanced
  - Why recommended: PyTorch's native, highly optimized implementation of parameter and gradient sharding that allows training models that exceed single-GPU memory without third-party frameworks.

### 🎓 Courses

- [Full Stack Deep Learning: Distributed Training](https://fullstackdeeplearning.com/) — Excellent conceptual overview of parallelization strategies, communication bottlenecks, and cluster topologies.

### ▶️ YouTube — English

- [PyTorch: Video Guides & Tutorials](https://www.youtube.com/@PyTorch)
  - Channel: PyTorch
  - Language: English
  - Type: Deep Dive
  - Level: Advanced
  - Why: PyTorch core maintainers explain how FSDP overlaps computation with communication via All-Gather and Reduce-Scatter.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Deep Learning Systems by Tianqi Chen & Zico Kolter](https://dlsyscourse.org/) — In-depth chapter on communication complexity, collective operations, and parallel execution schedules.

### 💻 GitHub / Implementations

- [FSDP](https://github.com/pytorch/pytorch) — Fully Sharded Data Parallel in PyTorch.
- [FairScale](https://github.com/facebookresearch/fairscale) — PyTorch extensions for large-scale training.
- [Mesh TensorFlow](https://github.com/tensorflow/mesh) — Model parallelism on TensorFlow.

## 📄 Foundational Papers

- [PyTorch FSDP: Experiences on Scaling Fully Sharded Data Parallel](https://arxiv.org/abs/2304.11207) — Meta's engineering paper documenting the architecture and performance optimizations of FSDP in production.
- [PipeDream: Generalized Pipeline Parallelism for DNN Training](https://arxiv.org/abs/1806.03377) — Pioneered the 1F1B (one forward, one backward) pipelining schedule that dramatically reduces memory bubbles.

### 🧪 Practice

- [PyTorch FSDP Colab Walkthrough](https://pytorch.org/tutorials/intermediate/FSDP_tutorial.html) — Execute a minimal FSDP training script on T4 or A100 GPUs.

### 🛠️ Projects

- [Train a 7B Parameter Model with FSDP](https://github.com/pytorch/torchtitan) — Configure PyTorch FSDP with activation checkpointing and BF16 mixed precision to train a model larger than single-GPU memory.

## 🧭 Recommended Learning Path

1. Understand standard Distributed Data Parallel (DDP) and why it fails when model weights exceed single-GPU VRAM.
2. Study Reduce-Scatter and All-Gather collective operations.
3. Understand FSDP forward and backward execution flow: All-Gather weights -> Forward -> Free weights -> All-Gather weights -> Backward -> Reduce-Scatter gradients.
4. Learn pipeline parallelism 1F1B scheduling and calculate pipeline bubble overhead: `(p - 1) / m`.
5. Implement activation checkpointing with `torch.utils.checkpoint`.

## ⭐ Top 3 Resources

1. PyTorch FSDP (PyTorch Core Library)
2. PyTorch FSDP Engineering Paper (Meta AI)
3. FairScale (Meta AI Research)

