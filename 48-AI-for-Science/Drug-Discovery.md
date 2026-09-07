# Drug Discovery

> Computational pipelines, molecular docking algorithms, generative chemistry, and ADMET predictors designed to accelerate drug development from years to weeks.

## 🎯 What to Learn

- The drug discovery pipeline: Target identification -> Hit discovery -> Lead optimization -> ADMET profiling
- DiffDock: Diffusion-based molecular docking predicting how small-molecule ligands bind to protein targets
- DeepChem: High-level Python framework democratizing deep learning for drug discovery and chemistry
- TorchDrug: PyTorch-based machine learning platform for drug discovery, retrosynthesis, and property prediction
- AutoDock Vina & AutoDock-GPU: Physics-based molecular docking standards
- ADMET prediction: Absorption, Distribution, Metabolism, Excretion, and Toxicity using machine learning

## 📚 Best Learning Resources

### 🥇 Best Overall

- [DiffDock](https://github.com/gcorso/DiffDock)
  - Type: Molecular Docking Model
  - Language: English
  - Level: Advanced
  - Why recommended: The breakthrough diffusion model by MIT for molecular docking, treating docking as generative sampling over translational, rotational, and torsional ligand degrees of freedom.

### 🎓 Courses

- [MIT 6.S095: Generative Models for Drug Discovery](https://mlog.csail.mit.edu/) — MIT course on generative chemistry, molecular docking, and biomedical foundation models.

### ▶️ YouTube — English

- [Gabriele Corso / MIT CSAIL: Video Guides & Tutorials](https://www.youtube.com/@MITCSAIL)
  - Channel: Gabriele Corso / MIT CSAIL
  - Language: English
  - Type: Lecture
  - Level: Advanced
  - Why: Gabriele Corso (lead author) explains how diffusion over SE(3) manifolds revolutionizes molecular docking.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Deep Learning for the Life Sciences by Bharath Ramsundar (O'Reilly)](https://www.oreilly.com/library/view/deep-learning-for/9781492039822/) — The definitive hands-on guide to using DeepChem for virtual screening and lead optimization.

### 💻 GitHub / Implementations

- [DeepChem](https://github.com/deepchem/deepchem) — ML for drug discovery.
- [TorchDrug](https://github.com/DeepGraphLearning/torchdrug) — Drug discovery and molecular representation.
- [DiffDock](https://github.com/gcorso/DiffDock) — Diffusion steps for molecular docking.
- [MoleculeNet](https://github.com/deepchem/deepchem) — Molecular ML benchmarks.
- [AutoDock-GPU](https://github.com/ccsb-scripps/AutoDock-GPU) — GPU-accelerated molecular docking.
- [REINVENT](https://github.com/MolecularAI/REINVENT4) — Molecular design by AstraZeneca.

## 📄 Foundational Papers

- [DiffDock: Diffusion Steps, Twists, and Turns for Molecular Docking](https://arxiv.org/abs/2210.01776) — Corso et al. paper establishing diffusion generative modeling as superior to traditional search-based docking.

### 🧪 Practice

- [DiffDock Web Interface](https://huggingface.co/spaces/simonduerr/diffdock) — Upload a PDB protein target and ligand SMILES to run molecular docking in your browser.

### 🛠️ Projects

- [End-to-End Virtual Screening Pipeline](https://github.com/gcorso/DiffDock) — Screen a library of 1,000 drug-like molecules against a cancer kinase target using DiffDock, ranking top binding affinities.

## 🧭 Recommended Learning Path

1. Understand the biology of drug-target interactions (receptors, binding pockets, ligands).
2. Learn SMILES featurization and molecular fingerprints with DeepChem.
3. Run virtual screening against MoleculeNet benchmark datasets.
4. Understand torsional degrees of freedom and molecular docking with DiffDock.
5. Predict ADMET profiles to filter out toxic or non-bioavailable drug candidates.

## ⭐ Top 3 Resources

1. DiffDock (MIT / Generative Docking)
2. DeepChem (Open-source Life Sciences AI Library)
3. TorchDrug (PyTorch Drug Discovery Framework)

