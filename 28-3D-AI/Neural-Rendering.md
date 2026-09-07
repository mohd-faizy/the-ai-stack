# Neural Rendering

> Neural rendering captures and renders complex 3D scenes with photo-realistic detail from collections of 2D photographs using Neural Radiance Fields (NeRF) and 3D Gaussian Splatting (3DGS).

## 🎯 What to Learn

- Neural Radiance Fields (NeRF): Volumetric rendering equations, MLP coordinate mapping, and positional encoding
- 3D Gaussian Splatting (3DGS): Explicit rasterization, covariance ellipsoids, and real-time 100+ FPS rendering
- Nerfstudio: Modular open-source framework for training and visualizing NeRFs
- gsplat and diff-gaussian-rasterization: GPU CUDA acceleration for splatting
- Camera calibration and Structure-from-Motion (SfM) using COLMAP

## 📚 Best Learning Resources

### 🥇 Best Overall

- [3D Gaussian Splatting for Real-Time Radiance Field Rendering](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/)
  - Type: Seminal Project & Reference
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: 3D Gaussian Splatting (Inria) redefined computer graphics by replacing slow volumetric ray-marching with explicit 3D Gaussian primitives rasterized in real time at >100 FPS.

### 📖 Documentation & References

- [Nerfstudio Documentation](https://docs.nerf.studio/) — Comprehensive framework for end-to-end NeRF and Gaussian Splatting workflows.
- [3D Gaussian Splatting Official Docs](https://github.com/graphdeco-inria/gaussian-splatting) — Official CUDA implementation, dataset preparation with COLMAP, and real-time SIBR viewer.
- [gsplat Documentation (Nerfstudio)](https://docs.gsplat.studio/) — Clean, differentiable, high-speed Python library for 3D Gaussian Splatting.

### 🎓 Courses

- [Neural Rendering Course (SIGGRAPH Courses)](https://www.siggraph.org/) — Annual SIGGRAPH lecture series covering NeRFs, differentiable rendering, and Gaussian Splatting.

### ▶️ YouTube — English

- [Two Minute Papers: Video Guides & Tutorials](https://www.youtube.com/@TwoMinutePapers)
  - Channel: Two Minute Papers
  - Language: English
  - Type: Overview
  - Level: Beginner to Intermediate
  - Why: Demonstration of transforming 2D phone photos into a fully navigable, photorealistic 3D virtual scene.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Physically Based Rendering: From Theory to Implementation](https://pbr-book.org/) — Matt Pharr, Wenzel Jakob, and Greg Humphreys definitive textbook on ray tracing and radiative transport.

### 💻 GitHub / Implementations

- [graphdeco-inria/gaussian-splatting](https://github.com/graphdeco-inria/gaussian-splatting) — Original reference implementation for 3D Gaussian Splatting.
- [nerfstudio-project/nerfstudio](https://github.com/nerfstudio-project/nerfstudio) — A collaboration-friendly studio for NeRF development and visualization.
- [nerfstudio-project/gsplat](https://github.com/nerfstudio-project/gsplat) — CUDA-accelerated differentiable 3D Gaussian splatting library.

## 📄 Foundational Papers

- [3D Gaussian Splatting for Real-Time Radiance Field Rendering](https://arxiv.org/abs/2308.04079) — Kerbl, Kopanas, Leimkühler, and Drettakis (SIGGRAPH 2023 Best Paper) introducing 3DGS.
- [NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis](https://arxiv.org/abs/2003.08934) — Mildenhall et al. (ECCV 2020 Best Paper) seminal paper introducing coordinate-based neural radiance fields.

### 🧪 Practice

- [Luma AI / Polycam Web Viewers](https://lumalabs.ai/) — Upload phone videos to train and view Gaussian Splats in the browser.

### 🛠️ Projects

- [Real-Time Campus Digital Twin with 3D Gaussian Splatting](https://docs.nerf.studio/) — Capture 100 photos of an architectural landmark, run COLMAP for camera poses, train a 3D Gaussian Splat in Nerfstudio, and deploy a web viewer.

## 🧭 Recommended Learning Path

1. Learn camera calibration and Structure-from-Motion (SfM) fundamentals in COLMAP.
2. Understand NeRF's volumetric rendering equation and why ray-marching is computationally slow.
3. Study the mathematical formulation of 3D Gaussians: center position, opacity, 3D covariance, and spherical harmonics for view-dependent color.
4. Train a 3D Gaussian Splat using Nerfstudio or `gsplat` on a custom video capture.
5. Render novel trajectories at 120 FPS in an interactive browser viewer.

## ⭐ Top 3 Resources

1. 3D Gaussian Splatting (Inria)
2. Nerfstudio (nerfstudio-project)
3. NeRF Seminal Paper (Mildenhall et al.)

