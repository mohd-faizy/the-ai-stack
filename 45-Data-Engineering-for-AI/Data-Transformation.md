# Data Transformation

> Transformation frameworks, in-warehouse modeling, and distributed streaming engines that convert raw unstructured data into clean analytical datasets.

## 🎯 What to Learn

- The ELT (Extract, Load, Transform) paradigm: Transforming data directly inside cloud warehouses
- dbt (data build tool): Modular SQL transformations, Jinja templating, automatic dependency DAGs, and testing
- SQLMesh: Modern data transformation framework with virtual data environments, column-level lineage, and unit testing
- Apache Beam: Unified batch and streaming data processing model executing on Google Cloud Dataflow and Apache Flink
- Incremental data modeling: Materializing views, ephemeral tables, and handling changing dimensions (SCD)
- Semantic modeling and building feature tables for downstream machine learning

## 📚 Best Learning Resources

### 🥇 Best Overall

- [dbt (data build tool)](https://github.com/dbt-labs/dbt-core)
  - Type: Data Transformation Standard
  - Language: English
  - Level: Beginner
  - Why recommended: The global industry standard for data transformation in modern data stacks, enabling data engineers to write modular SQL models with testing and version control.

### 🎓 Courses

- [dbt Learn: Fundamentals Course](https://courses.getdbt.com/courses/fundamentals) — Free official certification course covering dbt development, testing, and deployment.

### ▶️ YouTube — English

- [Kahan Data Solutions / freeCodeCamp: Video Guides & Tutorials](https://www.youtube.com/@freecodecamp)
  - Channel: Kahan Data Solutions / freeCodeCamp
  - Language: English
  - Type: Course
  - Level: Beginner
  - Why: Clear, practical walkthrough building modular transformation models, testing, and compiling DAGs.

### ▶️ YouTube — Hindi / Hinglish

- [SQL & Data Engineering for AI in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvYun1_5r9Fb4eQigioPB7yn)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Core SQL, window functions, and data pipeline fundamentals for AI in Hindi.


### 📚 Books

- [dbt in Action by Mark Freeman (Manning)](https://www.manning.com/) — Comprehensive guide to building production-grade data transformation workflows with dbt.

### 💻 GitHub / Implementations

- [dbt](https://github.com/dbt-labs/dbt-core) — Data transformation tool.
- [SQLMesh](https://github.com/TobikoData/sqlmesh) — Efficient data transformation framework.
- [Apache Beam](https://github.com/apache/beam) — Unified batch and streaming data processing.

### 🧪 Practice

- [dbt CLI Local Walkthrough with DuckDB](https://github.com/dbt-labs/dbt-duckdb) — Run dbt models locally against a fast DuckDB database without any cloud warehouse credentials.

### 🛠️ Projects

- [Modular Machine Learning Feature Modeling with dbt](https://github.com/dbt-labs/dbt-core) — Build a dbt project that transforms raw clickstream tables into clean, normalized feature matrices with automated schema tests.

## 🧭 Recommended Learning Path

1. Understand why modern data stacks shifted from ETL to ELT.
2. Install dbt-core and connect to a local DuckDB or cloud warehouse.
3. Write modular SQL models using the `{{ ref('model_name') }}` Jinja macro.
4. Add schema tests in `schema.yml` to verify uniqueness and non-null constraints.
5. Explore SQLMesh for automated column-level lineage and zero-copy virtual staging environments.

## ⭐ Top 3 Resources

1. dbt (dbt Labs)
2. SQLMesh (Tobiko Data)
3. Apache Beam (Batch & Streaming standard)

