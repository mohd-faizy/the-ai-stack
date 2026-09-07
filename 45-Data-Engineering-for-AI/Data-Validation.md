# Data Validation

> Data quality frameworks, automated schema validation, and statistical assertion libraries that prevent corrupted or drifted data from entering training pipelines.

## 🎯 What to Learn

- Data quality dimensions: Completeness, uniqueness, validity, timeliness, and consistency
- Great Expectations: Declarative expectation suites, automated data profiling, and visual data docs
- Pandera: Statistical data validation for Pandas, Polars, and PySpark DataFrames with Python type hints
- Pydantic: Runtime data validation and parsing using standard Python type annotations
- Data contracts: Defining SLAs between data producers and downstream machine learning consumers
- Detecting schema drift, missing value anomalies, and distribution shifts before model training

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Pandera](https://github.com/unionai-oss/pandera)
  - Type: DataFrame Validation Library
  - Language: English
  - Level: Intermediate
  - Why recommended: A lightweight, expressive statistical validation library for Python DataFrames that integrates seamlessly with type annotations and modern data pipelines.

### 🎓 Courses

- [Coursera: Introduction to Machine Learning in Production (DeepLearning.AI)](https://www.coursera.org/) — Covers data baseline validation, schema consistency, and drift detection.

### ▶️ YouTube — English

- [PyData / Vincent D. Warmerdam: Video Guides & Tutorials](https://www.youtube.com/@PyDataTV)
  - Channel: PyData / Vincent D. Warmerdam
  - Language: English
  - Type: Talk
  - Level: Intermediate
  - Why: Entertaining and insightful talk on using Pandera to catch silent data bugs before they ruin models.

### ▶️ YouTube — Hindi / Hinglish

- [SQL & Data Engineering for AI in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvYun1_5r9Fb4eQigioPB7yn)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Core SQL, window functions, and data pipeline fundamentals for AI in Hindi.


### 📚 Books

- [Data Quality Fundamentals by Barr Moses, Lior Gavish, Molly Vorwerck (O'Reilly)](https://www.oreilly.com/library/view/data-quality-fundamentals/9781098112035/) — Comprehensive guide to building reliable data pipelines and establishing data observability.

### 💻 GitHub / Implementations

- [Great Expectations](https://github.com/great-expectations/great_expectations) — Data validation and documentation.
- [Pandera](https://github.com/unionai-oss/pandera) — DataFrame validation library.
- [Cerberus](https://github.com/pyeve/cerberus) — Lightweight data validation.
- [Pydantic](https://github.com/pydantic/pydantic) — Data validation using Python type annotations.

### 🧪 Practice

- [Pandera Interactive Tutorial](https://pandera.readthedocs.io/en/stable/dataframe_schemas.html) — Write schema checks for column types, value ranges, and regex patterns in 10 lines of Python.

### 🛠️ Projects

- [Automated Data Ingestion Quality Gate](https://github.com/unionai-oss/pandera) — Build a pre-processing pipeline that validates incoming training data against a Pandera schema and halts training if nulls exceed 1%.

## 🧭 Recommended Learning Path

1. Understand why silent data corruption is more dangerous than crashes.
2. Validate API payloads using Pydantic models.
3. Define Pandera DataFrame schemas with statistical column checks (`Check.in_range`, `Check.str_matches`).
4. Integrate Great Expectations to produce HTML Data Docs for business stakeholders.
5. Enforce data contracts between data producers and ML training pipelines.

## ⭐ Top 3 Resources

1. Pandera (Union.ai / Statistical DataFrame validation)
2. Great Expectations (Data quality and data docs)
3. Pydantic (Python data validation standard)

