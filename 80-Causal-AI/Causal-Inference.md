# Causal Inference

> Causal Inference estimates the causal effect of an intervention or treatment on an outcome of interest, resolving confounding bias using observational or experimental data.

## 🎯 What to Learn

- The Causal Ladder of Powers: Association vs. Intervention vs. Counterfactuals
- Judea Pearl's Structural Causal Models (SCMs) and the do-calculus
- Donald Rubin's Potential Outcomes Framework (POF) and counterfactual definitions
- Confounding, colliders, and the Backdoor and Frontdoor Adjustment criteria
- Modern causal estimation algorithms: Double Machine Learning (DML), Causal Forests, and EconML
- Instrumental variables and synthetic controls

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Introduction to Causal Inference (Brady Neal)](https://www.causalcourse.com/)
  - Type: Course & Open Textbook
  - Language: English
  - Level: Intermediate
  - Why recommended: Brady Neal's course is widely celebrated as the best introduction to causal inference, unifying Pearl's graphical models and Rubin's potential outcomes in clear, intuitive pedagogy.

### 📖 Documentation & References

- [DoWhy Documentation (PyWhy)](https://pywhy.org/dowhy/) — Python library for causal inference based on a unified 4-step framework: model, identify, estimate, and refute.
- [EconML Documentation (Microsoft Research)](https://econml.azurewebsites.net/) — Python package applying modern machine learning techniques to estimate heterogeneous treatment effects.
- [CausalML Documentation](https://causalml.readthedocs.io/) — Uplift modeling and causal inference with machine learning algorithms by Uber.

### 🎓 Courses

- [Introduction to Causal Inference Course](https://www.causalcourse.com/) — Comprehensive introductory lecture series and course notes by Brady Neal.

### ▶️ YouTube — English

- [Introduction to Causal Inference Course](https://www.youtube.com/@BradyNealCausalInference)
  - Channel: Brady Neal - Causal Inference
  - Language: English
  - Type: Playlist
  - Level: Intermediate
  - Why: Full lecture course on potential outcomes, DAGs, confounding, and the do-operator.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [The Book of Why: The New Science of Cause and Effect](http://bayes.cs.ucla.edu/WHY/) — Judea Pearl and Dana Mackenzie's accessible yet profound masterpiece introducing causal diagrams and reasoning.
- [Causal Inference: What If](https://www.hsph.harvard.edu/miguel-hernan/causal-inference-book/) — Miguel Hernan and James Robins comprehensive textbook on causal estimation from observational data.

### 💻 GitHub / Implementations

- [pywhy/dowhy](https://github.com/pywhy/dowhy) — A library for causal inference that supports explicit modeling and testing of causal assumptions.
- [py-why/econml](https://github.com/py-why/econml) — ALICE (Automated Learning and Intelligence for Causal Economics) by Microsoft Research.

## 📄 Foundational Papers

- [Causal diagrams for empirical research](https://academic.oup.com/biomet/article/82/4/669/251991) — Judea Pearl (Biometrika 1995) seminal paper introducing graphical models and d-separation for causal inference.
- [Double/debiased machine learning for treatment and structural parameters](https://academic.oup.com/ectj/article/21/1/C1/5056980) — Chernozhukov et al. (2018) foundational econometrics paper introducing Double ML.

### 🧪 Practice

- [DoWhy Tutorial Notebooks](https://pywhy.org/dowhy/main/example_notebooks/tutorial.html) — Step-by-step notebooks implementing the 4-step causal workflow.

### 🛠️ Projects

- [Heterogeneous Treatment Effect & Uplift Optimization](https://py-why.org/econml) — Estimate individualized customer discount responsiveness using Double Machine Learning in EconML to maximize campaign ROI.

## 🧭 Recommended Learning Path

1. Learn the fundamental difference between conditioning on observation P(Y|X) and intervening P(Y|do(X)).
2. Construct Directed Acyclic Graphs (DAGs) and identify chains, forks, and colliders using d-separation.
3. Master the Backdoor Criterion to eliminate confounding bias.
4. Implement DoWhy's 4-step pipeline: Model DAG -> Identify estimand -> Estimate effect -> Refute with placebo tests.
5. Use EconML to train Double Machine Learning (DML) models for heterogeneous treatment effects.

## ⭐ Top 3 Resources

1. Introduction to Causal Inference (Brady Neal / causalcourse.com)
2. The Book of Why (Judea Pearl)
3. DoWhy & EconML (PyWhy Ecosystem)

