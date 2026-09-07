# Anomaly Detection

> Anomaly detection identifies observations, patterns, and events that deviate significantly from expected normal behavior across multivariate distributions and time series.

## 🎯 What to Learn

- Taxonomy of anomalies: point anomalies, contextual anomalies, and collective anomalies
- Statistical and density-based methods: Z-score, Mahalanobis distance, Local Outlier Factor (LOF)
- Tree-based and kernel methods: Isolation Forest, Extended Isolation Forest, and One-Class SVM
- Deep learning anomaly detection: Autoencoders (reconstruction error), VAEs, and Deep SVDD
- Time series anomaly detection: dynamic thresholding, matrix profiles, and seasonal decomposition
- Handling extreme class imbalance, semi-supervised evaluation, and false-alarm mitigation

## 📚 Best Learning Resources

### 🥇 Best Overall

- [PyOD: A Comprehensive and Scalable Python Library for Outlier Detection](https://pyod.readthedocs.io/en/latest/)
  - Type: Library & Documentation
  - Language: English
  - Level: Beginner to Intermediate
  - Why recommended: PyOD includes more than 40 detection algorithms ranging from classical statistical detectors to cutting-edge deep learning models with a clean scikit-learn API.

### 📖 Documentation & References

- [PyOD User Guide](https://pyod.readthedocs.io/en/latest/) — Detailed API documentation and algorithmic benchmarks for outlier detection.
- [Anomalib Documentation (Intel OpenVINO)](https://openvinotoolkit.github.io/anomalib/) — Deep learning library for visual anomaly detection in images and industrial inspection.
- [Alibi Detect Documentation](https://docs.seldon.io/projects/alibi-detect/en/stable/) — Outlier, concept drift, and adversarial detection library by Seldon.

### 🎓 Courses

- [Coursera: Unsupervised Learning, Recommenders, Reinforcement Learning (DeepLearning.AI)](https://www.deeplearning.ai/courses/machine-learning-specialization/) — Andrew Ng covers anomaly detection using Gaussian distribution density estimation.

### ▶️ YouTube — English

- [StatQuest with Josh Starmer: Video Guides & Tutorials](https://www.youtube.com/@statquest)
  - Channel: StatQuest with Josh Starmer
  - Language: English
  - Type: Tutorial
  - Level: Beginner to Intermediate
  - Why: Visual breakdown of Isolation Forests and how recursive path lengths isolate rare points.

### ▶️ YouTube — Hindi / Hinglish

- [Anomaly Detection in Machine Learning (Hindi)](https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Covers Gaussian estimation, Isolation Forest, and Local Outlier Factor with scikit-learn in Hinglish.

### 📚 Books

- [Outlier Analysis by Charu C. Aggarwal](https://link.springer.com/book/10.1007/978-3-319-47578-3) — The definitive academic treatise on outlier and anomaly detection algorithms.

### 💻 GitHub / Implementations

- [PyOD](https://github.com/yzhao062/pyod) — Outlier detection in Python.
- [Alibi Detect](https://github.com/SeldonIO/alibi-detect) — Outlier, adversarial, and drift detection.
- [Anomalib](https://github.com/open-edge-platform/anomalib) — Deep learning anomaly detection.
- [ADTK](https://github.com/arundo/adtk) — Anomaly detection in time series.

### 🧪 Practice

- [Credit Card Fraud Detection Dataset (Kaggle)](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud) — The quintessential imbalanced anomaly detection benchmark.

### 🛠️ Projects

- [Real-Time System Log & Metric Anomaly Monitor](https://pyod.readthedocs.io/) — Deploy an Isolation Forest and Autoencoder pipeline flagging outliers in streaming server metrics.

## 🧭 Recommended Learning Path

1. Understand the geometric definition of anomalies and the limitations of univariate Z-scores.
2. Master Isolation Forests: understand why anomalous points require fewer random splits to isolate.
3. Implement Local Outlier Factor (LOF) to detect anomalies across non-uniform density clusters.
4. Train an Autoencoder on normal data only and calculate reconstruction loss thresholds.
5. Evaluate performance using Precision-Recall Area Under Curve (PR-AUC) rather than ROC-AUC on imbalanced sets.

## ⭐ Top 3 Resources

1. [PyOD](https://pyod.readthedocs.io/en/latest/) — The gold standard Python toolkit for tabular outlier detection.
2. [Anomalib](https://openvinotoolkit.github.io/anomalib/) — Premier deep learning library for computer vision anomaly detection.
3. [Outlier Analysis by Charu Aggarwal](https://link.springer.com/book/10.1007/978-3-319-47578-3) — The most thorough theoretical textbook on anomaly detection.

