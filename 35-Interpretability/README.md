# 35 - Interpretability

> Scientific methods and analytical tools to reverse-engineer the inner representations, circuits, attention patterns, and decision processes of deep neural networks.

## 🌐 Overview & Architectural Importance

Deep learning models are notoriously considered 'black boxes'. Mechanistic interpretability and explainable AI (XAI) deconstruct internal activations, discovering semantic features, induction heads, and circuits that explain why a model made a specific prediction or hallucinated.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Mechanistic Interpretability**](Mechanistic-Interpretability.md) — TransformerLens, SAELens, circuits, sparse autoencoders (SAEs), and reverse-engineering weights.
* [**Explainable AI (XAI)**](Explainable-AI-XAI.md) — SHAP, LIME, Captum, Integrated Gradients, InterpretML, and feature attributions.
* [**Attention Visualization**](Attention-Visualization.md) — BertViz, Transformer Debugger, attention rollout, and head attribution maps.

## 🧭 Recommended Study Sequence

1. **Feature Attribution**: Perturbation (LIME), game-theoretic Shapley values (SHAP), and Integrated Gradients (Captum).
2. **Mechanistic Reverse-Engineering**: Identifying residual stream components, attention heads, and MLP activations.
3. **Induction Heads & Circuits**: How transformers perform in-context copying and associative recall.
4. **Sparse Autoencoders (SAEs)**: Disentangling polysemanticity into monosemantic human-interpretable concepts.
5. **Activation Patching & Steering**: Modifying specific internal vectors to test causal hypotheses and control behavior.

## 🗝️ Foundational Prerequisites

- Linear algebra: Matrix decomposition, vector projections, and eigenbases.
- Transformer internals: Residual stream, query/key/value projections, and multi-head attention.
- Game theory fundamentals for Shapley values.

---

[← Back to Main Repository](../README.md)
