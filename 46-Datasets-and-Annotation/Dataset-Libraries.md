# Dataset Libraries

> Libraries and streaming frameworks to download, preprocess, tokenize, and feed massive datasets into machine learning training loops.

## 🎯 What to Learn

- Hugging Face Datasets: Zero-copy memory mapping with Apache Arrow, stream loading (`streaming=True`), and caching
- FiftyOne (Voxel51): Visualizing, querying, and curating computer vision datasets and model predictions
- TensorFlow Datasets (TFDS): Deterministic input pipelines and tf.data integrations
- Activeloop Deep Lake: Vector and tensor data lake optimized for multimodal deep learning and streaming
- Parallel dataset transformation with `.map()` and multiprocessing workers
- Handling out-of-core terabyte-scale corpora on machines with modest RAM

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Hugging Face Datasets](https://github.com/huggingface/datasets)
  - Type: Dataset Library Standard
  - Language: English
  - Level: Beginner
  - Why recommended: The standard library for accessing and sharing over 150,000 community datasets with zero-copy memory mapping, lazy streaming, and seamless PyTorch integration.

### 🎓 Courses

- [Hugging Face NLP Course: The Datasets Library](https://huggingface.co/learn/nlp-course/chapter5/1) — Free interactive course covering loading, preprocessing, and memory-mapped operations.

### ▶️ YouTube — English

- [Hugging Face: Video Guides & Tutorials](https://www.youtube.com/@HuggingFace)
  - Channel: Hugging Face
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Clear walkthrough explaining Apache Arrow memory caching, streaming mode, and mapping functions.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Natural Language Processing with Transformers (O'Reilly)](https://www.oreilly.com/library/view/natural-language-processing/9781098103231/) — Covers the Datasets library internals, tokenization pipelines, and memory efficiency.

### 💻 GitHub / Implementations

- [Hugging Face Datasets](https://github.com/huggingface/datasets) — Access and share ML datasets.
- [TensorFlow Datasets](https://github.com/tensorflow/datasets) — Collection of ML datasets.
- [torchdata](https://github.com/pytorch/data) — PyTorch data loading library.
- [FiftyOne](https://github.com/voxel51/fiftyone) — Dataset curation and model analysis.
- [Activeloop Hub](https://github.com/activeloopai/deeplake) — Dataset format for AI.

### 🧪 Practice

- [FiftyOne Interactive Quickstart](https://docs.voxel51.com/getting_started/quickstart.html) — Load a vision dataset and explore detection labels and embeddings in a local web app.

### 🛠️ Projects

- [Terabyte Web Corpus Streaming Tokenizer](https://huggingface.co/docs/datasets/stream) — Build a tokenization pipeline that streams 100GB of Common Crawl text directly into a PyTorch DataLoader without disk exhaustion.

## 🧭 Recommended Learning Path

1. Understand why naive in-memory Python loading crashes when datasets exceed RAM.
2. Explore Apache Arrow's columnar memory layout and memory-mapped file mechanics.
3. Use Hugging Face Datasets to load, slice, filter, and tokenize data.
4. Use FiftyOne to inspect visual datasets, finding false annotations and edge-case samples.
5. Configure streaming data loaders for multi-node training clusters.

## ⭐ Top 3 Resources

1. Hugging Face Datasets
2. FiftyOne (Voxel51)
3. Hugging Face NLP Course (Chapter 5)

