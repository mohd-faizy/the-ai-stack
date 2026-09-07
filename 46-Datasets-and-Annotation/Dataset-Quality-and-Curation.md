# Dataset Quality & Curation

> Automated data-centric AI tools to detect label errors, remove near-duplicates, filter toxicity, and curate high-signal training datasets.

## 🎯 What to Learn

- Confident Learning theory: Estimating the joint distribution of noisy labels and true latent labels
- Cleanlab: Finding label errors, out-of-distribution samples, and data overlap in any dataset using model predictions
- NVIDIA NeMo Curator: Scalable GPU-accelerated data curation library for LLM pre-training corpora (deduplication, quality filtering)
- Lilac: Interactive AI-powered data curation, semantic clustering, and concept search for text datasets
- Fuzzy text deduplication: MinHash and Locality Sensitive Hashing (LSH)
- Heuristic quality filters: Perplexity filtering, token length ratios, and language identification

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Cleanlab](https://github.com/cleanlab/cleanlab)
  - Type: Data-Centric AI Library
  - Language: English
  - Level: Intermediate
  - Why recommended: The leading open-source library for data-centric AI that automatically detects label issues, mislabeled images, ambiguous text, and data drift using confident learning.

### 🎓 Courses

- [MIT 6.S965: Data-Centric AI](https://dcai.csail.mit.edu/) — MIT's flagship course on label error detection, dataset curation, and reliable AI systems.

### ▶️ YouTube — English

- [Cleanlab / MIT: Video Guides & Tutorials](https://www.youtube.com/@CleanlabAI)
  - Channel: Cleanlab / MIT
  - Language: English
  - Type: Lecture
  - Level: Intermediate
  - Why: Curtis Northcutt (Cleanlab CEO / MIT) explains the mathematics of confident learning and finding errors in ImageNet.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Data-Centric AI by Curtis Northcutt and Andrew Ng (MIT Course Notes)](https://dcai.csail.mit.edu/) — Comprehensive academic foundation on data cleaning, confident learning, and dataset auditing.

### 💻 GitHub / Implementations

- [Cleanlab](https://github.com/cleanlab/cleanlab) — Find and fix data issues automatically.
- [Great Expectations](https://github.com/great-expectations/great_expectations) — Data quality validation.
- [DataGradients](https://github.com/Deci-AI/data-gradients) — Computer vision dataset analysis.
- [NeMo Curator](https://github.com/NVIDIA-NeMo/Curator) — Scalable data curation for LLMs.
- [Lilac](https://github.com/lilacai/lilac) — AI-powered dataset curation.

## 📄 Foundational Papers

- [Confident Learning: Estimating Uncertainty in Dataset Labels](https://arxiv.org/abs/1911.00068) — Northcutt et al. paper establishing the theoretical framework for identifying label errors in popular benchmarks.

### 🧪 Practice

- [Cleanlab Quickstart Notebook](https://docs.cleanlab.ai/stable/tutorials/indepth_overview.html) — Find label errors in a noisy dataset with 5 lines of Python.

### 🛠️ Projects

- [Automated Pre-training Corpus Curation Pipeline](https://github.com/NVIDIA/NeMo-Curator) — Run MinHash LSH deduplication and language identification on 10GB of raw text using NeMo Curator.

## 🧭 Recommended Learning Path

1. Understand the data-centric AI philosophy: Fix the data, not just the model architecture.
2. Learn Confident Learning theory: Estimating the transition matrix between noisy and true labels.
3. Run Cleanlab on a classification dataset to identify mislabeled training examples.
4. Use MinHash and LSH to remove near-duplicate documents from text corpora.
5. Explore Lilac to discover demographic bias and semantic outliers in text datasets.

## ⭐ Top 3 Resources

1. Cleanlab (Confident Learning standard)
2. MIT 6.S965 Data-Centric AI Course
3. NVIDIA NeMo Curator (GPU Data Curation)

