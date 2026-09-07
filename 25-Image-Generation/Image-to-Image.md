# Image-to-Image

> Image-to-image synthesis encompasses inpainting, outpainting, image-guided generation, and instruction-based editing, modifying existing visual content according to natural language or mask boundaries.

## 🎯 What to Learn

- Inpainting: Latent mask conditioning, edge blending, and context fill
- Outpainting: Canvas expansion and continuous boundary extrapolation
- InstructPix2Pix: Natural language instruction-guided image editing
- Style transfer and identity preservation across image variations
- Super-resolution and latent upscaling pipelines

## 📚 Best Learning Resources

### 🥇 Best Overall

- [InstructPix2Pix: Learning to Follow Image Editing Instructions](https://github.com/timothybrooks/instruct-pix2pix)
  - Type: Seminal Project & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: InstructPix2Pix (UC Berkeley) pioneered instruction-based image editing, allowing users to edit images using plain English directives ('add fireworks to the sky', 'make it winter').

### 📖 Documentation & References

- [Diffusers Inpainting Guide](https://huggingface.co/docs/diffusers/using-diffusers/inpaint) — Tutorial on inpainting with Stable Diffusion and FLUX in Diffusers.
- [InstructPix2Pix Documentation](https://www.timothybrooks.com/instruct-pix2pix) — Interactive demos, paired training dataset generation, and editing workflows.

### 🎓 Courses

- [Computer Vision and Generative Editing (Stanford CS 231N)](https://cs231n.stanford.edu/) — Lectures on semantic segmentation, inpainting, and generative editing.

### ▶️ YouTube — English

- [Two Minute Papers: Video Guides & Tutorials](https://www.youtube.com/@TwoMinutePapers)
  - Channel: Two Minute Papers
  - Language: English
  - Type: Overview
  - Level: Beginner to Intermediate
  - Why: Demonstration of natural language instruction editing applied to real-world photographs.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Digital Image Processing](https://www.pearson.com/) — Gonzalez and Woods foundational textbook on spatial filtering, masks, and image transformations.

### 💻 GitHub / Implementations

- [timothybrooks/instruct-pix2pix](https://github.com/timothybrooks/instruct-pix2pix) — Learning to Follow Image Editing Instructions with prompt-guided paired diffusion.
- [huggingface/diffusers](https://github.com/huggingface/diffusers) — Flagship implementations of AutoPipelineForInpainting and AutoPipelineForImage2Image.

## 📄 Foundational Papers

- [InstructPix2Pix: Learning to Follow Image Editing Instructions](https://arxiv.org/abs/2211.09800) — Brooks, Holynski, and Efros (CVPR 2023) landmark paper combining GPT-3 and Prompt2Prompt to train instruction editing.
- [Image-to-Image Translation with Conditional Adversarial Networks (pix2pix)](https://arxiv.org/abs/1611.07004) — Isola et al. (CVPR 2017) foundational work establishing paired image translation.

### 🧪 Practice

- [Hugging Face InstructPix2Pix Demo](https://huggingface.co/spaces/timbrooks/instruct-pix2pix) — Upload an image and type conversational editing instructions directly in the browser.

### 🛠️ Projects

- [Automated Real Estate Photo Stager](https://huggingface.co/docs/diffusers/using-diffusers/inpaint) — Build an app that takes empty room photos, masks out floor regions, and inpaints modern Scandinavian furniture via text prompts.

## 🧭 Recommended Learning Path

1. Understand the mechanics of img2img: adding partial Gaussian noise to a latent and denoising with text guidance.
2. Implement inpainting by passing both the source latent and a binary mask into a specialized inpainting model.
3. Master denoising strength: balancing creative divergence against source structural fidelity.
4. Explore paired synthetic dataset generation using GPT and Prompt2Prompt.
5. Deploy an instruction editing endpoint using Diffusers `StableDiffusionInstructPix2PixPipeline`.

## ⭐ Top 3 Resources

1. InstructPix2Pix (timothybrooks/instruct-pix2pix)
2. Diffusers Inpainting Pipeline (Hugging Face)
3. Image-to-Image Translation with Conditional Adversarial Networks (Isola et al.)

