# Human-in-the-Loop

> Active learning systems, human feedback collection, RLHF annotation pipelines, and collaborative AI decision-making workflows.

## 🎯 What to Learn

- The Human-in-the-Loop (HITL) spectrum: Human-in-the-loop (approval needed), Human-on-the-loop (oversight), Human-out-of-the-loop (autonomous)
- Argilla: Open-source platform for collecting human feedback, preference rankings (pairwise), and fine-tuning datasets
- Label Studio: Multi-modal annotation platform with active learning and model pre-annotation backends
- Active learning strategies: Uncertainty sampling, query-by-committee, and expected model change
- Measuring annotator agreement and consensus: Fleiss' Kappa and resolving conflicting human judgments
- Designing graceful fallback mechanisms when AI confidence drops below operational thresholds

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Argilla](https://github.com/argilla-io/argilla)
  - Type: Human Feedback Platform
  - Language: English
  - Level: Intermediate
  - Why recommended: The premier open-source platform specifically engineered for gathering human and AI feedback, curating high-quality preference datasets, and monitoring LLMs.

### 🎓 Courses

- [Coursera: Human-in-the-Loop Machine Learning (DeepLearning.AI)](https://www.coursera.org/) — Covers active learning, annotation pipelines, and quality control strategies.

### ▶️ YouTube — English

- [Argilla / Hugging Face: Video Guides & Tutorials](https://www.youtube.com/@HuggingFace)
  - Channel: Argilla / Hugging Face
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Visual walkthrough demonstrating how to collect human feedback on LLM outputs and train DPO models.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Human-in-the-Loop Machine Learning by Robert Munro (Manning)](https://www.manning.com/books/human-in-the-loop-machine-learning) — The definitive guide to active learning, annotation workflows, and quality management.

### 💻 GitHub / Implementations

- [Label Studio](https://github.com/HumanSignal/label-studio) — Human data annotation platform.
- [Argilla](https://github.com/argilla-io/argilla) — Data curation with human feedback.
- [Prodigy](https://github.com/explosion/prodigy-recipes) — Efficient annotation with active learning.
- [Surge AI](https://github.com/surge-ai) — Data labeling for AI training.

### 🧪 Practice

- [Argilla Quickstart Sandbox](https://docs.argilla.io/latest/getting_started/quickstart/) — Set up Argilla locally and collect pairwise preference rankings in 5 minutes.

### 🛠️ Projects

- [Continuous Human Oversight Approval Gate](https://github.com/argilla-io/argilla) — Build an agentic pipeline where low-confidence decisions (confidence < 85%) are routed to an Argilla human queue before external execution.

## 🧭 Recommended Learning Path

1. Understand the risk profiles of full autonomy vs supervised human-in-the-loop systems.
2. Deploy Argilla with Docker to collect feedback on LLM outputs.
3. Implement active learning: Only send uncertain samples to human annotators.
4. Calculate Inter-Annotator Agreement across multi-annotator reviews.
5. Export curated human feedback datasets to train DPO preference models.

## ⭐ Top 3 Resources

1. Argilla (Human & AI Feedback Platform)
2. Label Studio (Multi-Modal Annotation)
3. Human-in-the-Loop Machine Learning by Robert Munro (Book)

