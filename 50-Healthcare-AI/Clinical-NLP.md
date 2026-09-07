# Clinical NLP

> Specialized language models and information extraction pipelines for medical records, clinical trial matching, and biomedical literature comprehension.

## 🎯 What to Learn

- Clinical text challenges: Abbreviations, ungrammatical clinical shorthand, misspellings, and temporal relations
- PubMedBERT: Domain-specific BERT trained from scratch exclusively on 14 million PubMed abstracts
- ClinicalBERT: Fine-tuned representations for hospital readmission prediction and clinical notes
- GatorTron (University of Florida & NVIDIA): Massive clinical language model trained on billions of real-world EHR words
- Clinical Named Entity Recognition (NER) & Relation Extraction: Extracting diseases, medications, and dosages
- Medical ontologies and knowledge graphs: Mapping free text to UMLS (Unified Medical Language System) and SNOMED CT

## 📚 Best Learning Resources

### 🥇 Best Overall

- [PubMedBERT (Microsoft Research)](https://huggingface.co/microsoft/BiomedNLP-PubMedBERT-base-uncased-abstract)
  - Type: Biomedical Language Model
  - Language: English
  - Level: Intermediate
  - Why recommended: Trained from scratch purely on PubMed biomedical abstracts, PubMedBERT consistently outperforms general-domain language models on the BLURB benchmark.

### 🎓 Courses

- [Stanford CS224N: Biomedical NLP Lecture](https://web.stanford.edu/class/cs224n/) — Guest lecture covering clinical language representations, privacy, and electronic health records.

### ▶️ YouTube — English

- [John Snow Labs / Stanford Medicine: Video Guides & Tutorials](https://www.youtube.com/@StanfordOnline)
  - Channel: John Snow Labs / Stanford Medicine
  - Language: English
  - Type: Lecture
  - Level: Intermediate
  - Why: In-depth overview of clinical NER, de-identification of patient protected health information (PHI), and ontology mapping.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Clinical Text Mining: Secondary Use of Electronic Patient Records by Hercules Dalianis (Springer)](https://link.springer.com/book/10.1007/978-3-319-78503-5) — Comprehensive guide on de-identification, clinical terminologies, and mining electronic health records.

### 💻 GitHub / Implementations

- [Med-BERT](https://github.com/ZhiGroup/Med-BERT) — Pre-trained BERT for electronic health records.
- [GatorTron](https://github.com/NVIDIA/NeMo) — Large clinical language model.
- [ClinicalBERT](https://github.com/EmilyAlsentzer/clinicalBERT) — BERT for clinical text.
- [BioGPT](https://github.com/microsoft/BioGPT) — Generative pre-trained transformer for biomedical text.
- [PubMedBERT](https://huggingface.co/microsoft/BiomedNLP-BiomedBERT-base-uncased-abstract) — Biomedical language model.
- [MedPaLM](https://github.com/google-research/google-research) — Google's medical LLM research.

## 📄 Foundational Papers

- [Domain-Specific Language Model Pretraining for Biomedical Natural Language Processing (PubMedBERT)](https://arxiv.org/abs/2007.15779) — Gu et al. landmark paper demonstrating that pre-training from scratch on domain data outperforms general pre-training.

### 🧪 Practice

- [Biomedical NER with Transformers](https://huggingface.co/d4data/biomedical-ner-all) — Test biomedical entity extraction in the browser identifying diseases, genes, and chemicals.

### 🛠️ Projects

- [Automated Clinical De-identification Pipeline](https://github.com/facebookresearch/SpanMarkerNER) — Build a HIPAA-compliant PHI redactor that identifies patient names, dates, and locations from clinical notes.

## 🧭 Recommended Learning Path

1. Understand clinical documentation conventions and HIPAA Privacy Rules for Protected Health Information (PHI).
2. Explore standard medical coding systems: ICD-10, RxNorm, and SNOMED CT.
3. Fine-tune PubMedBERT for clinical named entity recognition (NER).
4. Map extracted entities to standardized UMLS Concept Unique Identifiers (CUIs).
5. Benchmark clinical models against the BLURB leaderboard.

## ⭐ Top 3 Resources

1. PubMedBERT (Microsoft Research)
2. BLURB Benchmark (Biomedical NLP standard)
3. UMLS Knowledge System

