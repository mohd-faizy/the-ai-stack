# Foundation Model Pre-training

> Large-scale self-supervised pre-training ingests trillions of tokens to establish broad general representations, factual knowledge, and reasoning capabilities.

## 🎯 What to Learn

- Data ingestion at scale: deduplication (MinHash LSH), filtering, synthetic data mixing, and quality classifiers
- Scaling laws: Kaplan et al. vs Chinchilla (Hoffmann et al.) optimal compute-to-token ratios
- Token horizons: scaling from 1 trillion to 15+ trillion tokens (Llama 3, DeepSeek-V3)
- Cluster stability: detecting and recovering from loss spikes, hardware degradation, and NaN gradients
- Checkpointing at scale: asynchronous checkpointing, distributed state serialization, and fast restart
- Learning rate schedules: cosine decay with warmup, minimum learning rates, and z-loss stabilization

## 📚 Best Learning Resources

### 🥇 Best Overall

- [The Llama 3 Herd of Models (Meta AI Research Paper)](https://arxiv.org/abs/2407.21783)
  - Type: Research Paper
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: Meta's comprehensive 92-page engineering report detailing the complete pre-training, cluster infrastructure (16,000 GPUs), data filtering, and scaling laws for Llama 3.

### 📖 Documentation & References

- [Megatron-LM Documentation (NVIDIA)](https://github.com/NVIDIA/Megatron-LM) — Ongoing research training framework for large language models employing 3D parallelism.
- [Databricks MosaicML Composer Documentation](https://docs.mosaicml.com/projects/composer/en/latest/) — Library for training neural networks with efficiency and stability.

### 🎓 Courses

- [Stanford CS324: Large Language Models - Training Dynamics](https://stanford-cs324.github.io/winter2022/lectures/training/) — Academic lecture on distributed pre-training architectures and numerical stability.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate to Advanced
  - Why: Detailed review of OpenAI's Kaplan paper and DeepMind's Chinchilla optimal compute allocation.
- [Matthew Berman: Video Guides & Tutorials](https://www.youtube.com/@MatthewBerman)
  - Channel: Matthew Berman
  - Language: English
  - Type: Overview
  - Level: Beginner to Intermediate
  - Why: Breakdown of the 15-trillion token pre-training mix, cluster failures, and synthetic filtering.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Chinchilla Scaling Laws (Hoffmann et al. - Training Compute-Optimal Large Language Models)](https://arxiv.org/abs/2203.15556) — The landmark DeepMind paper proving models should be trained on equal tokens and parameters.

### 💻 GitHub / Implementations

- [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) — Large-scale language model training.
- [Pythia](https://github.com/EleutherAI/pythia) — Suite for analyzing LLM training.
- [OLMo](https://github.com/allenai/OLMo) — Open language model by AI2.
- [Dolma](https://github.com/allenai/dolma) — Dataset for pre-training language models.

### 🧪 Practice

- [FineWeb Dataset on Hugging Face (15 Trillion Tokens)](https://huggingface.co/datasets/HuggingFaceFW/fineweb) — The highest quality, open-source web pre-training corpus curated by Hugging Face.

### 🛠️ Projects

- [Pre-train a 100M Parameter LLM on FineWeb-Edu](https://github.com/karpathy/nanoGPT) — Use nanoGPT or PyTorch Lightning to pre-train a small GPT model on 10 billion educational tokens.

## 🧭 Recommended Learning Path

1. Understand the self-supervised causal language modeling loss (cross-entropy over next token logits).
2. Study Chinchilla scaling laws: why models require ~20 tokens per model parameter for compute optimality.
3. Explore web data curation: HTML extraction with Trafilatura, deduplication with MinHash, and heuristic filtering.
4. Analyze cluster training dynamics: gradient clipping, BF16 numerical stability, and learning rate warmups.
5. Evaluate pre-training checkpoints across standard zero-shot benchmarks (HellaSwag, ARC, MMLU).

## ⭐ Top 3 Resources

1. [The Llama 3 Herd of Models Paper (Meta AI)](https://arxiv.org/abs/2407.21783) — The most comprehensive open engineering report on modern pre-training in existence.
2. [Chinchilla Paper (DeepMind)](https://arxiv.org/abs/2203.15556) — The foundational research paper defining compute-optimal model training.
3. [FineWeb Dataset (Hugging Face)](https://huggingface.co/datasets/HuggingFaceFW/fineweb) — The premier open pre-training dataset setting the standard for data quality.

