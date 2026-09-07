# Mixture of Experts

> Sparse routing architectures, conditional computation, and load balancing mechanisms that scale model parameter capacity without increasing compute cost per token.

## 🎯 What to Learn

- The Mixture-of-Experts (MoE) principle: Replacing dense feed-forward networks (FFN) with $N$ independent expert networks and a routing gate
- Sparse routing: Activating only top-$k$ experts (e.g. top-2 out of 8 in Mixtral 8x7B, top-8 out of 256 in DeepSeek-V3) per token
- DeepSeek-V3 MoE innovations: Fine-grained expert segmentation (256 experts) and shared isolated experts with auxiliary-loss-free load balancing
- Mixtral 8x7B (Mistral AI): High-performance open sparse MoE outperforming Llama-2-70B while using only 13B active parameters per token
- Routing load imbalance: Preventing expert collapse and token dropping using auxiliary load balancing losses
- Serving and memory requirements: Managing full parameter VRAM footprint while enjoying fast active token inference

## 📚 Best Learning Resources

### 🥇 Best Overall

- [DeepSeek-V3 & Mixtral 8x7B](https://github.com/deepseek-ai/DeepSeek-V3)
  - Type: Sparse MoE Standard
  - Language: English
  - Level: Advanced
  - Why recommended: DeepSeek-V3 and Mixtral represent the pinnacle of open sparse MoE engineering, achieving frontier-level capabilities at vastly reduced compute expenditure through fine-grained expert routing.

### 🎓 Courses

- [Stanford CS25: Transformers United (MoE Lecture)](https://web.stanford.edu/class/cs25/) — Covers sparse conditional computation, routing mechanisms, and distributed expert parallelism.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Deep Dive
  - Level: Advanced
  - Why: Visual mathematical derivation of softmax gating, Top-K expert selection, and auxiliary load balancing loss.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Deep Learning Systems by Tianqi Chen & Zico Kolter](https://dlsyscourse.org/) — Covers distributed expert parallel dispatch, all-to-all communication collectives, and memory management.

### 💻 GitHub / Implementations

- [DeepSpeed-MoE](https://github.com/deepspeedai/DeepSpeed) — Mixture-of-experts infrastructure.
- [Megatron-LM MoE](https://github.com/NVIDIA/Megatron-LM) — Expert parallelism for large MoE models.
- [OpenMoE](https://github.com/XueFuzhao/OpenMoE) — Open-source MoE language models.
- [Mixtral](https://github.com/mistralai/mistral-inference) — Sparse MoE by Mistral AI.

## 📄 Foundational Papers

- [Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer](https://arxiv.org/abs/1701.06538) — Shazeer et al. landmark paper introducing conditionally activated sparse expert networks.
- [DeepSeek-V3 Technical Report](https://arxiv.org/abs/2412.19437) — Landmark paper introducing fine-grained expert segmentation and auxiliary-loss-free load balancing.

### 🧪 Practice

- [Hugging Face MoE Implementation Guide](https://huggingface.co/blog/moe) — Complete guide explaining how MoEs work with runnable PyTorch code samples.

### 🛠️ Projects

- [Build a Toy MoE Transformer in PyTorch](https://huggingface.co/blog/moe) — Code a top-2 gating router and replace the standard MLP in a nanoGPT model with 4 sparse experts.

## 🧭 Recommended Learning Path

1. Understand the difference between total parameters (memory footprint) and active parameters (FLOPs per token).
2. Derive the Top-K gating router: $y = sum_{i in 	ext{TopK}} 	ext{Softmax}(H(x))_i E_i(x)$.
3. Learn why auxiliary load balancing loss is needed to prevent expert collapse.
4. Explore DeepSeek-V3's fine-grained architecture (256 experts with shared isolated experts).
5. Serve an open MoE model with vLLM using expert parallel tensor distribution.

## ⭐ Top 3 Resources

1. DeepSeek-V3 (State-of-the-Art Sparse MoE)
2. Mixtral 8x7B (Mistral AI)
3. Hugging Face Mixture of Experts Explainer

