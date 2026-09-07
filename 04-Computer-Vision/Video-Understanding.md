# Video Understanding

> Video understanding processes spatiotemporal video sequences to recognize human actions, track objects across time, and understand complex physical events.

## 🎯 What to Learn

- Spatiotemporal dynamics: 3D Convolutions (C3D, I3D) vs (2+1)D separable convolutions
- Optical flow: Farneback, Lucas-Kanade, RAFT (Recurrent All-Pairs Field Transforms)
- Multi-Object Tracking (MOT): tracking-by-detection, SORT, DeepSORT, ByteTrack, and BoT-SORT
- Video Transformers: TimeSformer, VideoMAE (Masked Autoencoders for Video), and ViViT
- Video reading and decoding optimization: Decord, PyAV, and GPU-accelerated NVDEC
- Action recognition, temporal action localization (TAL), and video captioning

## 📚 Best Learning Resources

### 🥇 Best Overall

- [VideoMAE & VideoMAE V2 (Masked Autoencoders for Video)](https://github.com/OpenGVLab/VideoMAE)
  - Type: Repository & Research Paper
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: VideoMAE demonstrates that self-supervised masked autoencoding with high masking ratios (90%) creates state-of-the-art video foundation representations.

### 📖 Documentation & References

- [MMTracking / MMAction2 Documentation (OpenMMLab)](https://mmaction2.readthedocs.io/) — Comprehensive open-source video understanding and action recognition toolbox.
- [Decord Documentation](https://github.com/dmlc/decord) — Efficient video reader designed specifically for deep learning with random frame seeking.
- [ByteTrack Documentation](https://github.com/ifzhang/ByteTrack) — Simple, high-performance multi-object tracker associating every detection box.

### 🎓 Courses

- [Stanford CS231n - Lecture on Video and Motion](https://cs231n.stanford.edu/) — Justin Johnson covers optical flow, two-stream networks, and 3D convolutions.

### ▶️ YouTube — English

- [Nicolai Nielsen - Computer Vision: Video Guides & Tutorials (Nicolai Nielsen - Computer Vision)](https://www.youtube.com/results?search_query=Nicolai%20Nielsen%20-%20Computer%20Vision%20Nicolai%20Nielsen%20-%20Computer%20Vision%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Nicolai Nielsen - Computer Vision
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Clear walkthrough of Kalman filtering, Hungarian matching, and recovering low-confidence occluded tracks.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Deep Learning for Vision Systems — Chapter 9: Video Understanding and Motion Analysis](https://www.manning.com/books/deep-learning-for-vision-systems) — Covers 3D CNNs, optical flow, and action recognition architectures.

### 💻 GitHub / Implementations

- [MMAction2](https://github.com/open-mmlab/mmaction2) — Video understanding toolbox.
- [SlowFast](https://github.com/facebookresearch/SlowFast) — Video recognition models.
- [PyTracking](https://github.com/visionml/pytracking) — Visual tracking library.
- [ByteTrack](https://github.com/FoundationVision/ByteTrack) — Multi-object tracking.
- [Norfair](https://github.com/tryolabs/norfair) — Lightweight object tracking.
- [supervision](https://github.com/roboflow/supervision) — Computer vision tools for detection, tracking, and annotation.

### 🧪 Practice

- [Kinetics-400 Action Recognition Benchmark](https://www.deepmind.com/open-source/kinetics) — The standard large-scale video dataset for training action recognition models.

### 🛠️ Projects

- [Real-Time Traffic Analytics & Vehicle Trajectory Tracking](https://github.com/ifzhang/ByteTrack) — Deploy YOLOv8 with ByteTrack to track vehicles across camera feeds, computing velocities and lane violations.

## 🧭 Recommended Learning Path

1. Understand the computational challenge of video: why processing 30 frames per second requires temporal subsampling.
2. Study optical flow and how RAFT uses recurrent neural networks to estimate pixel displacements.
3. Implement multi-object tracking using ByteTrack, Kalman filters, and IoU association.
4. Explore 3D CNNs (I3D) and how 2D convolutional weights are inflated to the time dimension.
5. Train a video transformer (TimeSformer or VideoMAE) leveraging divided space-time self-attention.

## ⭐ Top 3 Resources

1. [ByteTrack](https://github.com/ifzhang/ByteTrack) — The premier real-time multi-object tracking algorithm used in production.
2. [MMAction2](https://github.com/open-mmlab/mmaction2) — The most exhaustive open-source research toolbox for action recognition.
3. [VideoMAE (OpenGVLab)](https://github.com/OpenGVLab/VideoMAE) — Seminal self-supervised foundation model for modern video understanding.

