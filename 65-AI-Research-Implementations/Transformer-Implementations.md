# Transformer Implementations

> Minimal, readable, and hackable implementations of transformer architectures and tokenizers designed for deep conceptual mastery and first-principles pre-training.

## 🎯 What to Learn

- nanoGPT (Andrej Karpathy): The simplest, fastest repository for training/fine-tuning medium-sized GPTs in ~300 lines of clean PyTorch
- llm.c (Andrej Karpathy): Training LLMs (GPT-2) in simple, pure C/CUDA without 245MB of PyTorch dependencies
- minbpe: Minimal, clean, educational code for the Byte Pair Encoding (BPE) algorithm used in GPT tokenizers
- The Annotated Transformer (Harvard NLP): Line-by-line PyTorch implementation and walkthrough of 'Attention is All You Need'
- x-transformers (Phil Wang / lucidrains): Concise and experimental transformer implementations with bleeding-edge research modules
- Causal self-attention, rotary embeddings (RoPE), RMSNorm, SwiGLU, and KV caching from scratch

## 📚 Best Learning Resources

### 🥇 Best Overall

- [nanoGPT (Andrej Karpathy)](https://github.com/karpathy/nanoGPT)
  - Type: Reference Implementation
  - Language: English
  - Level: Intermediate
  - Why recommended: The gold standard hackable codebase for understanding, training, and fine-tuning autoregressive GPT models in minimal, idiomatic PyTorch.

### 🎓 Courses

- [Neural Networks: Zero to Hero by Andrej Karpathy](https://karpathy.ai/zero-to-hero.html) — The legendary video lecture series building micrograd, makemore, and GPT from scratch in pure Python.

### ▶️ YouTube — English

- [Let's build GPT: from scratch, in code, spelled out](https://www.youtube.com/watch?v=kCc8FmEb1nY)
  - Channel: Andrej Karpathy
  - Language: English
  - Type: Lecture & Live Code
  - Level: Intermediate
  - Why: Widely regarded as the single greatest educational AI video on YouTube, building a nanoGPT character model line-by-line.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Build a Large Language Model (From Scratch) by Sebastian Raschka (Manning)](https://www.manning.com/books/build-a-large-language-model-from-scratch) — Step-by-step guide to coding an entire LLM from tokenization to instruction fine-tuning in pure PyTorch.

### 💻 GitHub / Implementations

- [nanoGPT](https://github.com/karpathy/nanoGPT) — Simplest, fastest GPT training code.
- [minGPT](https://github.com/karpathy/minGPT) — Minimal PyTorch re-implementation of GPT.
- [nanochat](https://github.com/karpathy/nanochat) — Educational chat model implementation.
- [llm.c](https://github.com/karpathy/llm.c) — LLM training in pure C/CUDA.
- [x-transformers](https://github.com/lucidrains/x-transformers) — Concise transformer implementations.
- [annotated-transformer](https://github.com/harvardnlp/annotated-transformer) — "Attention is All You Need" annotated.
- [minbpe](https://github.com/karpathy/minbpe) — Minimal BPE tokenizer implementation.

## 📄 Foundational Papers

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) — Vaswani et al. landmark paper introducing the self-attention transformer architecture.

### 🧪 Practice

- [nanoGPT Shakespeare Training](https://github.com/karpathy/nanoGPT#quick-start) — Train a 10M parameter character transformer on Shakespeare in 5 minutes on your laptop.

### 🛠️ Projects

- [Pre-train a 124M GPT-2 Model on FineWeb-Edu](https://github.com/karpathy/llm.c) — Use llm.c to pre-train a GPT-2 replica from scratch on consumer GPUs, reproducing official OpenAI validation loss curves.

## 🧭 Recommended Learning Path

1. Watch Andrej Karpathy's 'Let's build GPT: from scratch'.
2. Read through The Annotated Transformer line-by-line in PyTorch.
3. Clone nanoGPT and train a small causal language model on Shakespeare.
4. Study BPE tokenization mechanics with Karpathy's `minbpe`.
5. Inspect `llm.c` to understand how GPU memory transfers and matrix multiplications are orchestrated in C and CUDA.

## ⭐ Top 3 Resources

1. nanoGPT (Andrej Karpathy)
2. Let's build GPT from scratch (Karpathy Video)
3. Build a Large Language Model (From Scratch) by Sebastian Raschka

