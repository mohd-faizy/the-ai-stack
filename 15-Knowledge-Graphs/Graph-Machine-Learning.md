# Graph Machine Learning

> Graph Neural Networks (GNNs) and geometric deep learning architectures that learn representations from non-Euclidean relational graphs.

## 🎯 What to Learn

- The message passing neural network (MPNN) paradigm: aggregate, update, and readout functions
- Foundational GNN architectures: Graph Convolutional Networks (GCN), Graph Attention Networks (GAT), and GraphSAGE
- Inductive vs transductive graph learning settings
- Graph-level tasks: node classification (e.g. fraud detection), link prediction (e.g. friend recommendation), and graph classification (e.g. molecular toxicity)
- Scaling GNNs to massive graphs: neighbor sampling and mini-batching
- Leading libraries: PyTorch Geometric (PyG) and Deep Graph Library (DGL)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Stanford CS224W: Machine Learning with Graphs (Prof. Jure Leskovec)](http://web.stanford.edu/class/cs224w/)
  - Type: University Course
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: The premier global university course on graph machine learning taught by Prof. Jure Leskovec, covering PageRank, network embeddings, GNN theory, and applications.

### 📖 Documentation & References

- [PyTorch Geometric (PyG) Documentation](https://pytorch-geometric.readthedocs.io/en/latest/) — The standard PyTorch library for deep learning on irregular input data (graphs, point clouds, manifolds).
- [Deep Graph Library (DGL) Documentation](https://docs.dgl.ai/) — Framework-agnostic library for deep learning on graphs with high-speed GPU optimizations.

### 🎓 Courses

- [Stanford CS224W Lecture Series on YouTube](https://www.youtube.com/playlist?list=PLoROMvodv4rPLKxIpqhCgerZiN2HK8wAg) — Full lecture videos from Stanford University covering GCN, GAT, GraphSAGE, and Knowledge Graph embeddings.

### ▶️ YouTube — English

- [A Gentle Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=zCEYiCxrL_0)
  - Channel: Petar Veličković
  - Language: English
  - Type: Lecture
  - Level: Intermediate
  - Why: Dr. Petar Veličković (DeepMind) explains graph representation learning and Graph Attention Networks (GAT).

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Graph Representation Learning by William L. Hamilton](https://www.cs.mcgill.ca/~wlh/grl_book/) — Free comprehensive textbook covering node embeddings, GNN architectures, and generative graph models.

### 💻 GitHub / Implementations

- [PyTorch Geometric](https://github.com/pyg-team/pytorch_geometric) — Graph neural network library for PyTorch.
- [DGL](https://github.com/dmlc/dgl) — Deep learning on graphs.
- [GraphGym](https://github.com/snap-stanford/GraphGym) — Platform for graph ML experimentation.
- [spektral](https://github.com/danielegrattarola/spektral) — Graph neural networks with Keras.
- [StellarGraph](https://github.com/stellargraph/stellargraph) — Graph ML library.
- [jraph](https://github.com/google-deepmind/jraph) — Graph neural network library in JAX.
- [OGB](https://github.com/snap-stanford/ogb) — Open graph benchmark.

### 🧪 Practice

- [Open Graph Benchmark (OGB)](https://ogb.stanford.edu/) — The gold-standard benchmark datasets for evaluating scalable, robust Graph Neural Networks.

### 🛠️ Projects

- [Molecular Property Prediction with PyG](https://pytorch-geometric.readthedocs.io/en/latest/notes/introduction.html) — Train a Graph Neural Network to predict whether drug molecule graphs inhibit viral proteins using the MoleculeNet dataset.

## 🧭 Recommended Learning Path

1. Understand why standard CNNs and MLPs fail on graph data due to permutation invariance and varying node degrees.
2. Explore shallow node embeddings: DeepWalk and Node2Vec using random walks.
3. Master the message passing paradigm: nodes aggregate feature vectors from neighbors.
4. Implement Graph Convolutional Networks (GCN) and Graph Attention Networks (GAT) in PyTorch Geometric.
5. Evaluate models on the Open Graph Benchmark (OGB) for link prediction and node classification.

## ⭐ Top 3 Resources

1. [Stanford CS224W (Jure Leskovec)](http://web.stanford.edu/class/cs224w/) — The finest university curriculum on graph machine learning in the world.
2. [PyTorch Geometric (PyG)](https://pytorch-geometric.readthedocs.io/) — The most widely adopted PyTorch library for Graph Neural Network engineering.
3. [Hamilton's Graph Representation Learning Book](https://www.cs.mcgill.ca/~wlh/grl_book/) — The definitive academic textbook on GNN mathematics and theory.

