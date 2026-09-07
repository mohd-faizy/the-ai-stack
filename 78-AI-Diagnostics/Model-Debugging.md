# Model Debugging

> Model Debugging systematic tests and pinpoints where, why, and how a machine learning model makes erroneous predictions, helping engineers diagnose edge cases, data leakage, and structural blind spots.

## 🎯 What to Learn

- Behavioral testing for ML (directional, minimum functionality, and invariance tests - CheckList)
- Saliency and attribution maps for failure analysis (Integrated Gradients, SHAP)
- Cleanlab confident learning for detecting model-assisted data mislabeling
- Vulnerability scanning for LLMs and tabular models (Giskard, Deepchecks)
- Slice-based error analysis and cohort performance disparities

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Giskard (Quality Assurance for AI)](https://www.giskard.ai/)
  - Type: Official Platform & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: Giskard provides automated quality assurance, vulnerability scanning, and behavioral testing for tabular models, NLP models, and LLM applications.

### 📖 Documentation & References

- [Giskard Documentation](https://docs.giskard.ai/) — Tutorials on detecting hallucination, bias, data leakage, and generating automated test suites.
- [Deepchecks Documentation](https://docs.deepchecks.com/) — Comprehensive testing suite for tabular, NLP, and vision machine learning models.
- [Captum Documentation](https://captum.ai/) — PyTorch's official model interpretability and debugging library.

### 🎓 Courses

- [Testing Machine Learning Systems (DeepLearning.AI)](https://www.deeplearning.ai/) — Course focusing on automated testing, validation, and debugging for production ML systems.

### ▶️ YouTube — English

- [Giskard: Video Guides & Tutorials](https://www.youtube.com/@Giskard_AI)
  - Channel: Giskard
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Step-by-step demonstration of finding silent model bugs and edge-case vulnerabilities.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Reliable Machine Learning](https://www.oreilly.com/library/view/reliable-machine-learning/9781098106218/) — O'Reilly guide by Cathy Chen et al. on testing, debugging, and operating production ML systems.

### 💻 GitHub / Implementations

- [Giskard-AI/giskard](https://github.com/Giskard-AI/giskard) — Open-source testing and evaluation library for ML models and LLMs.
- [deepchecks/deepchecks](https://github.com/deepchecks/deepchecks) — Validation and testing for machine learning models and data.

## 📄 Foundational Papers

- [Beyond Accuracy: Behavioral Testing of NLP models with CheckList](https://arxiv.org/abs/2005.04118) — Ribeiro et al. (ACL 2020 Best Paper) introducing methodology for testing model capabilities beyond test-set accuracy.
- [Confident Learning: Estimating Uncertainty in Dataset Labels](https://arxiv.org/abs/1911.00068) — Northcutt, Jiang, and Chuang (JAIR 2021) foundational paper establishing label error identification.

### 🧪 Practice

- [Deepchecks Quickstart Notebooks](https://docs.deepchecks.com/stable/getting-started/welcome.html) — Run integrity suites, train-test validation, and model evaluation suites on sample datasets.

### 🛠️ Projects

- [Automated Pre-Deployment Model Bug Scanner](https://github.com/Giskard-AI/giskard) — Integrate Giskard into a CI/CD pipeline to scan a fine-tuned customer support classifier for data leakage and performance dips.

## 🧭 Recommended Learning Path

1. Distinguish between aggregate benchmark accuracy and slice-based failure analysis.
2. Implement behavioral testing suites (invariance and directional expectation tests).
3. Use Deepchecks to validate train/test splits for target leakage and domain mismatch.
4. Use Giskard to run automated scan suites against tabular models and LLM endpoints.
5. Incorporate automated model debugging suites into your CI/CD deployment pipeline.

## ⭐ Top 3 Resources

1. Giskard (giskard.ai)
2. Deepchecks (deepchecks.com)
3. Beyond Accuracy with CheckList (Ribeiro et al.)

