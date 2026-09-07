# Image Restoration & Enhancement

> Image restoration and enhancement recovers pristine high-quality imagery from degraded, noisy, blurred, low-resolution, or corrupted visual inputs.

## 🎯 What to Learn

- Degradation models: downsampling, Gaussian blur, sensor noise, JPEG compression artifacts
- Single-Image Super-Resolution (SISR): SRCNN, EDSR, RCAN, and SwinIR
- Generative super-resolution: SRGAN, Real-ESRGAN, and diffusion-based upscalers
- Blind face restoration: facial prior networks (GFPGAN, CodeFormer, RestoreFormer)
- Image denoising and deblurring: Restormer (Transformer for high-resolution restoration) and NAFNet
- Loss formulations: perceptual VGG loss, L1 pixel loss, adversarial loss, and facial landmark loss
- Evaluation metrics: Peak Signal-to-Noise Ratio (PSNR), Structural Similarity (SSIM), and LPIPS

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Real-ESRGAN: Practical Algorithms for General Image and Video Restoration](https://github.com/xinntao/Real-ESRGAN)
  - Type: Repository & Pretrained Models
  - Language: English
  - Level: Beginner to Intermediate
  - Why recommended: Real-ESRGAN is the industry-standard open-source tool for blind super-resolution, trained with higher-order degradation models to handle real-world artifacts.

### 📖 Documentation & References

- [BasicSR Documentation](https://basicsr.readthedocs.io/en/latest/) — Open-source image and video restoration toolbox based on PyTorch powering Real-ESRGAN.
- [Restormer Documentation](https://github.com/swz30/Restormer) — Efficient transformer architecture for high-resolution image restoration (denoising, deblurring, deraining).
- [CodeFormer GitHub](https://github.com/sczhou/CodeFormer) — Robust face restoration algorithm based on codebook lookup and discrete vector quantization.

### 🎓 Courses

- [Computational Photography by Prof. Derek Hoiem (UIUC)](https://courses.engr.illinois.edu/cs445/fa2021/) — Comprehensive university curriculum on image blending, restoration, and filtering.

### ▶️ YouTube — English

- [Two Minute Papers: Video Guides & Tutorials](https://www.youtube.com/@TwoMinutePapers)
  - Channel: Two Minute Papers
  - Language: English
  - Type: Overview
  - Level: Beginner
  - Why: Engaging showcase explaining how facial priors and GANs recover lost details from vintage blurry photos.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Computer Vision: Algorithms and Applications by Richard Szeliski — Chapter 10: Image Restoration](https://szeliski.org/Book/) — Mathematical formulations of deconvolution, inverse problems, and denoising.

### 💻 GitHub / Implementations

- [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) — Real-world image/video super-resolution.
- [GFPGAN](https://github.com/TencentARC/GFPGAN) — Face restoration algorithm.
- [CodeFormer](https://github.com/sczhou/CodeFormer) — Face restoration with codebook lookup transformer.
- [SwinIR](https://github.com/JingyunLiang/SwinIR) — Image restoration using swin transformer.
- [HAT](https://github.com/XPixelGroup/HAT) — Hybrid attention transformer for image restoration.
- [NAFNet](https://github.com/megvii-research/NAFNet) — Nonlinear activation free image restoration.

### 🧪 Practice

- [DIV2K Dataset Benchmark](https://data.vision.ee.ethz.ch/cvl/DIV2K/) — The standard high-quality benchmark for training and evaluating super-resolution algorithms.

### 🛠️ Projects

- [Automated Historical Photo Restoration Service](https://github.com/xinntao/Real-ESRGAN) — Combine Real-ESRGAN for background upscaling with CodeFormer for high-fidelity facial reconstruction.

## 🧭 Recommended Learning Path

1. Understand image degradation physics: convolution with point spread functions (PSF) and sensor noise.
2. Compare PSNR/SSIM metrics against Learned Perceptual Image Patch Similarity (LPIPS).
3. Train a simple autoencoder for image denoising with MSE loss.
4. Implement perceptual loss using intermediate feature maps from a pretrained VGG-19 network.
5. Deploy Real-ESRGAN and CodeFormer pipelines for automatic 4x super-resolution and face enhancement.

## ⭐ Top 3 Resources

1. [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) — The most practical, widely deployed general super-resolution model.
2. [CodeFormer](https://github.com/sczhou/CodeFormer) — State-of-the-art blind face restoration and artifact removal.
3. [Restormer](https://github.com/swz30/Restormer) — The leading transformer architecture for image denoising, deraining, and deblurring.

