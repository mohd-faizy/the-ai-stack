# Single Cell Analysis

> Machine learning workflows and probabilistic models for analyzing high-dimensional single-cell RNA sequencing (scRNA-seq) datasets.

## 🎯 What to Learn

- Single-cell RNA sequencing (scRNA-seq): Measuring expression profiles of thousands of individual cells simultaneously
- AnnData: Python object format designed for annotated high-dimensional matrix data (cells x genes)
- Scanpy: Scalable single-cell analysis toolkit for preprocessing, visualization, clustering (Leiden), and trajectory inference
- scvi-tools: Probabilistic deep learning framework using Variational Autoencoders (VAEs) for batch correction and differential expression
- CellTypist: Automated cell type annotation using curated logistic regression and deep learning classifiers
- Dimensionality reduction: PCA, UMAP, and t-SNE for cellular manifold visualization

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Scanpy](https://github.com/scverse/scanpy)
  - Type: Single-Cell Toolkit
  - Language: English
  - Level: Intermediate
  - Why recommended: The standard Python framework for analyzing single-cell gene expression data, seamlessly handling millions of cells with AnnData and GPU-accelerated backends.

### 🎓 Courses

- [scverse: Best Practices in Single-Cell Analysis](https://www.sc-best-practices.org/) — Comprehensive, open-access textbook and guide by leading computational biologists.

### ▶️ YouTube — English

- [Single Cell Bio / European Bioinformatics Institute (EMBL-EBI): Video Guides & Tutorials](https://www.youtube.com/@embl-ebi)
  - Channel: Single Cell Bio / European Bioinformatics Institute (EMBL-EBI)
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Step-by-step walkthrough analyzing 10k PBMC cells from raw counts to UMAP cell type clusters.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Single-Cell Best Practices by Fabian Theis et al.](https://www.sc-best-practices.org/) — The definitive living textbook covering quality control, integration, annotation, and spatial transcriptomics.

### 💻 GitHub / Implementations

- [Scanpy](https://github.com/scverse/scanpy) — Single-cell analysis in Python.
- [scvi-tools](https://github.com/scverse/scvi-tools) — Deep generative modeling for single-cell.
- [CellTypist](https://github.com/Teichlab/celltypist) — Automated cell type annotation.
- [SCENIC+](https://github.com/aertslab/scenicplus) — Single-cell regulatory network inference.

## 📄 Foundational Papers

- [SCANPY: large-scale single-cell gene expression data analysis](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-017-1382-0) — Wolf, Angerer, and Theis landmark paper establishing scalable single-cell computational analysis in Python.
- [Deep generative modeling for single-cell transcriptomics (scVI)](https://www.nature.com/articles/s41592-018-0229-2) — Lopez et al. paper introducing VAEs to model technical noise, zero-inflation, and latent cellular states.

### 🧪 Practice

- [Scanpy PBMC3k Tutorial](https://scanpy.readthedocs.io/en/stable/tutorials/basics/clustering.html) — Replicate standard clustering and marker gene discovery on 3,000 peripheral blood mononuclear cells.

### 🛠️ Projects

- [Deep Generative Batch Correction with scVI](https://scvi-tools.org/) — Integrate two single-cell datasets from different sequencing laboratories using a Variational Autoencoder to remove technical noise.

## 🧭 Recommended Learning Path

1. Understand the biology of single-cell isolation and count matrices.
2. Explore the AnnData data structure: `.X`, `.obs`, `.var`, and `.uns`.
3. Perform quality control (filtering dead cells with high mitochondrial reads) and normalization.
4. Compute PCA and UMAP embeddings to visualize cell populations.
5. Train a deep probabilistic model with scvi-tools to integrate multiple patient cohorts.

## ⭐ Top 3 Resources

1. Scanpy (scverse core library)
2. Single-Cell Best Practices (Living Textbook)
3. scvi-tools (Deep probabilistic modeling)

