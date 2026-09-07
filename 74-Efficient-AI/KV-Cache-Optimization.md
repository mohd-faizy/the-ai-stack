# KV Cache Optimization

> Key-Value cache compression algorithms, attention sinks, streaming context windows, and low-bit KV quantization that slash inference memory.

## 🎯 What to Learn

- The KV Cache memory explosion: Memory scales as $2 	imes 2 	imes n_{	ext{layers}} 	imes n_{	ext{heads}} 	imes d_{	ext{head}} 	imes 	ext{seq_len}$ bytes per concurrent user
- StreamingLLM (MIT HAN Lab): Preserving initial tokens ('attention sinks') plus recent tokens to enable infinite context streaming without memory blowups
- H2O (Heavy Hitter Oracle): Dynamically evicting uninformative KV cache tokens while retaining critical tokens
- KV Cache Quantization: Compressing FP16 KV cache to FP8 or INT4 in vLLM to serve 4x more concurrent users on the same GPU
- PagedAttention (vLLM): Eliminating internal and external memory fragmentation by allocating KV cache in non-contiguous virtual memory blocks
- RadixAttention (SGLang): Tree-based KV cache reuse across shared system prompts, multi-turn dialogues, and few-shot examples

## 📚 Best Learning Resources

### 🥇 Best Overall

- [StreamingLLM (MIT HAN Lab)](https://github.com/mit-han-lab/streaming-llm)
  - Type: KV Cache Optimization Framework
  - Language: English
  - Level: Intermediate
  - Why recommended: The breakthrough MIT research project that discovered 'attention sinks'—demonstrating that retaining just the first 4 tokens plus a rolling window allows LLMs to stream 4 million tokens stably without memory growth.

### 🎓 Courses

- [MIT 6.5940: TinyML & Efficient Deep Learning (Song Han)](https://efficientml.ai/) — Prof. Song Han's lecture on KV cache bottlenecks, streaming attention, and quantization.

### ▶️ YouTube — English

- [Yannic Kilcher / MIT HAN Lab: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher / MIT HAN Lab
  - Language: English
  - Type: Deep Dive
  - Level: Intermediate
  - Why: Visual explanation of why language models allocate disproportionate attention mass to initial tokens (attention sinks) and how rolling caches work.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Efficient Deep Learning by Marion Le Borgne](https://www.oreilly.com/library/view/efficient-deep-learning/9781098105464/) — In-depth chapter covering memory bandwidth constraints and inference optimization.

### 💻 GitHub / Implementations

- [vLLM](https://github.com/vllm-project/vllm) — PagedAttention for efficient KV cache.
- [SGLang](https://github.com/sgl-project/sglang) — RadixAttention for KV cache reuse.
- [StreamingLLM](https://github.com/mit-han-lab/streaming-llm) — Efficient LLM with attention sinks.
- [H2O](https://github.com/FMInference/H2O) — Heavy hitter oracle for efficient LLM serving.

## 📄 Foundational Papers

- [Efficient Streaming Language Models with Attention Sinks](https://arxiv.org/abs/2309.17453) — Xiao et al. landmark paper discovering attention sinks and introducing StreamingLLM.
- [H2O: Heavy Hitter Oracle for Efficient Generative Inference of Large Language Models](https://arxiv.org/abs/2306.14048) — Zhang et al. paper introducing dynamic KV cache token eviction.

### 🧪 Practice

- [StreamingLLM Interactive Colab](https://github.com/mit-han-lab/streaming-llm#quick-start) — Stream 100,000 text tokens through a 4k-context LLaMA model in Google Colab without crashing.

### 🛠️ Projects

- [High-Concurrency vLLM Endpoint with FP8 KV Cache](https://docs.vllm.ai/) — Deploy an 8B model with FP8 KV cache on a single 24GB GPU, benchmarking concurrent throughput against standard FP16.

## 🧭 Recommended Learning Path

1. Calculate the KV cache memory footprint: At batch size 32 and context 8k, a 70B model requires ~100GB of VRAM just for KV caches!
2. Learn the Attention Sink discovery: Softmax forces attention probabilities to sum to 1, causing models to dump excess attention mass on token 0.
3. Implement StreamingLLM: Keep tokens $[0:4]$ and rolling window $[t-W : t]$.
4. Deploy RadixAttention in SGLang to cache shared system prompts across calls.
5. Enable FP8 KV cache quantization in vLLM to double serving capacity.

## ⭐ Top 3 Resources

1. StreamingLLM (MIT HAN Lab)
2. SGLang RadixAttention
3. vLLM PagedAttention & KV Quantization

