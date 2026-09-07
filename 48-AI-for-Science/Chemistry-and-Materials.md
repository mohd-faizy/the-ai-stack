# Chemistry & Materials

> Equivariant graph neural networks, molecular representations, and crystal property predictors accelerating catalyst design and sustainable materials discovery.

## 🎯 What to Learn

- Molecular representations: SMILES strings, molecular graphs, and 3D crystal lattice vectors
- RDKit: The open-source cheminformatics toolkit for parsing, manipulating, and computing molecular properties
- Equivariant Graph Neural Networks (GNNs): SchNet, DimeNet, PaiNN, and e3nn preserving 3D rotation/translation symmetry
- MACE (Molecular Atomic Cluster Expansion): State-of-the-art machine learning interatomic potentials (MLIP)
- Open Catalyst Project (Meta AI & CMU): Predicting catalyst-adsorbate binding energies for renewable energy
- Crystal structure generation and materials discovery with diffusion models

## 📚 Best Learning Resources

### 🥇 Best Overall

- [RDKit](https://github.com/rdkit/rdkit)
  - Type: Cheminformatics Toolkit
  - Language: English
  - Level: Intermediate
  - Why recommended: The undisputed industry standard open-source toolkit for cheminformatics, providing chemical descriptors, fingerprinting, 2D/3D depiction, and substructure matching.

### 🎓 Courses

- [MIT 6.S095: Machine Learning for Materials and Chemistry](https://mlog.csail.mit.edu/) — MIT lectures covering graph neural networks for molecules and crystal lattice modeling.

### ▶️ YouTube — English

- [Tess Smidt / IPAM / MIT: Video Guides & Tutorials (Tess Smidt / IPAM / MIT)](https://www.youtube.com/results?search_query=Tess%20Smidt%20%2F%20IPAM%20%2F%20MIT%20Tess%20Smidt%20%2F%20IPAM%20%2F%20MIT%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Tess Smidt / IPAM / MIT
  - Language: English
  - Type: Lecture
  - Level: Advanced
  - Why: Tess Smidt (creator of e3nn) explains Euclidean symmetry, spherical harmonics, and geometric tensor products.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Deep Learning for the Life Sciences by Bharath Ramsundar et al. (O'Reilly)](https://www.oreilly.com/library/view/deep-learning-for/9781492039822/) — Practical guide to DeepChem, molecular featurization, and predicting chemical endpoints.

### 💻 GitHub / Implementations

- [RDKit](https://github.com/rdkit/rdkit) — Open-source cheminformatics.
- [DeepChem](https://github.com/deepchem/deepchem) — Deep learning for chemistry and biology.
- [Open Catalyst](https://github.com/FAIR-Chem/fairchem) — Catalysis and materials science ML.
- [SchNet](https://github.com/atomistic-machine-learning/schnetpack) — Deep learning for molecules.
- [e3nn](https://github.com/e3nn/e3nn) — Euclidean neural networks for scientific computing.
- [MACE](https://github.com/ACEsuit/mace) — Machine learning force fields.

## 📄 Foundational Papers

- [SchNet: A Continuous-filter Convolutional Neural Network for Modeling Quantum Interactions](https://arxiv.org/abs/1706.08566) — Introduced rotationally invariant continuous-filter convolutions for predicting atomistic properties.
- [MACE: Higher Order Equivariant Message Passing Neural Networks for Fast Materials Modeling](https://arxiv.org/abs/2206.07697) — State-of-the-art machine learned interatomic potential matching DFT accuracy at a fraction of compute cost.

### 🧪 Practice

- [RDKit Getting Started Guide](https://www.rdkit.org/docs/GettingStartedInPython.html) — Load molecules from SMILES, calculate LogP and molecular weight, and render 2D images in Jupyter.

### 🛠️ Projects

- [Molecular Solubility Predictor with Graph Neural Networks](https://github.com/deepchem/deepchem) — Train a SchNet or GCN model on the MoleculeNet ESOL dataset to predict aqueous solubility from molecular structure.

## 🧭 Recommended Learning Path

1. Master molecular representations: Canonical SMILES, SELFIES, and adjacency matrices.
2. Use RDKit in Python to compute chemical descriptors and Morgan fingerprints.
3. Understand why 3D molecules require rotational and translational equivariance.
4. Explore the Open Catalyst Project for renewable energy material simulations.
5. Train a Graph Convolutional Network on molecular graphs with PyTorch Geometric.

## ⭐ Top 3 Resources

1. RDKit (Cheminformatics standard)
2. Open Catalyst Project (Meta AI & CMU)
3. e3nn / MACE (Equivariant neural network libraries)

