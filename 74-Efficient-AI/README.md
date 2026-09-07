# 74 - Efficient AI

> Memory-aware attention kernels, sparse Mixture of Experts (MoE), speculative decoding, and Key-Value (KV) cache compression.

## 🌐 Overview & Architectural Importance

Standard autoregressive decoding is memory-bandwidth bound, while self-attention is quadratically bound by context length. Efficient AI encompasses hardware-aware algorithms (FlashAttention-2/3), sparse routing (MoE), speculative draft decoding (EAGLE, Medusa), and dynamic KV cache compression (StreamingLLM) that speed up inference by 3-10x and slash serving costs.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Efficient Attention**](Efficient-Attention.md) — FlashAttention, FlashAttention-2/3, xFormers, FlexAttention, PagedAttention, and IO-aware kernels.
* [**Mixture of Experts**](Mixture-of-Experts.md) — DeepSpeed-MoE, Megatron-MoE, Mixtral, DeepSeek-V3, sparse routing, and load balancing.
* [**Speculative Decoding**](Speculative-Decoding.md) — Medusa, EAGLE, draft models, speculative verification, and 2-3x faster decoding.
* [**KV Cache Optimization**](KV-Cache-Optimization.md) — StreamingLLM, H2O, vLLM, SGLang, KV cache quantization, and attention sinks.

## 🧭 Recommended Study Sequence

1. **IO-Aware Attention**: Tiling attention computation in GPU SRAM with FlashAttention-2/3.
2. **Sparse MoE Routing**: Activating only top-$k$ experts per token with DeepSeek-V3 and Mixtral.
3. **Speculative Verification**: Guessing multiple tokens ahead with small draft models and verifying in parallel.
4. **Streaming Infinite Context**: Retaining initial attention sinks to prevent perplexity spikes with StreamingLLM.
5. **KV Cache Quantization**: Compressing FP16 caches to FP8/INT4 to serve 4x more concurrent users.

## 🗝️ Foundational Prerequisites

- GPU memory hierarchy: HBM bandwidth vs SRAM cache latency.
- Autoregressive next-token decoding loop and KV cache dynamics.
- Matrix multiplication (GEMM) arithmetic intensity.

---

[← Back to Main Repository](../README.md)
