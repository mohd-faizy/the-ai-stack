# Foundation Model Frameworks

> Core architectural frameworks and model representations that define the execution and training topologies of foundation models.

## 🎯 What to Learn

- The transformer backbone: RMSNorm, SwiGLU activations, and Rotary Position Embeddings (RoPE)
- Grouped Query Attention (GQA) vs Multi-Head Attention (MHA) vs Multi-Query Attention (MQA)
- Native PyTorch implementations: `torch.nn.functional.scaled_dot_product_attention` (SDPA)
- JAX/Flax foundation architectures: MaxText, Gemma, and TPU compilation
- Model conversion and weight inspection (safetensors format vs legacy pickle)
- Hardware-efficient kernels: FlashAttention-2, FlashAttention-3, and Triton kernels

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Hugging Face Transformers](https://github.com/huggingface/transformers)
  - Type: Framework & Documentation
  - Language: English
  - Level: Intermediate
  - Why recommended: Transformers is the universal software layer for foundation models, providing standardized APIs, model cards, and implementations for virtually every open model family.

### 📖 Documentation & References

- [Hugging Face Transformers Documentation](https://huggingface.co/docs/transformers/index) — The definitive documentation for loading, training, and running foundation models.
- [Google MaxText (JAX/Flax)](https://github.com/google/maxtext) — High-performance, scalable open-source LLM framework written in JAX/Flax targeting Cloud TPUs and GPUs.

### 🎓 Courses

- [Stanford CS324: Large Language Models](https://stanford-cs324.github.io/winter2022/) — Percy Liang and Tatsunori Hashimoto's foundational course on the capabilities, limitations, and systems of foundation models.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Architecture Deep Dive
  - Level: Intermediate to Advanced
  - Why: Visual breakdown of RoPE, GQA, SwiGLU, and KV cache mechanics in modern foundation models.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [On the Opportunities and Risks of Foundation Models (Bommasani et al. - Stanford CRFM)](https://arxiv.org/abs/2108.07258) — The landmark 200-page report establishing the foundation model paradigm.

### 💻 GitHub / Implementations

- [Transformers](https://github.com/huggingface/transformers) — 100K+ pretrained transformer models.
- [Flax](https://github.com/google/flax) — Neural network library for JAX.
- [OpenMMLab](https://github.com/open-mmlab) — Open-source computer vision ecosystem.
- [Safetensors](https://github.com/safetensors/safetensors) — Simple and safe tensor serialization.
- [tokenizers](https://github.com/huggingface/tokenizers) — Fast tokenizer implementations.

### 🧪 Practice

- [nanoGPT by Andrej Karpathy](https://github.com/karpathy/nanoGPT) — The simplest, fastest repository for training/fine-tuning medium GPTs.

### 🛠️ Projects

- [Build a Custom RoPE & GQA Transformer in PyTorch](https://github.com/karpathy/nanoGPT) — Implement modern Llama-style architectural enhancements into a clean from-scratch transformer codebase.

## 🧭 Recommended Learning Path

1. Understand why LayerNorm was replaced by RMSNorm for speed and numerical stability.
2. Explore Rotary Position Embeddings (RoPE) and how relative token distances are encoded as rotation angles.
3. Implement Grouped-Query Attention (GQA) and calculate the memory savings in the KV cache.
4. Load foundation weights safely using Hugging Face `safetensors`.
5. Benchmark training speedups enabled by FlashAttention kernels.

## ⭐ Top 3 Resources

1. [Hugging Face Transformers](https://github.com/huggingface/transformers) — The universal software standard for modern foundation models.
2. [Stanford CS324 (Percy Liang)](https://stanford-cs324.github.io/winter2022/) — The premier academic university course on large language and foundation models.
3. [nanoGPT (Andrej Karpathy)](https://github.com/karpathy/nanoGPT) — The cleanest educational reference implementation of transformer training.

