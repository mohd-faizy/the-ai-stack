# 42 - AI Infrastructure

> Large-scale compute clusters, GPU orchestration systems, Kubernetes operators, and cloud infrastructure powering modern artificial intelligence workloads.

## 🌐 Overview & Architectural Importance

Building state-of-the-art AI applications requires orchestrating fleets of GPUs, managing multi-node networking fabrics (InfiniBand/RoCE), autoscaling compute pools, and optimizing infrastructure spend. AI Infrastructure is the foundational systems layer bridging cloud engineering with machine learning.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Distributed Computing**](Distributed-Computing.md) — Ray, Dask, Apache Spark, Modin, distributed data processing, and cluster scaling.
* [**Kubernetes & Container AI**](Kubernetes-and-Container-AI.md) — Kubeflow, Volcano, Argo Workflows, Flyte, Kueue, and containerized AI orchestration.
* [**GPU Management & Scheduling**](GPU-Management-and-Scheduling.md) — NVIDIA GPU Operator, Run:ai, gpustat, fractional GPU sharing, and cluster scheduling.
* [**Cloud AI SDKs**](Cloud-AI-SDKs.md) — AWS Boto3/SageMaker, Google Cloud Vertex AI, and Azure ML SDKs.

## 🧭 Recommended Study Sequence

1. **Distributed Python Systems**: Scaling execution with Ray actors, tasks, and Ray Train.
2. **Kubernetes AI Operators**: Deploying NVIDIA GPU Operator and orchestrating jobs with Kueue and Volcano.
3. **Pipeline Orchestration**: Writing repeatable distributed data workflows with Flyte and Argo.
4. **GPU Virtualization**: Multi-Instance GPU (MIG), fractional slicing, and time-slicing.
5. **Cloud Scale-Out**: Training and hosting models on AWS SageMaker, GCP Vertex AI, and Azure ML.

## 🗝️ Foundational Prerequisites

- Linux systems administration and Bash scripting.
- Docker containers, registries, and Kubernetes core concepts (Pods, Deployments, CRDs).
- GPU hardware concepts: PCIe vs NVLink, CUDA drivers, and VRAM management.

---

[← Back to Main Repository](../README.md)
