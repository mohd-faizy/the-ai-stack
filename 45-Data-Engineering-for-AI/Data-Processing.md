# Data Processing

> High-performance columnar engines, query systems, and in-memory data formats designed to process millions of records with minimal latency and memory overhead.

## 🎯 What to Learn

- Polars: Lightning-fast multithreaded DataFrame library written in Rust using Apache Arrow
- DuckDB: High-performance in-process analytical SQL OLAP database engine ('SQLite for Analytics')
- Apache Arrow: Standardized language-independent columnar memory format for zero-copy data interchange
- Daft: Distributed Python DataFrame library designed specifically for multimodal AI (images, audio, tensors)
- Pandas 2.0: Arrow-backed data types and performance optimizations
- Vectorized query execution, lazy evaluation, query plan optimization, and SIMD instructions

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Polars](https://github.com/pola-rs/polars)
  - Type: Data Processing Engine
  - Language: English
  - Level: Intermediate
  - Why recommended: The blazing fast Rust-based DataFrame library delivering 10-50x speedups over Pandas with memory efficiency, lazy evaluation, and parallel execution.

### 🎓 Courses

- [FreeCodeCamp: Data Analysis with Polars](https://www.freecodecamp.org/) — Complete practical guide to high-performance data manipulation with Polars.

### ▶️ YouTube — English

- [ArjanCodes / Ritchie Vink: Video Guides & Tutorials](https://www.youtube.com/@ArjanCodes)
  - Channel: ArjanCodes / Ritchie Vink
  - Language: English
  - Type: Deep Dive
  - Level: Intermediate
  - Why: Ritchie Vink (creator of Polars) explains query optimization, memory layouts, and expressions.

### ▶️ YouTube — Hindi / Hinglish

- [SQL & Data Engineering for AI in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvYun1_5r9Fb4eQigioPB7yn)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Core SQL, window functions, and data pipeline fundamentals for AI in Hindi.


### 📚 Books

- [Data Analysis with Polars by Jeroen Janssens (Manning)](https://www.manning.com/books/data-analysis-with-polars) — The definitive guide to unlocking the speed and memory efficiency of the Polars DataFrame library.

### 💻 GitHub / Implementations

- [Pandas](https://github.com/pandas-dev/pandas) — Powerful data analysis library.
- [Polars](https://github.com/pola-rs/polars) — Blazing fast DataFrame library in Rust.
- [Apache Arrow](https://github.com/apache/arrow) — Cross-language columnar data format.
- [DuckDB](https://github.com/duckdb/duckdb) — In-process analytical database.
- [Vaex](https://github.com/vaexio/vaex) — Out-of-core DataFrames for big data.
- [Modin](https://github.com/modin-project/modin) — Speed up Pandas with parallelism.
- [Daft](https://github.com/Eventual-Inc/Daft) — Distributed DataFrame for ML workloads.

### 🧪 Practice

- [DuckDB Interactive SQL Shell](https://shell.duckdb.org/) — Run analytical queries directly on remote Parquet files in your web browser.

### 🛠️ Projects

- [High-Throughput Pre-training Tokenizer Pipeline](https://github.com/pola-rs/polars) — Use Polars lazy streaming engine to deduplicate, clean, and token-count 50GB of web text files without running out of RAM.

## 🧭 Recommended Learning Path

1. Understand why Pandas suffers from single-threaded execution and high memory overhead.
2. Learn Apache Arrow's memory layout and why it enables zero-copy sharing.
3. Master Polars expressions: `.select()`, `.filter()`, `.with_columns()`, and `.group_by()`.
4. Use DuckDB to execute complex analytical SQL queries directly on S3 Parquet files.
5. Explore Daft for distributed processing of image and audio datasets.

## ⭐ Top 3 Resources

1. Polars (Ritchie Vink / Rust DataFrame)
2. DuckDB (Embedded analytical SQL database)
3. Apache Arrow (Columnar memory standard)

