# Large-Scale Training

> Distributed frameworks and architectures engineered to train multi-billion parameter foundation models across multi-node GPU clusters.

## 🎯 What to Learn

- 3D Parallelism: Combining Data Parallelism (DP), Tensor Parallelism (TP), and Pipeline Parallelism (PP)
- Megatron-LM (NVIDIA): Column-parallel and row-parallel linear layers, sequence parallelism, and activation checkpointing
- DeepSpeed (Microsoft): ZeRO (Zero Redundancy Optimizer) Stages 1, 2, and 3, and ZeRO-Offload
- Colossal-AI: Unified distributed training with multi-dimensional tensor parallelism
- torchtitan: PyTorch native minimal library for pre-training large language models (LLaMA 3 architecture)
- Cluster fault tolerance, checkpointing strategies, and loss spike recovery

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Megatron-LM (NVIDIA)](https://github.com/NVIDIA/Megatron-LM)
  - Type: Distributed Training Framework
  - Language: English
  - Level: Advanced
  - Why recommended: NVIDIA's premier large-scale training framework powering the pre-training of the world's largest foundation models with maximum GPU hardware efficiency.

### 🎓 Courses

- [CS330: Deep Multi-Task and Meta Learning (Stanford)](https://cs330.stanford.edu/) — Stanford course covering distributed architectures and multi-task model training.

### ▶️ YouTube — English

- [PyTorch / Weights & Biases: Video Guides & Tutorials](https://www.youtube.com/@PyTorch)
  - Channel: PyTorch / Weights & Biases
  - Language: English
  - Type: Conference Talk
  - Level: Advanced
  - Why: Deep architectural dive into communication collectives, tensor parallelism slicing, and memory math.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Deep Learning Systems by Tianqi Chen & Zico Kolter](https://dlsyscourse.org/) — Comprehensive academic text covering distributed data-parallel, model-parallel execution, and collective communication.

### 💻 GitHub / Implementations

- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) — Efficient large-scale transformer training.
- [DeepSpeed](https://github.com/deepspeedai/DeepSpeed) — ZeRO optimization and distributed training.
- [ColossalAI](https://github.com/hpcaitech/ColossalAI) — Unified system for large-scale parallel training.
- [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) — An implementation for model parallel autoregressive transformers.
- [Nanotron](https://github.com/huggingface/nanotron) — Efficient LLM training by Hugging Face.
- [torchtitan](https://github.com/pytorch/torchtitan) — A native PyTorch library for large-scale training.

## 📄 Foundational Papers

- [Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism](https://arxiv.org/abs/1909.08053) — Introduced tensor parallel matrix multiplication across attention heads and feed-forward networks.
- [ZeRO: Memory Optimizations Toward Training Trillion Parameter Models](https://arxiv.org/abs/1910.02054) — Seminal paper demonstrating that sharding optimizer states, gradients, and parameters eliminates memory redundancy.

### 🧪 Practice

- [torchtitan LLaMA 3 Pre-training Tutorial](https://github.com/pytorch/torchtitan) — Train a 1B LLaMA model from scratch across multiple local GPUs using PyTorch native FSDP2.

### 🛠️ Projects

- [DeepSpeed ZeRO-3 Multi-GPU Cluster Training](https://github.com/microsoft/DeepSpeed) — Configure and run distributed training of an open transformer using DeepSpeed ZeRO-3 with CPU offload.

## 🧭 Recommended Learning Path

1. Calculate single-GPU memory budget: Parameters + Gradients + Optimizer States (16 bytes/param for AdamW) + Activations.
2. Understand PyTorch DistributedDataParallel (DDP) and All-Reduce communication.
3. Study DeepSpeed ZeRO stages: ZeRO-1 (Optimizer state sharding), ZeRO-2 (Gradient sharding), ZeRO-3 (Parameter sharding).
4. Learn Megatron-LM Tensor Parallelism: Column-parallel GEMM followed by Row-parallel GEMM.
5. Run pre-training experiments using `torchtitan` on a multi-GPU instance.

## ⭐ Top 3 Resources

1. Megatron-LM (NVIDIA)
2. DeepSpeed (Microsoft)
3. torchtitan (PyTorch Foundation)

