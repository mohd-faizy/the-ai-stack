# Speculative Decoding

> Inference acceleration algorithms that use small draft models or parallel prediction heads to draft multiple candidate tokens and verify them simultaneously.

## 🎯 What to Learn

- The memory bandwidth bottleneck: Generating 1 token requires loading all model weights from GPU memory, wasting compute cores
- Speculative Decoding fundamentals (Leviathan et al. / Chen et al.): Fast draft model generates $K$ tokens, large target model verifies all $K$ tokens in a single parallel forward pass
- Medusa (Together AI): Multi-head speculative decoding predicting multiple future tokens simultaneously without needing a separate draft model
- EAGLE & EAGLE-2: Speculative sampling based on autoregressive heads in feature space, achieving 3x wall-clock speedups with zero quality loss
- Acceptance rate dynamics: How acceptance probability determines actual wall-clock speedup
- Lossless acceleration: Mathematical proof that speculative decoding preserves the exact output probability distribution of the target model

## 📚 Best Learning Resources

### 🥇 Best Overall

- [EAGLE & Medusa](https://github.com/SafeAILab/EAGLE)
  - Type: Speculative Acceleration Framework
  - Language: English
  - Level: Advanced
  - Why recommended: Leading open-source speculative decoding frameworks that deliver 2.5x to 3.5x speedups for open-weights models (Llama, Mistral) on vLLM and TensorRT-LLM without requiring separate draft model weights.

### 🎓 Courses

- [DeepLearning.AI: Efficient Serving of LLMs](https://www.deeplearning.ai/short-courses/efficient-serving-of-llms/) — Covers speculative decoding, batching optimizations, and serving throughput.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Deep Dive
  - Level: Advanced
  - Why: Visual explanation of memory bandwidth utilization, draft generation, rejection sampling, and mathematical losslessness.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Efficient Deep Learning by Marion Le Borgne](https://www.oreilly.com/library/view/efficient-deep-learning/9781098105464/) — Covers autoregressive decoding limits, memory bound workloads, and speculative acceleration.

### 💻 GitHub / Implementations

- [vLLM](https://github.com/vllm-project/vllm) — Built-in speculative decoding.
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) — Optimized speculative execution.
- [Medusa](https://github.com/FasterDecoding/Medusa) — Multiple decoding heads for parallel generation.
- [EAGLE](https://github.com/SafeAILab/EAGLE) — Speculative sampling with feature-level autoregression.
- [SpecInfer](https://github.com/flexflow/FlexFlow) — Speculative inference by FlexFlow.

## 📄 Foundational Papers

- [Fast Inference from Transformers via Speculative Decoding](https://arxiv.org/abs/2211.17192) — Leviathan, Kalman, and Matias landmark Google paper introducing speculative decoding.
- [EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty](https://arxiv.org/abs/2401.15077) — Li et al. paper introducing auto-regression on feature representations.

### 🧪 Practice

- [vLLM Speculative Decoding CLI](https://docs.vllm.ai/en/latest/models/speculative_decoding.html) — Launch vLLM with `--speculative-model` and measure tokens/sec gains on local GPUs.

### 🛠️ Projects

- [Benchmark Medusa vs Target Model Latency](https://github.com/FasterDecoding/Medusa) — Serve Vicuna-7B with and without Medusa heads and measure tokens per second and P95 latency under concurrent loads.

## 🧭 Recommended Learning Path

1. Understand why generating tokens one-by-one leaves GPU Tensor Cores 90% idle.
2. Learn the rejection sampling mathematics ensuring speculative decoding is mathematically exact.
3. Explore Medusa multi-head draft predictions trained directly on base model features.
4. Study EAGLE-2 dynamic draft tree generation.
5. Enable speculative decoding in vLLM or llama.cpp for a free 2x speedup.

## ⭐ Top 3 Resources

1. EAGLE & EAGLE-2 (State-of-the-art Speculative Decoding)
2. Medusa (Together AI)
3. Fast Inference via Speculative Decoding (Google Paper)

