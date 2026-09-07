# Multimodal Frameworks

> Multimodal frameworks provide high-throughput inference engines, fine-tuning harnesses, and serving abstractions built specifically to handle variable-resolution image and video inputs alongside text.

## 🎯 What to Learn

- Serving multimodal models with vLLM and SGLang
- Multimodal tokenization and KV-cache optimization for image tokens
- Hugging Face Transformers multimodal pipeline architecture
- NVIDIA NeMo Multimodal for distributed training and alignment
- Fine-tuning VLMs with LoRA and QLoRA using LLaMA-Factory

## 📚 Best Learning Resources

### 🥇 Best Overall

- [vLLM Multimodal Serving Documentation](https://docs.vllm.ai/en/latest/models/multimodal_models.html)
  - Type: Official Engine & Docs
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: vLLM provides production-grade high-throughput serving for multimodal LLMs (LLaVA, Qwen2-VL, Pixtral) with PagedAttention and optimized image token processing.

### 📖 Documentation & References

- [vLLM Multimodal Docs](https://docs.vllm.ai/en/latest/models/multimodal_models.html) — Guides on serving vision-language models with OpenAI-compatible streaming endpoints.
- [Hugging Face Multimodal Pipeline](https://huggingface.co/docs/transformers/main_classes/pipelines) — Unified API for image-to-text, visual question answering, and document parsing.
- [NVIDIA NeMo Multimodal](https://docs.nvidia.com/nemo-framework/user-guide/latest/multimodal/overview.html) — Enterprise framework for building, training, and fine-tuning multimodal foundation models.

### 🎓 Courses

- [Deploying Multimodal AI (DeepLearning.AI)](https://www.deeplearning.ai/) — Practical techniques for serving and optimizing vision-language models at scale.

### ▶️ YouTube — English

- [vLLM Team: Video Guides & Tutorials (vLLM Team)](https://www.youtube.com/results?search_query=vLLM%20Team%20vLLM%20Team%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: vLLM Team
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Walkthrough of serving Qwen2-VL and LLaVA with high concurrency and streaming responses.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Deep Learning Systems](https://dlsyscourse.org/) — Chen and Tian textbook on GPU memory management, tensor compilers, and deep learning runtimes.

### 💻 GitHub / Implementations

- [vllm-project/vllm](https://github.com/vllm-project/vllm) — A high-throughput and memory-efficient inference and serving engine for LLMs and VLMs.
- [NVIDIA/NeMo](https://github.com/NVIDIA/NeMo) — A scalable framework for building state-of-the-art conversational AI and multimodal foundation models.
- [hiyouga/LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory) — Unified efficient fine-tuning of 100+ LLMs & VLMs (LLaVA, Qwen-VL).

## 📄 Foundational Papers

- [Efficient Memory Management for Large Language Model Serving with PagedAttention](https://arxiv.org/abs/2309.06180) — Kwon et al. (SOSP 2023) seminal paper on PagedAttention powering high-throughput multimodal serving.

### 🧪 Practice

- [LLaMA-Factory WebUI Multimodal Fine-Tuning](https://github.com/hiyouga/LLaMA-Factory) — Fine-tune a vision-language model on custom image-text pairs via an interactive web interface.

### 🛠️ Projects

- [High-Throughput Multimodal API Gateway](https://docs.vllm.ai/) — Deploy an OpenAI-compatible multimodal endpoint using vLLM that processes concurrent user image queries in under 300ms.

## 🧭 Recommended Learning Path

1. Learn how vision tokens impact context length (e.g. 576 to 2,000+ tokens per image).
2. Set up vLLM to serve Qwen2-VL with OpenAI API compatibility.
3. Execute parallel batch inference with image inputs using Python `requests` or `aiohttp`.
4. Fine-tune a VLM using LoRA on custom medical or document datasets with LLaMA-Factory.
5. Benchmark throughput, token generation latency, and GPU VRAM utilization under concurrency.

## ⭐ Top 3 Resources

1. vLLM Multimodal (vllm-project/vllm)
2. Hugging Face Transformers
3. LLaMA-Factory (hiyouga/LLaMA-Factory)

