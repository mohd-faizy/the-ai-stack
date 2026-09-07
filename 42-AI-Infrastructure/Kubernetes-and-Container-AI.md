# Kubernetes & Container AI

> Cloud-native workload orchestrators, Kubernetes Custom Resource Definitions (CRDs), and workflow engines for automated AI lifecycle management.

## 🎯 What to Learn

- Kubernetes AI foundations: Pods, DaemonSets, Resource Quotas, and GPU device plugins
- Kubeflow: End-to-end ML platform on Kubernetes (Notebooks, Pipelines, Katib, Training Operator)
- Kueue: Kubernetes-native job queueing controller managing multi-tenant GPU batch scheduling
- Argo Workflows: Container-native workflow engine for orchestrating parallel DAG machine learning steps
- Flyte: Highly scalable, production-grade workflow automation platform for mission-critical ML pipelines
- Volcano: CNCF batch computing system providing gang-scheduling and fair-share scheduling for AI workloads

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Flyte](https://github.com/flyteorg/flyte)
  - Type: Orchestration Platform
  - Language: English
  - Level: Intermediate
  - Why recommended: The premier open-source workflow orchestrator for machine learning and data pipelines, offering strongly-typed tasks, caching, and multi-cloud Kubernetes orchestration.

### 🎓 Courses

- [Full Stack Deep Learning: Infrastructure & Orchestration](https://fullstackdeeplearning.com/) — Covers containerized workflows, Kubernetes clusters, and GPU resource management.

### ▶️ YouTube — English

- [KubeCon / CNCF: Video Guides & Tutorials](https://www.youtube.com/@cncf)
  - Channel: KubeCon / CNCF
  - Language: English
  - Type: Conference Talk
  - Level: Advanced
  - Why: Industry experts discuss GPU scheduling, Volcano, Kueue, and containerized model training.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Kubernetes: Up and Running by Brendan Burns, Joe Beda, Kelsey Hightower (O'Reilly)](https://www.oreilly.com/library/view/kubernetes-up-and/9781098120283/) — The definitive guide to container orchestration fundamentals by Kubernetes co-creators.

### 💻 GitHub / Implementations

- [KServe](https://github.com/kserve/kserve) — Kubernetes-native model serving.
- [Kubeflow](https://github.com/kubeflow/kubeflow) — ML toolkit for Kubernetes.
- [Volcano](https://github.com/volcano-sh/volcano) — Cloud-native batch scheduling for ML.
- [Argo Workflows](https://github.com/argoproj/argo-workflows) — Kubernetes-native workflow engine.
- [Flyte](https://github.com/flyteorg/flyte) — Scalable and reproducible ML workflow orchestration.
- [Kueue](https://github.com/kubernetes-sigs/kueue) — Kubernetes-native job queuing.

### 🧪 Practice

- [Flyte Getting Started Sandbox](https://docs.flyte.org/en/latest/getting_started_with_workflow_development/index.html) — Run a local Flyte cluster and execute Python ML pipelines in 5 minutes.

### 🛠️ Projects

- [End-to-End Flyte ML Pipeline](https://github.com/flyteorg/flyte) — Write a strongly-typed Flyte pipeline that ingests data, trains a model on GPU, and registers the artifact with automatic task caching.

## 🧭 Recommended Learning Path

1. Master Kubernetes fundamentals: Pods, Services, PVCs, and StatefulSets.
2. Install the NVIDIA GPU Operator to enable GPU device discovery in Kubernetes.
3. Learn Kueue to handle queuing and fair allocation across scarce GPU nodes.
4. Write multi-step training pipelines using Flyte or Argo Workflows.
5. Deploy scalable inference endpoints using KServe on the same cluster.

## ⭐ Top 3 Resources

1. Flyte (Production ML Workflow Orchestrator)
2. Kueue (Kubernetes Job Queueing Controller)
3. Kubeflow Pipelines

