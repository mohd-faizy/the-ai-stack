# Model Deployment & CI/CD

> Continuous integration, automated model testing, packaging standards, and deployment pipelines that deliver verified machine learning models to production.

## 🎯 What to Learn

- ML CI/CD pipeline stages: Data validation, training, behavioral testing, model packaging, and canary rollout
- Continuous Machine Learning (CML by Iterative): Running ML workflows on GitHub Actions and generating visual pull request reports
- Model packaging: BentoML, Truss, and OCI containerization with pinned dependencies and CUDA drivers
- Testing machine learning models: Directional expectation tests, invariance tests, and minimum functionality tests
- Deployment strategies: Blue-green deployment, canary releases, and shadow deployments
- Rollback triggers and automated health checks

## 📚 Best Learning Resources

### 🥇 Best Overall

- [CML (Continuous Machine Learning - Iterative)](https://github.com/iterative/cml)
  - Type: CI/CD Tool for ML
  - Language: English
  - Level: Intermediate
  - Why recommended: Open-source tool by the creators of DVC that seamlessly implements continuous integration for machine learning projects using GitHub Actions and GitLab CI.

### 🎓 Courses

- [Coursera: Machine Learning Engineering for Production (MLOps) by Andrew Ng](https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops) — The foundational MLOps specialization covering model deployment, monitoring, and pipelines.

### ▶️ YouTube — English

- [Iterative / FreeCodeCamp: Video Guides & Tutorials](https://www.youtube.com/@freecodecamp)
  - Channel: Iterative / FreeCodeCamp
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Step-by-step guide to setting up automated model retraining and pull request reports on GitHub Actions.

### ▶️ YouTube — Hindi / Hinglish

- [100 Days of MLOps in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaKHYjy5v0dJh8edeaEWb-b)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Complete 100-day roadmap on Git, Docker, DVC, MLflow, CI/CD, and model monitoring in Hindi.


### 📚 Books

- [Machine Learning Engineering in Action by Ben Wilson (Manning)](https://www.manning.com/books/machine-learning-engineering-in-action) — Deep dive into model delivery pipelines, risk mitigation, and production reliability.

### 💻 GitHub / Implementations

- [BentoML](https://github.com/bentoml/BentoML) — Unified model serving framework.
- [KServe](https://github.com/kserve/kserve) — Kubernetes-native ML model serving.
- [Seldon Core](https://github.com/SeldonIO/seldon-core) — ML deployment on Kubernetes.
- [Cortex](https://github.com/cortexlabs/cortex) — Production machine learning API platform.
- [MLEM](https://github.com/iterative/mlem) — Package and deploy ML models.
- [Truss](https://github.com/basetenlabs/truss) — Package and serve ML models.
- [CML](https://github.com/iterative/cml) — Continuous ML with GitHub Actions.

### 🧪 Practice

- [CML First Workflow Tutorial](https://cml.dev/doc/start) — Set up a GitHub Actions workflow that trains a model and posts loss curves directly to a PR comment.

### 🛠️ Projects

- [Automated Model Promotion CI Gate](https://github.com/iterative/cml) — Build a GitHub Action that retrains an XGBoost model, runs unit tests, evaluates F1 score against production, and automatically merges if improved.

## 🧭 Recommended Learning Path

1. Understand why traditional software CI/CD must be adapted for ML (data changes without code changes).
2. Write unit tests for data schemas and model output shapes.
3. Implement CML in GitHub Actions to auto-generate visual evaluation reports.
4. Package models into OCI containers using BentoML or Docker.
5. Implement canary deployments on Kubernetes with KServe or Seldon Core.

## ⭐ Top 3 Resources

1. Continuous Machine Learning (CML by Iterative)
2. DeepLearning.AI MLOps Specialization (Andrew Ng)
3. BentoML (Model packaging & deployment)

