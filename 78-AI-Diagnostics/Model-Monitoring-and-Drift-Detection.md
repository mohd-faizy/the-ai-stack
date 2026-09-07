# Model Monitoring & Drift Detection

> Model Monitoring and Drift Detection continuously tracks production inference data, measuring feature distribution changes, concept drift, and performance decay to trigger proactive alerts and retraining pipelines.

## 🎯 What to Learn

- Covariate shift (data drift) vs. concept drift (posterior shift)
- Statistical distance metrics: Kolmogorov-Smirnov, Wasserstein distance, Population Stability Index (PSI)
- Target drift and performance estimation without ground truth labels (CBPE)
- Data quality metrics, missing value spikes, and schema violations in production
- Alerting thresholds and automated trigger strategies for model retraining

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Evidently AI Documentation](https://docs.evidentlyai.com/)
  - Type: Official Platform & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: Evidently is the gold standard open-source library for monitoring ML models, calculating data drift, and generating interactive reports and production telemetry metrics.

### 📖 Documentation & References

- [Evidently AI Documentation](https://docs.evidentlyai.com/) — Complete guide to drift detection algorithms, dashboard generation, and Prometheus/Grafana integration.
- [NannyML Documentation](https://docs.nannyml.com/) — Specialized framework for estimating post-deployment model performance without ground truth labels.
- [Alibi Detect (Seldon)](https://docs.seldon.io/projects/alibi-detect/) — Algorithms for outlier, adversarial, and drift detection in tabular, text, and image data.

### 🎓 Courses

- [Machine Learning in Production (DeepLearning.AI MLOps)](https://www.deeplearning.ai/courses/machine-learning-engineering-for-production-cop/) — Andrew Ng's course on monitoring models for concept drift and data drift in live deployments.

### ▶️ YouTube — English

- [Evidently AI: Video Guides & Tutorials](https://www.youtube.com/@EvidentlyAI)
  - Channel: Evidently AI
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Elena Samuylova explains practical data drift metrics, tests, and production monitoring architectures.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Designing Machine Learning Systems](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/) — Chip Huyen's essential book covering production distribution shifts and continuous monitoring architectures.

### 💻 GitHub / Implementations

- [evidentlyai/evidently](https://github.com/evidentlyai/evidently) — Evaluate, test, and monitor ML models from validation to production.
- [NannyML/nannyml](https://github.com/NannyML/nannyml) — Estimate post-deployment model performance without access to ground-truth targets.

## 📄 Foundational Papers

- [Failing Loudly: An Empirical Study of Methods for Detecting Dataset Shift](https://arxiv.org/abs/1810.11953) — Rabanser, Gunnemann, and Lipton (NeurIPS 2019) benchmark evaluating dimensional reduction and two-sample statistical tests for dataset shift.

### 🧪 Practice

- [Evidently AI Tutorials & Examples](https://github.com/evidentlyai/evidently/tree/main/examples) — Real-world examples of monitoring churn prediction, regression drift, and LLM output quality.

### 🛠️ Projects

- [Real-Time Production Drift Monitoring Service](https://docs.evidentlyai.com/integrations/grafana_monitoring) — Deploy an inference monitoring microservice that pushes drift metrics to Prometheus and visualizes live covariate shifts in Grafana.

## 🧭 Recommended Learning Path

1. Learn the mathematical definitions of covariate shift, concept drift, and label shift.
2. Master two-sample statistical tests (KS-test for numerical features, Chi-square for categorical features).
3. Generate your first HTML drift report using Evidently AI on baseline vs. production data.
4. Study confidence-based performance estimation (CBPE) in NannyML when true labels are delayed.
5. Set up an automated alert channel (Slack/PagerDuty) triggered when PSI exceeds 0.2.

## ⭐ Top 3 Resources

1. Evidently AI (evidentlyai.com)
2. NannyML (nannyml.com)
3. Designing Machine Learning Systems (Chip Huyen)

