# ControlNet & Guided Generation

> ControlNet and spatial guidance frameworks condition diffusion models on structural inputs—such as edge maps, human poses, depth estimations, and reference facial identities.

## 🎯 What to Learn

- ControlNet architecture: Zero convolutions, locked model copies, and trainable adapters
- Conditioning modalities: Canny edge detection, OpenPose, Depth (MiDaS/ZoeDepth), and Normal maps
- IP-Adapter: Image prompt adapters for style, composition, and visual reference conditioning
- InstantID: Zero-shot identity-preserving facial generation from a single portrait
- T2I-Adapter: Lightweight spatial conditioning without full model duplication

## 📚 Best Learning Resources

### 🥇 Best Overall

- [ControlNet: Adding Conditional Control to Text-to-Image Diffusion Models](https://github.com/lllyasviel/ControlNet)
  - Type: Seminal Framework & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: ControlNet by Lvmin Zhang fundamentally revolutionized generative AI by enabling spatial, structural, and pose conditioning over diffusion backbones without destroying pre-trained weights.

### 📖 Documentation & References

- [ControlNet Official Repository](https://github.com/lllyasviel/ControlNet) — Architectural overview, pre-trained model weights, and inference pipelines.
- [IP-Adapter Documentation](https://github.com/tencent-ailab/IP-Adapter) — Tencent AI Lab image prompt adapter for pretrained text-to-image diffusion models.
- [Hugging Face ControlNet Guide](https://huggingface.co/docs/diffusers/using-diffusers/controlnet) — Guide to inferencing and training ControlNet using Diffusers.

### 🎓 Courses

- [Controlling Diffusion Models (fast.ai)](https://course.fast.ai/) — Lectures on conditioning, adapter layers, and spatial control in diffusion models.

### ▶️ YouTube — English

- [Two Minute Papers: Video Guides & Tutorials](https://www.youtube.com/@TwoMinutePapers)
  - Channel: Two Minute Papers
  - Language: English
  - Type: Overview
  - Level: Beginner to Intermediate
  - Why: Visual breakdown showing how human pose estimation and depth maps control diffusion outputs.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Computer Vision: Principles and Algorithms](https://szeliski.org/Book/) — Covers Canny edge detection, depth map estimation, and spatial feature transformations.

### 💻 GitHub / Implementations

- [lllyasviel/ControlNet](https://github.com/lllyasviel/ControlNet) — Let us control diffusion models with spatial conditions.
- [tencent-ailab/IP-Adapter](https://github.com/tencent-ailab/IP-Adapter) — The image prompt adapter for text-to-image diffusion models.
- [InstantID/InstantID](https://github.com/InstantID/InstantID) — Zero-shot Identity-Preserving Generation in Seconds.

## 📄 Foundational Papers

- [Adding Conditional Control to Text-to-Image Diffusion Models (ControlNet)](https://arxiv.org/abs/2302.05543) — Zhang and Agrawala (ICCV 2023 Best Paper Honorable Mention) landmark paper introducing ControlNet.
- [IP-Adapter: Text Compatible Image Prompt Adapter for Text-to-Image Diffusion Models](https://arxiv.org/abs/2308.06721) — Ye et al. (2023) seminal paper on cross-attention image conditioning.

### 🧪 Practice

- [ControlNet Diffusers Notebook](https://huggingface.co/docs/diffusers/using-diffusers/controlnet) — Hands-on code running Canny and OpenPose ControlNet pipelines in Python.

### 🛠️ Projects

- [Architectural Rendering from 2D Floorplans](https://github.com/lllyasviel/ControlNet) — Build a tool that takes 2D CAD floorplans, extracts line edges, and generates photorealistic interior architectural renderings via ControlNet.

## 🧭 Recommended Learning Path

1. Learn why text prompts alone are insufficient for precise spatial layouts and poses.
2. Study Zero Convolutions: 1x1 convolutions with weights and bias initialized to zero to protect base model capabilities.
3. Implement OpenPose pre-processing to extract skeleton coordinates from reference human photos.
4. Chain multiple ControlNets (e.g. OpenPose + Depth) to constrain both human subject and background room architecture.
5. Explore IP-Adapter to inject image-based style references alongside text prompts.

## ⭐ Top 3 Resources

1. ControlNet (lllyasviel/ControlNet)
2. IP-Adapter (tencent-ailab)
3. ControlNet Paper (Zhang & Agrawala)

