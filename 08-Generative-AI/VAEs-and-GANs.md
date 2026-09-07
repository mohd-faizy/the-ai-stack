# VAEs & GANs

> Variational Autoencoders (VAEs) and Generative Adversarial Networks (GANs) represent the foundational probabilistic and minimax architectures of generative deep learning.

## 🎯 What to Learn

- Variational Autoencoders (VAE): Evidence Lower Bound (ELBO), reconstruction loss, and KL divergence
- The Reparameterization Trick: backpropagating through stochastic latent sampling nodes
- Vector Quantized VAE (VQ-VAE and VQ-GAN): learning discrete codebooks for high-fidelity images and audio
- Generative Adversarial Networks (GANs): minimax game between Generator and Discriminator
- Stabilizing GAN training: Wasserstein GAN (WGAN-GP), spectral normalization, and gradient penalties
- High-resolution image synthesis with StyleGAN (StyleGAN2, StyleGAN3) and adaptive discriminator augmentation (ADA)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Generative Deep Learning (2nd Edition) by David Foster](https://www.oreilly.com/library/view/generative-deep-learning/9781098134174/)
  - Type: Book & Codebase
  - Language: English
  - Level: Beginner to Intermediate
  - Why recommended: David Foster provides the clearest mathematical and code-level breakdowns of VAEs, WGAN-GP, VQ-GAN, and StyleGAN in existence.

### 📖 Documentation & References

- [PyTorch VAE GitHub Repository](https://github.com/AntixK/PyTorch-VAE) — Clean PyTorch implementations of 20+ VAE variants (Beta-VAE, VQ-VAE, WAE).
- [StyleGAN3 Official Repository (NVIDIA)](https://github.com/NVlabs/stylegan3) — Official implementation of alias-free generative adversarial networks by NVIDIA Research.

### 🎓 Courses

- [Generative Adversarial Networks (GANs) Specialization (DeepLearning.AI)](https://www.coursera.org/specializations/generative-adversarial-networks-gans) — Sharon Zhou covers basic GANs, WGANs, conditional GANs, and image-to-image translation (CycleGAN).

### ▶️ YouTube — English

- [Variational Autoencoders (VAEs) Explained Visually](https://www.youtube.com/watch?v=9zKuYvjFFS8)
  - Channel: Arxiv Insights
  - Language: English
  - Type: Explainer
  - Level: Beginner to Intermediate
  - Why: Visual geometric explanation of latent space continuity, KL divergence, and the reparameterization trick.
- [Generative Adversarial Networks (GANs) by Computerphile](https://www.youtube.com/watch?v=dCKbRCUyop8)
  - Channel: Computerphile
  - Language: English
  - Type: Overview
  - Level: Beginner
  - Why: Clear conceptual explanation of the counterfeiter vs police officer minimax game.

### ▶️ YouTube — Hindi / Hinglish

- [Generative AI using LangChain in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Practical Hindi course on generative AI, prompt engineering, chains, and LLM application development.


### 📚 Books

- [Understanding Deep Learning by Simon Prince — Chapter 17: Variational Autoencoders & GANs](https://udlbook.github.io/udlbook/) — Rigorous derivations of the Evidence Lower Bound and minimax loss.

### 💻 GitHub / Implementations

- [mohd-faizy/TensorFlow-Advanced](https://github.com/mohd-faizy/TensorFlow-Advanced) — Generative deep learning with TensorFlow: Autoencoders, Variational Autoencoders (VAEs), Neural Style Transfer, and GANs.
- [StyleGAN3](https://github.com/NVlabs/stylegan3) — Alias-free generative adversarial networks by NVIDIA.
- [StyleGAN-XL](https://github.com/autonomousvision/stylegan-xl) — Scaling StyleGAN to large and diverse dataset synthesis.
- [GigaGAN](https://github.com/mingukkang/GigaGAN) — Scaling up generative adversarial networks for fast text-to-image synthesis.
- [VQ-VAE-2](https://github.com/rosinality/vq-vae-2-pytorch) — Hierarchical vector quantized variational autoencoders in PyTorch.

### 🧪 Practice

- [PyTorch DCGAN Tutorial](https://pytorch.org/tutorials/beginner/dcgan_faces_tutorial.html) — Official tutorial training a Deep Convolutional GAN on celebrity faces.

### 🛠️ Projects

- [Variational Autoencoder & GAN Latent Exploration](https://github.com/mohd-faizy/TensorFlow-Advanced) — Trained generative models generating novel samples and traversing latent feature manifolds.
- [Train a VQ-VAE on ImageNet Latents](https://github.com/AntixK/PyTorch-VAE) — Implement vector quantization with codebook commitment loss and visualize reconstructed image patches.

## 🧭 Recommended Learning Path

1. Understand why regular autoencoders suffer from disconnected latent gaps that cannot generate new samples.
2. Derive the Evidence Lower Bound (ELBO) and implement the reparameterization trick (`z = mu + eps * sigma`).
3. Study GAN minimax dynamics, mode collapse, and why Wasserstein loss with gradient penalty provides stable gradients.
4. Explore VQ-VAE and VQ-GAN: learning discrete codebook indices that bridge continuous images with transformer tokens.
5. Analyze StyleGAN's mapping network and style modulation layers for photorealistic face generation.

## ⭐ Top 3 Resources

1. [Generative Deep Learning (David Foster)](https://www.oreilly.com/library/view/generative-deep-learning/9781098134174/) — The most practical, comprehensive guide to VAEs and GANs.
2. [StyleGAN3 (NVIDIA Research)](https://github.com/NVlabs/stylegan3) — The apex of high-resolution generative adversarial network architectures.
3. [Auto-Encoding Variational Bayes (Kingma & Welling)](https://arxiv.org/abs/1312.6114) — The seminal foundational paper introducing the Variational Autoencoder.

