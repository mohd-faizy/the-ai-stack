# 11 - Embeddings

> Dense vector representations capturing semantic, syntactic, and multimodal relationships across text, images, audio, and graph structures.

## 🌐 Overview & Architectural Importance

Embeddings are the universal currency of semantic AI. By mapping discrete symbolic tokens (words, code, images) into continuous high-dimensional vector spaces where geometric proximity corresponds to conceptual similarity, embeddings power semantic search, RAG retrieval, clustering, recommendation engines, and multimodal alignment.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Text Embeddings**](Text-Embeddings.md) — Sentence Transformers (SBERT), BGE, E5, Nomic, Matryoshka representation learning, and MTEB leaderboard benchmarks.
* [**Multimodal Embeddings**](Multimodal-Embeddings.md) — CLIP, SigLIP, ImageBind, and shared latent spaces mapping text, vision, and audio into unified vector geometries.
* [**Embedding Utilities**](Embedding-Utilities.md) — Dimensionality reduction, cosine distance optimizations, chunking utilities, and vector serialization tools.

## 🧭 Recommended Study Sequence

1. **Vector Similarity Metrics**: Cosine similarity, dot product, Euclidean distance, and Manhattan distance.
2. **Sentence Transformers**: Contrastive learning, Siamese bi-encoders, and Multiple Negatives Ranking Loss (MNRL).
3. **Modern Dense Models**: BGE-m3, E5-v2, and Matryoshka Representation Learning (MRL) for elastic dimensions.
4. **Multimodal Geometry**: Contrastive language-image pre-training (CLIP) and sigmoid loss (SigLIP).
5. **Evaluation & Selection**: Benchmarking models on the Massive Text Embedding Benchmark (MTEB).

## 🗝️ Foundational Prerequisites

- Linear algebra: dot products, unit vector normalization, and cosine distance.
- Contrastive learning loss functions (InfoNCE loss).
- PyTorch embeddings layer mechanics (`torch.nn.Embedding`).

---

[← Back to Main Repository](../README.md)
