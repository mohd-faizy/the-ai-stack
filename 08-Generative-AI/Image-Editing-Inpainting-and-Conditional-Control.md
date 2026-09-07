# Image Editing, Inpainting & Conditional Control

> Conditional control mechanisms and semantic inpainting guide generative diffusion models with spatial structural conditioning (edges, poses, depth) and prompt editing instructions.

## 🎯 What to Learn

- ControlNet: adding spatial conditioning (Canny edges, depth maps, human pose, line art) to frozen diffusion backbones
- Zero-convolution layers and gradient preservation during ControlNet training
- IP-Adapter (Image Prompt Adapter): cross-attention image conditioning for zero-shot style and subject transfer
- Inpainting mechanics: masked latent replacement vs full inpainting model fine-tuning
- Instruction-based editing: InstructPix2Pix ('make it winter', 'add sunglasses') and prompt-to-prompt cross-attention editing
- Adapter merging: combining multiple ControlNets (pose + depth) simultaneously in ComfyUI

## 📚 Best Learning Resources

### 🥇 Best Overall

- [ControlNet: Adding Conditional Control to Text-to-Image Diffusion Models](https://github.com/lllyasviel/ControlNet)
  - Type: Repository & Research Paper
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: ControlNet by Lvmin Zhang is the seminal breakthrough that gave artists and engineers pixel-perfect structural control over diffusion outputs without degrading original model quality.

### 📖 Documentation & References

- [ControlNet in Diffusers Documentation](https://huggingface.co/docs/diffusers/main/en/using-diffusers/controlnet) — Official tutorial on using ControlNet pipelines with Stable Diffusion and SDXL.
- [IP-Adapter GitHub Repository](https://github.com/tencent-ailab/IP-Adapter) — Image prompt adapter enabling image-as-prompt capability with decoupled cross-attention.

### 🎓 Courses

- [Hugging Face Diffusion Class - Controlled Generation](https://github.com/huggingface/diffusion-models-class) — Hands-on guide to training and running ControlNet and adapters.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate
  - Why: Technical explanation of locked model weights, trainable copies, and zero-convolutions.
- [Matt3o: Video Guides & Tutorials (Matt3o)](https://www.youtube.com/results?search_query=Matt3o%20Matt3o%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Matt3o
  - Language: English
  - Type: Tutorial
  - Level: Beginner to Intermediate
  - Why: Hands-on walkthrough using OpenPose, Depth, Canny, and LineArt ControlNets.

### ▶️ YouTube — Hindi / Hinglish

- [Generative AI using LangChain in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Practical Hindi course on generative AI, prompt engineering, chains, and LLM application development.


### 📚 Books

- [Generative Deep Learning (David Foster) — Chapter 9: Advanced Diffusion Models](https://www.oreilly.com/library/view/generative-deep-learning/9781098134174/) — Covers conditional generation, ControlNet, and latent inpainting.

### 💻 GitHub / Implementations

- [ControlNet](https://github.com/lllyasviel/ControlNet) — Structural conditioning for diffusion models (edges, poses, depth).
- [IP-Adapter](https://github.com/tencent-ailab/IP-Adapter) — Image prompt adapter for pretrained text-to-image diffusion models.
- [T2I-Adapter](https://github.com/TencentARC/T2I-Adapter) — Lightweight adapter for controlling color, depth, and sketch guidance.
- [InstantID](https://github.com/instantX-research/InstantID) — Zero-shot identity-preserving image generation with single facial images.
- [InstructPix2Pix](https://github.com/timothybrooks/instruct-pix2pix) — Edit images using natural language text instructions.
- [Inpaint Anything](https://github.com/geekyutao/Inpaint-Anything) — Segment Anything (SAM) combined with diffusion for seamless inpainting.
- [DragGAN](https://github.com/XingangPan/DragGAN) — Interactive point-based manipulation on generative image manifolds.
- [AnimateAnyone](https://github.com/HumanAIGC/AnimateAnyone) — Consistent character animation from reference images.

### 🧪 Practice

- [ControlNet Spaces on Hugging Face](https://huggingface.co/spaces) — Interactive playground testing Canny edge, depth map, and Scribble conditional generation.

### 🛠️ Projects

- [Virtual Fashion Try-On Pipeline](https://github.com/tencent-ailab/IP-Adapter) — Combine DensePose ControlNet with IP-Adapter to transfer clothing garments onto human models with realistic drapery.

## 🧭 Recommended Learning Path

1. Understand why text alone is insufficient for spatial layout and exact character composition.
2. Explore zero-convolutions: 1x1 convolutions initialized with zeros to prevent harmful noise in early training.
3. Extract conditioning maps using OpenCV (Canny) and MediaPipe (OpenPose).
4. Deploy IP-Adapter to transfer visual character identity across diverse background scenes.
5. Implement multi-ControlNet workflows balancing pose, depth, and edge guidance simultaneously.

## ⭐ Top 3 Resources

1. [ControlNet (Lvmin Zhang)](https://github.com/lllyasviel/ControlNet) — The seminal innovation providing exact spatial conditioning to diffusion models.
2. [IP-Adapter (Tencent AI Lab)](https://github.com/tencent-ailab/IP-Adapter) — The gold standard for decoupled image-prompt cross-attention conditioning.
3. [InstructPix2Pix (Brooks et al.)](https://github.com/timothybrooks/instruct-pix2pix) — Pioneering model enabling natural language instruction-based image editing.

