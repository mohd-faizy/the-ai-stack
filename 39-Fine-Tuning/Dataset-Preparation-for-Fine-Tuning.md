# Dataset Preparation for Fine-Tuning

> Curating, formatting, cleaning, and synthetically generating high-quality instruction and preference datasets required for effective fine-tuning.

## 🎯 What to Learn

- Dataset formats: Alpaca (`instruction`, `input`, `output`), ShareGPT multi-turn conversations, and ChatML formats
- Synthetic data generation: Evol-Instruct (in-depth, in-breadth, reasoning mutation) and Self-Instruct
- Distilabel (Argilla): Scalable synthetic data generation and AI feedback pipeline framework
- Argilla: Open-source data curation and human-in-the-loop annotation platform for LLMs
- Magpie: Generating high-quality instruction datasets from base models without explicit prompting templates
- Data deduplication (MinHash LSH), quality filtering, and decontamination against benchmark test sets

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Argilla & Distilabel](https://github.com/argilla-io/distilabel)
  - Type: Data Curation & Generation
  - Language: English
  - Level: Intermediate
  - Why recommended: The leading modern ecosystem for generating synthetic datasets, collecting human feedback, and filtering high-signal fine-tuning corpora.

### 🎓 Courses

- [DeepLearning.AI: Data-Centric AI](https://www.deeplearning.ai/courses/data-centric-ai/) — Andrew Ng's course on prioritizing dataset quality, consistency, and label cleaning over model tweaking.

### ▶️ YouTube — English

- [Argilla / AI Breakdowns: Video Guides & Tutorials](https://www.youtube.com/@argilla-io)
  - Channel: Argilla / AI Breakdowns
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Walkthrough of building synthetic instruction datasets using Evol-Instruct patterns in Python.

### ▶️ YouTube — Hindi / Hinglish

- [Finetuning LLMs in Hindi](https://www.youtube.com/playlist?list=PLZoTAELRMXVN9VbAx5I2VvloTtYmlApe3)
  - Channel: Krish Naik
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Intermediate
  - Why: Hands-on Hindi tutorials on LoRA, QLoRA, and supervised fine-tuning with Hugging Face.


### 📚 Books

- [Data-Centric AI by Andrew Ng (Course & Notes)](https://datacentricai.org/) — Principles and practices of engineering dataset quality, label error detection, and augmentation.

### 💻 GitHub / Implementations

- [Argilla](https://github.com/argilla-io/argilla) — Data labeling and curation for fine-tuning.
- [distilabel](https://github.com/argilla-io/distilabel) — AI feedback dataset generation.
- [DataDreamer](https://github.com/datadreamer-dev/DataDreamer) — Synthetic dataset creation for fine-tuning.
- [Magpie](https://github.com/magpie-align/magpie) — Alignment data synthesis.

## 📄 Foundational Papers

- [Self-Instruct: Aligning Language Models with Self-Generated Instructions](https://arxiv.org/abs/2212.10560) — Seminal paper demonstrating that base language models can generate their own instruction-tuning data.
- [WizardLM: Empowering Large Language Models to Follow Complex Instructions (Evol-Instruct)](https://arxiv.org/abs/2304.12244) — Introduced evolutionary prompting to systematically increase instruction complexity and depth.

### 🧪 Practice

- [Argilla Interactive Sandbox](https://huggingface.co/spaces/argilla/argilla-template-space) — Explore human-in-the-loop annotation workflows on Hugging Face Spaces.

### 🛠️ Projects

- [Synthetic Domain Dataset Pipeline](https://github.com/argilla-io/distilabel) — Use Distilabel with Mistral-Large to synthetically generate 10,000 multi-turn question-answering pairs from technical documentation.

## 🧭 Recommended Learning Path

1. Understand chat template formats: System prompt, User, Assistant, and ChatML delimiters.
2. Collect and clean raw unstructured text (HTML stripping, deduplication, length filtering).
3. Generate synthetic instruction-response pairs using Self-Instruct or Evol-Instruct.
4. Filter low-quality pairs using LLM-as-a-judge criteria (clarity, complexity, accuracy).
5. Tokenize and pack sequences efficiently into fixed-length context windows with padding masks.

## ⭐ Top 3 Resources

1. Distilabel (Argilla Synthetic Data Framework)
2. Argilla (Human-in-the-loop Data Platform)
3. Self-Instruct Research Paper (Wang et al.)

