# Medical Foundation Models

> Multimodal foundation models capable of interpreting radiographs, answering complex clinical questions, and generating diagnostic rationale.

## 🎯 What to Learn

- Medical multimodal architectures: Integrating vision encoders (BiomedCLIP) with clinical LLMs (LLaVA-Med)
- BiomedCLIP: Multimodal vision-language model trained on 15 million figure-caption pairs from biomedical research
- Google Med-PaLM & Med-Gemini: Frontier medical AI achieving expert-physician level scores on USMLE exam questions
- LLaVA-Med: Training multimodal conversational assistants on biomedical imagery and instruction-tuning pairs
- Evaluating clinical reasoning: MedQA, PubMedQA, and MMLU Clinical Knowledge subsets
- Mitigating medical hallucinations, managing diagnostic uncertainty, and clinical safety guardrails

## 📚 Best Learning Resources

### 🥇 Best Overall

- [BiomedCLIP (Microsoft Research)](https://github.com/microsoft/BiomedCLIP-PubMedBERT_256-vit_base_patch16_224)
  - Type: Biomedical Multimodal Foundation Model
  - Language: English
  - Level: Intermediate
  - Why recommended: Pretrained on 15 million biomedical image-text pairs, BiomedCLIP sets state-of-the-art performance on multimodal biomedical retrieval, classification, and visual question answering.

### 🎓 Courses

- [Stanford Medicine AI: Clinical AI Deployments](https://online.stanford.edu/) — Executive medical education covering the impact of foundation models on clinical workflows.

### ▶️ YouTube — English

- [AI Explained / Google Research: Video Guides & Tutorials](https://www.youtube.com/@GoogleforDevelopers)
  - Channel: AI Explained / Google Research
  - Language: English
  - Type: Analysis
  - Level: Intermediate
  - Why: Technical breakdown of Med-Gemini's performance across radiology, pathology, and USMLE benchmarks.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again by Eric Topol](https://drerictopol.com/book/deep-medicine/) — The definitive exploration of medical AI by one of medicine's most respected physician-researchers.

### 💻 GitHub / Implementations

- [BiomedCLIP](https://github.com/microsoft/BiomedCLIP_data_pipeline) — Biomedical vision-language model.
- [LLaVA-Med](https://github.com/microsoft/LLaVA-Med) — Medical visual question answering.
- [PMC-LLaMA](https://github.com/chaoyi-wu/PMC-LLaMA) — Medical LLM fine-tuned on PubMed.
- [Med-Gemini](https://github.com/google-research/google-research) — Multimodal medical AI by Google.

## 📄 Foundational Papers

- [Large Language Models Encode Clinical Knowledge (Med-PaLM)](https://www.nature.com/articles/s41586-023-06291-2) — Singhal et al. landmark Nature paper demonstrating AI passing US medical licensing examination questions.
- [BiomedCLIP: a multimodal biomedical foundation model pretrained from fifteen million scientific image-text pairs](https://arxiv.org/abs/2303.00915) — Microsoft paper introducing high-scale contrastive pre-training across the biomedical literature.

### 🧪 Practice

- [BiomedCLIP Interactive Demo](https://huggingface.co/spaces/microsoft/BiomedCLIP) — Test zero-shot chest X-ray and histopathology classification directly in the browser.

### 🛠️ Projects

- [Radiology Report Assistant with LLaVA-Med](https://github.com/microsoft/LLaVA-Med) — Deploy an open-weights multimodal assistant to describe chest X-ray findings and answer doctor questions.

## 🧭 Recommended Learning Path

1. Understand the USMLE benchmark and MedQA question formats.
2. Explore contrastive multimodal vision-language pre-training with BiomedCLIP.
3. Experiment with visual question answering on radiology images using LLaVA-Med.
4. Analyze failure modes: Distinguish between hallucinated clinical facts and legitimate diagnostic ambiguity.
5. Design doctor-in-the-loop workflows where AI proposes draft findings for physician sign-off.

## ⭐ Top 3 Resources

1. BiomedCLIP (Microsoft Research)
2. Med-PaLM & Med-Gemini (Google Research)
3. LLaVA-Med (Multimodal Biomedical Assistant)

