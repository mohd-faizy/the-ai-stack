# Explainable AI (XAI)

> Post-hoc explanation methods, feature attribution algorithms, and transparency frameworks to interpret predictions of black-box machine learning models.

## 🎯 What to Learn

- Local vs Global explanations: Explaining a single prediction vs global model behavior
- SHAP (SHapley Additive exPlanations): Game-theoretic feature attribution and TreeSHAP
- LIME (Local Interpretable Model-agnostic Explanations): Fitting local surrogate models
- Gradient-based attribution for deep networks: Integrated Gradients, DeepLIFT, and SmoothGrad
- PyTorch Captum: Model interpretability and understanding library
- InterpretML: Glassbox models (Explainable Boosting Machines) vs blackbox explainers

## 📚 Best Learning Resources

### 🥇 Best Overall

- [SHAP (SHapley Additive exPlanations)](https://github.com/shap/shap)
  - Type: Interpretability Framework
  - Language: English
  - Level: Intermediate
  - Why recommended: The gold-standard Python library for game-theoretic feature attribution across tabular, tree-based, vision, and text models.

### 🎓 Courses

- [Kaggle: Machine Learning Explainability](https://www.kaggle.com/learn/machine-learning-explainability) — Short, practical course by Dan Becker covering Permutation Importance, Partial Dependence Plots, and SHAP.

### ▶️ YouTube — English

- [StatQuest with Josh Starmer: Video Guides & Tutorials](https://www.youtube.com/@statquest)
  - Channel: StatQuest with Josh Starmer
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Josh Starmer breaks down cooperative game theory, Shapley values, and how SHAP attributes credit step-by-step.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Interpretable Machine Learning by Christoph Molnar](https://christophm.github.io/interpretable-ml-book/) — The definitive open-access guide on model interpretability, Shapley values, LIME, and counterfactuals.

### 💻 GitHub / Implementations

- [Captum](https://github.com/pytorch/captum) — Model interpretability for PyTorch.
- [SHAP](https://github.com/shap/shap) — SHapley Additive exPlanations.
- [LIME](https://github.com/marcotcr/lime) — Local interpretable model-agnostic explanations.
- [Alibi](https://github.com/SeldonIO/alibi) — ML model explanation algorithms.
- [InterpretML](https://github.com/interpretml/interpret) — Interpretable ML by Microsoft.
- [ELI5](https://github.com/eli5-org/eli5) — Debug ML classifiers and explain predictions.
- [AI Explainability 360](https://github.com/Trusted-AI/AIX360) — Explainability toolkit by IBM.
- [Ecco](https://github.com/jalammar/ecco) — Explore and explain language models.
- [LIT](https://github.com/PAIR-code/lit) — Language Interpretability Tool by Google.

## 📄 Foundational Papers

- [A Unified Approach to Interpreting Model Predictions (SHAP)](https://arxiv.org/abs/1705.07874) — Lundberg & Lee paper unifying six previous methods via game-theoretic Shapley values.
- [Why Should I Trust You?: Explaining the Predictions of Any Classifier (LIME)](https://arxiv.org/abs/1602.04938) — Ribeiro et al. paper introducing local surrogate explanations for arbitrary black-box classifiers.

### 🧪 Practice

- [Kaggle Explainability Competitions & Notebooks](https://www.kaggle.com/learn/machine-learning-explainability) — Interactive exercises calculating SHAP values on real datasets in the browser.

### 🛠️ Projects

- [Model Attribution Dashboard](https://github.com/shap/shap) — Train an XGBoost credit risk model and build a Streamlit dashboard showing individual waterfall SHAP explanations.

## 🧭 Recommended Learning Path

1. Understand feature importance vs feature attribution.
2. Master Shapley value axioms (Efficiency, Symmetry, Dummy, Additivity).
3. Implement SHAP TreeExplainer on XGBoost and LightGBM models.
4. Explore Captum's Integrated Gradients on PyTorch neural networks.
5. Deploy Explainable Boosting Machines (EBMs) for regulated industries.

## ⭐ Top 3 Resources

1. Interpretable Machine Learning by Christoph Molnar (Book)
2. SHAP by Scott Lundberg (GitHub library)
3. Captum by PyTorch team (Neural network attribution)

