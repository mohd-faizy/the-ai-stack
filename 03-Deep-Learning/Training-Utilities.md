# Training Utilities

> Training utilities abstract boilerplate engineering—handling multi-device orchestration, mixed-precision scaling, experiment tracking, checkpointing, and callbacks.

## 🎯 What to Learn

- Separating research model code from engineering infrastructure with PyTorch Lightning
- Hardware-agnostic training with Hugging Face Accelerate
- Experiment tracking, artifact logging, and hyperparameter sweeps with Weights & Biases (W&B) and MLflow
- Model checkpointing strategies: top-k metric saving, resumable training, and EMA (Exponential Moving Average) weights
- Learning rate scheduling: cosine annealing, warmups, and cyclic schedules
- Gradient clipping, gradient accumulation, and mixed precision (FP16 / BF16) management
- Profiling GPU kernels, memory leaks, and bottleneck identification with PyTorch Profiler

## 📚 Best Learning Resources

### 🥇 Best Overall

- [PyTorch Lightning Documentation & Tutorials](https://lightning.ai/docs/pytorch/stable/)
  - Type: Framework & Documentation
  - Language: English
  - Level: Beginner to Intermediate
  - Why recommended: PyTorch Lightning structures PyTorch code into clean modules, automating multi-GPU training, precision, checkpointing, and logging without sacrificing flexibility.

### 📖 Documentation & References

- [Hugging Face Accelerate Guide](https://huggingface.co/docs/accelerate/index) — Streamline distributed training and mixed precision across any hardware setup.
- [Weights & Biases (W&B) Docs](https://docs.wandb.ai/) — The developer platform for tracking ML experiments, dataset versioning, and evaluation.
- [PyTorch Profiler Tutorial](https://pytorch.org/tutorials/recipes/recipes/profiler_recipe.html) — Official recipe for profiling execution time and memory consumption of PyTorch operators.

### 🎓 Courses

- [Lightning AI: Deep Learning Fundamentals](https://lightning.ai/pages/courses/deep-learning-fundamentals/) — Free course by Sebastian Raschka covering PyTorch Lightning workflows.

### ▶️ YouTube — English

- [Fireship: Video Guides & Tutorials](https://www.youtube.com/@Fireship)
  - Channel: Fireship
  - Language: English
  - Type: Overview
  - Level: Beginner
  - Why: Fast, punchy summary of why structuring PyTorch code with Lightning eliminates boilerplate.
- [Hugging Face: Video Guides & Tutorials](https://www.youtube.com/@HuggingFace)
  - Channel: Hugging Face
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Official walkthrough showing how to convert standard PyTorch loops into distributed-ready Accelerate code.

### ▶️ YouTube — Hindi / Hinglish

- [100 Days of Deep Learning in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Comprehensive 100-day Hindi deep learning course covering ANN, CNN, RNN, and PyTorch.


### 📚 Books

- [Machine Learning with PyTorch and Scikit-Learn by Sebastian Raschka](https://sebastianraschka.com/books/#machine-learning-with-pytorch-and-scikit-learn) — Comprehensive modern guide detailing practical PyTorch training patterns and utilities.

### 💻 GitHub / Implementations

- [mohd-faizy/Probabilistic-Deep-Learning-with-TensorFlow](https://github.com/mohd-faizy/Probabilistic-Deep-Learning-with-TensorFlow) — Quantifying uncertainty, epistemic noise, and variational inference in deep learning using TensorFlow Probability.
- [Lightning](https://github.com/Lightning-AI/pytorch-lightning) — Structured PyTorch training framework.
- [timm](https://github.com/huggingface/pytorch-image-models) — PyTorch image model library with hundreds of pretrained models.
- [TorchMetrics](https://github.com/Lightning-AI/torchmetrics) — Machine learning metrics for PyTorch.
- [torchinfo](https://github.com/TylerYep/torchinfo) — Detailed model summaries for PyTorch.
- [torch-lr-finder](https://github.com/davidtvs/pytorch-lr-finder) — Learning rate range test for PyTorch.
- [Hydra](https://github.com/hydra-ecosystem/hydra) — Elegant configuration management framework.
- [OmegaConf](https://github.com/omry/omegaconf) — Hierarchical configuration system.
- [torchvision](https://github.com/pytorch/vision) — Datasets, transforms, and models for computer vision.
- [torchaudio](https://github.com/pytorch/audio) — Audio processing for PyTorch.
- [torchtext](https://github.com/pytorch/text) — Text processing for PyTorch.

### 🧪 Practice

- [W&B Interactive Colab Quickstart](https://docs.wandb.ai/quickstart) — Set up real-time live loss curves, GPU usage monitoring, and hyperparameter sweeping.

### 🛠️ Projects

- [Build a Resumable Multi-GPU Training Harness](https://lightning.ai/docs/pytorch/stable/) — Create a modular PyTorch Lightning training pipeline with distributed checkpoint resumption and W&B logging.

## 🧭 Recommended Learning Path

1. Structure PyTorch models into `LightningModule` separating training step, validation step, and optimizer configuration.
2. Implement gradient accumulation and mixed precision (`precision='16-mixed'` or `'bf16-mixed'`).
3. Integrate automated callbacks for EarlyStopping, ModelCheckpoint, and LearningRateMonitor.
4. Use PyTorch Profiler to inspect tensor execution timelines and memory allocation peaks.
5. Deploy Hugging Face Accelerate for zero-code-change transitions from single GPU to multi-node clusters.

## ⭐ Top 3 Resources

1. [PyTorch Lightning](https://lightning.ai/docs/pytorch/stable/) — The gold standard structural framework for production-grade PyTorch engineering.
2. [Hugging Face Accelerate](https://huggingface.co/docs/accelerate/index) — Simplest, most elegant library for hardware-agnostic training.
3. [Weights & Biases (W&B)](https://wandb.ai/) — The definitive tool for ML experiment tracking, visualizations, and model registries.

