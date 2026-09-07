# Object Detection

> Object detection identifies the spatial location (bounding boxes) and semantic category of multiple distinct objects within images and video streams.

## 🎯 What to Learn

- Two-stage vs one-stage detectors: R-CNN, Fast R-CNN, Faster R-CNN vs YOLO and SSD
- Anchor boxes, anchor-free detection, and multi-scale feature pyramids (FPN, PANet)
- Loss formulations: CIoU, GIoU, DIoU, and focal loss for class imbalance
- Post-processing: Non-Maximum Suppression (NMS), Soft-NMS, and confidence thresholding
- Modern YOLO architectures: YOLOv8, YOLOv9, YOLOv10 (NMS-free), and YOLO11
- Transformer-based detection: DETR (DEtection TRansformer), Deformable DETR, and RT-DETR
- Evaluation metrics: Intersection over Union (IoU), Precision, Recall, and mean Average Precision (mAP@50, mAP@50:95)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Ultralytics YOLO (v8 / 11) Documentation](https://docs.ultralytics.com/)
  - Type: Framework & Documentation
  - Language: English
  - Level: Beginner to Advanced
  - Why recommended: Ultralytics provides the most widely adopted, battle-tested real-time object detection framework with seamless CLI, Python API, and edge export pipelines.

### 📖 Documentation & References

- [Ultralytics Docs](https://docs.ultralytics.com/) — Comprehensive documentation for YOLOv8 and YOLO11 detection, segmentation, and pose tracking.
- [MMDetection Documentation](https://mmdetection.readthedocs.io/) — Open-source object detection toolbox based on PyTorch containing 100+ research algorithms.
- [RT-DETR Documentation](https://docs.ultralytics.com/models/rtdetr/) — Real-time DEtection TRansformer providing end-to-end NMS-free object detection.

### 🎓 Courses

- [DeepLearning.AI: Deep Learning Specialization - Convolutional Neural Networks](https://www.deeplearning.ai/courses/deep-learning-specialization/) — Andrew Ng explains YOLO, anchor boxes, and non-max suppression from first principles.

### ▶️ YouTube — English

- [YOLO Object Detection Explained Step-by-Step](https://www.youtube.com/watch?v=ag3DLKsl2vk)
  - Channel: Aladdin Persson
  - Language: English
  - Type: Code Walkthrough
  - Level: Intermediate
  - Why: Implements the original YOLOv1 from scratch in PyTorch, coding the loss function and grid mapping line-by-line.
- [DETR: End-to-End Object Detection with Transformers](https://www.youtube.com/watch?v=T35ba_VXkMY)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate to Advanced
  - Why: Detailed breakdown of bipartite matching loss and transformer encoder-decoder attention in DETR.

### ▶️ YouTube — Hindi / Hinglish

- [Train YOLOv8 on Custom Dataset Full Tutorial](https://www.youtube.com/watch?v=m9fH9OWn8YM)
  - Channel: Krish Naik
  - Language: Hindi / Hinglish
  - Type: Tutorial
  - Level: Beginner to Intermediate
  - Why: End-to-end custom dataset annotation with Roboflow, model training, and inference in Hinglish.

### 📚 Books

- [Deep Learning for Vision Systems by Mohamed Elgendy](https://www.manning.com/books/deep-learning-for-vision-systems) — Detailed breakdown of two-stage and one-stage object detection architectures.

### 💻 GitHub / Implementations

- [mohd-faizy/TensorFlow-Advanced](https://github.com/mohd-faizy/TensorFlow-Advanced) — Object detection architectures, bounding box coordinate regression, anchor boxes, and IoU metric evaluation in TensorFlow.
- [Ultralytics](https://github.com/ultralytics/ultralytics) — YOLOv8/v11 and beyond.
- [Detectron2](https://github.com/facebookresearch/detectron2) — Meta's detection and segmentation platform.
- [MMDetection](https://github.com/open-mmlab/mmdetection) — Object detection toolbox with 200+ models.
- [YOLOX](https://github.com/Megvii-BaseDetection/YOLOX) — Anchor-free YOLO detection.
- [DETR](https://github.com/facebookresearch/detr) — Detection transformer (end-to-end object detection).
- [YOLOv7](https://github.com/WongKinYiu/yolov7) — Trainable bag-of-freebies detection.
- [YOLOv9](https://github.com/WongKinYiu/yolov9) — Programmable gradient information detection.
- [Grounding DINO](https://github.com/IDEA-Research/GroundingDINO) — Open-set detection with language.
- [RT-DETR](https://github.com/lyuwenyu/RT-DETR) — Real-time detection transformer.
- [Co-DETR](https://github.com/Sense-X/Co-DETR) — Collaborative hybrid transformer detection.

### 🧪 Practice

- [COCO Dataset Benchmark](https://cocodataset.org/#detection-eval) — The standard benchmark for evaluating multi-class object detection models.

### 🛠️ Projects

- [Real-Time Edge Defect Detection System](https://docs.ultralytics.com/modes/train/) — Train a custom YOLO11 model on industrial manufacturing defects and export to ONNX / TensorRT.

## 🧭 Recommended Learning Path

1. Understand IoU (Intersection over Union) and bounding box coordinate representations.
2. Study Faster R-CNN: Region Proposal Networks (RPN) and RoI pooling.
3. Explore the single-stage revolution of YOLO and how multi-scale feature pyramids (FPN) detect small objects.
4. Train YOLOv8/11 on a custom labeled dataset using Roboflow and Ultralytics.
5. Understand DETR and set prediction using Hungarian matching loss without requiring NMS post-processing.

## ⭐ Top 3 Resources

1. [Ultralytics YOLO](https://docs.ultralytics.com/) — The premier production-grade real-time object detection framework.
2. [MMDetection (OpenMMLab)](https://github.com/open-mmlab/mmdetection) — The most exhaustive modular research codebase for object detection.
3. [DETR Paper & Code (Meta Research)](https://github.com/facebookresearch/detr) — The seminal work replacing hand-crafted heuristics with vision transformers.

