# 13 - Vector Databases

> High-dimensional similarity search engines, Approximate Nearest Neighbor (ANN) index structures, and specialized vector data stores.

## 🌐 Overview & Architectural Importance

Vector databases are the specialized long-term memory stores of the AI era. Designed to index and query dense vector embeddings at billion-scale with sub-second latency, modern vector databases provide the low-latency storage, filtered similarity retrieval, and dynamic data indexing powering semantic search, RAG, and agent memory.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Dedicated Vector Databases**](Dedicated-Vector-Databases.md) — Qdrant, Milvus, Chroma, Weaviate, and purpose-built vector management engines with payload filtering.
* [**Similarity Search Libraries**](Similarity-Search-Libraries.md) — FAISS (Meta), Annoy, HNSWLib, ScaNN, and core Approximate Nearest Neighbor (ANN) indexing algorithms.

## 🧭 Recommended Study Sequence

1. **Vector Search Fundamentals**: Exact k-Nearest Neighbors (k-NN) vs Approximate Nearest Neighbors (ANN).
2. **Index Data Structures**: Inverted File (IVF), Hierarchical Navigable Small World (HNSW), and Product Quantization (PQ).
3. **Filtering Strategies**: Pre-filtering, post-filtering, and single-stage filtered HNSW traversal.
4. **Engine Selection**: Standalone embedded databases (Chroma), scalable distributed databases (Qdrant, Milvus), and search engines.
5. **Scale & Quantization**: Compressing vector memory with Scalar Quantization (SQ) and binary vector indexing.

## 🗝️ Foundational Prerequisites

- High-dimensional vector distances: Euclidean ($L_2$), Cosine, and Inner Product.
- Graph traversal and tree-based data structures.
- Basic client-server database architecture and REST/gRPC protocols.

---

[← Back to Main Repository](../README.md)
