# GenAI Safety, Guardrails & Watermarking

> Safety frameworks, guardrails, and provenance watermarking safeguard generative systems against jailbreaks, prompt injection, toxicity, and unauthorized content generation.

## 🎯 What to Learn

- The threat landscape: direct prompt injection, indirect prompt injection, jailbreaks, and data extraction
- Input and output guardrail architectures: programmatic checks, regex, and classifier models
- Meta Llama Guard (1, 2, 3): safety classifiers evaluating prompts and responses against ML commons taxonomies
- NVIDIA NeMo Guardrails: programmable rails using Colang for conversational safety and topical containment
- Synthetic media provenance: C2PA metadata standards and invisible neural watermarking (Google SynthID)
- Red teaming, automated jailbreak evaluation, and refusal calibration

## 📚 Best Learning Resources

### 🥇 Best Overall

- [NeMo Guardrails by NVIDIA](https://github.com/NVIDIA/NeMo-Guardrails)
  - Type: Framework & Documentation
  - Language: English
  - Level: Intermediate
  - Why recommended: NVIDIA NeMo Guardrails is the leading open-source toolkit for adding programmable topical, safety, and security guardrails to LLM-powered applications.

### 📖 Documentation & References

- [NeMo Guardrails Documentation](https://docs.nvidia.com/nemo/guardrails/index.html) — Guides on Colang syntax, input/output rails, and halluncination prevention.
- [Meta Llama Guard Documentation](https://ai.meta.com/research/publications/llama-guard-llm-based-input-output-safeguard-for-human-ai-conversations/) — Safeguard model fine-tuned on safety risk taxonomies.

### 🎓 Courses

- [DeepLearning.AI: Building Secure AI Applications with NeMo Guardrails](https://www.deeplearning.ai/short-courses/) — Hands-on tutorial building secure conversational guardrails with NVIDIA.

### ▶️ YouTube — English

- [Matthew Berman: Video Guides & Tutorials](https://www.youtube.com/@MatthewBerman)
  - Channel: Matthew Berman
  - Language: English
  - Type: Tutorial
  - Level: Beginner to Intermediate
  - Why: Walkthrough of preventing jailbreaks, off-topic drift, and competitor mentions using Colang.

### ▶️ YouTube — Hindi / Hinglish

- [Generative AI using LangChain in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Practical Hindi course on generative AI, prompt engineering, chains, and LLM application development.


### 📚 Books

- [Threat Modeling AI/ML Systems by OWASP](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — The definitive security standard covering the OWASP Top 10 vulnerabilities for LLMs.

### 💻 GitHub / Implementations

- [Llama Guard](https://github.com/meta-llama/PurpleLlama) — Safeguard model for human-AI conversational input and output moderation.
- [NeMo Guardrails](https://github.com/NVIDIA-NeMo/Guardrails) — Open-source toolkit for adding programmable safety rails to LLMs.
- [Guardrails AI](https://github.com/guardrails-ai/guardrails) — Validation and structure enforcement guardrails for LLM responses.
- [ShieldGemma](https://github.com/google-deepmind/gemma) — Google safety classifiers based on Gemma for content moderation.
- [SynthID Text](https://github.com/google-deepmind/synthid-text) — Watermarking and detection technology for AI-generated text by Google DeepMind.
- [Prompt-Guard](https://github.com/meta-llama/llama-cookbook) — Classifier model for detecting prompt injections and jailbreaks.

### 🧪 Practice

- [Gandalf by Lakera (Prompt Injection Challenge)](https://gandalf.lakera.ai/) — Interactive game practicing prompt injection and jailbreak techniques across increasing defense levels.

### 🛠️ Projects

- [Enterprise Customer Support Guardrail Middleware](https://github.com/NVIDIA/NeMo-Guardrails) — Build a production FastAPI proxy evaluating incoming user prompts with Llama Guard before passing queries to LLMs.

## 🧭 Recommended Learning Path

1. Understand the vulnerability mechanics of LLMs: why instructions and data share the same text token stream.
2. Explore the OWASP Top 10 for LLM Applications (Prompt Injection, Insecure Output Handling, Sensitive Info Disclosure).
3. Deploy Meta Llama Guard to classify user inputs into safety categories (Hate, Self-Harm, Cyberattacks).
4. Write Colang scripts in NeMo Guardrails to enforce conversational policy and brand rules.
5. Integrate invisible digital watermarking (SynthID) into generative image and text outputs.

## ⭐ Top 3 Resources

1. [NeMo Guardrails (NVIDIA)](https://github.com/NVIDIA/NeMo-Guardrails) — The premier open-source programmable guardrail architecture for enterprise AI.
2. [Meta Llama Guard](https://github.com/meta-llama/llama-guard) — The industry standard classifier model for evaluating input/output safety risks.
3. [OWASP Top 10 for LLMs](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — The authoritative security framework for identifying and mitigating LLM vulnerabilities.

