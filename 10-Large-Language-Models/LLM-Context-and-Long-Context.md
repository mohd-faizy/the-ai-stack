# LLM Context & Long Context

> Extending the context length of language models from standard 4k/8k tokens to 128k, 1M, and beyond through positional extrapolation, attention approximation, and memory optimization.

## 🎯 What to Learn

- The quadratic attention bottleneck: $O(N^2)$ memory and compute scaling with sequence length $N$
- Rotary Position Embeddings (RoPE) and the out-of-distribution frequency breakdown during context extension
- Positional interpolation techniques: Linear RoPE scaling, Dynamic NTK-aware scaling, and YaRN (Yet another RoPE extensioN)
- Context Parallelism and RingAttention: distributing long sequences across multiple GPUs along the ring topology
- Long-context evaluation: the Needle In A Haystack (NIAH) benchmark, multi-hop retrieval, and passkey retrieval
- Lost in the middle phenomenon: why LLMs excel at retrieving from the beginning and end of long contexts but miss middle tokens

## 📚 Best Learning Resources

### 🥇 Best Overall

- [YaRN: Efficient Context Window Extension of Large Language Models](https://arxiv.org/abs/2309.00071)
  - Type: Research Paper & Technique
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: YaRN solves the RoPE extrapolation problem by scaling both low and high-frequency wave dimensions differently, allowing models to extend from 4k to 128k context with as little as 400 fine-tuning steps.

### 📖 Documentation & References

- [FlashAttention-2 Documentation](https://github.com/Dao-AILab/flash-attention) — Fast and memory-efficient exact attention with IO-awareness enabling long-context training and inference.
- [RingAttention GitHub (UC Berkeley)](https://github.com/lhao499/RingAttention) — Implementation of RingAttention for near-infinite context length scaling across distributed GPUs.

### 🎓 Courses

- [DeepLearning.AI: Long Context and Advanced Retrieval](https://www.deeplearning.ai/short-courses/) — Techniques for prompting, managing, and evaluating million-token context models.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Mathematical Derivation
  - Level: Advanced
  - Why: Exceptional mathematical walkthrough of rotary angle frequencies and why high frequencies must not be interpolated.
- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate to Advanced
  - Why: Technical explanation of overlapping attention computation with block communication around a ring of GPUs.

### ▶️ YouTube — Hindi / Hinglish

- [Finetuning Large Language Models & GenAI in Hindi](https://www.youtube.com/playlist?list=PLZoTAELRMXVN9VbAx5I2VvloTtYmlApe3)
  - Channel: Krish Naik
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Hands-on Hindi tutorials covering transformer architectures, PEFT, LoRA, and LLM fine-tuning.


### 📚 Books

- [YaRN Technical Paper (Peng et al.)](https://arxiv.org/abs/2309.00071) — The definitive mathematical paper on extending context windows without catastrophic forgetting.

### 💻 GitHub / Implementations

- [LongRoPE](https://github.com/microsoft/LongRoPE) — Extending LLM context window.
- [YaRN](https://github.com/jquesnelle/yarn) — Efficient context extension for transformers.
- [LongLoRA](https://github.com/dvlab-research/LongLoRA) — Efficient fine-tuning for long-context LLMs.

### 🧪 Practice

- [Needle In A Haystack Pressure Test Repository](https://github.com/gkamradt/LLMTest_NeedleInAHaystack) — The industry-standard benchmark script testing recall across document lengths and depths.

### 🛠️ Projects

- [Run a 128k Context Pressure Test on Llama 3](https://github.com/gkamradt/LLMTest_NeedleInAHaystack) — Insert needle facts into multi-hundred-page documents and evaluate retrieval accuracy across 20 depth slices.

## 🧭 Recommended Learning Path

1. Understand why standard positional embeddings fail when inferencing beyond training length.
2. Study Rotary Position Embedding (RoPE) mathematics and the wavelength of each dimension.
3. Explore Neural Tangent Kernel (NTK) aware scaling: expanding the base frequency to preserve high-frequency resolution.
4. Understand YaRN's temperature scaling to correct for attention entropy changes at 128k+ tokens.
5. Run the Needle In A Haystack benchmark to verify whether a model actually uses its advertised context length.

## ⭐ Top 3 Resources

1. [FlashAttention-2 (Tri Dao)](https://github.com/Dao-AILab/flash-attention) — The essential exact-attention kernel enabling practical long-context training.
2. [YaRN (Peng et al.)](https://arxiv.org/abs/2309.00071) — The most effective, resource-efficient RoPE context window expansion method.
3. [Needle In A Haystack Benchmark (Greg Kamradt)](https://github.com/gkamradt/LLMTest_NeedleInAHaystack) — The gold-standard empirical validation benchmark for long-context models.

