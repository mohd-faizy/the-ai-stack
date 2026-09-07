# Vector Databases

> Specialized high-dimensional vector search engines and indexing algorithms designed for ultra-fast Approximate Nearest Neighbor (ANN) retrieval.

## 🎯 What to Learn

- ANN Indexing Algorithms: Hierarchical Navigable Small World (HNSW), Inverted File Index (IVF), and Flat indexing
- Vector Quantization: Scalar Quantization (SQ) and Product Quantization (PQ) reducing RAM requirements by 75-90%
- Qdrant: High-performance vector database written in Rust with advanced payload filtering and distributed clustering
- Milvus & Zilliz: Distributed cloud-native vector database capable of scaling to billions of vectors
- Chroma & LanceDB: Lightweight, serverless embedded vector stores ideal for local applications and multi-modal data
- pgvector: PostgreSQL extension adding vector data types and HNSW/IVFFlat indexes to standard Postgres

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Qdrant](https://github.com/qdrant/qdrant)
  - Type: Vector Database
  - Language: English
  - Level: Intermediate
  - Why recommended: Written in Rust with extreme memory efficiency, Qdrant offers unmatched performance, rich payload filtering, and seamless scalability for production RAG and recommendation systems.

### 🎓 Courses

- [DeepLearning.AI: Vector Databases from Embeddings to Applications](https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/) — Taught by Weaviate team covering vector similarity, distance metrics, and hybrid search.

### ▶️ YouTube — English

- [ByteByteGo: Video Guides & Tutorials](https://www.youtube.com/@ByteByteGo)
  - Channel: ByteByteGo
  - Language: English
  - Type: Architecture Breakdown
  - Level: Intermediate
  - Why: Visual masterclass explaining HNSW graph traversal, inverted file indexing, and memory trade-offs.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Vector Search for Practitioners by Daniel Svonava and Max Bartolo](https://www.oreilly.com/) — Practical guide to vector indexing algorithms, query routing, and multimodal search.

### 💻 GitHub / Implementations

- [Qdrant](https://github.com/qdrant/qdrant) — High-performance vector search.
- [Milvus](https://github.com/milvus-io/milvus) — Cloud-native vector database.
- [Weaviate](https://github.com/weaviate/weaviate) — AI-native vector database.
- [Chroma](https://github.com/chroma-core/chroma) — Embedding database for AI.
- [LanceDB](https://github.com/lancedb/lancedb) — Serverless vector database.
- [pgvector](https://github.com/pgvector/pgvector) — Vectors for PostgreSQL.
- [Pinecone Client](https://github.com/pinecone-io/pinecone-python-client) — Pinecone SDK.

## 📄 Foundational Papers

- [Efficient and robust approximate nearest neighbor search using Hierarchical Navigable Small World graphs](https://arxiv.org/abs/1603.09320) — Malkov and Yashunin paper introducing HNSW, the foundational algorithm behind modern vector search.

### 🧪 Practice

- [Qdrant Cloud Free Cluster](https://cloud.qdrant.io/) — Provision a free managed 1GB vector cluster and test search queries via REST API.

### 🛠️ Projects

- [Hybrid Search Engine with Qdrant](https://qdrant.tech/documentation/concepts/hybrid-queries/) — Build a search engine combining dense semantic vectors (FastEmbed) with sparse BM25 vectors using Reciprocal Rank Fusion.

## 🧭 Recommended Learning Path

1. Understand distance metrics: Euclidean (L2), Manhattan (L1), Cosine, and Dot Product.
2. Learn the mechanics of HNSW graph construction (multi-layer skip list graphs).
3. Deploy Qdrant or ChromaDB locally using Docker.
4. Index 100,000 document vectors and query with metadata filters.
5. Implement Scalar Quantization to cut memory consumption by 4x without accuracy loss.

## ⭐ Top 3 Resources

1. Qdrant (Rust-based vector database)
2. pgvector (PostgreSQL vector extension)
3. ByteByteGo Vector Database Architecture Breakdown

