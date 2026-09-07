# Open LLM Implementations

> Clean, hackable, and educational open-source implementations of Large Language Models designed for code inspection, training experiments, and architecture research.

## 🎯 What to Learn

- Pure PyTorch LLM implementation without framework bloat (nanoGPT, lit-gpt, torchtune)
- Coding the causal self-attention block and KV cache management from scratch
- Rotary Position Embeddings (RoPE) implementation in under 50 lines of code
- Training loops: gradient accumulation, learning rate cosine warmup, and weight decay exclusions
- Memory profiling: finding activation memory bottlenecks using PyTorch CUDA memory snapshots
- torchtune (PyTorch native): composable modular building blocks for LLM fine-tuning

## 📚 Best Learning Resources

### 🥇 Best Overall

- [nanoGPT by Andrej Karpathy](https://github.com/karpathy/nanoGPT)
  - Type: Repository & Educational Guide
  - Language: English
  - Level: Intermediate
  - Why recommended: nanoGPT is the gold standard for clean, minimal, and hackable GPT training and inference in pure PyTorch, with zero unnecessary dependencies.

### 📖 Documentation & References

- [torchtune Documentation (PyTorch)](https://pytorch.org/torchtune/main/index.html) — PyTorch-native library for easily authoring, fine-tuning, and experimenting with LLMs.
- [LitGPT Documentation (Lightning AI)](https://github.com/Lightning-AI/litgpt) — Hackable implementation of 20+ state-of-the-art open LLMs without boilerplate.

### 🎓 Courses

- [Let's build GPT: from scratch, in code, spelled out by Andrej Karpathy](https://www.youtube.com/watch?v=kCc8FmEb1nY) — Legendary 2-hour coding session building a GPT from scratch in pure PyTorch.

### ▶️ YouTube — English

- [Let's build GPT: from scratch, in code, spelled out](https://www.youtube.com/watch?v=kCc8FmEb1nY)
  - Channel: Andrej Karpathy
  - Language: English
  - Type: Code-First Masterclass
  - Level: Intermediate
  - Why: The most famous educational video on transformers, walking through attention matrices, heads, and residual connections.

### ▶️ YouTube — Hindi / Hinglish

- [Finetuning Large Language Models & GenAI in Hindi](https://www.youtube.com/playlist?list=PLZoTAELRMXVN9VbAx5I2VvloTtYmlApe3)
  - Channel: Krish Naik
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Hands-on Hindi tutorials covering transformer architectures, PEFT, LoRA, and LLM fine-tuning.


### 📚 Books

- [Build a Large Language Model (From Scratch) by Sebastian Raschka](https://www.manning.com/books/build-a-large-language-model-from-scratch) — The definitive step-by-step book building a complete GPT-2 model line by line in PyTorch.

### 💻 GitHub / Implementations

- [llama.cpp](https://github.com/ggml-org/llama.cpp) — Efficient local LLM inference in C/C++.
- [MLC LLM](https://github.com/mlc-ai/mlc-llm) — Universal LLM deployment on any device.
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) — NVIDIA-optimized LLM inference.
- [ExLlamaV2](https://github.com/turboderp/exllamav2) — Fast inference library for local LLMs.
- [CTranslate2](https://github.com/OpenNMT/CTranslate2) — Fast inference engine for transformer models.
- [candle](https://github.com/huggingface/candle) — Minimalist ML framework in Rust.
- [mistral.rs](https://github.com/EricLBuehler/mistral.rs) — Fast LLM inference in Rust.

### 🧪 Practice

- [nanoGPT Shakespeare Character-Level Training](https://github.com/karpathy/nanoGPT) — Train a toy transformer in 5 minutes on Shakespeare text to observe emergent syntax.

### 🛠️ Projects

- [Build a Custom 125M Llama Architecture from Scratch](https://github.com/pytorch/torchtune) — Assemble SwiGLU, RoPE, RMSNorm, and GQA into a custom decoder-only model and pre-train on OpenWebText.

## 🧭 Recommended Learning Path

1. Study Andrej Karpathy's `nanoGPT/model.py` line-by-line.
2. Understand why `torch.tril` causal masking prevents attending to future tokens.
3. Implement the KV cache in the forward pass to enable fast token-by-token generation.
4. Replace standard multi-head attention with Grouped-Query Attention (GQA).
5. Fine-tune a model using torchtune's modular PyTorch recipes.

## ⭐ Top 3 Resources

1. [nanoGPT (Andrej Karpathy)](https://github.com/karpathy/nanoGPT) — The most famous, readable, and influential PyTorch transformer implementation.
2. [Build a Large Language Model (From Scratch) by Sebastian Raschka](https://www.manning.com/books/build-a-large-language-model-from-scratch) — The definitive textbook guiding developers through coding an entire LLM.
3. [torchtune (PyTorch)](https://github.com/pytorch/torchtune) — PyTorch's official modular library for hackable, transparent LLM fine-tuning.

