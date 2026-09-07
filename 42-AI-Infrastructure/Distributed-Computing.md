# Distributed Computing

> Distributed execution frameworks and actor runtimes that scale Python code, machine learning training, and data manipulation across multi-node clusters.

## 🎯 What to Learn

- Ray: Core primitives (Tasks `@ray.remote`, Actors, Object Store / Plasma), Ray Train, and Ray Data
- Dask: Parallel collections (Dask DataFrames, Arrays, Bags) and dynamic task graphs
- Apache Spark: Resilient Distributed Datasets (RDDs), Spark DataFrames, and distributed feature engineering
- Ray Serve: Composable distributed model serving with micro-batching and dynamic replica scaling
- Handling out-of-core memory datasets and distributed shuffle operations
- Cluster deployment on AWS EC2, GCP, and Kubernetes via KubeRay

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Ray (Anyscale)](https://github.com/ray-project/ray)
  - Type: Distributed Execution Framework
  - Language: English
  - Level: Intermediate
  - Why recommended: The leading unified distributed compute framework powering foundation model training and serving at OpenAI, Uber, and Amazon.

### 🎓 Courses

- [Anyscale Academy: Ray Tutorials](https://anyscale.com/academy) — Hands-on self-paced tutorials covering Ray Core, scaling machine learning, and Ray Serve.

### ▶️ YouTube — English

- [Ray / Anyscale: Video Guides & Tutorials](https://www.youtube.com/@anyscale)
  - Channel: Ray / Anyscale
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Clear introduction to tasks, actors, and distributed state management in Python.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Learning Ray by Max Pumperla, Edward Oakes, and Richard Liaw (O'Reilly)](https://www.oreilly.com/library/view/learning-ray/9781098117214/) — The definitive guide to building distributed AI applications with the Ray framework.

### 💻 GitHub / Implementations

- [Ray](https://github.com/ray-project/ray) — Universal framework for distributed computing.
- [Dask](https://github.com/dask/dask) — Parallel computing in Python.
- [Apache Spark](https://github.com/apache/spark) — Unified analytics engine.
- [Modin](https://github.com/modin-project/modin) — Speed up Pandas with distributed computing.
- [Fugue](https://github.com/fugue-project/fugue) — Unified distributed computing interface.

## 📄 Foundational Papers

- [Ray: A Distributed Framework for Emerging AI Applications](https://arxiv.org/abs/1712.05889) — Landmark paper by UC Berkeley RISELab introducing the actor-task unified architecture.

### 🧪 Practice

- [Ray Interactive Colab Notebooks](https://docs.ray.io/en/latest/ray-core/walkthrough.html) — Run your first distributed task and actor directly in Google Colab.

### 🛠️ Projects

- [Distributed Hyperparameter Tuning with Ray Tune](https://github.com/ray-project/ray) — Launch parallel hyperparameter search across 100 trials using Ray Tune with Bayesian optimization.

## 🧭 Recommended Learning Path

1. Understand why standard Python multiprocessing struggles with inter-process communication and memory overhead.
2. Learn Ray tasks for stateless computation and Ray actors for stateful computation.
3. Explore Ray's shared memory Plasma Object Store and zero-copy reads with Apache Arrow.
4. Scale PyTorch training across multiple nodes using Ray Train.
5. Deploy scalable REST endpoints using Ray Serve and KubeRay.

## ⭐ Top 3 Resources

1. Ray (Anyscale / UC Berkeley RISELab)
2. Learning Ray by O'Reilly (Book)
3. KubeRay (Kubernetes Ray Operator)

