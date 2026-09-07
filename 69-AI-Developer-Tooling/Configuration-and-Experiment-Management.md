# Configuration & Experiment Management

> Hierarchical configuration engines, YAML composability frameworks, and parameter management tools for reproducible machine learning research.

## 🎯 What to Learn

- The configuration challenge: Managing hundreds of hyperparameters across data, model architectures, optimizers, and hardware clusters
- Hydra (Meta AI): Powerful framework that dynamically creates hierarchical configurations by composing multiple YAML files
- OmegaConf: YAML-based hierarchical configuration system supporting variable interpolation and type enforcement
- Command-line overrides: Overriding nested parameters seamlessly from the terminal (`python train.py model.lr=1e-4`))
- Multi-run sweeps: Launching grid and random hyperparameter sweeps with Hydra's `--multirun` flag
- Integrating Hydra with PyTorch Lightning, Hugging Face Accelerate, and Ray Tune

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Hydra (Meta AI)](https://github.com/facebookresearch/hydra)
  - Type: Hierarchical Configuration Framework
  - Language: English
  - Level: Intermediate
  - Why recommended: Meta's open-source framework that revolutionizes machine learning configuration by allowing complex nested YAML configs to be composed dynamically and overridden from the command line.

### 🎓 Courses

- [Made With ML: Configuration Management](https://madewithml.com/) — Production MLOps lesson on structuring reproducible configuration hierarchies.

### ▶️ YouTube — English

- [PyData / Meta AI: Video Guides & Tutorials](https://www.youtube.com/@PyDataTV)
  - Channel: PyData / Meta AI
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Clear walkthrough showing how to eliminate hard-coded hyperparameters and compose configs dynamically.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Practicing MLOps by Noah Gift and Alfredo Deza (O'Reilly)](https://www.oreilly.com/) — Covers reproducible configuration patterns, environment isolation, and continuous integration.

### 💻 GitHub / Implementations

- [Hydra](https://github.com/hydra-ecosystem/hydra) — Application configuration management.
- [OmegaConf](https://github.com/omry/omegaconf) — YAML configuration library.
- [gin-config](https://github.com/google/gin-config) — Lightweight configuration framework.

### 🧪 Practice

- [Hydra Quickstart Tutorial](https://hydra.cc/docs/tutorials/basic/your_first_hydra_app/simple_cli/) — Decorate a Python main function with `@hydra.main` and run your first config app in 3 minutes.

### 🛠️ Projects

- [Hierarchical Training Pipeline with Hydra & Optuna](https://hydra.cc/docs/plugins/optuna_sweeper/) — Build a PyTorch project structured with modular configs (dataset, model, optimizer) and launch an automated 50-trial hyperparameter sweep via Hydra CLI.

## 🧭 Recommended Learning Path

1. Understand why hard-coded dictionaries and messy `argparse` scripts cause experimental errors.
2. Learn OmegaConf variable interpolation: `${model.hidden_dim}`.
3. Organize configs into modular subdirectories (`conf/model/`, `conf/dataset/`, `conf/optimizer/`).
4. Override parameters dynamically from the terminal: `python train.py optimizer=adamw optimizer.lr=0.001`.
5. Use the Optuna sweeper plugin to automate hyperparameter tuning.

## ⭐ Top 3 Resources

1. Hydra (Meta AI Research)
2. OmegaConf (Hierarchical YAML library)
3. Hydra Optuna Sweeper Plugin

