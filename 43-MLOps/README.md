# 43 - MLOps

> Practices, tooling, and engineering disciplines that operationalize machine learning systems through reliable versioning, tracking, testing, and deployment.

## 🌐 Overview & Architectural Importance

Machine learning code is only a tiny fraction of a real-world production system. MLOps establishes the automated pipelines, experiment tracking, data versioning, model registries, and feature stores required to reproduce, audit, and continuously deliver AI systems at scale.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Experiment Tracking**](Experiment-Tracking.md) — MLflow, Weights & Biases (W&B), ClearML, Neptune, Comet, and metrics logging.
* [**Model Deployment & CI/CD**](Model-Deployment-and-CI-CD.md) — BentoML, KServe, Seldon Core, CML, automated testing, and model deployment gates.
* [**Data Versioning & Lineage**](Data-Versioning-and-Lineage.md) — DVC (Data Version Control), lakeFS, Delta Lake, Pachyderm, and data provenance.
* [**Model Registry**](Model-Registry.md) — MLflow Model Registry, Hugging Face Hub, model artifact versioning, and staging/production gates.
* [**Feature Store**](Feature-Store.md) — Feast, Hopsworks, Featureform, offline vs online storage, and training-serving skew prevention.

## 🧭 Recommended Study Sequence

1. **Experiment Tracking**: Instrumenting runs, logging hyperparameters, artifacts, and loss curves with MLflow/W&B.
2. **Data Versioning**: Versioning datasets with Git-like semantics using DVC and S3 remotes.
3. **Feature Store**: Serving low-latency features (Redis) while maintaining historical reproducibility (Parquet).
4. **Model Registry**: Managing model lifecycle states (Staging -> Production -> Archived) and cryptographic hashes.
5. **Continuous Deployment**: Automated CI/CD pipelines testing data drift and model regression before rollout.

## 🗝️ Foundational Prerequisites

- Git version control and GitHub Actions CI/CD workflows.
- Software engineering principles (modular code, unit testing, semantic versioning).
- Database fundamentals (OLTP vs OLAP, key-value stores).

---

[← Back to Main Repository](../README.md)
