# Training Optimization

> Hardware-aware algorithms, exact attention kernels, memory-efficient optimizers, and gradient projection methods that accelerate training throughput and reduce memory overhead.

## 🎯 What to Learn

- FlashAttention (1, 2, and 3): Tiling, online softmax, recomputation in backward pass, and IO-awareness
- GPU memory hierarchy constraints: High Bandwidth Memory (HBM) bandwidth vs SRAM cache latency
- Bitsandbytes 8-bit AdamW: Storing first and second optimizer moments in INT8 to save 75% optimizer memory
- GaLore (Gradient Low-Rank Projection): Pre-training large models with full-parameter learning in low-rank subspace
- LOMO (Low-Memory Optimization): Fusing gradient computation with parameter updates to eliminate gradient memory
- Triton: OpenAI's domain-specific language for writing highly efficient custom GPU kernels without CUDA C++

## 📚 Best Learning Resources

### 🥇 Best Overall

- [FlashAttention (Tri Dao)](https://github.com/Dao-AILab/flash-attention)
  - Type: GPU Kernel Optimization
  - Language: English
  - Level: Advanced
  - Why recommended: The breakthrough IO-aware exact attention algorithm that eliminated memory bandwidth bottlenecks in transformers, delivering 2-4x training speedups and enabling long context windows.

### 🎓 Courses

- [Stanford CS25: Transformers United](https://web.stanford.edu/class/cs25/) — Tri Dao lecture explaining the hardware memory architecture and FlashAttention derivation.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Deep Dive
  - Level: Advanced
  - Why: Visual masterclass explaining HBM vs SRAM transfers, tiling, and online softmax computation.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Programming Massively Parallel Processors by David Kirk and Wen-mei Hwu](https://www.elsevier.com/books/programming-massively-parallel-processors/kirk/978-0-323-91052-1) — The foundational textbook on CUDA, GPU architectures, memory tiling, and shared memory optimization.

### 💻 GitHub / Implementations

- [FlashAttention](https://github.com/Dao-AILab/flash-attention) — Fast and memory-efficient exact attention.
- [bitsandbytes](https://github.com/bitsandbytes-foundation/bitsandbytes) — 8-bit optimizers and quantization.
- [LOMO](https://github.com/OpenLMLab/LOMO) — Low-memory optimization for large models.
- [GaLore](https://github.com/jiaweizzhao/GaLore) — Memory-efficient LLM training by gradient low-rank projection.

## 📄 Foundational Papers

- [FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness](https://arxiv.org/abs/2205.14135) — Seminal paper by Tri Dao et al. proving that tiling attention matrix computations in SRAM dramatically speeds up execution.
- [GaLore: Memory-Efficient LLM Training by Gradient Low-Rank Projection](https://arxiv.org/abs/2403.03507) — Demonstrated that gradient updates reside in a low-rank subspace, enabling full-parameter pre-training with 65% less memory.

### 🧪 Practice

- [Triton Tutorials](https://triton-lang.org/main/getting-started/tutorials/index.html) — Write your first vector addition and fused softmax kernel in Python with OpenAI Triton.

### 🛠️ Projects

- [Benchmark Attention Speedups](https://github.com/Dao-AILab/flash-attention) — Benchmark standard PyTorch scaled dot-product attention vs FlashAttention-2 across context lengths from 2k to 64k.

## 🧭 Recommended Learning Path

1. Understand the GPU memory hierarchy: DRAM/HBM (slow, large) vs SRAM (fast, tiny).
2. Learn online softmax: Calculating `softmax(x)` incrementally without storing the full vector in memory.
3. Understand how FlashAttention computes attention without materializing the N x N attention matrix in HBM.
4. Use `bitsandbytes.optim.AdamW8bit` to save GPU memory during training.
5. Explore OpenAI Triton to write custom fused kernels in Python.

## ⭐ Top 3 Resources

1. FlashAttention (Tri Dao / Stanford & Together AI)
2. OpenAI Triton (Python-native GPU kernel language)
3. GaLore (Gradient Low-Rank Projection)

