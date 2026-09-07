# Distributed Training

> Distributed training scales deep learning across multi-GPU nodes and clusters through data parallelism, model partitioning, and pipeline scheduling.

## 🎯 What to Learn

- Data Parallelism: DistributedDataParallel (DDP), gradient all-reduce, and ring-allreduce
- Memory bottlenecks: parameter memory, gradient memory, optimizer states, and activations
- ZeRO (Zero Redundancy Optimizer): ZeRO-Stage 1 (optimizer state), ZeRO-Stage 2 (gradient), ZeRO-Stage 3 (parameter partitioning)
- Fully Sharded Data Parallel (FSDP) in native PyTorch
- Tensor Parallelism (Megatron-LM): splitting weight matrices across GPUs along rows and columns
- Pipeline Parallelism: GPipe, 1F1B (one-forward-one-backward) scheduling, and pipeline bubble management
- High-speed interconnects: NCCL, NVLink, InfiniBand, and overlapping communication with computation

## 📚 Best Learning Resources

### 🥇 Best Overall

- [DeepSpeed Documentation & Tutorials (Microsoft)](https://www.deepspeed.ai/)
  - Type: Framework & Architecture Guide
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: DeepSpeed pioneered the ZeRO memory optimization algorithm, making it possible to train billion-parameter models on commodity clusters.

### 📖 Documentation & References

- [PyTorch Distributed Overview (DDP & FSDP)](https://pytorch.org/tutorials/beginner/dist_overview.html) — The definitive guide to distributed training paradigms in native PyTorch.
- [Hugging Face Accelerate Documentation](https://huggingface.co/docs/accelerate/index) — Simple, unified wrapper allowing the same PyTorch script to run on CPU, single GPU, multi-GPU, and TPU.
- [Megatron-LM (NVIDIA)](https://github.com/NVIDIA/Megatron-LM) — Ongoing research training framework for large language models employing 3D parallelism.

### 🎓 Courses

- [Full Stack Deep Learning: Distributed Training](https://fullstackdeeplearning.com/) — Industry-oriented course on managing clusters, multi-node setups, and compute efficiency.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Architecture Deep Dive
  - Level: Advanced
  - Why: Crystal-clear mathematical diagrams explaining Megatron-LM tensor parallelism and row/column split synchronization.
- [Microsoft Research: Video Guides & Tutorials](https://www.youtube.com/@MicrosoftResearch)
  - Channel: Microsoft Research
  - Language: English
  - Type: Research Presentation
  - Level: Advanced
  - Why: Samyam Rajbhandari explains how ZeRO eliminates memory redundancies in distributed training.

### ▶️ YouTube — Hindi / Hinglish

- [100 Days of Deep Learning in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Comprehensive 100-day Hindi deep learning course covering ANN, CNN, RNN, and PyTorch.


### 📚 Books

- [Deep Learning Systems: Algorithms and Implementation by Tianqi Chen and Zico Kolter](https://dlsyscourse.org/) — Free online textbook detailing hardware acceleration, automatic differentiation, and distributed execution graphs.

### 💻 GitHub / Implementations

- [DeepSpeed](https://github.com/deepspeedai/DeepSpeed) — Deep learning optimization library.
- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) — Large-scale transformer model training.
- [Horovod](https://github.com/horovod/horovod) — Distributed deep learning made easy.
- [Accelerate](https://github.com/huggingface/accelerate) — Simple distributed training abstraction.
- [ColossalAI](https://github.com/hpcaitech/ColossalAI) — Making large AI models cheaper, faster, and more accessible.
- [FairScale](https://github.com/facebookresearch/fairscale) — PyTorch extensions for high-performance large-scale training.
- [Bagua](https://github.com/BaguaSys/bagua) — Distributed training framework with advanced algorithms.
- [torch.distributed](https://github.com/pytorch/pytorch) — PyTorch's native distributed training.
- [Determined AI](https://github.com/determined-ai/determined) — Distributed deep learning training platform.

### 🧪 Practice

- [PyTorch FSDP Getting Started Tutorial](https://pytorch.org/tutorials/intermediate/FSDP_tutorial.html) — Hands-on tutorial fine-tuning a T5/Llama model across multiple GPUs with FSDP.

### 🛠️ Projects

- [Train a 7B LLM with DeepSpeed ZeRO-3 on Multiple GPUs](https://github.com/deepspeedai/DeepSpeedExamples) — Configure and run distributed training using ZeRO-3 offloading and activation checkpointing.

## 🧭 Recommended Learning Path

1. Understand GPU memory breakdown: model weights, gradients, Adam optimizer states (8-16 bytes per param), and activations.
2. Implement PyTorch `DistributedDataParallel` (DDP) using `torchrun` with NCCL backend.
3. Study ZeRO memory partitioning (ZeRO-1, ZeRO-2, ZeRO-3) and how it eliminates redundant copies across GPUs.
4. Implement PyTorch Fully Sharded Data Parallel (FSDP) with activation checkpointing.
5. Explore 3D parallelism: combining Tensor Parallelism (TP), Pipeline Parallelism (PP), and Data Parallelism (DP) for frontier models.

## ⭐ Top 3 Resources

1. [DeepSpeed](https://www.deepspeed.ai/) — The industry standard for large-scale distributed model training and ZeRO memory optimization.
2. [PyTorch FSDP Guide](https://pytorch.org/tutorials/beginner/dist_overview.html) — The native PyTorch solution for sharded data-parallel training.
3. [Megatron-LM (NVIDIA)](https://github.com/NVIDIA/Megatron-LM) — The seminal open-source architecture for tensor and pipeline model parallelism.

