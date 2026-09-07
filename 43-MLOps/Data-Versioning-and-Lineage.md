# Data Versioning & Lineage

> Version control systems, Git-like abstractions, and lineage tracking tools to version gigabytes of training data alongside source code.

## 🎯 What to Learn

- The data versioning challenge: Git cannot handle multi-gigabyte binary datasets
- DVC (Data Version Control): Git-like tracking of large datasets using pointer `.dvc` files and cloud remotes (S3, GCS)
- DVC Pipelines: Reproducible DAGs defined in `dvc.yaml` with automatic dependency tracking and caching
- lakeFS: Git-like operations (commit, branch, merge, revert) directly on object storage (S3/GCS/Azure Blob)
- Delta Lake: ACID transactions, scalable metadata handling, and time-travel on Parquet data lakes
- Data provenance and audit trails: Mapping exact dataset versions to model weights for compliance

## 📚 Best Learning Resources

### 🥇 Best Overall

- [DVC (Data Version Control - Iterative)](https://github.com/iterative/dvc)
  - Type: Data Versioning Standard
  - Language: English
  - Level: Beginner
  - Why recommended: The open-source industry standard for versioning datasets, models, and ML pipelines, seamlessly extending Git to manage massive data files.

### 🎓 Courses

- [Coursera: Introduction to Machine Learning in Production (DeepLearning.AI)](https://www.coursera.org/) — Covers data baseline tracking, data drift, and data lineage.

### ▶️ YouTube — English

- [Iterative / Ken Jee: Video Guides & Tutorials](https://www.youtube.com/@KenJee_ds)
  - Channel: Iterative / Ken Jee
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Clear walkthrough of initializing DVC, pushing data to S3 remotes, and switching dataset versions via Git checkout.

### ▶️ YouTube — Hindi / Hinglish

- [100 Days of MLOps in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaKHYjy5v0dJh8edeaEWb-b)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Complete 100-day roadmap on Git, Docker, DVC, MLflow, CI/CD, and model monitoring in Hindi.


### 📚 Books

- [Designing Machine Learning Systems by Chip Huyen](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/) — Covers data engineering, data formats, and versioning strategies.

### 💻 GitHub / Implementations

- [DVC](https://github.com/iterative/dvc) — Data version control for ML projects.
- [LakeFS](https://github.com/treeverse/lakeFS) — Git-like version control for data lakes.
- [Pachyderm](https://github.com/pachyderm/pachyderm) — Data versioning and pipeline platform.
- [Delta Lake](https://github.com/delta-io/delta) — ACID transactions for data lakes.
- [Quilt](https://github.com/quiltdata/quilt) — Data versioning and collaboration.

### 🧪 Practice

- [DVC Get Started Walkthrough](https://dvc.org/doc/start) — Track a sample dataset and run your first `dvc push` in 10 minutes.

### 🛠️ Projects

- [Reproducible ML Pipeline with DVC](https://github.com/iterative/dvc) — Build a `dvc.yaml` pipeline connecting data preparation, training, and evaluation with automatic stage caching.

## 🧭 Recommended Learning Path

1. Understand why committing large datasets directly into Git causes repository bloat.
2. Initialize DVC in a Git repository: `dvc init`.
3. Track a dataset with `dvc add data/` and commit the pointer file `data.dvc` to Git.
4. Configure remote cloud storage (AWS S3, Google Cloud Storage, or MinIO).
5. Construct a multi-stage `dvc.yaml` pipeline and test stage re-execution with `dvc repro`.

## ⭐ Top 3 Resources

1. DVC (Iterative)
2. lakeFS (Git-like data lake management)
3. Delta Lake (Linux Foundation)

