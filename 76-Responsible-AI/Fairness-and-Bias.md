# Fairness & Bias

> Fairness and bias mitigation in AI focuses on measuring disparate impact, detecting algorithmic discrimination across protected demographic attributes, and applying pre-, in-, and post-processing algorithms to ensure equitable model behavior.

## 🎯 What to Learn

- Demographic parity, equalized odds, and predictive rate parity metrics
- Disparate impact ratio and statistical parity difference
- Pre-processing algorithms (reweighing, optimized pre-processing)
- In-processing algorithms (adversarial debiasing, prejudice remover)
- Post-processing algorithms (reject option classification, threshold optimizer)
- Intersectionality and fairness trade-offs (impossibility theorems of fairness)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Fairlearn Documentation & User Guide](https://fairlearn.org/)
  - Type: Official Documentation & Guide
  - Language: English
  - Level: Intermediate
  - Why recommended: Fairlearn (originally developed by Microsoft) is the premier open-source Python toolkit for assessing and improving fairness in machine learning, offering practical disparity metrics and mitigation algorithms.

### 📖 Documentation & References

- [Fairlearn User Guide](https://fairlearn.org/main/user_guide/index.html) — Exhaustive guide covering demographic disparity metrics, fairness constraints, and postprocessing estimators.
- [IBM AI Fairness 360 (AIF360)](https://aif360.res.ibm.com/) — IBM open-source toolkit with 70+ fairness metrics and 10+ mitigation algorithms across lifecycle phases.
- [What-If Tool (PAIR Google)](https://pair-code.github.io/what-if-tool/) — Visual interactive probe for analyzing dataset balance, counterfactual examples, and fairness thresholds.

### 🎓 Courses

- [Fairness and Machine Learning (CS 294 / Text)](https://fairmlbook.org/) — Course and open textbook by Solon Barocas, Moritz Hardt, and Arvind Narayanan (Princeton/UC Berkeley).

### ▶️ YouTube — English

- [SciPy: Video Guides & Tutorials (SciPy)](https://www.youtube.com/results?search_query=SciPy%20SciPy%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: SciPy
  - Language: English
  - Type: Conference Talk
  - Level: Intermediate
  - Why: Clear walkthrough of how demographic disparity occurs in models and how Fairlearn mitigates it.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Fairness and Machine Learning: Limitations and Opportunities](https://fairmlbook.org/) — The definitive text by Barocas, Hardt, and Narayanan on algorithmic fairness and demographic parity.

### 💻 GitHub / Implementations

- [fairlearn/fairlearn](https://github.com/fairlearn/fairlearn) — A Python package to assess and improve the fairness of machine learning models.
- [Trusted-AI/AIF360](https://github.com/Trusted-AI/AIF360) — IBM's comprehensive fairness toolkit containing metric calculators and debiasing algorithms.

## 📄 Foundational Papers

- [Fair prediction with disparate impact: A study of bias in recidivism prediction instruments](https://arxiv.org/abs/1610.07524) — Chouldechova (2017) seminal paper proving mathematical mutual exclusivity among common fairness criteria.
- [Equality of Opportunity in Supervised Learning](https://arxiv.org/abs/1610.02413) — Hardt, Price, and Srebro (2016) introducing equalized odds and equal opportunity.

### 🧪 Practice

- [Fairlearn Tutorials & Case Studies](https://fairlearn.org/main/auto_examples/index.html) — Step-by-step notebooks showing credit decision debiasing and medical outcome adjustments.

### 🛠️ Projects

- [Demographic Lending Disparity Audit](https://fairlearn.org/main/auto_examples/plot_credit_loan_decisions.html) — Audit a real loan prediction dataset for racial and gender bias, and apply Exponentiated Gradient mitigation.

## 🧭 Recommended Learning Path

1. Learn core fairness definitions: demographic parity, equal opportunity, and calibration within groups.
2. Calculate disparity metrics on a biased tabular dataset using Fairlearn MetricFrame.
3. Inspect trade-offs between overall model accuracy and protected group fairness.
4. Apply Fairlearn's ExponentiatedGradient in-processing to constrain demographic disparity.
5. Deploy model monitoring to catch demographic drift in production predictions.

## ⭐ Top 3 Resources

1. Fairlearn (Microsoft Open Source)
2. Fairness and Machine Learning (Barocas, Hardt, Narayanan)
3. IBM AI Fairness 360 (AIF360)

