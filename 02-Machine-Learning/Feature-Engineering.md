# Feature Engineering

> Feature engineering transforms raw tabular, temporal, and unstructured data into informative mathematical representations that maximize machine learning predictive performance.

## 🎯 What to Learn

- Missing value imputation strategies: mean/median, KNN, MICE (IterativeImputer)
- Categorical encoding: One-Hot, Target (Mean) Encoding, Weight of Evidence (WoE), and CatBoost encoding
- Numerical transformations: Box-Cox, Yeo-Johnson, quantile transformation, and log transforms
- Feature extraction: polynomial features, interaction terms, domain aggregation, and PCA
- Feature selection methods: filter methods (mutual info, chi-square), wrapper methods (RFE), embedded methods (Lasso)
- Feature stores: offline batch vs online low-latency key-value feature retrieval (Feast, Hopsworks)
- Detecting and preventing target leakage in training and cross-validation pipelines

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Feature Engineering for Machine Learning by Alice Zheng and Amanda Casari](https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/)
  - Type: Book
  - Language: English
  - Level: Beginner to Intermediate
  - Why recommended: A clear, intuitive, and practical guide covering numeric manipulation, categorical encoding, text representations, and scaling.

### 📖 Documentation & References

- [Feature-engine Documentation](https://feature-engine.trainindata.com/en/latest/) — Python library with scikit-learn compatible transformers for missing data, encoding, discretization, and selection.
- [Feast Documentation](https://docs.feast.dev/) — The leading open-source feature store for real-time and batch machine learning.
- [Featuretools Documentation](https://featuretools.alteryx.com/en/stable/) — Framework for automated feature engineering using Deep Feature Synthesis.

### 🎓 Courses

- [Feature Engineering on Kaggle Learn](https://www.kaggle.com/learn/feature-engineering) — Fast, hands-on micro-course teaching mutual information, k-means feature creation, and target encoding.

### ▶️ YouTube — English

- [Feature Engineering for Machine Learning Tutorial](https://www.youtube.com/watch?v=6WDFfaYtN6s)
  - Channel: freeCodeCamp.org
  - Language: English
  - Type: Tutorial
  - Level: Beginner to Intermediate
  - Why: Comprehensive multi-hour coding walkthrough of data transformations, outlier capping, and categorical encoding.

### ▶️ YouTube — Hindi / Hinglish

- [Feature Engineering Full Course in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Nitish Singh covers handling missing values, categorical encoding, outlier treatment, and feature scaling with scikit-learn.

### 📚 Books

- [Feature Engineering for Machine Learning (Zheng & Casari)](https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/) — The definitive guide on feature extraction from text, image, and tabular data.
- [Feature Engineering and Selection: A Practical Approach for Predictive Models by Max Kuhn & Kjell Johnson](http://www.feat.engineering/) — Free online textbook detailing feature selection and predictive preprocessing.

### 💻 GitHub / Implementations

- [Featuretools](https://github.com/alteryx/featuretools) — Automated feature engineering.
- [Feature-engine](https://github.com/feature-engine/feature_engine) — Feature engineering and selection.
- [tsfresh](https://github.com/blue-yonder/tsfresh) — Time series feature extraction.
- [Feast](https://github.com/feast-dev/feast) — Feature store for ML.
- [Hopsworks](https://github.com/logicalclocks/hopsworks) — Feature store and MLOps platform.

### 🧪 Practice

- [Kaggle Feature Engineering Playground](https://www.kaggle.com/learn/feature-engineering) — Interactive exercises implementing target encoding and clustering features.

### 🛠️ Projects

- [Production Feature Store with Feast & Redis](https://github.com/feast-dev/feast) — Set up Feast to manage entity features, materialize offline parquet stores to Redis, and serve real-time predictions.

## 🧭 Recommended Learning Path

1. Understand the mechanics of data distributions, skewness, and power transforms.
2. Implement robust encoding for high-cardinality categoricals with out-of-fold target encoding.
3. Construct interaction features and automated deep feature syntheses.
4. Apply recursive feature elimination (RFE) and Shapley values (SHAP) to isolate high-signal features.
5. Deploy a centralized feature store (Feast) to eliminate training-serving skew in production.

## ⭐ Top 3 Resources

1. [Feature Engineering for Machine Learning (Zheng & Casari)](https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/) — The most practical, accessible handbook on transforming tabular data.
2. [Feature-engine Library](https://feature-engine.trainindata.com/en/latest/) — Exceptional scikit-learn compatible tool suite for robust data preprocessing.
3. [Feast Feature Store](https://feast.dev/) — The definitive open-source feature store bridging training and real-time serving.

