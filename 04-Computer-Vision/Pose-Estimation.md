# Pose Estimation

> Pose estimation detects and tracks spatial keypoints of human bodies, hands, faces, and articulated objects in 2D and 3D space.

## 🎯 What to Learn

- Keypoint detection representations: heatmaps (Gaussian peaks) vs direct regression
- Top-down (detect human then keypoints) vs Bottom-up (detect all keypoints then group into humans)
- Part Affinity Fields (PAFs) and associative embeddings for bottom-up multi-person grouping
- 2D keypoints to 3D skeleton lifting using depth cameras and temporal transformers
- Real-time edge landmark tracking with Google MediaPipe (BlazePose, BlazeFace)
- High-accuracy research frameworks: MMPose, OpenPose, and HRNet (High-Resolution Network)
- Evaluation metrics: Object Keypoint Similarity (OKS) and Mean Per Joint Position Error (MPJPE)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Google MediaPipe Pose & Hands](https://developers.google.com/mediapipe)
  - Type: Framework & Documentation
  - Language: English
  - Level: Beginner to Intermediate
  - Why recommended: MediaPipe offers unparalleled real-time on-device 3D landmark tracking across mobile, web, and desktop without requiring high-end GPUs.

### 📖 Documentation & References

- [Google MediaPipe Pose Guide](https://developers.google.com/mediapipe/solutions/vision/pose_landmarker) — Official guide for tracking 33 3D body keypoints in real time.
- [MMPose Documentation (OpenMMLab)](https://mmpose.readthedocs.io/) — Comprehensive open-source pose estimation toolbox covering top-down, bottom-up, 3D, and whole-body pose.
- [OpenPose Documentation](https://github.com/CMU-Perceptual-Computing-Lab/openpose) — The seminal real-time multi-person keypoint detection library developed by CMU.

### 🎓 Courses

- [Computer Vision with MediaPipe & OpenCV (Murtaza's Workshop)](https://www.computervision.zone/courses/mediapipe-opencv-projects/) — Project-based curriculum building pose tracking, fitness counters, and virtual gestures.

### ▶️ YouTube — English

- [AI Pose Estimation with Python and OpenCV](https://www.youtube.com/watch?v=06TE_U21FK4)
  - Channel: Nicholas Renotte
  - Language: English
  - Type: Project Tutorial
  - Level: Beginner
  - Why: Full code walkthrough building an AI gym tracker counting bicep curls and squats using MediaPipe.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Computer Vision: Algorithms and Applications by Richard Szeliski — Chapter 14: People Detection & Pose](https://szeliski.org/Book/) — Thorough treatment of articulated human body modeling and tracking.

### 💻 GitHub / Implementations

- [MMPose](https://github.com/open-mmlab/mmpose) — Open-source pose estimation toolbox.
- [MediaPipe](https://github.com/google-ai-edge/mediapipe) — Cross-platform ML pipelines for pose, hands, face.
- [OpenPose](https://github.com/CMU-Perceptual-Computing-Lab/openpose) — Real-time multi-person pose estimation.
- [AlphaPose](https://github.com/MVIG-SJTU/AlphaPose) — Real-time multi-person pose estimation.
- [ViTPose](https://github.com/ViTAE-Transformer/ViTPose) — Vision transformer for pose estimation.

### 🧪 Practice

- [COCO Keypoint Detection Challenge](https://cocodataset.org/#keypoints-eval) — The standard multi-person 2D keypoint evaluation benchmark.

### 🛠️ Projects

- [Real-Time AI Physical Therapy & Ergonomics Monitor](https://developers.google.com/mediapipe) — Calculate joint angles across time to detect postural anomalies and provide audio feedback in real time.

## 🧭 Recommended Learning Path

1. Understand coordinate representation of keypoints and Object Keypoint Similarity (OKS).
2. Deploy MediaPipe BlazePose for real-time 33-landmark 3D skeletal tracking in Python.
3. Calculate 3D joint angles using vector dot products across shoulder-elbow-wrist coordinates.
4. Study High-Resolution Net (HRNet) and understand why maintaining high-resolution representations is vital for keypoints.
5. Explore whole-body pose estimation combining body, face, and hand landmarks with MMPose.

## ⭐ Top 3 Resources

1. [Google MediaPipe](https://developers.google.com/mediapipe) — The most efficient, ubiquitous library for cross-platform real-time pose tracking.
2. [MMPose](https://github.com/open-mmlab/mmpose) — The most modular, state-of-the-art research codebase for 2D and 3D pose estimation.
3. [OpenPose (CMU)](https://github.com/CMU-Perceptual-Computing-Lab/openpose) — The pioneering seminal library for real-time multi-person part affinity fields.

