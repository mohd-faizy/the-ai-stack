# Genomics

> Deep learning models and computational frameworks for variant calling, regulatory element prediction, and nucleotide language modeling.

## 🎯 What to Learn

- Biopython: Parsing FASTA, FASTQ, GenBank, and VCF files, and sequence manipulation
- DeepVariant (Google): Convolutional neural network that calls genetic variants from next-generation sequencing data with higher accuracy than classical tools
- Enformer (DeepMind): Transformer model predicting gene expression and chromatin state from DNA sequences up to 100kb away
- DNABERT: Pre-trained bidirectional encoder representations over genomic k-mers
- Genomic variant effect prediction: Measuring the functional impact of single nucleotide polymorphisms (SNPs)
- Long-range genomic architectures: FlashAttention and state space models (HyenaDNA) for million-base-pair context

## 📚 Best Learning Resources

### 🥇 Best Overall

- [DeepVariant (Google Genomics)](https://github.com/google/deepvariant)
  - Type: Genomic Variant Caller
  - Language: English
  - Level: Intermediate
  - Why recommended: Google's production-grade deep learning technology that transforms aligned sequencing reads into image-like tensors to achieve state-of-the-art genetic variant identification.

### 🎓 Courses

- [Coursera: Genomic Data Science Specialization (Johns Hopkins)](https://www.coursera.org/specializations/genomic-data-science) — Foundational university sequence covering sequencing technologies, algorithms, and Python tools.

### ▶️ YouTube — English

- [Google Open Source / Broad Institute: Video Guides & Tutorials](https://www.youtube.com/@GoogleOpenSource)
  - Channel: Google Open Source / Broad Institute
  - Language: English
  - Type: Talk
  - Level: Intermediate
  - Why: Google engineers explain how sequencing read pileups are rendered into RGB images and classified via CNNs.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Bioinformatics Algorithms: An Active Learning Approach by Phillip Compeau and Pavel Pevzner](https://www.bioinformaticsalgorithms.org/) — The gold standard university textbook on genome sequencing, assembly, and pattern matching.

### 💻 GitHub / Implementations

- [Biopython](https://github.com/biopython/biopython) — Tools for computational biology.
- [scvi-tools](https://github.com/scverse/scvi-tools) — Deep probabilistic analysis of single-cell omics.
- [DeepVariant](https://github.com/google/deepvariant) — Deep learning variant caller.
- [Enformer](https://github.com/google-deepmind/deepmind-research) — Predicting gene expression from sequence.
- [DNABERT](https://github.com/jerryji1993/DNABERT) — BERT for DNA sequences.
- [GenomicBenchmarks](https://github.com/ML-Bioinfo-CEITEC/genomic_benchmarks) — ML benchmarks for genomics.

## 📄 Foundational Papers

- [A universal SNP and small-indel variant caller using deep neural networks (DeepVariant)](https://www.nature.com/articles/nbt.4235) — Poplin et al. landmark paper introducing deep learning to standard clinical variant calling.
- [Effective gene expression prediction from sequence by integrating long-range interactions (Enformer)](https://www.nature.com/articles/s41592-021-01252-x) — Avsec et al. paper introducing transformer architectures to model distal enhancers and promoters.

### 🧪 Practice

- [Rosalind: Platform for Learning Bioinformatics Through Problem Solving](https://rosalind.info/) — Over 100 hands-on algorithmic coding challenges spanning DNA transcription, motif finding, and RNA translation.

### 🛠️ Projects

- [Predicting Regulatory Mutations with Enformer](https://github.com/google-deepmind/deepmind-research/tree/master/enformer) — Query Enformer with wild-type vs mutated DNA promoter sequences to predict changes in gene expression levels.

## 🧭 Recommended Learning Path

1. Master DNA, RNA, and protein sequence biology and the format of FASTQ and VCF files.
2. Solve introductory sequence analysis challenges on Rosalind using Biopython.
3. Run DeepVariant in a Docker container to call variants on a benchmark genome.
4. Study k-mer representations and DNA foundation models (DNABERT, HyenaDNA).
5. Analyze the impact of non-coding mutations on chromatin accessibility with Enformer.

## ⭐ Top 3 Resources

1. DeepVariant (Google Genomics)
2. Biopython (Core library)
3. Rosalind (Interactive Bioinformatics Practice)

