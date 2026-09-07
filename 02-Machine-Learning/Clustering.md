# Clustering

> Clustering groups unlabeled data points based on geometric distance, density connectivity, or probabilistic mixture assignments without supervision.

## 🎯 What to Learn

- Partitioning methods: K-Means, K-Means++, and Mini-Batch K-Means
- Choosing optimal K: Elbow method, Silhouette analysis, Davies-Bouldin index
- Hierarchical clustering: Agglomerative, dendrogram analysis, and linkage criteria (Ward, Complete, Single)
- Density-based clustering: DBSCAN and HDBSCAN (Hierarchical Density-Based Spatial Clustering of Applications with Noise)
- Probabilistic clustering: Gaussian Mixture Models (GMM) and Expectation-Maximization (EM) algorithm
- Manifold learning & dimensionality reduction: PCA vs t-SNE vs UMAP and PaCMAP

## 📚 Best Learning Resources

### 🥇 Best Overall

- [HDBSCAN: Hierarchical Density-Based Spatial Clustering of Applications with Noise](https://hdbscan.readthedocs.io/en/latest/)
  - Type: Documentation & Theory Guide
  - Language: English
  - Level: Intermediate
  - Why recommended: HDBSCAN resolves the major flaws of K-Means and DBSCAN by finding clusters of varying densities without requiring arbitrary radius hyperparameter tuning.

### 📖 Documentation & References

- [scikit-learn Clustering Guide](https://scikit-learn.org/stable/modules/clustering.html) — Exhaustive comparison of clustering algorithms with visual decision boundaries.
- [UMAP Documentation (Uniform Manifold Approximation and Projection)](https://umap-learn.readthedocs.io/en/latest/) — Theoretical and practical guide to state-of-the-art non-linear dimension reduction.
- [HDBSCAN User Guide](https://hdbscan.readthedocs.io/en/latest/how_hdbscan_works.html) — Intuitive, visual explanation of mutual reachability distance and minimum spanning trees.

### 🎓 Courses

- [Stanford CS229: Unsupervised Learning & Clustering](https://cs229.stanford.edu/) — Rigorous derivations of K-Means convergence and the Expectation-Maximization algorithm for GMMs.

### ▶️ YouTube — English

- [K-means Clustering & Hierarchical Clustering](https://www.youtube.com/watch?v=4b5d3muPQmA)
  - Channel: StatQuest with Josh Starmer
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Clear, intuitive breakdown of centroid movement, distance calculations, and dendrogram construction.
- [UMAP Dimension Reduction Explained](https://www.youtube.com/watch?v=eN0wFzBA4Sc)
  - Channel: StatQuest with Josh Starmer
  - Language: English
  - Type: Explainer
  - Level: Intermediate
  - Why: Visual explanation of Riemannian geometry and fuzzy simplicial sets in UMAP.

### ▶️ YouTube — Hindi / Hinglish

- [Clustering Algorithms in Machine Learning](https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Nitish Singh covers K-Means, WCSS, DBSCAN, and hierarchical clustering in thorough Hinglish lectures.

### 📚 Books

- [The Elements of Statistical Learning (Hastie et al.) — Chapter 14: Unsupervised Learning](https://hastie.su.domains/ElemStatLearn/) — Rigorous mathematical formulation of clustering loss and density estimation.

### 💻 GitHub / Implementations

- [HDBSCAN](https://github.com/scikit-learn-contrib/hdbscan) — Hierarchical density-based clustering.
- [UMAP](https://github.com/lmcinnes/umap) — Uniform manifold approximation and projection.
- [scikit-learn Clustering](https://github.com/scikit-learn/scikit-learn) — K-Means, DBSCAN, and more.
- [PaCMAP](https://github.com/YingfanWang/PaCMAP) — Pairwise controlled manifold approximation.

### 🧪 Practice

- [Clustering Performance Evaluation on Synthetic Blobs](https://scikit-learn.org/stable/auto_examples/cluster/plot_cluster_comparison.html) — Interactive playground comparing K-Means, Spectral Clustering, DBSCAN, and HDBSCAN on complex shapes.

### 🛠️ Projects

- [Customer Segmentation & Persona Discovery](https://hdbscan.readthedocs.io/) — Build an end-to-end customer clustering pipeline with UMAP embedding visualization and silhouette validation.

## 🧭 Recommended Learning Path

1. Understand K-Means mechanics, Voronoi cells, and sensitivity to initialization.
2. Learn why Euclidean distance fails in high dimensions and study cosine and Mahalanobis distances.
3. Master DBSCAN: core points, border points, epsilon neighborhoods, and minimum samples.
4. Transition to HDBSCAN for clustering datasets with heterogeneous cluster densities and noise.
5. Combine UMAP with HDBSCAN to build state-of-the-art topic and document clustering pipelines (BERTopic architecture).

## ⭐ Top 3 Resources

1. [HDBSCAN Documentation](https://hdbscan.readthedocs.io/en/latest/) — The most robust, production-ready density clustering algorithm.
2. [scikit-learn Clustering Guide](https://scikit-learn.org/stable/modules/clustering.html) — The best comparative visual overview of all major clustering algorithms.
3. [UMAP Library](https://umap-learn.readthedocs.io/en/latest/) — Industry-standard non-linear manifold projection for high-dimensional clustering.

