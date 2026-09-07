# Perception for Driving

> Perception for autonomous driving fuses cameras, LiDAR, and radar into unified 3D representations (Bird's Eye View - BEV) to detect obstacles, classify road lanes, and track dynamic objects.

## 🎯 What to Learn

- Bird's Eye View (BEV) perception architectures: BEVFormer, BEVDet, and Lift-Splat-Shoot (LSS)
- 3D object detection from point clouds: CenterPoint, PointPillars, and VoxelNet (OpenPCDet)
- Multi-camera temporal fusion and occupancy grid prediction (OccNet)
- End-to-end driving architectures: UniAD (Planning-oriented Autonomous Driving)
- Autonomous driving benchmarks: nuScenes, Waymo Open Dataset, and KITTI

## 📚 Best Learning Resources

### 🥇 Best Overall

- [BEVFormer: Learning Bird's-Eye-View Representation from Multi-Camera Images](https://github.com/fundamentalvision/BEVFormer)
  - Type: Seminal Architecture & Docs
  - Language: English
  - Level: Advanced
  - Why recommended: BEVFormer (Shanghai AI Lab) pioneered spatiotemporal transformers that transform multi-camera perspective images into unified Bird's-Eye-View grids for 3D object detection and map construction.

### 📖 Documentation & References

- [BEVFormer Documentation](https://github.com/fundamentalvision/BEVFormer) — Architecture details, nuScenes benchmark setup, and PyTorch training recipes.
- [OpenPCDet Documentation](https://github.com/open-mmlab/OpenPCDet) — OpenMMLab's modular framework for LiDAR-based 3D object detection.
- [nuScenes Dataset & DevKit](https://www.nuscenes.org/) — The definitive multi-modal autonomous driving benchmark with 3D bounding boxes.

### 🎓 Courses

- [Visual Perception for Self-Driving Cars (Univ. of Toronto / Coursera)](https://www.coursera.org/learn/visual-perception-self-driving-cars) — Course covering camera geometry, object detection, semantic segmentation, and optical flow.

### ▶️ YouTube — English

- [AI Research Summaries: Video Guides & Tutorials (AI Research Summaries)](https://www.youtube.com/results?search_query=AI%20Research%20Summaries%20AI%20Research%20Summaries%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: AI Research Summaries
  - Language: English
  - Type: Paper Review
  - Level: Advanced
  - Why: Technical breakdown of spatial cross-attention, temporal self-attention, and BEV query formulation.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Computer Vision for Autonomous Vehicles](https://www.nowpublishers.com/article/Details/CGV-068) — Janai, Güney, Behl, and Geiger authoritative survey covering 2D/3D detection and tracking.

### 💻 GitHub / Implementations

- [fundamentalvision/BEVFormer](https://github.com/fundamentalvision/BEVFormer) — BEVFormer: a cutting-edge autonomous driving perception framework.
- [open-mmlab/OpenPCDet](https://github.com/open-mmlab/OpenPCDet) — OpenPCDet is a clear, comprehensive, and self-contained open-source project for LiDAR-based 3D object detection.
- [OpenDriveLab/UniAD](https://github.com/OpenDriveLab/UniAD) — UniAD: Planning-oriented Autonomous Driving (CVPR 2023 Best Paper).

## 📄 Foundational Papers

- [BEVFormer: Learning Bird's-Eye-View Representation from Multi-Camera Images via Spatiotemporal Transformers](https://arxiv.org/abs/2203.17270) — Li et al. (ECCV 2022) seminal paper introducing spatiotemporal BEV feature extraction.
- [Planning-oriented Autonomous Driving (UniAD)](https://arxiv.org/abs/2212.10156) — Hu et al. (CVPR 2023 Best Paper) uniting perception, prediction, and planning in an end-to-end framework.

### 🧪 Practice

- [nuScenes Tutorial Notebook](https://www.nuscenes.org/nuscenes#tutorials) — Load and visualize multi-camera synchronized frames with LiDAR point clouds and 3D bounding boxes.

### 🛠️ Projects

- [Multi-Camera 3D Obstacle Detector on nuScenes](https://github.com/fundamentalvision/BEVFormer) — Train BEVFormer on nuScenes mini dataset to project 6 surround-view camera feeds into a top-down BEV map with detected cars and pedestrians.

## 🧭 Recommended Learning Path

1. Learn why 2D bounding boxes in camera view are insufficient for autonomous driving.
2. Study the Lift-Splat-Shoot (LSS) depth distribution projection technique.
3. Understand BEV queries: predefined grid anchors in 3D world space that attend to 2D image features.
4. Explore LiDAR voxelization and point pillars in OpenPCDet.
5. Study UniAD's unified philosophy: optimizing perception specifically to improve downstream driving safety.

## ⭐ Top 3 Resources

1. BEVFormer (fundamentalvision/BEVFormer)
2. OpenPCDet (open-mmlab)
3. UniAD (OpenDriveLab)

