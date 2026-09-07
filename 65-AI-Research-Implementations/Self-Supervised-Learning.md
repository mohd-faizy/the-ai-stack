# Self-Supervised Learning

> Contrastive learning frameworks, masked autoencoders, and self-distillation architectures that learn rich representations without human labels.

## 🎯 What to Learn

- Self-Supervised Learning (SSL) paradigms: Contrastive learning, masked prediction, and non-contrastive self-distillation
- Meta DINO v2: Vision Transformers trained with self-distillation without labels producing universal visual features
- Masked Autoencoders (MAE - Kaiming He et al.): Simple autoencoding approach that reconstructs masked patches (75% masking) in vision
- SimCLR (Google Brain): Simple framework for contrastive learning of visual representations using InfoNCE loss and strong data augmentations
- BYOL & VICReg: Bootstrap Your Own Latent and Variance-Invariance-Covariance Regularization preventing representation collapse without negative pairs
- Linear probing vs full fine-tuning evaluation protocols

## 📚 Best Learning Resources

### 🥇 Best Overall

- [DINO v2 (Meta AI)](https://github.com/facebookresearch/dinov2)
  - Type: Self-Supervised Vision Standard
  - Language: English
  - Level: Advanced
  - Why recommended: Meta's flagship open-source self-supervised vision model producing universal visual representations that power depth estimation, segmentation, and feature retrieval without fine-tuning.

### 🎓 Courses

- [Stanford CS231n: Deep Learning for Computer Vision (SSL Lecture)](http://cs231n.stanford.edu/) — Covers contrastive learning, InfoNCE loss, SimCLR, and MoCo.

### ▶️ YouTube — English

- [Yannic Kilcher / Meta AI: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher / Meta AI
  - Language: English
  - Type: Paper Review
  - Level: Advanced
  - Why: Technical breakdown of student-teacher self-distillation, KoLeo regularizer, and high-resolution patch features.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Self-Supervised Learning by Randall Balestriero et al. (Survey)](https://arxiv.org/abs/2304.12210) — A comprehensive mathematical and empirical taxonomy of modern self-supervised learning methods.

### 💻 GitHub / Implementations

- [DINO v2](https://github.com/facebookresearch/dinov2) — Self-supervised vision transformers.
- [MAE](https://github.com/facebookresearch/mae) — Masked autoencoders for vision.
- [SimCLR](https://github.com/google-research/simclr) — Contrastive learning of visual representations.
- [BYOL](https://github.com/deepmind/deepmind-research) — Bootstrap your own latent.
- [VICReg](https://github.com/facebookresearch/vicreg) — Variance-invariance-covariance regularization.

## 📄 Foundational Papers

- [DINOv2: Learning Robust Visual Features without Supervision](https://arxiv.org/abs/2304.07193) — Oquab et al. landmark Meta paper presenting universal visual foundation models trained via self-distillation.
- [Masked Autoencoders Are Scalable Vision Learners (MAE)](https://arxiv.org/abs/2111.06377) — He, Chen, Dollár et al. landmark paper introducing asymmetric encoder-decoder masked autoencoding.

### 🧪 Practice

- [DINO v2 Interactive Depth & Segmentation Demo](https://dinov2.metademolab.com/) — Upload photos and visualize zero-shot PCA semantic feature maps in the browser.

### 🛠️ Projects

- [Train a Masked Autoencoder on Custom Satellite Imagery](https://github.com/facebookresearch/mae) — Train an MAE with 75% patch masking on unlabeled imagery and evaluate linear probe classification accuracy.

## 🧭 Recommended Learning Path

1. Understand the self-supervised learning paradigm: Generating supervisory signals from data itself.
2. Study contrastive learning (SimCLR): Positive pairs via data augmentation vs negative pairs via InfoNCE loss.
3. Understand how BYOL and DINO avoid mode collapse without negative pairs using exponential moving average (EMA) teachers.
4. Explore Masked Autoencoders (MAE) and high masking ratios (75%).
5. Use pre-trained DINO v2 embeddings for zero-shot image retrieval and dense segmentation.

## ⭐ Top 3 Resources

1. DINO v2 (Meta AI Research)
2. Masked Autoencoders (Kaiming He / FAIR)
3. Lightly SSL (Python Self-Supervised Framework)

