# 3D Generation

> 3D Generation models synthesize textured 3D meshes, point clouds, and volumetric representations directly from single photographs or natural language descriptions in seconds.

## 🎯 What to Learn

- Feed-forward 3D reconstruction: TripoSR, CRM, InstantMesh, and TRELLIS
- Point-E and Shap-E: OpenAI diffusion models for 3D point clouds and implicit functions
- Multi-view diffusion models: Zero123, Zero123++, and Wonder3D
- Large Reconstruction Models (LRMs) and triplane transformer architectures
- Texture generation and UV unwrapping for game-engine-ready assets

## 📚 Best Learning Resources

### 🥇 Best Overall

- [TRELLIS: Structured 3D Latents for Scalable and Versatile 3D Generation (Microsoft)](https://trellis3d.github.io/)
  - Type: State-of-the-Art Framework & Model
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: TRELLIS by Microsoft Research unifies 3D representations (radiance fields, 3D Gaussians, and textured meshes) through structured 3D latents, generating production-grade 3D assets in seconds.

### 📖 Documentation & References

- [TRELLIS Documentation](https://trellis3d.github.io/) — Code, interactive viewer, and Blender export workflows for TRELLIS.
- [TripoSR Documentation](https://github.com/VAST-AI-Research/TripoSR) — Fast 3D object reconstruction from single images in under 0.5 seconds on consumer GPUs.
- [InstantMesh Documentation](https://github.com/TencentARC/InstantMesh) — Tencent open framework for fast multi-view 3D mesh generation.

### 🎓 Courses

- [3D Computer Vision & Neural Rendering (Stanford CS 231A)](https://web.stanford.edu/class/cs231a/) — Stanford course covering multi-view geometry, epipolar geometry, and 3D reconstruction.

### ▶️ YouTube — English

- [Two Minute Papers: Video Guides & Tutorials](https://www.youtube.com/@TwoMinutePapers)
  - Channel: Two Minute Papers
  - Language: English
  - Type: Overview
  - Level: Beginner to Intermediate
  - Why: Visual breakdown showing single image to fully textured 3D mesh generation in real time.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Multiple View Geometry in Computer Vision](https://www.cambridge.org/core/books/multiple-view-geometry-in-computer-vision/40498DF0F5E349887C74A82F2F3DF6E9) — Hartley and Zisserman legendary textbook on 3D projective geometry and camera matrices.

### 💻 GitHub / Implementations

- [microsoft/TRELLIS](https://github.com/microsoft/TRELLIS) — TRELLIS: Structured 3D Latents for Scalable and Versatile 3D Generation.
- [VAST-AI-Research/TripoSR](https://github.com/VAST-AI-Research/TripoSR) — Fast 3D Object Reconstruction from a Single Image by Stability AI and VAST.
- [openai/shap-e](https://github.com/openai/shap-e) — Generate 3D objects conditioned on text or images using implicit functions.

## 📄 Foundational Papers

- [TRELLIS: Structured 3D Latents for Scalable and Versatile 3D Generation](https://arxiv.org/abs/2412.01506) — Xiang et al. (Microsoft Research 2024) establishing structured 3D latents for unified asset synthesis.
- [TripoSR: Fast 3D Object Reconstruction from a Single Image](https://arxiv.org/abs/2403.02151) — Tochilkin et al. (Stability AI / VAST 2024) Feed-forward LRM reconstruction architecture.

### 🧪 Practice

- [TRELLIS Hugging Face Space](https://huggingface.co/spaces/JeffreyXiang/TRELLIS) — Upload any 2D image and generate an interactive 3D GLB mesh in your browser.

### 🛠️ Projects

- [Automated E-Commerce 3D Asset Pipeline](https://github.com/VAST-AI-Research/TripoSR) — Build a service that takes product photos and generates interactive 3D GLTF models for web AR view.

## 🧭 Recommended Learning Path

1. Learn basic 3D representations: point clouds, voxel grids, signed distance functions (SDF), and polygonal meshes.
2. Study Multi-View Geometry: epipolar lines, camera intrinsics, and pose matrices.
3. Generate a 3D mesh from a single photo using TripoSR in Python.
4. Explore TRELLIS to generate textured meshes with clean quad topology.
5. Import generated `.glb` models into Blender or Unreal Engine for scene rendering.

## ⭐ Top 3 Resources

1. TRELLIS (Microsoft Research)
2. TripoSR (Stability AI & VAST)
3. Multiple View Geometry in Computer Vision (Hartley & Zisserman)

