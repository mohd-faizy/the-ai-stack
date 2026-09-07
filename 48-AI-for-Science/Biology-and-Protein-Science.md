# Biology & Protein Science

> Deep learning models for protein structure prediction, evolutionary protein language models, and generative de novo design of novel biological therapeutics.

## 🎯 What to Learn

- Protein representations: 1D amino acid sequences, multiple sequence alignments (MSAs), and 3D atomic coordinates
- Evolutionary Scale Modeling (ESM-2 & ESM-3): Masked language modeling over hundreds of millions of evolutionary sequences
- AlphaFold2 & OpenFold: Evoformer architecture, invariant point attention (IPA), and frame representations
- RFdiffusion (Baker Lab): Generative diffusion models for programmable de novo protein binder design
- ColabFold: Fast, accessible protein folding via MMseqs2 search in Google Colab
- Evaluating structure confidence: pLDDT (predicted local distance difference test) and PAE (predicted aligned error)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [ESM (Evolutionary Scale Modeling - Meta & EvolutionaryScale)](https://github.com/facebookresearch/esm)
  - Type: Protein Language Model Standard
  - Language: English
  - Level: Advanced
  - Why recommended: The foundational open-source protein language model family, enabling atomic-level structure prediction (ESMFold) directly from single sequences without slow MSA searches.

### 🎓 Courses

- [MIT 6.S095: Machine Learning for Molecular Engineering](https://mlog.csail.mit.edu/) — MIT graduate course covering protein modeling, graph neural networks, and generative biology.

### ▶️ YouTube — English

- [Yannic Kilcher / DeepMind: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher / DeepMind
  - Language: English
  - Type: Deep Dive
  - Level: Advanced
  - Why: Masterful technical walkthrough of the Evoformer, Invariant Point Attention, and evolutionary embeddings.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Introduction to Protein Structure by Carl Branden and John Tooze](https://www.routledge.com/Introduction-to-Protein-Structure/Branden-Tooze/p/book/9780815323051) — The foundational biochemistry text on secondary/tertiary structures, motifs, and folding domains.

### 💻 GitHub / Implementations

- [ESM](https://github.com/facebookresearch/esm) — Protein language models by Meta.
- [OpenFold](https://github.com/aqlaboratory/openfold) — Trainable AlphaFold2 reproduction.
- [BioNeMo](https://github.com/NVIDIA/bionemo-framework) — Generative AI for biology by NVIDIA.
- [ColabFold](https://github.com/sokrypton/ColabFold) — Fast protein structure prediction.
- [ProtTrans](https://github.com/agemagician/ProtTrans) — Protein language model.
- [RFdiffusion](https://github.com/RosettaCommons/RFdiffusion) — Protein structure generation.
- [EvolutionaryScale](https://github.com/evolutionaryscale/esm) — Next-gen protein models.
- [Uni-Fold](https://github.com/dptech-corp/Uni-Fold) — Open-source protein folding.

## 📄 Foundational Papers

- [Highly Accurate Protein Structure Prediction with AlphaFold](https://www.nature.com/articles/s41586-021-03819-2) — The historic Nobel-prize-winning paper by Jumper, Hassabis et al. solving the protein folding problem.
- [De Novo Design of Protein Structure and Function with RFdiffusion](https://www.nature.com/articles/s41586-023-06415-8) — Landmark paper by David Baker's lab demonstrating generative diffusion for functional proteins.

### 🧪 Practice

- [ColabFold Notebook](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb) — Fold any custom amino acid sequence into an interactive 3D PDB structure in under 2 minutes in Google Colab.

### 🛠️ Projects

- [De Novo Therapeutic Binder Design with RFdiffusion](https://github.com/RosettaCommons/RFdiffusion) — Design a novel protein binder targeting a viral spike protein and verify its fold confidence with ESMFold.

## 🧭 Recommended Learning Path

1. Understand the primary, secondary, and tertiary structures of proteins.
2. Explore protein language models (ESM-2) and calculate evolutionary fitness.
3. Run ColabFold to fold a sequence and inspect pLDDT confidence scores in PyMOL.
4. Study Invariant Point Attention (IPA) and SE(3) equivariance.
5. Generate new biological scaffolds with RFdiffusion.

## ⭐ Top 3 Resources

1. AlphaFold2 & OpenFold (DeepMind / AlQuraishi Lab)
2. ESM-2 / ESMFold (Meta AI & EvolutionaryScale)
3. RFdiffusion (David Baker Lab / University of Washington)

