# Feature Store

> Centralized data management layers that store, curate, and serve machine learning features consistently across offline batch training and real-time online inference.

## 🎯 What to Learn

- The training-serving skew problem: Inconsistencies between feature engineering code in training vs production inference
- Dual-storage architecture: Offline store (Parquet/Snowflake/BigQuery for training) vs Online store (Redis/DynamoDB for <10ms inference)
- Feast (Feature Store): Open-source, production-ready feature store for real-time machine learning
- Point-in-time correct joins (time-travel): Preventing data leakage by joining features as of the event timestamp
- Hopsworks & Featureform: Enterprise feature store platforms with feature governance and lineage
- Defining feature views, entity keys, and automated feature ingestion pipelines

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Feast (Feature Store)](https://github.com/feast-dev/feast)
  - Type: Feature Store Standard
  - Language: English
  - Level: Intermediate
  - Why recommended: The leading open-source feature store, providing a unified Python API to define, store, and serve features for training and low-latency inference.

### 🎓 Courses

- [Full Stack Deep Learning: Feature Stores & Data](https://fullstackdeeplearning.com/) — Covers the dual storage problem, training-serving skew, and real-time feature retrieval.

### ▶️ YouTube — English

- [Feast / MLOps Community: Video Guides & Tutorials (Feast / MLOps Community)](https://www.youtube.com/results?search_query=Feast%20%2F%20MLOps%20Community%20Feast%20%2F%20MLOps%20Community%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Feast / MLOps Community
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Practical walkthrough setting up Feast, creating feature definitions, and serving features in real-time.

### ▶️ YouTube — Hindi / Hinglish

- [100 Days of MLOps in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaKHYjy5v0dJh8edeaEWb-b)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Complete 100-day roadmap on Git, Docker, DVC, MLflow, CI/CD, and model monitoring in Hindi.


### 📚 Books

- [Building Machine Learning Powered Applications by Emmanuel Ameisen (O'Reilly)](https://www.oreilly.com/library/view/building-machine-learning/9781492045106/) — Explains real-time data architectures and feature pipeline design.

### 💻 GitHub / Implementations

- [Feast](https://github.com/feast-dev/feast) — Open-source feature store.
- [Hopsworks](https://github.com/logicalclocks/hopsworks) — Data platform with feature store.
- [Featureform](https://github.com/featureform/featureform) — Virtual feature store.

### 🧪 Practice

- [Feast Quickstart Walkthrough](https://docs.feast.dev/getting-started/quickstart) — Set up Feast with SQLite and test historical feature retrieval in 10 minutes.

### 🛠️ Projects

- [Real-Time Fraud Detection Feature Pipeline](https://github.com/feast-dev/feast) — Build a Feast repository connecting customer transaction history in Redis for real-time model inference.

## 🧭 Recommended Learning Path

1. Understand what training-serving skew is and why recalculating features in production causes model degradation.
2. Install Feast and define your first Entity and FeatureView in Python.
3. Perform a point-in-time join using `feast.get_historical_features()` for dataset training.
4. Materialize features to an online store (Redis): `feast materialize`.
5. Retrieve features in real-time via `feast.get_online_features()` in an inference API.

## ⭐ Top 3 Resources

1. Feast (Feature Store)
2. Hopsworks (Enterprise Feature Store)
3. Designing Machine Learning Systems by Chip Huyen (Book)

