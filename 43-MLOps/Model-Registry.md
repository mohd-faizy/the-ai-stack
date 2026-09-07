# Model Registry

> Centralized repositories to store, version, annotate, and manage the lifecycle stages of trained machine learning model artifacts.

## 🎯 What to Learn

- The role of a Model Registry: Bridging the gap between data science experimentation and production engineering
- MLflow Model Registry: Registering models, version transitions (`Staging`, `Production`, `Archived`), and automated webhooks
- Hugging Face Hub as a Model Registry: Model cards, safetensors distribution, git-lfs tracking, and branch-based revisions
- Cryptographic hashing and model provenance: Verifying model integrity and tracking parent training runs
- Model governance: Approval workflows, regulatory compliance metadata, and audit logs
- Model packaging standards: MLmodel specifications, ONNX signatures, and container references

## 📚 Best Learning Resources

### 🥇 Best Overall

- [MLflow Model Registry](https://mlflow.org/docs/latest/model-registry.html)
  - Type: Model Registry Standard
  - Language: English
  - Level: Beginner
  - Why recommended: The most widely adopted open-source model registry, providing full lifecycle management, staging/production state transitions, and API access.

### 🎓 Courses

- [Databricks Academy: Managing Models with MLflow](https://www.databricks.com/learn/training/home) — Official training on registering, versioning, and deploying models with MLflow.

### ▶️ YouTube — English

- [Databricks / MLOps Community: Video Guides & Tutorials](https://www.youtube.com/@Databricks)
  - Channel: Databricks / MLOps Community
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Clear walkthrough of registering a model from a training run and promoting it to Production via Python API.

### ▶️ YouTube — Hindi / Hinglish

- [100 Days of MLOps in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaKHYjy5v0dJh8edeaEWb-b)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Complete 100-day roadmap on Git, Docker, DVC, MLflow, CI/CD, and model monitoring in Hindi.


### 📚 Books

- [Introducing MLOps by Mark Treveil et al. (O'Reilly)](https://www.oreilly.com/library/view/introducing-mlops/9781492083283/) — Foundational concepts of model governance, registries, and staging environments.

### 💻 GitHub / Implementations

- [MLflow Model Registry](https://github.com/mlflow/mlflow) — Model versioning and staging.
- [Hugging Face Hub](https://github.com/huggingface/huggingface_hub) — Model hosting and versioning.
- [ModelDB](https://github.com/VertaAI/modeldb) — Open-source model versioning system.

### 🧪 Practice

- [MLflow Model Registry Quickstart](https://mlflow.org/docs/latest/model-registry.html#quickstart) — Register a model from Python and transition its stage to Production.

### 🛠️ Projects

- [Automated Registry Promotion Webhook](https://mlflow.org/docs/latest/model-registry.html) — Build a webhook that triggers a canary deployment in Kubernetes whenever a model is promoted to 'Production' in MLflow.

## 🧭 Recommended Learning Path

1. Understand why saving weights to ad-hoc S3 folders causes production outages.
2. Register a trained Scikit-Learn or PyTorch model in MLflow.
3. Add model metadata: Author, training dataset git hash, and evaluation metrics.
4. Manage model lifecycle states: Transition a candidate from Staging to Production.
5. Load the active production model dynamically in an API service via `models:/my_model/Production`.

## ⭐ Top 3 Resources

1. MLflow Model Registry
2. Hugging Face Hub
3. Weights & Biases Model Registry

