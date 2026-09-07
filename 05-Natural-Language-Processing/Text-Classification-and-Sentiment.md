# Text Classification & Sentiment

> Text classification categorizes textual sequences into predefined semantic buckets, detecting sentiment, intent, toxicity, and topical themes.

## 🎯 What to Learn

- Binary, multi-class, and multi-label text classification workflows
- Encoder fine-tuning: BERT, RoBERTa, DeBERTa-v3 with pooled classification heads
- Few-shot classification with SetFit (Sentence Transformer Fine-Tuning)
- Unsupervised topic modeling with BERTopic (embeddings + UMAP + HDBSCAN + c-TF-IDF)
- Zero-shot classification using cross-encoder natural language inference (NLI)
- Handling imbalanced text datasets: class weights, focal loss, and threshold calibration

## 📚 Best Learning Resources

### 🥇 Best Overall

- [SetFit: Efficient Few-Shot Text Classification with Sentence Transformers](https://github.com/huggingface/setfit)
  - Type: Framework & Documentation
  - Language: English
  - Level: Beginner to Intermediate
  - Why recommended: SetFit achieves performance comparable to fine-tuned RoBERTa models using as few as 8 labeled examples per class without requiring prompt engineering or giant LLMs.

### 📖 Documentation & References

- [BERTopic Documentation](https://maartengr.github.io/BERTopic/) — State-of-the-art topic modeling technique leveraging transformers and c-TF-IDF.
- [Sentence Transformers Documentation](https://sbert.net/) — Python framework for state-of-the-art sentence, text, and image embeddings.

### 🎓 Courses

- [Hugging Face NLP Course - Chapter 3: Fine-Tuning a Pretrained Model](https://huggingface.co/learn/nlp-course/chapter3/1) — Hands-on guide to fine-tuning sequence classification models on custom data.

### ▶️ YouTube — English

- [Maarten Grootendorst: Video Guides & Tutorials](https://www.youtube.com/@MaartenGrootendorst)
  - Channel: Maarten Grootendorst
  - Language: English
  - Type: Tutorial
  - Level: Beginner to Intermediate
  - Why: The creator of BERTopic walks through embedding documents, UMAP dimension reduction, and c-TF-IDF extraction.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Natural Language Processing with Transformers — Chapter 2: Text Classification](https://transformers-book.com/) — Covers fine-tuning RoBERTa, error analysis, and cross-entropy loss optimizations.

### 💻 GitHub / Implementations

- [TextAttack](https://github.com/QData/TextAttack) — Adversarial attacks and data augmentation for NLP.
- [Setfit](https://github.com/huggingface/setfit) — Few-shot text classification.
- [FastText](https://github.com/facebookresearch/fastText) — Efficient text classification and word representations.

### 🧪 Practice

- [IMDb Movie Reviews Sentiment Dataset](https://huggingface.co/datasets/imdb) — The standard binary sentiment classification benchmark.

### 🛠️ Projects

- [Zero-Shot Customer Feedback Tagger & Topic Analyzer](https://github.com/huggingface/setfit) — Build a system that classifies incoming customer support tickets into categories with 10 labeled samples using SetFit and BERTopic.

## 🧭 Recommended Learning Path

1. Build baseline text classifiers with TF-IDF and Logistic Regression / LightGBM.
2. Fine-tune a pretrained DeBERTa-v3 model with `AutoModelForSequenceClassification`.
3. Explore few-shot learning with SetFit: contrastive fine-tuning followed by logistic regression heads.
4. Deploy zero-shot classification using an NLI-trained model (e.g. `facebook/bart-large-mnli`).
5. Extract dynamic topics and trends from unstructured document corpora with BERTopic.

## ⭐ Top 3 Resources

1. [SetFit](https://github.com/huggingface/setfit) — The premier framework for few-shot text classification with tiny labeled datasets.
2. [BERTopic](https://github.com/MaartenGr/BERTopic) — The most modular, interpretable, and powerful topic modeling library.
3. [Sentence Transformers (SBERT)](https://sbert.net/) — The foundational library powering dense semantic similarity and classification.

