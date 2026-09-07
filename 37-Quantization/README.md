# 37 - Quantization

> Precision reduction techniques compressing 16-bit floating-point weights into 8-bit, 4-bit, and 2-bit representations to drastically reduce memory usage and accelerate execution.

## 🌐 Overview & Architectural Importance

A 70B parameter model in FP16 requires 140 GB of VRAM—demanding two expensive enterprise GPUs. Using 4-bit quantization (AWQ/GPTQ/GGUF), that same model fits comfortably in ~38 GB of VRAM on consumer GPUs or unified memory laptops with negligible perplexity degradation.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Quantization Frameworks**](Quantization-Frameworks.md) — AutoGPTQ, AutoAWQ, bitsandbytes, Quanto, HQQ, AQLM, and post-training quantization (PTQ) libraries.
* [**Efficient Formats**](Efficient-Formats.md) — GGUF, GGML, Safetensors, memory-mapped files (mmap), and fast zero-copy tensor serialization.

## 🧭 Recommended Study Sequence

1. **Quantization Fundamentals**: Symmetric vs asymmetric, affine mapping, clipping ranges, and zero points.
2. **Post-Training Quantization (PTQ)**: Round-to-Nearest (RTN) vs second-order Hessian optimization (GPTQ).
3. **Activation-Aware Quantization**: Preserving salient outlier channels with AWQ.
4. **Sub-4-Bit Frontiers**: AQLM, QuIP#, and HQQ achieving 2-bit quantization.
5. **Production File Formats**: GGUF serialization, k-quants, and zero-copy loading with Safetensors.

## 🗝️ Foundational Prerequisites

- Floating point representation (IEEE 754 FP32, FP16, BF16) vs Integer (INT8, INT4).
- Matrix multiplication (GEMM) algorithms and tensor broadcasting.
- Model evaluation metrics: Perplexity (PPL) and zero-shot benchmark tracking.

---

[← Back to Main Repository](../README.md)
