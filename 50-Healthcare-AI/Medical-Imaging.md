# Medical Imaging

> Deep learning frameworks, 3D segmentation architectures, and volumetric processing tools for radiological and pathological image analysis.

## 🎯 What to Learn

- Volumetric data formats: DICOM, NIfTI (.nii.gz), voxel spacing, slice thickness, and Hounsfield Unit (HU) windowing
- MONAI (Medical Open Network for AI): PyTorch-based open-source framework for deep learning in healthcare imaging
- nnU-Net: Self-configuring deep learning segmentation framework that automatically adapts to any new biomedical dataset
- TotalSegmentator: Robust tool to segment over 117 anatomical structures in CT scans out-of-the-box
- MedSAM: Medical adaptation of Meta's Segment Anything Model for promptable zero-shot organ/tumor segmentation
- Evaluation metrics: Dice similarity coefficient (DSC) and 95% Hausdorff Distance (HD95)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [MONAI (Medical Open Network for AI)](https://github.com/Project-MONAI/MONAI)
  - Type: Medical Deep Learning Standard
  - Language: English
  - Level: Intermediate
  - Why recommended: The definitive open-source biomedical imaging library backed by NVIDIA and leading medical institutions, offering specialized transforms, 3D neural network architectures, and deployment pipelines.

### 🎓 Courses

- [Coursera: AI for Medicine Specialization (DeepLearning.AI)](https://www.coursera.org/specializations/ai-for-medicine) — The premier medical AI specialization covering diagnostic imaging, prognosis models, and clinical NLP.

### ▶️ YouTube — English

- [Project MONAI / PyData: Video Guides & Tutorials](https://www.youtube.com/@PyDataTV)
  - Channel: Project MONAI / PyData
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Step-by-step walkthrough of 3D CT spleen segmentation using MONAI transforms, sliding window inference, and Dice loss.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Deep Learning for Medical Image Analysis by S. Kevin Zhou et al. (Academic Press)](https://www.elsevier.com/books/deep-learning-for-medical-image-analysis/zhou/978-0-12-810408-8) — The definitive academic textbook on architectures, registration, and segmentation in medical vision.

### 💻 GitHub / Implementations

- [MONAI](https://github.com/Project-MONAI/MONAI) — PyTorch-based framework for healthcare imaging.
- [nnU-Net](https://github.com/MIC-DKFZ/nnUNet) — Self-configuring segmentation for biomedical images.
- [TotalSegmentator](https://github.com/wasserth/TotalSegmentator) — Automatic segmentation of 104 anatomical structures.
- [MedSAM](https://github.com/bowang-lab/MedSAM) — Segment anything in medical images.
- [3D Slicer](https://github.com/Slicer/Slicer) — Medical image computing platform.
- [Cellpose](https://github.com/MouseLand/cellpose) — Generalist cell segmentation.

## 📄 Foundational Papers

- [nnU-Net: a self-configuring method for deep learning-based biomedical image segmentation](https://www.nature.com/articles/s41592-020-01008-z) — Isensee et al. landmark paper establishing that robust standard U-Nets outperform complex custom architectures.
- [Segment Anything in Medical Images (MedSAM)](https://www.nature.com/articles/s41467-024-44824-z) — Adapted Meta's SAM foundation model to universal medical image segmentation across 10+ modalities.

### 🧪 Practice

- [MONAI Tutorials Repository](https://github.com/Project-MONAI/tutorials) — Dozens of tested Jupyter notebooks covering 2D and 3D segmentation, classification, and GANs.

### 🛠️ Projects

- [3D Brain Tumor Segmentation with nnU-Net](https://github.com/MIC-DKFZ/nnUNet) — Train a self-configuring 3D U-Net on the BraTS (Brain Tumor Segmentation) dataset and evaluate Dice scores.

## 🧭 Recommended Learning Path

1. Understand medical volume geometries: Voxel spacing, slice thickness, and intensity windowing (Soft Tissue vs Bone).
2. Inspect CT/MRI scans in 3D Slicer or ITK-SNAP.
3. Load and preprocess NIfTI volumes using MONAI transforms.
4. Train a 3D U-Net with Dice loss using sliding window inference.
5. Explore nnU-Net for automated preprocessing and hyperparameter tuning on new medical datasets.

## ⭐ Top 3 Resources

1. MONAI (Medical Open Network for AI)
2. nnU-Net (Self-configuring segmentation)
3. DeepLearning.AI AI for Medicine Specialization

