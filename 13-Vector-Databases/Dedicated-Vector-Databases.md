# Dedicated Vector Databases

> Purpose-built database systems engineered to store, index, filter, and retrieve high-dimensional vector embeddings with ACID compliance and horizontal scalability.

## 🎯 What to Learn

- Why relational databases struggle with high-dimensional vector index scaling
- Qdrant architecture: Rust-based, payload-aware HNSW indexing, and disk-backed vector storage
- Milvus architecture: cloud-native, distributed storage-compute disaggregation for billion-scale vectors
- Chroma architecture: AI-native, lightweight embedded vector database for rapid prototyping
- Filtered vector search: single-stage payload filtering vs two-stage pre/post-filtering
- Multi-tenancy, vector quantization (Scalar & Product Quantization), and hybrid sparse-dense storage

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Qdrant: Open-Source Vector Database & Search Engine](https://qdrant.tech/)
  - Type: Vector Database & Documentation
  - Language: English
  - Level: Beginner to Advanced
  - Why recommended: Written in Rust, Qdrant delivers industry-leading performance, true single-stage filtered HNSW search, rich payload storage, and seamless containerized or cloud deployment.

### 📖 Documentation & References

- [Qdrant Official Documentation](https://qdrant.tech/documentation/) — Comprehensive guides on indexing, payload filtering, quantization, and client SDKs (Python, Go, JS).
- [Milvus Documentation](https://milvus.io/docs) — The open-source distributed vector database built for massive enterprise scalability.
- [Chroma Documentation](https://docs.trychroma.com/) — The open-source AI-native embedding database for rapid local development.

### 🎓 Courses

- [DeepLearning.AI: Building Applications with Vector Databases (Chroma)](https://www.deeplearning.ai/short-courses/) — Hands-on tutorial building semantic search and recommendation systems with vector DBs.

### ▶️ YouTube — English

- [Vector Databases Explained in 10 Minutes](https://www.youtube.com/watch?v=klTvEwg3oJ4)
  - Channel: Fireship
  - Language: English
  - Type: Overview
  - Level: Beginner
  - Why: Fast-paced, humorous, and accurate breakdown of embeddings, high-dimensional spaces, and vector indexes.
- [freeCodeCamp.org: Video Guides & Tutorials](https://www.youtube.com/@freecodecamp)
  - Channel: freeCodeCamp.org
  - Language: English
  - Type: Course
  - Level: Beginner to Intermediate
  - Why: Complete hands-on tutorial launching Qdrant with Docker, inserting vectors, and building hybrid search apps.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Vector Search for Practitioners by Pinecone](https://www.pinecone.io/learn/vector-search/) — The definitive guide to vector search theory, indexing architectures, and performance tuning.

### 💻 GitHub / Implementations

- [Qdrant](https://github.com/qdrant/qdrant) — High-performance vector search engine in Rust.
- [Milvus](https://github.com/milvus-io/milvus) — Cloud-native vector database.
- [Weaviate](https://github.com/weaviate/weaviate) — AI-native vector database.
- [Chroma](https://github.com/chroma-core/chroma) — AI-native open-source embedding database.
- [pgvector](https://github.com/pgvector/pgvector) — Vector similarity search for PostgreSQL.
- [LanceDB](https://github.com/lancedb/lancedb) — Serverless vector database for AI.
- [Vespa](https://github.com/vespa-engine/vespa) — Big data serving engine with vector search.
- [Pinecone Client](https://github.com/pinecone-io/pinecone-python-client) — Pinecone vector database SDK.
- [Marqo](https://github.com/marqo-ai/marqo) — Tensor search engine.
- [Vald](https://github.com/vdaas/vald) — Distributed vector search engine.

### 🧪 Practice

- [Qdrant Cloud Free Tier Sandbox](https://cloud.qdrant.io/) — Deploy a free 1GB vector cluster and test collections using the interactive web console.

### 🛠️ Projects

- [Billion-Scale Multimodal Image Retrieval Engine](https://qdrant.tech/documentation/tutorials/image-search/) — Deploy Qdrant with Docker, index 100,000 OpenCLIP image embeddings with scalar quantization, and query with text.

## 🧭 Recommended Learning Path

1. Understand why SQL indexing (B-trees) fails on high-dimensional vector queries.
2. Explore the difference between embedded vector databases (Chroma) and client-server databases (Qdrant, Milvus).
3. Launch Qdrant using Docker and insert vectors with metadata payloads (author, timestamp, tags).
4. Perform payload-filtered search: find closest vectors where `category == 'finance'` and `year >= 2023`.
5. Enable Scalar Quantization (SQ) in Qdrant to reduce RAM usage by 75% with under 1% recall loss.

## ⭐ Top 3 Resources

1. [Qdrant](https://qdrant.tech/) — The most efficient, reliable, and versatile open-source vector search engine.
2. [Milvus](https://milvus.io/) — The leading cloud-native distributed vector database for enterprise-scale collections.
3. [Chroma](https://www.trychroma.com/) — The simplest, fastest embedding database for prototyping and local experimentation.

