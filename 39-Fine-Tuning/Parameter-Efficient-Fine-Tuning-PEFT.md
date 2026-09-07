# Parameter-Efficient Fine-Tuning (PEFT)

> Methodologies and frameworks to adapt large language models by updating only a small fraction of parameters, drastically lowering VRAM requirements.

## 🎯 What to Learn

- PEFT taxonomy: Additive methods (Adapters, Soft Prompts), Selective methods (BitFit), and Reparameterization (LoRA, DoRA)
- Hugging Face PEFT library: Wrapping models with `get_peft_model()` and managing adapter checkpoints
- Unsloth: Fast manual CUDA backpropagation and kernel rewriting delivering 2-5x faster fine-tuning with 80% less VRAM
- Axolotl & LLaMA-Factory: Declarative YAML-driven fine-tuning frameworks supporting hundreds of models and datasets
- Prefix tuning and prompt tuning: Learning continuous virtual token embeddings without touching model weights
- Evaluating catastrophic forgetting and downstream generalization

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Hugging Face PEFT](https://github.com/huggingface/peft)
  - Type: Adaptation Library
  - Language: English
  - Level: Intermediate
  - Why recommended: The definitive open-source library integrating seamlessly with Transformers, Accelerate, and TRL to support LoRA, Prefix Tuning, P-Tuning, and IA3.

### 🎓 Courses

- [DeepLearning.AI: Finetuning Large Language Models](https://www.deeplearning.ai/short-courses/finetuning-large-language-models/) — Taught by Sharon Zhou (Lamini) covering instruction tuning, dataset preparation, and PEFT evaluation.

### ▶️ YouTube — English

- [Hugging Face / Philipp Schmid: Video Guides & Tutorials](https://www.youtube.com/@HuggingFace)
  - Channel: Hugging Face / Philipp Schmid
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Clear hands-on tutorial on fine-tuning open-weights models with Hugging Face PEFT, TRL, and bitsandbytes.

### ▶️ YouTube — Hindi / Hinglish

- [Finetuning LLMs in Hindi](https://www.youtube.com/playlist?list=PLZoTAELRMXVN9VbAx5I2VvloTtYmlApe3)
  - Channel: Krish Naik
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Intermediate
  - Why: Hands-on Hindi tutorials on LoRA, QLoRA, and supervised fine-tuning with Hugging Face.


### 📚 Books

- [Hands-On Generative AI with Transformers and Diffusion Models (O'Reilly)](https://www.oreilly.com/) — Practical chapters on fine-tuning architectures, PEFT integrations, and model customization.

### 💻 GitHub / Implementations

- [PEFT](https://github.com/huggingface/peft) — LoRA, QLoRA, AdaLoRA, and more.
- [TRL](https://github.com/huggingface/trl) — Post-training with RLHF, DPO, SFT.
- [LlamaFactory](https://github.com/hiyouga/LLaMA-Factory) — Unified fine-tuning of 100+ LLMs.
- [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) — Streamlined LLM fine-tuning tool.
- [unsloth](https://github.com/unslothai/unsloth) — Fine-tune LLMs 2x faster with 80% less memory.
- [xtuner](https://github.com/InternLM/xtuner) — Efficient fine-tuning toolkit.
- [LMFlow](https://github.com/OptimalScale/LMFlow) — Extensible LLM fine-tuning framework.
- [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) — High-performance RLHF training.

## 📄 Foundational Papers

- [Few-Shot Parameter-Efficient Fine-Tuning is Better and Cheaper than In-Context Learning](https://arxiv.org/abs/2205.05638) — Demonstrated that PEFT outperforms in-context learning while requiring orders of magnitude less compute.

### 🧪 Practice

- [Unsloth Free Colab Notebooks](https://github.com/unslothai/unsloth#notebooks) — Fine-tune Llama 3 or Mistral in under 20 minutes on a free Google Colab T4 GPU.

### 🛠️ Projects

- [Domain-Specific Instruction Tuned Model](https://github.com/hiyouga/LLaMA-Factory) — Use LLaMA-Factory to fine-tune an 8B model on a custom medical or legal dataset using QLoRA.

## 🧭 Recommended Learning Path

1. Understand the difference between full fine-tuning, prompt engineering, and adapter tuning.
2. Explore adapter mechanics: Down-projection matrix $A$ followed by up-projection matrix $B$.
3. Fine-tune a small model with Hugging Face PEFT and TRL's `SFTTrainer`.
4. Accelerate fine-tuning workflows using Unsloth on consumer GPUs.
5. Merge adapter weights back into base model weights for zero-latency inference.

## ⭐ Top 3 Resources

1. Hugging Face PEFT (GitHub & Documentation)
2. Unsloth (Ultra-fast fine-tuning)
3. LLaMA-Factory (Unified WebUI & CLI)

