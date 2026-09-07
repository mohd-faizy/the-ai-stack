# Data Pipelines & Orchestration

> Workflow orchestration engines, Directed Acyclic Graph (DAG) schedulers, and asset-based pipeline frameworks that coordinate recurring data workflows.

## 🎯 What to Learn

- Task-based vs Asset-based orchestration: Managing imperative tasks vs declarative data assets
- Dagster: Asset-based orchestration platform with native lineage, observability, and software-defined assets
- Apache Airflow: The foundational enterprise workflow orchestrator (DAGs, Operators, Sensors, Celery/K8s executors)
- Prefect: Modern workflow orchestration with Python-native decorators (`@flow`, `@task`), retries, and dynamic maps
- Hamilton (DAGWorks): Micro-framework for writing clean, self-documenting data transformations in pandas/polars
- Handling backfills, incremental data ingestion, idempotent pipeline design, and alerting

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Dagster](https://github.com/dagster-io/dagster)
  - Type: Data Orchestrator
  - Language: English
  - Level: Intermediate
  - Why recommended: The modern data orchestrator built for the AI era, centering on software-defined assets, automatic lineage tracking, and first-class local development.

### 🎓 Courses

- [Dagster University](https://courses.dagster.io/) — Free, high-quality hands-on courses covering asset-based orchestration and production pipelines.

### ▶️ YouTube — English

- [Seattle Data Guy / Dagster: Video Guides & Tutorials](https://www.youtube.com/@SeattleDataGuy)
  - Channel: Seattle Data Guy / Dagster
  - Language: English
  - Type: Deep Dive
  - Level: Intermediate
  - Why: Clear comparative analysis of asset-based data lineage versus traditional task execution scheduling.

### ▶️ YouTube — Hindi / Hinglish

- [SQL & Data Engineering for AI in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvYun1_5r9Fb4eQigioPB7yn)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Core SQL, window functions, and data pipeline fundamentals for AI in Hindi.


### 📚 Books

- [Fundamentals of Data Engineering by Joe Reis and Matt Housley (O'Reilly)](https://www.oreilly.com/library/view/fundamentals-of-data/9781098108298/) — The foundational modern text on data architectures, pipelines, and orchestration.

### 💻 GitHub / Implementations

- [Airflow](https://github.com/apache/airflow) — Workflow orchestration platform.
- [Dagster](https://github.com/dagster-io/dagster) — Data orchestration platform.
- [Prefect](https://github.com/PrefectHQ/prefect) — Modern workflow orchestration.
- [Luigi](https://github.com/spotify/luigi) — Pipeline framework by Spotify.
- [Mage AI](https://github.com/mage-ai/mage-ai) — Modern data pipeline tool.
- [Hamilton](https://github.com/DAGWorks-Inc/hamilton) — Micro-orchestration framework for dataflows.
- [Kedro](https://github.com/kedro-org/kedro) — Framework for reproducible, maintainable ML code.

### 🧪 Practice

- [Dagster Quickstart Tutorial](https://docs.dagster.io/getting-started/quickstart) — Build and run your first software-defined asset pipeline in 5 minutes.

### 🛠️ Projects

- [Automated Daily RAG Corpus Update Pipeline](https://github.com/dagster-io/dagster) — Build a Dagster pipeline that scrapes daily technical articles, chunks text, generates embeddings, and refreshes Qdrant.

## 🧭 Recommended Learning Path

1. Understand the principles of pipeline idempotency and atomic updates.
2. Learn the difference between task-centric DAGs (Airflow) and asset-centric DAGs (Dagster).
3. Write your first Dagster asset using `@asset` in Python.
4. Implement data partitions and backfilling for historical records.
5. Deploy pipelines with automated Slack/Discord alerting on failure.

## ⭐ Top 3 Resources

1. Dagster (Software-defined Asset Orchestrator)
2. Apache Airflow (Enterprise workflow standard)
3. Fundamentals of Data Engineering by Joe Reis & Matt Housley (Book)

