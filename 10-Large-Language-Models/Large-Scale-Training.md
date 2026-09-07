# Large-Scale LLM Training

> Systems engineering, hardware interconnects, 3D parallelism, and cluster resilience required to train models with tens or hundreds of billions of parameters.

## 🎯 What to Learn

- 3D Parallelism: composing Data Parallelism (DP), Tensor Parallelism (TP), and Pipeline Parallelism (PP)
- Sequence Parallelism (Megatron-SP and DeepSpeed Ulysses) for handling ultra-long contexts during training
- Context Parallelism: distributed ring-attention across GPU nodes
- FP8 mixed-precision training: scaling factors, numerical ranges (E4M3 vs E5M2), and loss stability
- Hardware interconnect topologies: NVLink bandwidth, NVSwitch, and InfiniBand rail-optimized networking
- Overcoming stragglers, hardware bit-flips, silent data corruption, and automated checkpoint restarts

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Megatron-LM: Training Multi-Billion Parameter Foundation Models (NVIDIA)](https://github.com/NVIDIA/Megatron-LM)
  - Type: Framework & Research Codebase
  - Language: English
  - Level: Advanced
  - Why recommended: Megatron-LM is the industry-standard high-performance framework developed by NVIDIA that established tensor and sequence parallelism for frontier model training.

### 📖 Documentation & References

- [Megatron-LM Documentation](https://github.com/NVIDIA/Megatron-LM) — Official guides on running tensor, pipeline, and sequence parallelism on GPU clusters.
- [DeepSpeed Documentation](https://www.deepspeed.ai/) — Microsoft's deep learning optimization library featuring ZeRO-1/2/3 and 3D parallelism.

### 🎓 Courses

- [CS217: Hardware Accelerators for Machine Learning (Stanford)](https://cs217.stanford.edu/) — Graduate course on GPU microarchitectures, memory hierarchies, and distributed interconnection networks.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Architecture Deep Dive
  - Level: Advanced
  - Why: Detailed walk-through of row/column tensor parallelism, communication all-reduces, and pipeline bubbles.

### ▶️ YouTube — Hindi / Hinglish

- [Finetuning Large Language Models & GenAI in Hindi](https://www.youtube.com/playlist?list=PLZoTAELRMXVN9VbAx5I2VvloTtYmlApe3)
  - Channel: Krish Naik
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Hands-on Hindi tutorials covering transformer architectures, PEFT, LoRA, and LLM fine-tuning.


### 📚 Books

- [Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism (Shoeybi et al.)](https://arxiv.org/abs/1909.08053) — The seminal foundational research paper introducing tensor model parallelism.

### 💻 GitHub / Implementations

- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) — Large-scale transformer training at NVIDIA.
- [DeepSpeed](https://github.com/deepspeedai/DeepSpeed) — Distributed training and inference optimization.
- [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) — GPU-parallel autoregressive transformer training.
- [Nanotron](https://github.com/huggingface/nanotron) — Efficient distributed training of LLMs.
- [torchtitan](https://github.com/pytorch/torchtitan) — Native PyTorch large-scale LLM training.

### 🧪 Practice

- [Megatron-LM Pre-training Quickstart](https://github.com/NVIDIA/Megatron-LM) — Run a 2-GPU tensor-parallel training script locally or in a cloud instance.

### 🛠️ Projects

- [Train a 13B Model with DeepSpeed ZeRO-3 on Multi-Node Cluster](https://github.com/deepspeedai/DeepSpeedExamples) — Set up distributed multi-node training with ZeRO-3 parameter sharding, CPU offloading, and Slurm job scripts.

## 🧭 Recommended Learning Path

1. Understand why single-GPU training fails beyond 7B-13B parameters due to Adam optimizer state overhead.
2. Study row-parallel and column-parallel linear layer decompositions that require only two all-reduce operations per block.
3. Explore 1F1B (One-Forward-One-Backward) schedule to shrink pipeline bubble idle time.
4. Examine Sequence Parallelism: splitting LayerNorm and Dropout along the sequence dimension.
5. Analyze the communication-to-computation ratio across NVLink (900 GB/s) vs InfiniBand (50 GB/s).

## ⭐ Top 3 Resources

1. [Megatron-LM (NVIDIA)](https://github.com/NVIDIA/Megatron-LM) — The state-of-the-art framework for tensor and sequence parallel model training.
2. [DeepSpeed (Microsoft)](https://www.deepspeed.ai/) — The premier memory optimization engine powering massive model scaling.
3. [Shoeybi et al. Megatron-LM Paper](https://arxiv.org/abs/1909.08053) — The foundational research paper that made trillion-parameter scaling computationally viable.

