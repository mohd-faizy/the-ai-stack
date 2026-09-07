# LoRA & Adapters

> Mathematical principles, hyperparameter tuning, and production serving architectures for Low-Rank Adaptation (LoRA) and QLoRA.

## 🎯 What to Learn

- Mathematical foundation: $Delta W = B cdot A$ where $B in mathbb{R}^{d 	imes r}, A in mathbb{R}^{r 	imes k}$ and $r ll min(d, k)$
- Hyperparameter selection: Rank $r$ (intrinsic rank), scaling factor $alpha$, and target modules ($q, k, v, o, gate, up, down$)
- QLoRA (Quantized LoRA): 4-bit NormalFloat (NF4), double quantization, and paged optimizers to prevent memory spikes
- DoRA (Weight-Decomposed Low-Rank Adaptation): Decomposing weights into magnitude and directional components
- Serving multi-tenant adapters: S-LoRA and LoRAX (serving 100+ fine-tuned adapters on a single base model GPU instance)
- Adapter merging techniques: Linear interpolation, spherical linear interpolation (SLERP), and TIES-Merging

## 📚 Best Learning Resources

### 🥇 Best Overall

- [PEFT (LoRA Implementation) by Hugging Face](https://github.com/huggingface/peft)
  - Type: Implementation Standard
  - Language: English
  - Level: Intermediate
  - Why recommended: The foundational implementation standard for LoRA, QLoRA, and DoRA, supported across the entire open-source AI ecosystem.

### 🎓 Courses

- [DeepLearning.AI: Efficient Serving of LLMs](https://www.deeplearning.ai/short-courses/efficient-serving-of-llms/) — Covers dynamic multi-LoRA routing and serving with Predibase engineers.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Deep Dive
  - Level: Advanced
  - Why: Visual mathematical derivation of low intrinsic rank, SVD, and why freezing weights works so well.

### ▶️ YouTube — Hindi / Hinglish

- [Finetuning LLMs in Hindi](https://www.youtube.com/playlist?list=PLZoTAELRMXVN9VbAx5I2VvloTtYmlApe3)
  - Channel: Krish Naik
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Intermediate
  - Why: Hands-on Hindi tutorials on LoRA, QLoRA, and supervised fine-tuning with Hugging Face.


### 📚 Books

- [Generative AI on AWS by Chris Fregly et al. (O'Reilly)](https://www.oreilly.com/) — Includes extensive walkthroughs on QLoRA training and multi-adapter deployment.

### 💻 GitHub / Implementations

- [PEFT](https://github.com/huggingface/peft) — LoRA, QLoRA, and adapter methods.
- [LitGPT](https://github.com/Lightning-AI/litgpt) — LoRA fine-tuning built-in.
- [LoRAX](https://github.com/predibase/lorax) — Serve thousands of fine-tuned LLMs on a single GPU.
- [S-LoRA](https://github.com/S-LoRA/S-LoRA) — Serving many LoRA adapters efficiently.

## 📄 Foundational Papers

- [LoRA: Low-Rank Adaptation of Large Language Models](https://arxiv.org/abs/2106.09685) — The landmark paper by Edward Hu et al. introducing low-rank adaptation, reducing parameters by 10,000x.
- [QLoRA: Efficient Finetuning of Quantized LLMs](https://arxiv.org/abs/2305.14314) — Dettmers et al. paper introducing NF4 quantization and paged optimizers, democratizing fine-tuning on a single GPU.

### 🧪 Practice

- [Hugging Face LoRA Quickstart](https://huggingface.co/docs/peft/task_guides/clm_peft) — Fine-tune a causal language model with LoRA in under 50 lines of Python.

### 🛠️ Projects

- [Multi-Tenant LoRA Serving Gateway](https://github.com/predibase/lorax) — Deploy a single base LLaMA model and serve 5 specialized customer adapters dynamically routed by request header.

## 🧭 Recommended Learning Path

1. Study low-rank matrix approximation and the concept of intrinsic dimension in deep networks.
2. Understand the role of rank $r$ and scaling factor $alpha$ (scaling factor is $alpha / r$).
3. Train a QLoRA adapter using `bitsandbytes` 4-bit base weights and PEFT.
4. Experiment with DoRA (Weight-Decomposed LoRA) and compare validation loss.
5. Deploy multi-adapter endpoints using LoRAX or S-LoRA.

## ⭐ Top 3 Resources

1. LoRA Seminal Paper (Edward Hu et al.)
2. QLoRA Paper & Implementation (Tim Dettmers et al.)
3. LoRAX (Predibase Multi-LoRA Serving)

