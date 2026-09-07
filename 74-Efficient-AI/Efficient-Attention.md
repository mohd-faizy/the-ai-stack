# Efficient Attention

> Hardware-aware attention algorithms, kernel fusion, tiling, and IO-aware memory planning that eliminate the quadratic memory footprint of self-attention.

## 🎯 What to Learn

- The memory hierarchy bottleneck: GPU SRAM (fast, 20MB) vs HBM (slow, 80GB) memory access latency
- FlashAttention (1, 2, and 3): Tiling attention matrix blocks into SRAM, computing online softmax, and recomputing in backward pass
- PagedAttention (vLLM): Managing Key-Value cache memory like operating system virtual memory to eliminate external fragmentation
- PyTorch FlexAttention: Flexible, high-performance attention API compiling custom attention variants (sliding window, causal masks) to fast Triton kernels
- Meta xFormers: Toolbox for composable, optimized transformer building blocks
- RingAttention: Distributing sequence dimensions across a ring of GPUs to enable multi-million token context windows

## 📚 Best Learning Resources

### 🥇 Best Overall

- [FlashAttention (Tri Dao)](https://github.com/Dao-AILab/flash-attention)
  - Type: IO-Aware Attention Standard
  - Language: English
  - Level: Advanced
  - Why recommended: The breakthrough hardware-aware algorithm that revolutionized deep learning training and inference, achieving 2-4x speedups and enabling long context windows by avoiding intermediate HBM memory writes.

### 🎓 Courses

- [Stanford CS25: Transformers United (Tri Dao Lecture)](https://web.stanford.edu/class/cs25/) — Tri Dao explains the hardware memory hierarchy and mathematical formulation of FlashAttention.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Deep Dive
  - Level: Advanced
  - Why: Visual masterclass explaining tiling, online softmax calculation, and backward pass recomputation.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Programming Massively Parallel Processors by David Kirk and Wen-mei Hwu](https://www.elsevier.com/books/programming-massively-parallel-processors/kirk/978-0-323-91052-1) — The definitive guide to GPU hardware memory tiling, thread blocks, and memory coalescing.

### 💻 GitHub / Implementations

- [FlashAttention](https://github.com/Dao-AILab/flash-attention) — IO-aware exact attention algorithm.
- [FlashAttention-2](https://github.com/Dao-AILab/flash-attention) — Better parallelism and partitioning.
- [xFormers](https://github.com/facebookresearch/xformers) — Modular and hackable transformer components.
- [FlexAttention](https://github.com/pytorch/pytorch) — Flexible attention in PyTorch.
- [PagedAttention](https://github.com/vllm-project/vllm) — Memory-efficient attention for serving.
- [Ring Attention](https://github.com/lhao499/RingAttention) — Blockwise attention for near-infinite context.

## 📄 Foundational Papers

- [FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness](https://arxiv.org/abs/2205.14135) — Dao et al. landmark paper introducing IO-aware tiling.
- [FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning](https://arxiv.org/abs/2307.08691) — Dao paper achieving 73% of theoretical peak FLOPs on A100 GPUs.

### 🧪 Practice

- [FlexAttention Quickstart](https://pytorch.org/blog/flexattention/) — Write a custom sliding-window document mask and run inference using PyTorch's native `flex_attention`.

### 🛠️ Projects

- [Context Length Scaling Benchmark](https://github.com/Dao-AILab/flash-attention) — Benchmark standard PyTorch scaled dot-product attention against FlashAttention-2 across context lengths from 2k to 64k tokens, measuring VRAM consumption.

## 🧭 Recommended Learning Path

1. Understand the arithmetic intensity and memory bandwidth limits of GPUs.
2. Derive online softmax: Computing normalization constants incrementally without storing the full vector.
3. Study how FlashAttention computes attention entirely within on-chip SRAM.
4. Explore PagedAttention to eliminate memory fragmentation during multi-user serving.
5. Use PyTorch FlexAttention to create custom attention masks in pure Python.

## ⭐ Top 3 Resources

1. FlashAttention-2 & 3 (Tri Dao)
2. PyTorch FlexAttention
3. PagedAttention (vLLM Project)

