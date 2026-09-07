# 36 - Model Inference

> High-throughput, low-latency execution engines, serving runtimes, and compiler optimizations designed to serve deep learning and large language models in production.

## 🌐 Overview & Architectural Importance

Serving models at scale is computationally expensive. Specialized inference engines utilize PagedAttention, continuous batching, FlashAttention kernels, and KV cache management to achieve 10x higher throughput and reduce token serving costs by up to 90%.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**LLM Inference Engines**](LLM-Inference-Engines.md) — vLLM, SGLang, llama.cpp, TensorRT-LLM, MLC LLM, and high-performance token generation engines.
* [**Model Serving Platforms**](Model-Serving-Platforms.md) — Triton Inference Server, KServe, BentoML, Ray Serve, LitServe, and production model serving.
* [**Model Optimization**](Model-Optimization.md) — ONNX Runtime, TensorRT, OpenVINO, TVM, operator fusion, and graph optimization.

## 🧭 Recommended Study Sequence

1. **KV Cache Optimization**: Understanding the memory footprint of autoregressive generation.
2. **Continuous Batching & PagedAttention**: Eliminating GPU memory fragmentation with vLLM.
3. **TensorRT-LLM & CUDA Kernels**: Fused FlashAttention, FP8 GEMMs, and tensor parallel inference.
4. **Edge & CPU Runtimes**: Quantized GGUF inference with llama.cpp and cross-platform compilation.
5. **Production Orchestration**: Auto-scaling multi-GPU endpoints with Triton, KServe, and Ray Serve.

## 🗝️ Foundational Prerequisites

- GPU memory hierarchy: HBM bandwidth, SRAM cache, and compute bound vs memory bandwidth bound operations.
- The autoregressive decoding loop and KV cache dynamics.
- Docker, containerization, and REST/gRPC networking.

---

[← Back to Main Repository](../README.md)
