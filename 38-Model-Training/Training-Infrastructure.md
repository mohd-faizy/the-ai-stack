# Training Infrastructure

> High-level training frameworks, workflow abstractions, and orchestration systems that simplify multi-GPU training, experiment reproducibility, and cluster management.

## 🎯 What to Learn

- Hugging Face Accelerate: Seamlessly running raw PyTorch code across single GPU, multi-GPU, TPU, and FSDP with minimal code changes
- PyTorch Lightning: Decoupling engineering boilerplate (distributed setup, precision, checkpointing) from model research logic
- Composer (MosaicML): High-throughput training engine with speedup algorithms (progressive resizing, blurpool, selective backprop)
- Levanter (Stanford): JAX-based training framework optimized for TPUs and GPUs with reproducible data loaders
- Mixed precision training: Automatic Mixed Precision (AMP), FP16 vs BF16, and gradient scaling
- Managing cluster checkpoints, wandb telemetry, and distributed data streaming

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Hugging Face Accelerate](https://github.com/huggingface/accelerate)
  - Type: Training Abstraction Library
  - Language: English
  - Level: Intermediate
  - Why recommended: The most flexible and widely adopted library to convert raw PyTorch scripts into distributed training workflows (DDP, FSDP, DeepSpeed) with zero boilerplate.

### 🎓 Courses

- [PyTorch Lightning Official Tutorials](https://lightning.ai/courses/) — Hands-on tutorials on building production PyTorch pipelines with Lightning.

### ▶️ YouTube — English

- [Hugging Face: Video Guides & Tutorials](https://www.youtube.com/@HuggingFace)
  - Channel: Hugging Face
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Sylvain Gugger demonstrates how `accelerator.prepare()` transforms standard PyTorch code into multi-GPU DDP.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Programming PyTorch for Deep Learning by Ian Pointer (O'Reilly)](https://www.oreilly.com/library/view/programming-pytorch-for/9781492045342/) — Practical guide to scaling PyTorch models, data loaders, and training workflows.

### 💻 GitHub / Implementations

- [Accelerate](https://github.com/huggingface/accelerate) — Simple distributed training abstraction.
- [Lightning](https://github.com/Lightning-AI/pytorch-lightning) — PyTorch training at scale.
- [Composer](https://github.com/mosaicml/composer) — MosaicML's training efficiency library.
- [Levanter](https://github.com/stanford-crfm/levanter) — Scalable JAX training library.
- [MaxText](https://github.com/google/maxtext) — Simple, performant LLM training in JAX.
- [EasyLM](https://github.com/young-geng/EasyLM) — JAX/Flax based LLM training.

### 🧪 Practice

- [Accelerate Interactive Config Generator](https://huggingface.co/docs/accelerate/package_reference/cli#accelerate-config) — Run `accelerate config` in your terminal to set up distributed training parameters.

### 🛠️ Projects

- [Multi-GPU Distributed Classifier with Accelerate](https://github.com/huggingface/accelerate/tree/main/examples) — Refactor a raw PyTorch training loop to run seamlessly on 4 GPUs with automatic BF16 mixed precision.

## 🧭 Recommended Learning Path

1. Understand the mechanics of PyTorch AMP (`torch.cuda.amp.autocast`).
2. Use Hugging Face Accelerate to replace manual `torch.distributed` initialization.
3. Experiment with PyTorch Lightning `Trainer` hooks, checkpoints, and early stopping.
4. Explore MosaicML Composer for data-streaming directly from S3/GCS without local disk caching.
5. Profile training throughput (tokens/sec/GPU) with PyTorch Profiler.

## ⭐ Top 3 Resources

1. Hugging Face Accelerate
2. PyTorch Lightning (Lightning AI)
3. MosaicML Composer

