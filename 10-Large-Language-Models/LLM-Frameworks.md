# LLM Frameworks

> High-throughput serving engines, local inference runtimes, and execution libraries optimized for low latency, continuous batching, and memory efficiency.

## 🎯 What to Learn

- Memory bottlenecks in LLM serving: weights memory vs KV cache memory
- PagedAttention algorithm (vLLM): managing KV cache like virtual memory pages to eliminate fragmentation
- Continuous batching (iteration-level scheduling) vs static request batching
- Local cross-platform execution: llama.cpp (pure C/C++ with GGML/GGUF) and Ollama
- Structured and high-throughput serving: SGLang (RadixAttention for multi-turn prefix caching)
- Speculative decoding, chunked prefill, and tensor parallel multi-GPU serving

## 📚 Best Learning Resources

### 🥇 Best Overall

- [vLLM: Easy, Fast, and Cheap LLM Serving for Everyone](https://github.com/vllm-project/vllm)
  - Type: Serving Engine & Documentation
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: vLLM revolutionized LLM serving with PagedAttention and continuous batching, delivering 2-4x higher throughput than standard Hugging Face pipelines with an OpenAI-compatible server.

### 📖 Documentation & References

- [vLLM Official Documentation](https://docs.vllm.ai/en/latest/) — Complete reference for launching OpenAI-compatible APIs, tensor parallelism, and quantized models.
- [Ollama Documentation](https://github.com/ollama/ollama) — The easiest and most popular way to get up and running with Llama, DeepSeek, and Mistral locally.
- [llama.cpp Documentation](https://github.com/ggml-org/llama.cpp) — Port of LLM inference in C/C++ with zero dependencies, running everywhere from Apple Silicon to Android.

### 🎓 Courses

- [DeepLearning.AI: Efficient Serving with vLLM](https://www.deeplearning.ai/short-courses/) — Hands-on tutorial building scalable production LLM inference endpoints.

### ▶️ YouTube — English

- [UC Berkeley: Video Guides & Tutorials](https://www.youtube.com/@UCBerkeley)
  - Channel: UC Berkeley
  - Language: English
  - Type: Research Presentation
  - Level: Intermediate to Advanced
  - Why: Woosuk Kwon explains why KV cache memory waste was solved using operating systems virtual memory principles.
- [freeCodeCamp.org: Video Guides & Tutorials](https://www.youtube.com/@freecodecamp)
  - Channel: freeCodeCamp.org
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Step-by-step setup installing Ollama, pulling models, and connecting local Python scripts.

### ▶️ YouTube — Hindi / Hinglish

- [Finetuning Large Language Models & GenAI in Hindi](https://www.youtube.com/playlist?list=PLZoTAELRMXVN9VbAx5I2VvloTtYmlApe3)
  - Channel: Krish Naik
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Hands-on Hindi tutorials covering transformer architectures, PEFT, LoRA, and LLM fine-tuning.


### 📚 Books

- [Efficient Large Language Model Serving (Kwon et al. - vLLM Paper)](https://arxiv.org/abs/2309.06180) — The foundational systems research paper introducing PagedAttention.

### 💻 GitHub / Implementations

- [Transformers](https://github.com/huggingface/transformers) — Transformer model ecosystem.
- [LitGPT](https://github.com/Lightning-AI/litgpt) — Lightning-fast LLM training and fine-tuning.
- [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) — Streamlined LLM fine-tuning.
- [LlamaFactory](https://github.com/hiyouga/LLaMA-Factory) — Unified efficient LLM fine-tuning.
- [text-generation-webui](https://github.com/oobabooga/text-generation-webui) — Gradio web UI for running LLMs.
- [FastChat](https://github.com/lm-sys/FastChat) — Training, serving, and evaluating chatbots.
- [unsloth](https://github.com/unslothai/unsloth) — 2x faster LLM fine-tuning with 80% less memory.

### 🧪 Practice

- [vLLM Quickstart Benchmarks](https://docs.vllm.ai/en/latest/getting_started/quickstart.html) — Run throughput benchmarks comparing standard Hugging Face pipeline against vLLM.

### 🛠️ Projects

- [Deploy a High-Throughput OpenAI-Compatible API Server](https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html) — Launch vLLM on a cloud GPU instance with tensor parallelism, serving requests to existing OpenAI client libraries.

## 🧭 Recommended Learning Path

1. Understand the autoregressive inference memory bottleneck: Memory Bandwidth vs Arithmetic Intensity.
2. Explore the KV cache: why storing previous Key and Value vectors prevents quadratic recalculation.
3. Study PagedAttention: partitioning KV caches into non-contiguous memory blocks to eliminate internal fragmentation.
4. Run Ollama locally to test GGUF quantized models with interactive terminal and REST endpoints.
5. Deploy vLLM in production with continuous batching and RadixAttention prefix caching.

## ⭐ Top 3 Resources

1. [vLLM](https://github.com/vllm-project/vllm) — The industry standard high-throughput production LLM serving engine.
2. [Ollama](https://github.com/ollama/ollama) — The most developer-friendly runtime for running local LLMs across macOS, Linux, and Windows.
3. [llama.cpp](https://github.com/ggml-org/llama.cpp) — The seminal foundational C/C++ inference engine bringing AI to consumer hardware.

