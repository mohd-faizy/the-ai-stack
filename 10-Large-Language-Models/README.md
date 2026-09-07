# 10 - Large Language Models

> Causal language model architectures, open-weights implementations, large-scale distributed training, and ultra-long context extension techniques.

## 🌐 Overview & Architectural Importance

Large Language Models (LLMs) are the cognitive engines of the contemporary AI stack. Exhibiting emergent capabilities such as in-context learning, code synthesis, and multi-step reasoning, open-weights LLMs (Llama, DeepSeek, Qwen, Mistral) allow developers and researchers worldwide to build sovereign, domain-specialized intelligence systems.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**LLM Frameworks**](LLM-Frameworks.md) — vLLM, Ollama, llama.cpp, SGLang, and high-performance serving frameworks.
* [**Open LLM Implementations**](Open-LLM-Implementations.md) — Clean, hackable reference codebases (nanoGPT, lit-gpt, torchtune) for learning and modifying model internals.
* [**Notable Open Models (Reference Repos)**](Notable-Open-Models-Reference-Repos.md) — Llama 3, DeepSeek-V3 / R1, Mistral, and Qwen foundational reference repositories.
* [**Large-Scale Training**](Large-Scale-Training.md) — Distributed 3D parallelism (Megatron-LM, DeepSpeed) for training models from 7B to 405B parameters.
* [**LLM Context & Long Context**](LLM-Context-and-Long-Context.md) — Extending context windows (128k - 1M tokens), RoPE frequency scaling, YaRN, and LongRoPE.

## 🧭 Recommended Study Sequence

1. **Decoder-Only Architecture**: Autoregressive generation, causal masking, and KV caching.
2. **Reference Codebases**: Implementing attention and transformer blocks with nanoGPT and torchtune.
3. **State-of-the-Art Open Models**: Studying architectural choices of Llama 3, DeepSeek-V3 (MoE), and Qwen.
4. **Inference Serving Engines**: PagedAttention, continuous batching, and vLLM deployment.
5. **Long-Context Engineering**: Rotary embedding interpolation, YaRN scaling, and needle-in-a-haystack verification.

## 🗝️ Foundational Prerequisites

- Transformer self-attention, projection matrices, and softmax temperature scaling.
- PyTorch multi-GPU distributed execution.
- GPU memory bandwidth and compute arithmetic intensity limits.

---

[← Back to Main Repository](../README.md)
