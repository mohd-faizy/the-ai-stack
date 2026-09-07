# LLM Inference Engines

> Specialized high-throughput inference engines and runtimes engineered for lightning-fast autoregressive token generation and minimal latency.

## 🎯 What to Learn

- Memory bottlenecks in LLM inference: Pre-fill (compute-bound) vs Decode (memory-bandwidth-bound)
- PagedAttention: Managing Key-Value (KV) cache memory like virtual memory pages
- Continuous batching (iteration-level scheduling) vs static request batching
- vLLM: Architecture, engine API, OpenAI-compatible server, and multi-GPU tensor parallelism
- SGLang: RadixAttention for automatic KV cache reuse across shared prefixes and multi-turn conversations
- llama.cpp: Pure C/C++ inference on CPU and GPU with zero third-party dependencies

## 📚 Best Learning Resources

### 🥇 Best Overall

- [vLLM: Easy, Fast, and Cheap LLM Serving for Everyone](https://github.com/vllm-project/vllm)
  - Type: Inference Engine
  - Language: English
  - Level: Intermediate
  - Why recommended: The industry standard open-source inference engine delivering state-of-the-art serving throughput via PagedAttention and continuous batching.

### 🎓 Courses

- [DeepLearning.AI: Efficient Serving of LLMs](https://www.deeplearning.ai/short-courses/efficient-serving-of-llms/) — Course with Predibase & vLLM co-founders covering continuous batching, quantization, and LoRA serving.

### ▶️ YouTube — English

- [ByteByteGo / Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: ByteByteGo / Umar Jamil
  - Language: English
  - Type: Deep Dive
  - Level: Intermediate
  - Why: Visual explanation of memory fragmentation, KV cache paging, and continuous batching dynamics.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Efficient Deep Learning by Marion Le Borgne (O'Reilly)](https://www.oreilly.com/library/view/efficient-deep-learning/9781098105464/) — Covers hardware constraints, memory bandwidth limits, and optimization techniques.

### 💻 GitHub / Implementations

- [vLLM](https://github.com/vllm-project/vllm) — High-throughput and memory-efficient LLM serving.
- [SGLang](https://github.com/sgl-project/sglang) — Fast serving framework for LLMs and VLMs.
- [llama.cpp](https://github.com/ggml-org/llama.cpp) — Efficient LLM inference in C/C++.
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) — NVIDIA-optimized inference.
- [MLC LLM](https://github.com/mlc-ai/mlc-llm) — Machine learning compilation for universal LLM deployment.
- [ExLlamaV2](https://github.com/turboderp/exllamav2) — Fast inference for quantized models.
- [CTranslate2](https://github.com/OpenNMT/CTranslate2) — Fast inference for transformer models.
- [PowerInfer](https://github.com/SJTU-IPADS/PowerInfer) — Fast LLM serving with consumer GPUs.
- [llm.c](https://github.com/karpathy/llm.c) — LLM training and inference in pure C/CUDA.
- [candle](https://github.com/huggingface/candle) — ML framework in Rust for fast inference.
- [mistral.rs](https://github.com/EricLBuehler/mistral.rs) — Blazing-fast LLM inference in Rust.

## 📄 Foundational Papers

- [Efficient Memory Management for Large Language Model Serving with PagedAttention](https://arxiv.org/abs/2309.06180) — The landmark paper introducing vLLM and PagedAttention, increasing serving throughput by 2-4x.
- [SGLang: Fast and Expressive Language Model Programming with RadixAttention](https://arxiv.org/abs/2312.07104) — Introduces RadixAttention, enabling automated KV cache sharing across complex multi-step prompts.

### 🧪 Practice

- [Deploy vLLM Docker Container](https://docs.vllm.ai/en/latest/serving/deploying_with_docker.html) — Launch an OpenAI-compatible REST server serving open-weights LLMs in one command.

### 🛠️ Projects

- [Multi-GPU vLLM Production Endpoint](https://github.com/vllm-project/vllm) — Deploy Mistral or Llama-3-70B using tensor parallelism with continuous batching and Prometheus metrics.

## 🧭 Recommended Learning Path

1. Understand the arithmetic intensity and memory bandwidth limits of autoregressive decoding.
2. Calculate KV cache memory requirements: `2 * 2 * n_layers * n_heads * d_head * seq_len`.
3. Deploy and benchmark vLLM with varying concurrency and batch sizes.
4. Explore SGLang for prefix-heavy RAG workloads using RadixAttention.
5. Run quantized inference on local Apple Silicon or CPU with llama.cpp.

## ⭐ Top 3 Resources

1. vLLM (vLLM Project / UC Berkeley)
2. SGLang (LMSYS / SGLang Project)
3. llama.cpp (Georgi Gerganov)

