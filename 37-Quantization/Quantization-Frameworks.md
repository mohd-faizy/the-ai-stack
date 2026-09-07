# Quantization Frameworks

> State-of-the-art libraries and mathematical algorithms to quantize large foundation models into INT8, INT4, and INT2 precision with minimal loss in model capability.

## 🎯 What to Learn

- Quantization fundamentals: Scale factors, zero points, and mapping float ranges to integers
- Outlier features problem: Why emergent high-magnitude activations in LLMs break naive INT8 quantization
- Bitsandbytes: LLM.int8() vector-wise quantization and QLoRA 4-bit NormalFloat (NF4)
- GPTQ: One-shot post-training quantization using second-order Taylor expansion and inverse Hessian matrices
- AWQ (Activation-aware Weight Quantization): Protecting the 1% most salient weights based on activation magnitudes
- Extreme quantization: AQLM (Additive Quantization) and HQQ (Half-Quadratic Quantization) for 2-bit models

## 📚 Best Learning Resources

### 🥇 Best Overall

- [AutoAWQ](https://github.com/casper-hansen/AutoAWQ)
  - Type: Quantization Framework
  - Language: English
  - Level: Intermediate
  - Why recommended: The leading production 4-bit quantization framework delivering faster inference speeds and superior perplexity retention compared to traditional GPTQ.

### 🎓 Courses

- [DeepLearning.AI: Quantization Fundamentals with Hugging Face](https://www.deeplearning.ai/short-courses/quantization-fundamentals-with-hugging-face/) — Taught by Younes Belkada (Hugging Face) covering linear quantization, calibration, and packing.
- [DeepLearning.AI: Quantization In Depth](https://www.deeplearning.ai/short-courses/quantization-in-depth/) — Advanced course covering asymmetric quantization, per-channel vs per-tensor scaling, and QLoRA.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Deep Dive
  - Level: Advanced
  - Why: Masterful mathematical derivation of affine quantization, outlier channels, and the Hessian-based GPTQ algorithm.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Efficient Deep Learning by Marion Le Borgne (O'Reilly)](https://www.oreilly.com/library/view/efficient-deep-learning/9781098105464/) — Covers quantization theory, post-training quantization, and hardware accelerator support.

### 💻 GitHub / Implementations

- [AutoGPTQ](https://github.com/AutoGPTQ/AutoGPTQ) — GPTQ quantization implementation.
- [AutoAWQ](https://github.com/casper-hansen/AutoAWQ) — AWQ quantization implementation.
- [bitsandbytes](https://github.com/bitsandbytes-foundation/bitsandbytes) — 8-bit and 4-bit quantization.
- [GPTQ](https://github.com/IST-DASLab/gptq) — Accurate post-training quantization research.
- [GGUF/GGML](https://github.com/ggerganov/ggml) — Tensor library for efficient quantized inference.
- [Quanto](https://github.com/huggingface/optimum-quanto) — PyTorch quantization library.
- [HQQ](https://github.com/mobiusml/hqq) — Half-quadratic quantization.
- [AQLM](https://github.com/Vahe1994/AQLM) — Additive quantization for language models.
- [QuIP#](https://github.com/Cornell-RelaxML/quip-sharp) — Quantization with incoherence processing.
- [SmoothQuant](https://github.com/mit-han-lab/smoothquant) — Accurate and efficient post-training quantization.
- [SpQR](https://github.com/Vahe1994/SpQR) — Sparse-quantized representation for LLMs.

## 📄 Foundational Papers

- [AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration](https://arxiv.org/abs/2306.00978) — Seminal paper demonstrating that protecting 1% of salient weights preserves model accuracy in 4-bit.
- [GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers](https://arxiv.org/abs/2210.17323) — Pioneered high-speed second-order weight quantization processing 175B models in ~4 hours.

### 🧪 Practice

- [AutoAWQ Quantization Notebook](https://github.com/casper-hansen/AutoAWQ) — Quantize a Llama 3 8B model into 4-bit AWQ in 10 minutes on a single GPU.

### 🛠️ Projects

- [Automated Quantization & Perplexity Benchmark Pipeline](https://github.com/casper-hansen/AutoAWQ) — Quantize a base model to AWQ and GPTQ, then evaluate Wikitext perplexity degradation against unquantized FP16.

## 🧭 Recommended Learning Path

1. Understand linear quantization: Scale `s = (max - min) / (2^b - 1)` and zero point `z`.
2. Learn why emergent outlier features in activations require per-channel or group-wise quantization.
3. Quantize a Hugging Face model using bitsandbytes NF4.
4. Run AutoAWQ to create a high-performance 4-bit quantized checkpoint.
5. Serve the quantized model with vLLM and measure throughput and memory savings.

## ⭐ Top 3 Resources

1. AutoAWQ (Casper Hansen / MIT HAN Lab)
2. DeepLearning.AI Quantization Courses (Younes Belkada)
3. AWQ Seminal Research Paper (Lin et al.)

