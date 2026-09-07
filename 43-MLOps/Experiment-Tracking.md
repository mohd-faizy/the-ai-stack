# Experiment Tracking

> Systems to log, visualize, compare, and organize machine learning experiments, hyperparameters, metrics, and dataset artifacts.

## 🎯 What to Learn

- The experiment tracking problem: Chaotic notebooks, unversioned weights, and unreproducible results
- MLflow Tracking: Tracking URI, runs, experiments, metrics, parameters, and artifact storage
- Weights & Biases (W&B): Interactive dashboards, system hardware metrics, model checkpoints, and sweeps
- ClearML: Open-source self-hosted MLOps platform for tracking, orchestration, and data management
- Neptune & Comet: Enterprise experiment tracking and collaboration tools
- Automated hyperparameter optimization: Ray Tune, Optuna, and W&B Sweeps

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Weights & Biases (W&B)](https://wandb.ai/)
  - Type: Experiment Tracking Platform
  - Language: English
  - Level: Beginner
  - Why recommended: The industry favorite tool for visualizing ML metrics, sharing experiment dashboards, tracking GPU utilization, and managing artifacts.

### 🎓 Courses

- [DeepLearning.AI: Evaluating and Debugging Generative AI](https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/) — Taught by W&B team covering experiment tracking and model evaluation.

### ▶️ YouTube — English

- [Weights & Biases: Video Guides & Tutorials](https://www.youtube.com/@WeightsBiases)
  - Channel: Weights & Biases
  - Language: English
  - Type: Channel / Tutorials
  - Level: Intermediate to Advanced
  - Why: Official guides on experiment tracking, hyperparameter sweeps, Weave tracing, and LLM evaluation benchmarks.
- [MLOPS](https://www.youtube.com/playlist?list=PLZoTAELRMXVOjS7KXQK3DAj7ER6LT2fEO)
  - Channel: Krish Naik
  - Language: English / Hinglish
  - Type: Playlist
  - Level: Intermediate
  - Why: End-to-end MLOps pipeline building with MLflow, DVC, Docker, GitHub Actions, and AWS deployment.

### ▶️ YouTube — Hindi / Hinglish

- [100 Days of MLOps in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaKHYjy5v0dJh8edeaEWb-b)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Complete 100-day roadmap on Git, Docker, DVC, MLflow, CI/CD, and model monitoring in Hindi.
- [LLMOPS](https://www.youtube.com/playlist?list=PLQxDHpeGU14CG-wDgZDqFdjsWhWqtDGdi)
  - Channel: Sunny Savita
  - Language: Hindi
  - Type: Playlist
  - Level: Intermediate
  - Why: Production LLMOps, prompt evaluation, model registry, and continuous integration workflows in Hindi.


### 📚 Books

- [Designing Machine Learning Systems by Chip Huyen (O'Reilly)](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/) — Essential chapter on experiment tracking, reproducibility, and artifact lineage.

### 💻 GitHub / Implementations

- [MLflow](https://github.com/mlflow/mlflow) — Open-source ML lifecycle management platform.
- [Weights & Biases](https://github.com/wandb/wandb) — Experiment tracking and model management.
- [ClearML](https://github.com/clearml/clearml) — End-to-end ML operations platform.
- [Neptune](https://github.com/neptune-ai/neptune-client) — Experiment management and model registry.
- [Comet](https://github.com/comet-ml/comet-examples) — ML experiment tracking.
- [Sacred](https://github.com/IDSIA/sacred) — Experiment configuration and tracking.
- [Aim](https://github.com/aimhubio/aim) — Open-source AI metadata tracker.

### 🧪 Practice

- [W&B Interactive Quickstart](https://docs.wandb.ai/quickstart) — Add 5 lines of Python code to your training loop and view live dashboards.

### 🛠️ Projects

- [Self-Hosted MLflow Tracking Server](https://mlflow.org/docs/latest/tracking/tutorials/remote-server.html) — Deploy a remote MLflow server backed by PostgreSQL and AWS S3 with Docker Compose.

## 🧭 Recommended Learning Path

1. Understand why manual logging to CSV or print statements leads to lost work.
2. Add `wandb.log()` or `mlflow.log_metric()` to an existing PyTorch training loop.
3. Track system metrics: GPU temperature, VRAM utilization, and CPU load.
4. Configure automated hyperparameter sweeps with Optuna or W&B Sweeps.
5. Version training checkpoints and datasets as immutable artifacts.

## ⭐ Top 3 Resources

1. Weights & Biases (W&B)
2. MLflow Tracking (Open Source standard)
3. Designing Machine Learning Systems by Chip Huyen (Book)

