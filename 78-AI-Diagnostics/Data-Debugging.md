# Data Debugging

> Data Debugging identifies corrupted data pipelines, silent schema violations, mislabeled training samples, and dataset anomalies before models learn from flawed inputs.

## 🎯 What to Learn

- Data validation schemas and declarative assertions (Great Expectations, Pandera)
- Confident Learning: Detecting mislabeled samples in training sets without manual re-annotation
- Visual dataset inspection and embedding exploration (FiftyOne)
- Statistical data profiling and data quality metrics (Whylogs)
- Synthetic data validation and corrupted pipeline detection

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Great Expectations Documentation](https://greatexpectations.io/)
  - Type: Official Platform & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: Great Expectations is the industry-standard open-source tool for data quality, testing, pipeline profiling, and automated documentation across enterprise ML pipelines.

### 📖 Documentation & References

- [Great Expectations Official Docs](https://docs.greatexpectations.io/) — Exhaustive tutorials on building expectation suites, data validation checkpoints, and data docs.
- [Cleanlab Documentation](https://docs.cleanlab.ai/) — Flag label errors, outliers, and dataset issues using Confident Learning algorithms.
- [FiftyOne Documentation](https://docs.voxel51.com/) — The open-source tool for building high-quality datasets and computer vision models.

### 🎓 Courses

- [Data Quality for Machine Learning (DeepLearning.AI)](https://www.deeplearning.ai/) — Course focusing on data-centric AI, data debugging, and pipeline testing.

### ▶️ YouTube — English

- [Data Engineering / Great Expectations: Video Guides & Tutorials](https://www.youtube.com/@great_expectations)
  - Channel: Data Engineering / Great Expectations
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Hands-on walkthrough of creating automated data tests that block corrupted data from entering training pipelines.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Data Quality for Machine Learning](https://www.oreilly.com/) — Comprehensive guide to auditing, testing, and curating training data for reliable models.

### 💻 GitHub / Implementations

- [great-expectations/great_expectations](https://github.com/great-expectations/great_expectations) — Always know what to expect from your data.
- [cleanlab/cleanlab](https://github.com/cleanlab/cleanlab) — The standard open-source library for data-centric AI and label quality.
- [voxel51/fiftyone](https://github.com/voxel51/fiftyone) — Open-source tool for curating vision datasets and finding visual label anomalies.

## 📄 Foundational Papers

- [Pervasive Label Errors in Test Sets Destabilize Machine Learning Benchmarks](https://arxiv.org/abs/2103.14749) — Northcutt, Athalye, and Mueller (NeurIPS 2021) exposing thousands of label errors across standard ML benchmark test sets.

### 🧪 Practice

- [Cleanlab Interactive Demos](https://github.com/cleanlab/cleanlab/tree/master/examples) — Jupyter notebooks detecting label errors across ImageNet, MNIST, and toxic comment classification datasets.

### 🛠️ Projects

- [Automated Pipeline Data Guardrail & Mislabeled Record Cleaner](https://docs.cleanlab.ai/) — Build an automated ingestion pipeline that uses Great Expectations to reject malformed schemas and Cleanlab to prune mislabeled training instances.

## 🧭 Recommended Learning Path

1. Adopt a data-centric AI mindset: high-quality data beats complex model architectures.
2. Write declarative assertions in Great Expectations or Pandera for incoming features.
3. Use Cleanlab's `find_label_issues` to automatically detect label noise in your dataset.
4. Use FiftyOne to visually inspect mislabeled and outlier samples in computer vision data.
5. Integrate automated data validation checkpoints into your airflow or dbt pipelines.

## ⭐ Top 3 Resources

1. Great Expectations (greatexpectations.io)
2. Cleanlab (cleanlab.ai)
3. FiftyOne (voxel51.com)

