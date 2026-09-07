# Notable Open Models (Reference Repos)

> The primary open-weights reference repositories that define modern state-of-the-art LLM capabilities across dense transformers, Mixture-of-Experts (MoE), and reasoning models.

## 🎯 What to Learn

- Meta Llama family: Llama 3.1 / 3.2 / 3.3 architectures (8B, 70B, 405B) and GQA scaling
- DeepSeek innovations: DeepSeek-V3 (Multi-Head Latent Attention - MLA, DeepSeekMoE) and DeepSeek-R1 (incentivized reasoning via RL)
- Mistral AI: Mistral 7B (sliding window attention), Mixtral 8x7B (sparse mixture of experts), and Codestral
- Alibaba Qwen family: Qwen 2.5 (dense and MoE variants with exceptional coding and multilingual mastery)
- Mixture of Experts (MoE) routing: top-k expert selection, load balancing loss, and active vs total parameter trade-offs

## 📚 Best Learning Resources

### 🥇 Best Overall

- [DeepSeek-V3 & DeepSeek-R1 Reference Repositories](https://github.com/deepseek-ai/DeepSeek-V3)
  - Type: Reference Implementation & Research Papers
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: DeepSeek-V3 and R1 introduced architectural breakthroughs—including Multi-Head Latent Attention (MLA), DeepSeekMoE, and pure RL-driven reasoning—matching frontier closed models at a fraction of the compute cost.

### 📖 Documentation & References

- [Meta Llama GitHub & Docs](https://github.com/meta-llama/llama) — Official reference codebase for Llama 3 models from Meta AI.
- [Qwen 2.5 GitHub & Model Cards](https://github.com/QwenLM/Qwen2.5) — Official repository for Alibaba's flagship open-weights model family.
- [Mistral Common / Reference Code](https://github.com/mistralai/mistral-inference) — Official reference implementation for Mistral and Mixtral models.

### 🎓 Courses

- [Stanford CS324: Large Language Models - Open Source Ecosystem](https://stanford-cs324.github.io/winter2022/) — Analysis of model release paradigms, openness, and architectural variants.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Architecture Deep Dive
  - Level: Advanced
  - Why: Crystal-clear mathematical diagrams explaining how Multi-Head Latent Attention (MLA) compresses the KV cache by 93%.
- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate to Advanced
  - Why: Technical breakdown of pure RL incentives (GRPO) producing the 'aha moment' and chain-of-thought self-reflection.

### ▶️ YouTube — Hindi / Hinglish

- [Finetuning Large Language Models & GenAI in Hindi](https://www.youtube.com/playlist?list=PLZoTAELRMXVN9VbAx5I2VvloTtYmlApe3)
  - Channel: Krish Naik
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Hands-on Hindi tutorials covering transformer architectures, PEFT, LoRA, and LLM fine-tuning.


### 📚 Books

- [DeepSeek-V3 Technical Report](https://arxiv.org/abs/2412.19437) — The landmark technical report detailing architectural breakthroughs and FP8 mixed-precision training.
- [DeepSeek-R1 Technical Report](https://arxiv.org/abs/2501.12948) — Seminal paper demonstrating large-scale reasoning emergence via pure reinforcement learning.

### 💻 GitHub / Implementations

- [Llama](https://github.com/meta-llama/llama) — Meta's Llama family of models.
- [Llama 3](https://github.com/meta-llama/llama3) — Meta's latest Llama models.
- [Mistral](https://github.com/mistralai/mistral-inference) — Mistral AI's inference reference.
- [Qwen](https://github.com/QwenLM/Qwen2.5) — Alibaba's Qwen large language model.
- [Gemma](https://github.com/google-deepmind/gemma) — Google's lightweight open models.
- [Phi](https://github.com/microsoft/phi-3cookbook) — Microsoft's small language models.
- [DeepSeek](https://github.com/deepseek-ai/DeepSeek-V3) — DeepSeek's open models.
- [Yi](https://github.com/01-ai/Yi) — 01.AI's bilingual language models.
- [InternLM](https://github.com/InternLM/InternLM) — Multilingual foundation model.
- [BLOOM](https://github.com/bigscience-workshop/bigscience) — Open multilingual LLM by BigScience.
- [Falcon](https://huggingface.co/tiiuae/falcon-7b) — Technology Innovation Institute's LLMs.
- [StableLM](https://github.com/Stability-AI/StableLM) — Stability AI's language models.
- [Command R](https://github.com/cohere-ai) — Cohere's enterprise-grade LLMs.

### 🧪 Practice

- [Chat with DeepSeek-R1 & Qwen 2.5 on Hugging Face Chat](https://huggingface.co/chat/) — Test open-weights frontier models interactively in the browser.

### 🛠️ Projects

- [Deploy DeepSeek-R1 Distill on Local Hardware with Ollama](https://ollama.com/library/deepseek-r1) — Run a 7B or 14B distilled DeepSeek reasoning model locally to solve complex logic puzzles and code problems.

## 🧭 Recommended Learning Path

1. Compare the dense architecture of Llama 3 against the sparse Mixture-of-Experts (MoE) of Mixtral 8x7B.
2. Study Multi-Head Latent Attention (MLA): how low-rank joint compression dramatically reduces KV cache footprint during generation.
3. Explore DeepSeekMoE: using fine-grained expert segmentation and shared isolated experts.
4. Examine DeepSeek-R1's Group Relative Policy Optimization (GRPO) that dispenses with traditional critic value networks.
5. Benchmark reasoning models against dense baselines on mathematical reasoning (MATH) and coding (HumanEval).

## ⭐ Top 3 Resources

1. [DeepSeek-V3 / R1 (DeepSeek AI)](https://github.com/deepseek-ai/DeepSeek-V3) — The watershed open-weights architecture proving algorithmic innovation matches closed brute-force compute.
2. [Meta Llama (Meta AI)](https://github.com/meta-llama/llama) — The global foundation model cornerstone powering enterprise and research development.
3. [Qwen 2.5 (Alibaba Cloud)](https://github.com/QwenLM/Qwen2.5) — Industry-leading coding, mathematics, and multilingual open-weights models.

