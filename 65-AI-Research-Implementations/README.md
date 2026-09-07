# 65 - AI Research Implementations

> Clean, hackable, and educational implementations of seminal deep learning architectures from scratch in minimal PyTorch and C.

## 🌐 Overview & Architectural Importance

Large enterprise libraries (like Transformers or Megatron) obscure fundamental mechanics beneath layers of abstractions. Minimal, hackable reference repositories (nanoGPT, CleanRL, minbpe, llm.c, Mamba) allow researchers and engineers to understand every tensor shape, gradient step, and CUDA kernel from first principles.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Transformer Implementations**](Transformer-Implementations.md) — nanoGPT, minGPT, llm.c, minbpe, annotated-transformer, and pure C/PyTorch transformer implementations.
* [**Diffusion Implementations**](Diffusion-Implementations.md) — Denoising Diffusion (DDPM), Latent Diffusion, guided-diffusion, and minimal generative diffusion codebases.
* [**Reinforcement Learning Implementations**](Reinforcement-Learning-Implementations.md) — CleanRL, OpenAI Spinning Up, and single-file readable RL algorithms.
* [**Self-Supervised Learning**](Self-Supervised-Learning.md) — DINO v2, MAE, SimCLR, BYOL, VICReg, and self-supervised visual representation learning.
* [**State Space Models**](State-Space-Models.md) — Mamba, S4, RWKV, Jamba, selective state spaces, and linear-time sequence models.

## 🧭 Recommended Study Sequence

1. **From Scratch Transformer Coding**: Implementing multi-head attention and causal masks with nanoGPT.
2. **BPE Tokenization from First Principles**: Building byte-pair encoding from scratch with minbpe.
3. **C/CUDA Hardware Acceleration**: Pure C pre-training and GPU kernels with llm.c.
4. **Clean Single-File RL**: Implementing PPO and SAC in self-contained scripts with CleanRL.
5. **Sub-Quadratic Frontiers**: Selective state spaces and hardware-aware scanning with Mamba.

## 🗝️ Foundational Prerequisites

- PyTorch tensor fundamentals and automatic differentiation.
- CUDA memory concepts and C programming basics.
- Calculus and linear algebra (matrix multiplications, projections, singular values).

---

[← Back to Main Repository](../README.md)
