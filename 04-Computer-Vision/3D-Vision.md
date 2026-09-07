# 3D Computer Vision

> 3D computer vision reconstructs, analyzes, and synthesizes 3D spatial geometry, point clouds, meshes, and neural volumetric scenes from 2D imagery.

## 🎯 What to Learn

- 3D representations: point clouds, voxels, polygon meshes, and signed distance functions (SDF)
- Pinhole camera model: intrinsic and extrinsic matrix calibration, epipolar geometry, and disparity
- Structure from Motion (SfM) and Multi-View Stereo (MVS) with COLMAP
- Neural Radiance Fields (NeRF): volumetric rendering, position encoding, and view-dependent radiance
- 3D Gaussian Splatting (3DGS): real-time radiance field rendering using differentiable 3D ellipsoids
- Deep learning on point clouds: PointNet, PointNet++, and continuous convolutions
- Differentiable rendering and 3D mesh processing with PyTorch3D and Open3D

## 📚 Best Learning Resources

### 🥇 Best Overall

- [PyTorch3D: A Library for 3D Deep Learning (Meta AI Research)](https://pytorch3d.org/)
  - Type: Framework & Documentation
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: PyTorch3D provides optimized, batchable, and differentiable operators for 3D data, heterogenous meshes, point clouds, and differentiable rendering in PyTorch.

### 📖 Documentation & References

- [PyTorch3D Tutorials](https://pytorch3d.org/tutorials/) — Official tutorials covering fit textured meshes, point cloud rendering, and camera optimization.
- [Open3D Documentation](http://www.open3d.org/docs/release/) — Modern library for 3D data processing, point cloud registration, and mesh reconstruction.
- [3D Gaussian Splatting Official Repo](https://github.com/graphdeco-inria/gaussian-splatting) — Seminal real-time radiance field rendering implementation by Inria.

### 🎓 Courses

- [Introduction to 3D Vision by Prof. Daniel Cremers (TUM)](https://vision.in.tum.de/teaching/ss2021/mvg_ss2021) — Rigorous university lectures on multiple view geometry, visual SLAM, and dense 3D reconstruction.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate
  - Why: Visual explanation of hierarchical volume sampling, positional encoding, and 5D coordinate rendering.
- [Jon Barron: Video Guides & Tutorials (Jon Barron)](https://www.youtube.com/results?search_query=Jon%20Barron%20Jon%20Barron%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Jon Barron
  - Language: English
  - Type: Research Presentation
  - Level: Advanced
  - Why: In-depth technical breakdown of tile-based rasterization and 3D covariance splatting.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Multiple View Geometry in Computer Vision by Richard Hartley and Andrew Zisserman](https://www.robots.ox.ac.uk/~vgg/hzbook/) — The definitive mathematical bible on epipolar geometry, fundamental matrices, and camera matrices.

### 💻 GitHub / Implementations

- [Open3D](https://github.com/isl-org/Open3D) — 3D data processing library.
- [Open3D-ML](https://github.com/isl-org/Open3D-ML) — 3D machine learning extensions.
- [PyTorch3D](https://github.com/facebookresearch/pytorch3d) — 3D deep learning research.
- [Kaolin](https://github.com/NVIDIAGameWorks/kaolin) — 3D deep learning library by NVIDIA.
- [PointNet](https://github.com/charlesq34/pointnet) — Deep learning on point clouds.
- [Depth Anything](https://github.com/LiheYoung/Depth-Anything) — Foundation model for monocular depth estimation.
- [ZoeDepth](https://github.com/isl-org/ZoeDepth) — Zero-shot depth estimation.

### 🧪 Practice

- [COLMAP Structure-from-Motion Software](https://colmap.github.io/) — Reconstruct dense 3D point clouds from collections of smartphone photographs.

### 🛠️ Projects

- [Real-Time 3D Scene Reconstruction with Gaussian Splatting](https://github.com/graphdeco-inria/gaussian-splatting) — Capture 50 images of a physical object, compute camera poses with COLMAP, and train a 100+ FPS Gaussian splat.

## 🧭 Recommended Learning Path

1. Master pinhole camera mathematics: intrinsic matrix K, extrinsic rotation R, and translation T.
2. Understand epipolar geometry: essential matrix E, fundamental matrix F, and stereoscopic depth.
3. Run COLMAP on an image set to understand sparse bundle adjustment and multi-view stereo.
4. Dive into NeRF: implement volume rendering along rays using quadrature and MLPs in PyTorch.
5. Transition to 3D Gaussian Splatting: explore differentiable rasterization and adaptive density control.

## ⭐ Top 3 Resources

1. [PyTorch3D (Meta AI)](https://pytorch3d.org/) — The gold-standard library for differentiable 3D deep learning.
2. [3D Gaussian Splatting (Inria)](https://github.com/graphdeco-inria/gaussian-splatting) — The breakthrough technology revolutionizing novel view synthesis with real-time rendering.
3. [Hartley & Zisserman's Multiple View Geometry](https://www.robots.ox.ac.uk/~vgg/hzbook/) — The foundational mathematical masterpiece of 3D computer vision.

