# Diffusion Transformers (DiT)

> Diffusion Transformers replace traditional convolutional U-Nets with scalable Vision Transformers, unlocking predictable scaling laws for generative vision models.

## 🎯 What to Learn

- Why traditional U-Net backbones saturate and how Vision Transformers (ViT) scale with compute
- Patchification: turning 2D latent image tensors into sequences of 1D visual tokens
- Conditioning mechanisms in DiT: adaptive layer normalization (adaLN) and adaLN-Zero
- Cross-attention vs concatenated multimodal streams (PixArt-alpha vs Stable Diffusion 3 / FLUX)
- Scaling laws: model size, patch size (p=2 vs p=4 vs p=8), and compute FLOPs
- Open-source DiT architectures: DiT, PixArt-alpha, Lumina-T2X, and Open-Sora

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Scalable Diffusion Models with Transformers (DiT Paper & Code by Peebles & Xie)](https://github.com/facebookresearch/DiT)
  - Type: Research Paper & Codebase
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: The landmark paper by William Peebles and Saining Xie that proved transformers scale smoothly for generative modeling, laying the foundation for OpenAI Sora, SD3, and FLUX.

### 📖 Documentation & References

- [DiT Official GitHub Repository](https://github.com/facebookresearch/DiT) — Clean PyTorch implementation of Diffusion Transformers with adaLN-Zero conditioning.
- [PixArt-alpha Documentation](https://pixart-alpha.github.io/) — High-resolution text-to-image synthesis competitive with Midjourney using DiT backbones.

### 🎓 Courses

- [Stanford CS231n - Lecture on Generative Vision Transformers](https://cs231n.stanford.edu/) — Justin Johnson covers ViT backbones applied to generative vision.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate
  - Why: Technical breakdown of why replacing UNets with standard ViT blocks yields higher FID with more compute.

### ▶️ YouTube — Hindi / Hinglish

- [Generative AI using LangChain in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Practical Hindi course on generative AI, prompt engineering, chains, and LLM application development.


### 📚 Books

- [Understanding Deep Learning (Simon Prince) — Chapter 12: Transformers and Self-Attention](https://udlbook.github.io/udlbook/) — Mathematical foundation of multi-head self-attention and patch embeddings.

### 💻 GitHub / Implementations

- [DiT](https://github.com/facebookresearch/DiT) — Scalable diffusion models with transformers by Meta AI.
- [FastDiT](https://github.com/DiT-3D/FastDiT-3D) — Accelerated training and inference for diffusion transformers.
- [Lumina-T2X](https://github.com/Alpha-VLLM/Lumina-T2X) — Unified diffusion transformer family for multimodal generative tasks.
- [HunyuanDiT](https://github.com/Tencent-Hunyuan/HunyuanDiT) — Multi-resolution text-to-image diffusion transformer with fine-grained bilingual understanding.

### 🧪 Practice

- [DiT CIFAR & ImageNet Demo Colab](https://github.com/facebookresearch/DiT) — Train a toy DiT on class-conditional latent representations.

### 🛠️ Projects

- [Build a Minimal DiT from Scratch in PyTorch](https://github.com/facebookresearch/DiT) — Implement patch embedding, adaptive LayerNorm (adaLN-Zero), and multi-head attention in under 300 lines.

## 🧭 Recommended Learning Path

1. Understand Vision Transformer (ViT) patch extraction and linear projection.
2. Study adaptive normalization (adaLN): predicting scale and shift parameters from timestep embeddings.
3. Explore why adaLN-Zero initializes residual blocks to identity transformations for stable early training.
4. Analyze the empirical scaling curves showing FID improvements as transformer compute increases.
5. Examine modern multi-stream DiTs where text tokens and image tokens interact in joint attention blocks.

## ⭐ Top 3 Resources

1. [DiT Paper & Code (Peebles & Xie)](https://arxiv.org/abs/2212.09748) — The seminal research paper that unlocked modern transformer-based visual generation.
2. [PixArt-alpha](https://github.com/PixArt-alpha/PixArt-alpha) — Pioneering open-source text-to-image DiT with fast training convergence.
3. [Lumina-T2X](https://github.com/Alpha-VLLM/Lumina-T2X) — Scalable unified diffusion transformer family for high-resolution images, video, and 3D.

