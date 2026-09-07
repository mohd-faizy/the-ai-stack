# Segmentation

> Image segmentation assigns a semantic class label or distinct instance identity to every individual pixel in an image.

## 🎯 What to Learn

- Taxonomy of segmentation: Semantic Segmentation, Instance Segmentation, and Panoptic Segmentation
- Encoder-decoder architectures: Fully Convolutional Networks (FCN) and U-Net skip connections
- Dilated (Atrous) convolutions and Atrous Spatial Pyramid Pooling (DeepLabv3+)
- Instance segmentation: Mask R-CNN and RoIAlign vs RoIPool
- Foundation segmentation: Segment Anything (SAM) and SAM 2 for streaming video segmentation
- Loss functions: Dice loss, Focal loss, and Cross-Entropy loss for pixel-level class imbalance
- Evaluation metrics: Mean Intersection over Union (mIoU) and pixel accuracy

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Segment Anything 2 (SAM 2) by Meta AI Research](https://ai.meta.com/sam2/)
  - Type: Foundation Model & Codebase
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: SAM 2 is the breakthrough zero-shot promptable foundation model for visual segmentation across both static images and streaming video.

### 📖 Documentation & References

- [SAM 2 GitHub Repository & Docs](https://github.com/facebookresearch/sam2) — Meta's official code for promptable visual segmentation in images and video.
- [Detectron2 Documentation (Meta)](https://detectron2.readthedocs.io/) — High-performance modular library powering Mask R-CNN and panoptic segmentation research.

### 🎓 Courses

- [Deep Learning for Computer Vision (Michigan EECS 498-007) - Lecture on Segmentation](https://web.eecs.umich.edu/~justincj/teaching/eecs498/WI2022/) — Rigorous technical breakdown of semantic segmentation and Mask R-CNN.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate
  - Why: In-depth review of Meta's promptable image segmentation foundation model, mask decoder, and data engine.
- [Aladdin Persson: Video Guides & Tutorials](https://www.youtube.com/@aladdinpersson)
  - Channel: Aladdin Persson
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Complete PyTorch implementation of the U-Net architecture and Dice loss function.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Deep Learning for Vision Systems by Mohamed Elgendy — Chapter 7: Semantic Segmentation](https://www.manning.com/books/deep-learning-for-vision-systems) — Clear architectural drawings of FCNs, U-Nets, and DeepLab.

### 💻 GitHub / Implementations

- [mohd-faizy/TensorFlow-Advanced](https://github.com/mohd-faizy/TensorFlow-Advanced) — Advanced computer vision implementations covering semantic segmentation with U-Net, FCN, and custom loss functions.
- [Segment Anything](https://github.com/facebookresearch/segment-anything) — General-purpose segmentation model.
- [Segment Anything 2](https://github.com/facebookresearch/sam2) — SAM for images and videos.
- [MMSegmentation](https://github.com/open-mmlab/mmsegmentation) — Semantic segmentation toolbox.
- [Mask2Former](https://github.com/facebookresearch/Mask2Former) — Universal image segmentation.
- [SegFormer](https://github.com/NVlabs/SegFormer) — Simple and efficient transformer segmentation.
- [U-Net](https://github.com/milesial/Pytorch-UNet) — Popular biomedical segmentation architecture.

### 🧪 Practice

- [Cityscapes Benchmark](https://www.cityscapes-dataset.com/) — Premier benchmark dataset for semantic and instance segmentation in autonomous driving.

### 🛠️ Projects

- [Interactive Zero-Shot Video Object Masking with SAM 2](https://github.com/facebookresearch/sam2) — Build a video editing pipeline that segments and tracks target objects across frames using click prompts.

## 🧭 Recommended Learning Path

1. Understand pixel-level classification and the difference between semantic and instance segmentation.
2. Build a U-Net architecture implementing contracting and expanding paths with skip connections.
3. Master Mask R-CNN: understand how RoIAlign preserves sub-pixel spatial accuracy.
4. Explore promptable segmentation: points, bounding boxes, and text prompts with SAM.
5. Deploy SAM 2 for streaming video segmentation with memory banks and temporal propagation.

## ⭐ Top 3 Resources

1. [Segment Anything 2 (SAM 2)](https://ai.meta.com/sam2/) — The state-of-the-art foundation model for zero-shot image and video segmentation.
2. [Detectron2 (Meta)](https://github.com/facebookresearch/detectron2) — The most reliable, high-performance library for Mask R-CNN and instance segmentation.
3. [U-Net Paper (Ronneberger et al.)](https://arxiv.org/abs/1505.04597) — The foundational architecture that defined biomedical and general image segmentation.

