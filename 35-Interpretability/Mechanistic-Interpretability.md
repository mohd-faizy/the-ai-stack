# Mechanistic Interpretability

> Reverse-engineering neural networks into understandable algorithms, discovering circuits, induction heads, and monosemantic features using Sparse Autoencoders.

## 🎯 What to Learn

- The residual stream as a communication bus across transformer layers
- Induction heads: The fundamental two-head circuit driving in-context learning
- Superposition hypothesis and polysemanticity: Why individual neurons represent multiple concepts
- Sparse Autoencoders (SAEs): Reconstructing internal activations into monosemantic dictionary features
- Activation patching (causal mediation analysis) to test mechanistic hypotheses
- TransformerLens, SAELens, and nnsight toolkits

## 📚 Best Learning Resources

### 🥇 Best Overall

- [TransformerLens (Neel Nanda)](https://github.com/TransformerLensOrg/TransformerLens)
  - Type: Research Library
  - Language: English
  - Level: Advanced
  - Why recommended: The definitive open-source Python library designed specifically for mechanistic interpretability of autoregressive language models.

### 🎓 Courses

- [ARENA 3.0: Alignment Research Engineer Accelerator](https://www.arena.education/) — World-class intensive open-access curriculum covering mechanistic interpretability, TransformerLens, and SAEs.

### ▶️ YouTube — English

- [Neel Nanda: Video Guides & Tutorials](https://www.youtube.com/@neelnanda)
  - Channel: Neel Nanda
  - Language: English
  - Type: Playlist / Course
  - Level: Advanced
  - Why: Neel Nanda (DeepMind) walks through live coding sessions discovering induction heads and circuits in GPT-2.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [A Mathematical Framework for Transformer Circuits (Elhage et al.)](https://transformer-circuits.pub/2021/framework/index.html) — The foundational text establishing the mathematical formalization of attention-only transformers.

### 💻 GitHub / Implementations

- [TransformerLens](https://github.com/TransformerLensOrg/TransformerLens) — Library for mechanistic interpretability.
- [SAELens](https://github.com/jbloomAus/SAELens) — Sparse autoencoder training and analysis.
- [CircuitsVis](https://github.com/alan-cooney/CircuitsVis) — Visualization tools for interpretability.
- [pyvene](https://github.com/stanfordnlp/pyvene) — Intervention-based interpretability.
- [nnsight](https://github.com/ndif-team/nnsight) — Remote neural network access and interpretation.
- [Baukit](https://github.com/davidbau/baukit) — Tools for understanding neural networks.

## 📄 Foundational Papers

- [A Mathematical Framework for Transformer Circuits](https://transformer-circuits.pub/2021/framework/index.html) — Introduces QK and OV circuit decomposition, virtual weights, and eigenvalue analysis.
- [In-context Learning and Induction Heads](https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html) — Discovered the mechanism by which transformers generalize and perform in-context copying.
- [Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html) — Applied Sparse Autoencoders at scale to map high-level concepts (cities, emotions, safety violations).

### 🧪 Practice

- [ARENA Interpretability Exercises](https://github.com/callummcdougall/ARENA_3.0) — Colab notebooks implementing activation patching, induction head discovery, and SAE feature extraction.

### 🛠️ Projects

- [Locate and Patch Indirect Object Identification (IOI) Circuit](https://github.com/TransformerLensOrg/TransformerLens) — Use activation patching in TransformerLens to reproduce the seminal IOI circuit in GPT-2 Small.

## 🧭 Recommended Learning Path

1. Study the mathematical decomposition of Transformer layers (QK and OV circuits).
2. Set up TransformerLens and run exploratory activation hooks on GPT-2 Small.
3. Perform activation patching to identify the heads responsible for Indirect Object Identification.
4. Understand superposition, polysemantic neurons, and Sparse Autoencoders (SAEs).
5. Train a toy Sparse Autoencoder on residual stream activations with SAELens.

## ⭐ Top 3 Resources

1. TransformerLens (Neel Nanda / Alignment Research)
2. Transformer Circuits Thread (Anthropic Research publications)
3. ARENA 3.0 Curriculum (Comprehensive hands-on exercises)

