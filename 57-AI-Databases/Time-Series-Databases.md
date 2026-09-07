# Time Series Databases

> Specialized temporal database engines engineered for high-throughput metric ingestion, temporal aggregation, and IoT sensor telemetry.

## 🎯 What to Learn

- Time-series database characteristics: High append-only write throughput, temporal indexing, and downsampling
- TimescaleDB: PostgreSQL extension adding automatic time-partitioned hypertables and continuous aggregates
- InfluxDB: Purpose-built time-series database with InfluxQL, Flux, and TSM storage engine
- QuestDB: High-performance open-source SQL time-series database written in Java and C++ with SIMD instructions
- Data retention policies, automated chunk compression, and roll-ups
- Querying time series with window aggregations and gap-filling functions

## 📚 Best Learning Resources

### 🥇 Best Overall

- [TimescaleDB](https://github.com/timescale/timescaledb)
  - Type: Time-Series Database
  - Language: English
  - Level: Intermediate
  - Why recommended: Built on top of standard PostgreSQL, TimescaleDB provides full SQL compatibility, ACID compliance, and 10-100x faster queries on temporal data through automatic hypertable partitioning.

### 🎓 Courses

- [Timescale University](https://www.timescale.com/) — Free official training on PostgreSQL time-series modeling and performance tuning.

### ▶️ YouTube — English

- [Timescale / Hussein Nasser: Video Guides & Tutorials](https://www.youtube.com/@hnasr)
  - Channel: Timescale / Hussein Nasser
  - Language: English
  - Type: Architecture Deep Dive
  - Level: Intermediate
  - Why: Hussein Nasser explains how hypertables shard data behind the scenes without breaking standard SQL.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Time Series Databases: New Ways to Store and Access Data by Ted Dunning and Ellen Friedman (O'Reilly)](https://www.oreilly.com/library/view/time-series-databases/9781491920909/) — Foundational concepts on temporal architectures, streaming data, and telemetry.

### 💻 GitHub / Implementations

- [InfluxDB](https://github.com/influxdata/influxdb) — Time series database.
- [TimescaleDB](https://github.com/timescale/timescaledb) — PostgreSQL for time series.
- [QuestDB](https://github.com/questdb/questdb) — High-performance time series database.

### 🧪 Practice

- [QuestDB Web Console Demo](https://demo.questdb.io/) — Query live financial market order book data with SQL directly in your browser.

### 🛠️ Projects

- [Real-Time AI Telemetry Pipeline with TimescaleDB](https://docs.timescale.com/getting-started/latest/) — Stream GPU temperature, VRAM usage, and token latency metrics into a Timescale hypertable and visualize with Grafana.

## 🧭 Recommended Learning Path

1. Understand why B-trees in relational databases degrade during heavy time-series appends.
2. Install TimescaleDB extension on PostgreSQL.
3. Convert a standard table to a hypertable with `create_hypertable()`.
4. Configure continuous aggregates to pre-compute 5-minute averages automatically.
5. Set up automatic data retention policies to drop raw data after 30 days.

## ⭐ Top 3 Resources

1. TimescaleDB (PostgreSQL Time-Series Extension)
2. QuestDB (Ultra-fast SQL Time-Series Database)
3. Hussein Nasser's TimescaleDB Architecture Deep Dive

