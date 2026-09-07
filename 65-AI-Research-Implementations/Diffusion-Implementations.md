# Diffusion Implementations

> Foundational reference implementations of Denoising Diffusion Probabilistic Models (DDPM), latent diffusion, and classifier-free guidance.

## 🎯 What to Learn

- The mathematical formulation of diffusion: Forward noising process ($q$) vs Reverse denoising process ($p_	heta$)
- DDPM (Denoising Diffusion Probabilistic Models - Ho et al.): U-Net noise predictor and linear/cosine beta schedules
- Latent Diffusion Models (CompVis / Rombach et al.): Operating in compressed perceptual latent space (VAE) rather than pixel space
- OpenAI guided-diffusion: Classifier guidance and classifier-free guidance (CFG) for controllable image generation
- Continuous-time diffusion and score-based generative models (Song et al.): Stochastic Differential Equations (SDEs)
- Sampling accelerators: DDIM (Denoising Diffusion Implicit Models) and Euler/DPMSolver samplers

## 📚 Best Learning Resources

### 🥇 Best Overall

- [CompVis Latent Diffusion](https://github.com/CompVis/latent-diffusion)
  - Type: Reference Architecture
  - Language: English
  - Level: Advanced
  - Why recommended: The foundational research codebase by Heidelberg University that directly led to Stable Diffusion, introducing cross-attention conditioning in compressed latent spaces.

### 🎓 Courses

- [Hugging Face Diffusion Models Course](https://github.com/huggingface/diffusion-models-class) — Free comprehensive course covering diffusion theory, fine-tuning, conditional generation, and ControlNet.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Deep Dive
  - Level: Advanced
  - Why: Visual, rigorous mathematical derivation of the forward SDE, variational lower bound, and coding DDPM step-by-step.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Generative Deep Learning by David Foster (O'Reilly)](https://www.oreilly.com/library/view/generative-deep-learning/9781098134174/) — Comprehensive chapter on diffusion models, variance schedules, and sampling methods.

### 💻 GitHub / Implementations

- [Denoising Diffusion](https://github.com/lucidrains/denoising-diffusion-pytorch) — Diffusion model implementation.
- [Latent Diffusion](https://github.com/CompVis/latent-diffusion) — Original latent diffusion research.
- [guided-diffusion](https://github.com/openai/guided-diffusion) — OpenAI's classifier-guided diffusion.
- [DDPM](https://github.com/hojonathanho/diffusion) — Original DDPM implementation.

## 📄 Foundational Papers

- [Denoising Diffusion Probabilistic Models (DDPM)](https://arxiv.org/abs/2006.11239) — Ho, Jain, and Abbeel landmark paper demonstrating high-fidelity image synthesis with diffusion.
- [High-Resolution Image Synthesis with Latent Diffusion Models](https://arxiv.org/abs/2112.10752) — Rombach, Blattmann, Lorenz, Esser, and Ommer paper introducing Stable Diffusion.

### 🧪 Practice

- [Annotated Diffusion Model (Hugging Face Blog)](https://huggingface.co/blog/annotated-diffusion) — Step-by-step Jupyter notebook implementing and training DDPM on CIFAR-10.

### 🛠️ Projects

- [Train a Toy Latent Diffusion Model from Scratch](https://github.com/huggingface/diffusers) — Train an autoencoder (VAE) on fashion images, then train a small U-Net diffusion model in latent space with classifier-free guidance.

## 🧭 Recommended Learning Path

1. Derive the forward diffusion Gaussian Markov chain and the trick to jump to arbitrary step $t$: $q(x_t|x_0)$.
2. Implement the simplified MSE loss function predicting added noise: $mathcal{L} = |epsilon - epsilon_	heta(x_t, t)|^2$.
3. Code a U-Net with sinusoidal time embeddings in PyTorch.
4. Understand Classifier-Free Guidance (CFG): Extrapolating away from unconditional generation.
5. Train a toy DDPM on MNIST/CIFAR-10 following the Hugging Face Annotated Diffusion tutorial.

## ⭐ Top 3 Resources

1. CompVis Latent Diffusion (Stable Diffusion foundation)
2. Hugging Face Diffusion Models Class
3. DDPM Landmark Paper (Jonathan Ho et al.)

