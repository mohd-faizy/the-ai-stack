# Similarity Search Libraries

> Algorithmic libraries and data structures providing high-performance Approximate Nearest Neighbor (ANN) search over dense vector embeddings.

## 🎯 What to Learn

- Exact search ($L_2$ Flat) vs Approximate Nearest Neighbor (ANN) trade-offs (Speed vs Recall)
- Inverted File Index (IVF): Voronoi cell partitioning and coarse quantization
- Hierarchical Navigable Small World (HNSW): multi-layer proximity graphs and greedy logarithmic routing
- Product Quantization (PQ): vector decomposition into sub-vectors and codebook distance approximation
- Meta FAISS (Facebook AI Similarity Search): GPU-accelerated billions-scale similarity search
- Other seminal libraries: HNSWLib, Annoy (Spotify), and ScaNN (Google anisotropic quantization)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [FAISS: Facebook AI Similarity Search (Meta AI Research)](https://github.com/facebookresearch/faiss)
  - Type: Library & Documentation
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: FAISS is the foundational open-source library that defined high-performance similarity search, providing GPU acceleration and composite indexes (e.g. IVF-PQ) powering global search systems.

### 📖 Documentation & References

- [FAISS Official Documentation & Wiki](https://github.com/facebookresearch/faiss/wiki) — The definitive guide on choosing indexes, GPU acceleration, and vector quantization.
- [HNSWLib Documentation](https://github.com/nmslib/hnswlib) — Header-only C++ library with Python bindings implementing fast Hierarchical Navigable Small World graphs.
- [Google ScaNN GitHub](https://github.com/google-research/google-research/tree/master/scann) — Scalable Nearest Neighbors library using anisotropic vector quantization.

### 🎓 Courses

- [Pinecone: Vector Search Course - Algorithms](https://www.pinecone.io/learn/series/vector-search-course/) — Visual deep-dive into HNSW, IVF, and Product Quantization algorithms.

### ▶️ YouTube — English

- [Pinecone: Video Guides & Tutorials](https://www.youtube.com/@pinecone)
  - Channel: Pinecone
  - Language: English
  - Type: Visual Guide
  - Level: Intermediate
  - Why: Visual explanation of skip-lists generalized to multi-layer graphs and logarithmic search complexity.
- [James Briggs: Video Guides & Tutorials (James Briggs)](https://www.youtube.com/results?search_query=James%20Briggs%20James%20Briggs%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: James Briggs
  - Language: English
  - Type: Tutorial
  - Level: Beginner to Intermediate
  - Why: Practical hands-on guide comparing IndexFlatL2, IndexIVFFlat, and IndexIVFPQ.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Billion-scale similarity search with GPUs (Johnson, Douze, Jégou - FAISS Paper)](https://arxiv.org/abs/1702.08734) — The seminal research paper introducing the design and GPU algorithms of FAISS.

### 💻 GitHub / Implementations

- [FAISS](https://github.com/facebookresearch/faiss) — Efficient similarity search by Meta.
- [Annoy](https://github.com/spotify/annoy) — Approximate nearest neighbors by Spotify.
- [ScaNN](https://github.com/google-research/google-research/tree/master/scann) — Scalable nearest neighbor search by Google.
- [hnswlib](https://github.com/nmslib/hnswlib) — HNSW-based approximate nearest neighbor.
- [nmslib](https://github.com/nmslib/nmslib) — Non-metric space library for similarity search.
- [USearch](https://github.com/unum-cloud/usearch) — Smallest and fastest ANN search.
- [Voyager](https://github.com/spotify/voyager) — Nearest-neighbor search library by Spotify.

### 🧪 Practice

- [ann-benchmarks.com](https://ann-benchmarks.com/) — The global benchmarking website comparing speed, recall, and build time across all major ANN algorithms.

### 🛠️ Projects

- [Sub-Millisecond 1-Million Vector Search with FAISS GPU](https://github.com/facebookresearch/faiss) — Build an in-memory search engine indexing 1 million 768-dim embeddings with IVF-PQ, evaluating recall@10 against an exact flat index.

## 🧭 Recommended Learning Path

1. Understand why exhaustive brute-force search ($O(N \cdot D)$) cannot scale to millions of vectors.
2. Explore IVF (Inverted File Index): clustering vectors into Voronoi cells and querying only nearby centroids.
3. Study HNSW (Hierarchical Navigable Small World): building layered graphs where top layers take large leaps and bottom layers fine-tune.
4. Analyze Product Quantization (PQ): splitting vectors into sub-vectors to fit billions of vectors entirely in RAM.
5. Deploy FAISS GPU indexes (`IndexIVFPQ`) to achieve 10,000+ QPS retrieval.

## ⭐ Top 3 Resources

1. [FAISS (Meta AI)](https://github.com/facebookresearch/faiss) — The industry standard high-performance library for billion-scale similarity search.
2. [HNSWLib](https://github.com/nmslib/hnswlib) — The fastest, cleanest C++/Python implementation of Hierarchical Navigable Small World graphs.
3. [ann-benchmarks.com](https://ann-benchmarks.com/) — The definitive empirical benchmark comparing ANN algorithms.

