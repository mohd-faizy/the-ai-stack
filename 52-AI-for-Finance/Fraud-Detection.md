# Fraud Detection

> Anomaly detection algorithms, graph neural networks, and imbalanced classification techniques engineered to intercept payment fraud and money laundering in real time.

## 🎯 What to Learn

- Extreme class imbalance: Managing fraud scenarios where positive fraud cases represent < 0.1% of transactions
- PyOD (Python Outlier Detection): Comprehensive toolbox containing 40+ anomaly detection algorithms (Isolation Forests, LOF, COPOD, ECOD)
- Alibi Detect: Open-source Python library for outlier, adversarial, and drift detection in production
- Graph Neural Networks for Anti-Money Laundering (AML): Detecting mule accounts and cyclical transaction rings
- Evaluation metrics under extreme imbalance: Precision-Recall AUC (PR-AUC), F-beta, and cost-matrix loss
- Synthetic oversampling techniques: SMOTE, ADASYN, and latent space diffusion

## 📚 Best Learning Resources

### 🥇 Best Overall

- [PyOD (Python Outlier Detection)](https://github.com/yzhao062/pyod)
  - Type: Anomaly Detection Library
  - Language: English
  - Level: Intermediate
  - Why recommended: The most comprehensive and widely used Python library for detecting outliers in data, featuring over 40 classical and deep learning algorithms with unified scikit-learn API.

### 🎓 Courses

- [Coursera: Anomaly Detection in Python](https://www.coursera.org/) — Practical hands-on training on unsupervised anomaly detection, fraud identification, and outlier scoring.

### ▶️ YouTube — English

- [FreeCodeCamp / Ken Jee: Video Guides & Tutorials](https://www.youtube.com/@freecodecamp)
  - Channel: FreeCodeCamp / Ken Jee
  - Language: English
  - Type: Project
  - Level: Beginner
  - Why: End-to-end walkthrough on handling skewed credit card datasets, PR-AUC evaluation, and XGBoost training.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Outlier Analysis by Charu C. Aggarwal (Springer)](https://link.springer.com/book/10.1007/978-3-319-47578-3) — The definitive academic encyclopedia on anomaly detection algorithms and applications.

### 💻 GitHub / Implementations

- [PyOD](https://github.com/yzhao062/pyod) — Outlier detection for fraud.
- [Alibi Detect](https://github.com/SeldonIO/alibi-detect) — Drift and outlier detection.

## 📄 Foundational Papers

- [PyOD: A Python Toolbox for Scalable Outlier Detection](https://jmlr.org/papers/v20/19-011.html) — Zhao, Nasrullah, and Zheng paper introducing the standardized outlier detection framework.

### 🧪 Practice

- [Kaggle Credit Card Fraud Detection Dataset](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud) — The classic benchmark dataset with 284,807 transactions and 492 fraud cases for practicing anomaly detection.

### 🛠️ Projects

- [Real-Time Transaction Anomaly Detector with PyOD](https://github.com/yzhao062/pyod) — Train an Isolation Forest and COPOD ensemble model to detect fraudulent credit card transactions and score incoming streams under 10ms.

## 🧭 Recommended Learning Path

1. Understand why Accuracy is a misleading metric for imbalanced fraud datasets.
2. Master Precision-Recall curves, PR-AUC, and cost-weighted loss matrices.
3. Apply Isolation Forest, Local Outlier Factor (LOF), and COPOD using PyOD.
4. Explore graph neural networks (PyTorch Geometric) to detect transaction rings and money laundering networks.
5. Deploy a low-latency model to score real-time payment transactions.

## ⭐ Top 3 Resources

1. PyOD (Python Outlier Detection)
2. Kaggle Credit Card Fraud Benchmark
3. Alibi Detect (Production drift & outlier detection)

