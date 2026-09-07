# Vision-Language Models

> Vision-Language Models (VLMs) combine visual encoders with large language model decoders to enable visual question answering, document OCR, spatial reasoning, and scene understanding.

## 🎯 What to Learn

- VLM architectures: Vision encoder (CLIP, SigLIP) + Projector (MLP, Perceiver) + LLM decoder
- Open-weights state-of-the-art models: Qwen2-VL, InternVL2, LLaVA-NeXT, Molmo
- Visual token compression and dynamic high-resolution image tiling
- Multimodal instruction tuning datasets (LLaVA-Instruct, ShareGPT4V)
- Evaluating VLMs: MME, MMBench, MathVista, and HallusionBench

## 📚 Best Learning Resources

### 🥇 Best Overall

- [LLaVA: Large Language and Vision Assistant](https://llava-vl.github.io/)
  - Type: Seminal Project & Framework
  - Language: English
  - Level: Intermediate
  - Why recommended: LLaVA (UW-Madison, Microsoft, Columbia) pioneered open-source visual instruction tuning and established the standard architectural blueprint for modern vision-language models.

### 📖 Documentation & References

- [LLaVA Documentation & Code](https://llava-vl.github.io/) — Architectural details, fine-tuning guides, and model checkpoints.
- [Qwen2-VL Documentation](https://github.com/QwenLM/Qwen2-VL) — Alibaba's flagship open vision-language model with dynamic resolution support.
- [Hugging Face Vision-Language Guide](https://huggingface.co/docs/transformers/tasks/visual_question_answering) — Tutorial on loading and inferencing VLMs with Transformers.

### 🎓 Courses

- [Multimodal Deep Learning (Stanford CS 231N Guest Lectures)](https://cs231n.stanford.edu/) — Stanford curriculum covering CLIP, cross-attention, and vision-language pre-training.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate
  - Why: Thorough breakdown of visual projection layers, multimodal alignment, and instruction tuning.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Multimodal Deep Learning](https://www.cambridge.org/) — Comprehensive academic text on fusing visual, linguistic, and audio representations.

### 💻 GitHub / Implementations

- [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA) — Visual Instruction Tuning: Large Language and Vision Assistant.
- [QwenLM/Qwen2-VL](https://github.com/QwenLM/Qwen2-VL) — Qwen2-VL is the multimodal large language model series developed by Qwen team.
- [OpenGVLab/InternVL](https://github.com/OpenGVLab/InternVL) — InternVL family: Expanding the frontier of open-source multimodal models.

## 📄 Foundational Papers

- [Visual Instruction Tuning (LLaVA)](https://arxiv.org/abs/2304.08485) — Liu et al. (NeurIPS 2023) seminal paper pioneering end-to-end multimodal instruction tuning.
- [Learning Transferable Visual Models From Natural Language Supervision (CLIP)](https://arxiv.org/abs/2103.00020) — Radford et al. (OpenAI 2021) foundational paper establishing contrastive vision-language pre-training.

### 🧪 Practice

- [LLaVA Interactive Web Demo](https://llava.huggingface.co/) — Upload images, test OCR, spatial reasoning, and complex scene question answering in the browser.

### 🛠️ Projects

- [Multimodal Visual Inspection Assistant](https://github.com/haotian-liu/LLaVA) — Build a service that takes manufacturing component photos and uses Qwen2-VL to detect defects and generate structured inspection logs.

## 🧭 Recommended Learning Path

1. Learn contrastive representation learning in OpenAI CLIP (dual encoder architecture).
2. Understand how projection layers (linear MLP vs. cross-attention) bridge visual tokens to LLM embeddings.
3. Serve Qwen2-VL locally using Ollama or vLLM to perform image analysis.
4. Study dynamic tiling techniques that preserve fine-grained text details in high-res images.
5. Evaluate visual hallucinations using the POPE and HallusionBench benchmarks.

## ⭐ Top 3 Resources

1. LLaVA (haotian-liu/LLaVA)
2. Qwen2-VL (Alibaba)
3. Learning Transferable Visual Models From Natural Language Supervision (Radford et al.)

