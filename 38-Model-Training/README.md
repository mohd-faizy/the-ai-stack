# 38 - Model Training

> Distributed computing systems, parallelization strategies, training frameworks, and low-level kernel optimizations to pre-train and scale massive foundation models.

## 🌐 Overview & Architectural Importance

Training a modern frontier model requires coordinating thousands of GPUs across high-speed InfiniBand fabrics for months. Understanding 3D parallelism (Data, Tensor, Pipeline), ZeRO memory optimization, and FlashAttention is required to scale deep learning without running out of GPU memory or crashing clusters.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Large-Scale Training**](Large-Scale-Training.md) — Megatron-LM, DeepSpeed, Colossal-AI, torchtitan, and massive distributed training frameworks.
* [**Training Infrastructure**](Training-Infrastructure.md) — Hugging Face Accelerate, PyTorch Lightning, Composer, Levanter, and training orchestration.
* [**Data Parallel & Pipeline Parallel**](Data-Parallel-and-Pipeline-Parallel.md) — FSDP (Fully Sharded Data Parallel), ZeRO-1/2/3, pipeline scheduling (1F1B), and tensor slicing.
* [**Training Optimization**](Training-Optimization.md) — FlashAttention-1/2/3, bitsandbytes 8-bit optimizers, GaLore, LOMO, and memory-efficient training.

## 🧭 Recommended Study Sequence

1. **Single-GPU Memory Dynamics**: Model weights, gradients, optimizer states (AdamW), and activation memory.
2. **Distributed Data Parallelism**: DDP vs ZeRO (ZeRO-Stage 1, 2, 3) and PyTorch FSDP.
3. **Model Parallelism**: Megatron-LM Tensor Parallelism (TP) and Pipeline Parallelism (PP).
4. **Kernel Acceleration**: FlashAttention-2/3, Triton custom kernels, and fused operators.
5. **Memory-Efficient Optimizers**: GaLore (Gradient Low-Rank Projection) and 8-bit Adam.

## 🗝️ Foundational Prerequisites

- PyTorch internals (autograd engine, backward pass, gradient accumulation).
- GPU communication primitives: All-Reduce, All-Gather, Reduce-Scatter, and NCCL.
- Computer architecture: NVLink bandwidth vs InfiniBand network latency.

---

[← Back to Main Repository](../README.md)
