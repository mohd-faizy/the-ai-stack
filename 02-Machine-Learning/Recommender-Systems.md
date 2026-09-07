# Recommender Systems

> Recommender systems model user-item interaction matrices and behavioral signals to personalize content, products, and information discovery.

## 🎯 What to Learn

- Explicit vs implicit feedback dynamics and sparsity challenges
- Collaborative filtering: memory-based (user-user, item-item) vs model-based
- Matrix Factorization: Singular Value Decomposition (SVD), Alternating Least Squares (ALS), and BPR loss
- Content-based filtering and hybrid recommendation pipelines
- Two-tower retrieval architectures: candidate generation (bi-encoders) vs heavy ranking (cross-encoders)
- Sequential and session-based recommendation (SASRec, BERT4Rec)
- Evaluation metrics: Hit Rate, Precision@K, Recall@K, NDCG@K, Mean Reciprocal Rank (MRR), and diversity metrics

## 📚 Best Learning Resources

### 🥇 Best Overall

- [NVIDIA Merlin Ecosystem & Documentation](https://github.com/NVIDIA-Merlin)
  - Type: Framework & Architecture Guide
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: NVIDIA Merlin represents the state-of-the-art in GPU-accelerated recommendation systems powering billion-scale industry pipelines.

### 📖 Documentation & References

- [RecBole Documentation](https://recbole.io/docs/) — Unified open-source recommendation algorithm library implementing over 90 modern algorithms.
- [Implicit Documentation](https://benfred.github.io/implicit/) — Fast Python collaborative filtering for implicit feedback datasets written in Cython/C++.
- [TensorFlow Recommenders (TFRS)](https://www.tensorflow.org/recommenders) — Open-source library for building, evaluating, and serving two-tower recommendation models.

### 🎓 Courses

- [Recommender Systems Specialization by University of Minnesota (Coursera)](https://www.coursera.org/specializations/recommender-systems) — Foundational academic series covering collaborative filtering, matrix factorization, and evaluation.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate
  - Why: Detailed architectural breakdown of Google's seminal two-stage candidate generation and ranking architecture.

### ▶️ YouTube — Hindi / Hinglish

- [Complete Recommendation System Course in Python](https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Nitish Singh builds content-based and collaborative filtering recommendation systems with Streamlit deployments.

### 📚 Books

- [Recommender Systems Handbook (Ricci, Rokach, Shapira)](https://link.springer.com/book/10.1007/978-1-0716-2197-4) — The authoritative academic handbook detailing algorithms, metrics, and systems.

### 💻 GitHub / Implementations

- [RecBole](https://github.com/RUCAIBox/RecBole) — Unified recommendation algorithm library.
- [TensorFlow Recommenders](https://github.com/tensorflow/recommenders) — Recommendation system library.
- [NVIDIA Merlin](https://github.com/NVIDIA-Merlin) — End-to-end recommender system ecosystem.
- [Surprise](https://github.com/NicolasHug/Surprise) — Recommender system experimentation.
- [LightFM](https://github.com/lyst/lightfm) — Hybrid recommendation algorithms.
- [Implicit](https://github.com/benfred/implicit) — Fast collaborative filtering for implicit datasets.
- [Cornac](https://github.com/PreferredAI/cornac) — Multimodal recommendation framework.

### 🧪 Practice

- [MovieLens Datasets (GroupLens)](https://grouplens.org/datasets/movielens/) — The benchmark standard for testing collaborative filtering and ranking models.

### 🛠️ Projects

- [Two-Tower Candidate Retrieval with Faiss](https://github.com/benfred/implicit) — Build an implicit feedback recommender using ALS that vectorizes user/item embeddings for sub-millisecond ANN search.

## 🧭 Recommended Learning Path

1. Understand user-item rating matrices, sparsity, and implicit interaction signals.
2. Implement matrix factorization with Alternating Least Squares (ALS) and Bayesian Personalized Ranking (BPR).
3. Design a two-stage retrieval pipeline: candidate generation (top 1000) followed by ranking (top 10).
4. Train two-tower neural network embeddings optimizing dot-product similarity.
5. Measure ranking quality using NDCG@10, Mean Reciprocal Rank (MRR), and user novelty.

## ⭐ Top 3 Resources

1. [RecBole](https://recbole.io/) — The most comprehensive PyTorch library for benchmarking 90+ modern recommendation algorithms.
2. [Implicit (Ben Frederickson)](https://benfred.github.io/implicit/) — Industry workhorse for blazing-fast implicit feedback collaborative filtering.
3. [Recommender Systems Specialization (Coursera)](https://www.coursera.org/specializations/recommender-systems) — Best conceptual university course on recommendation fundamentals.

