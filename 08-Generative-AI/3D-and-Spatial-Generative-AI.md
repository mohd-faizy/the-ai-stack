# 3D & Spatial Generative AI

> Generative 3D AI transforms 2D images, text prompts, and multi-view captures into production-ready 3D meshes, textured models, and spatial assets.

## 🎯 What to Learn

- Image-to-3D vs Text-to-3D generation pipelines
- Feed-forward Large Reconstruction Models (LRM): TripoSR, InstantMesh, and LGM
- Triplane representations, Neural Radiance Fields, and differentiable mesh extraction (Marching Cubes)
- Score Distillation Sampling (SDS) and DreamFusion mechanics
- 3D Gaussian Splatting generation and structured 3D asset generation (Trellis)
- Exporting generated assets to game engines: GLTF, OBJ, FBX formats with PBR textures

## 📚 Best Learning Resources

### 🥇 Best Overall

- [TripoSR: Fast 3D Object Reconstruction from a Single Image](https://github.com/VAST-AI-Research/TripoSR)
  - Type: Repository & Pretrained Models
  - Language: English
  - Level: Intermediate
  - Why recommended: TripoSR (developed by VAST and Stability AI) generates high-quality textured 3D meshes from a single 2D image in under 0.5 seconds on consumer GPUs.

### 📖 Documentation & References

- [TripoSR GitHub](https://github.com/VAST-AI-Research/TripoSR) — Code, weights, and Gradio demo for sub-second image-to-3D generation.
- [InstantMesh Documentation](https://github.com/TencentARC/InstantMesh) — Tencent's framework for fast 3D mesh generation from a single image using multi-view diffusion.

### 🎓 Courses

- [Stanford CS231n - Lecture on 3D Deep Learning & Generative Models](https://cs231n.stanford.edu/) — Covers 3D point clouds, voxel representations, and neural implicit fields.

### ▶️ YouTube — English

- [Two Minute Papers: Video Guides & Tutorials](https://www.youtube.com/@TwoMinutePapers)
  - Channel: Two Minute Papers
  - Language: English
  - Type: Overview
  - Level: Beginner
  - Why: Exciting showcase demonstrating fast feed-forward single-image 3D asset generation.

### ▶️ YouTube — Hindi / Hinglish

- [Generative AI using LangChain in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Practical Hindi course on generative AI, prompt engineering, chains, and LLM application development.


### 📚 Books

- [Foundations of 3D Computer Vision by Klaus D. Tönnies](https://link.springer.com/book/10.1007/978-1-4471-2920-2) — Academic foundations of 3D geometry and volumetric representations.

### 💻 GitHub / Implementations

- [TRELLIS](https://github.com/microsoft/TRELLIS) — Structured 3D asset generation from images by Microsoft.
- [TripoSR](https://github.com/VAST-AI-Research/TripoSR) — Fast feed-forward 3D mesh reconstruction from a single image.
- [SV3D / SV4D](https://github.com/Stability-AI/generative-models) — Stable Video 3D and 4D synthesis by Stability AI.
- [InstantMesh](https://github.com/TencentARC/InstantMesh) — Efficient 3D mesh generation from single images via multiview diffusion.
- [DreamGaussian](https://github.com/dreamgaussian/dreamgaussian) — Generative 3D Gaussian splatting for rapid asset creation.
- [LGM](https://github.com/3DTopia/LGM) — Large Gaussian model for 3D generation from text or image.
- [Shap-E](https://github.com/openai/shap-e) — Generating 3D implicit functions conditioned on text or images.
- [Point-E](https://github.com/openai/point-e) — Point cloud generation conditioned on text or images by OpenAI.
- [Wonder3D](https://github.com/xxlong0/Wonder3D) — Single image to cross-domain consistent 3D representations.

### 🧪 Practice

- [TripoSR Hugging Face Space](https://huggingface.co/spaces/stabilityai/TripoSR) — Test instant 3D mesh generation from uploaded photos in your browser.

### 🛠️ Projects

- [Automated 2D-to-3D Game Asset Pipeline](https://github.com/VAST-AI-Research/TripoSR) — Build an automated asset generator taking concept art images and exporting rigged GLTF models for Unity/Unreal.

## 🧭 Recommended Learning Path

1. Understand 3D coordinate representations: voxels, point clouds, signed distance functions (SDF), and polygonal meshes.
2. Explore the difference between optimization-based generation (Score Distillation Sampling) and feed-forward Large Reconstruction Models (LRMs).
3. Run TripoSR on transparent PNGs and inspect generated vertices, faces, and UV textures.
4. Use InstantMesh multi-view diffusion to create diverse novel view perspectives.
5. Export 3D assets to Blender and optimize topology using quad remeshing.

## ⭐ Top 3 Resources

1. [TripoSR (Stability AI / VAST)](https://github.com/VAST-AI-Research/TripoSR) — The fastest, most accessible open-source feed-forward image-to-3D generator.
2. [InstantMesh (Tencent ARC)](https://github.com/TencentARC/InstantMesh) — High-quality multi-view diffusion pipeline creating clean 3D meshes.
3. [DreamFusion Paper (Poole et al.)](https://arxiv.org/abs/2209.14988) — The seminal paper that introduced Score Distillation Sampling (SDS) for 3D generation.

