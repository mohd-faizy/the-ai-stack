const fs = require('fs');

console.log('Syncing author repositories to README.md...');

let readme = fs.readFileSync('README.md', 'utf8');

const entriesToAdd = [
  {
    heading: '## 1.1 Mathematics & Linear Algebra',
    repo: '* [maths-for-intelligent-systems](https://github.com/mohd-faizy/maths-for-intelligent-systems) — Mathematical and statistical foundations for AI, ML, DL, Transformers, Reinforcement Learning, and Agentic Systems.\n* [Math4ML-LinearAlgebra](https://github.com/mohd-faizy/Math4ML-LinearAlgebra) — Linear Algebra, Multivariate Calculus & PCA in Python.'
  },
  {
    heading: '## 1.2 Statistics & Probability',
    repo: '* [Stats-with-Data](https://github.com/mohd-faizy/Stats-with-Data) — Practical statistics, probability distributions, regression modeling, and hypothesis testing in Python.'
  },
  {
    heading: '## 1.5 Data Visualization',
    repo: '* [omni-eda](https://github.com/mohd-faizy/omni-eda) — Fully automated, production-grade Exploratory Data Analysis (EDA) for pandas DataFrames.'
  },
  {
    heading: '## 2.1 General Machine Learning',
    repo: '* [Machine_Learning_with_Python](https://github.com/mohd-faizy/Machine_Learning_with_Python) — Comprehensive tools and notebooks for supervised and unsupervised machine learning algorithms.\n* [Machine-Learning-Algorithms](https://github.com/mohd-faizy/Machine-Learning-Algorithms) — Jupyter notebook implementations of core ML algorithms from scratch.'
  },
  {
    heading: '## 2.7 Feature Engineering',
    repo: '* [Preprocess_ML](https://github.com/mohd-faizy/Preprocess_ML) — Data preprocessing pipelines using Scikit-learn API.'
  },
  {
    heading: '## 2.3 Time Series',
    repo: '* [TF04_Sequences-Time-Series-and-Prediction](https://github.com/mohd-faizy/TF04_Sequences-Time-Series-and-Prediction) — Time series forecasting with RNNs and ConvNets.'
  },
  {
    heading: '## 3.1 Frameworks',
    repo: '* [PyTorch-Essentials](https://github.com/mohd-faizy/PyTorch-Essentials) — Complete resources for mastering PyTorch from fundamentals to advanced dynamic graph architectures.\n* [the-incredible-pytorch](https://github.com/mohd-faizy/the-incredible-pytorch) — Curated collection of tutorials, papers, and community projects for PyTorch.'
  },
  {
    heading: '## 3.3 Training Utilities',
    repo: '* [Probabilistic-Deep-Learning-with-TensorFlow](https://github.com/mohd-faizy/Probabilistic-Deep-Learning-with-TensorFlow) — Quantify uncertainty and noise in deep learning using TensorFlow Probability.'
  },
  {
    heading: '## 4.1 Core Vision',
    repo: '* [Computer-Vision-Zero-to-Hero](https://github.com/mohd-faizy/Computer-Vision-Zero-to-Hero) — Comprehensive collection of computer vision projects using OpenCV, PyTorch, and TensorFlow.'
  },
  {
    heading: '## 4.3 Segmentation',
    repo: '* [TensorFlow-Advanced](https://github.com/mohd-faizy/TensorFlow-Advanced) — Object detection, image segmentation, VAEs, and GANs in TensorFlow.'
  },
  {
    heading: '## 5.1 NLP Frameworks',
    repo: '* [The-NLP-Pandect](https://github.com/mohd-faizy/The-NLP-Pandect) — Comprehensive encyclopedic reference for all topics in Natural Language Processing.'
  },
  {
    heading: '## 5.2 Tokenization',
    repo: '* [TF03_Natural-Language-Processing-in-TensorFlow](https://github.com/mohd-faizy/TF03_Natural-Language-Processing-in-TensorFlow) — Text tokenization, embeddings, and recurrent sequence modeling in TensorFlow.'
  },
  {
    heading: '## 7.1 RL Frameworks',
    repo: '* [Reinforcement_learning](https://github.com/mohd-faizy/Reinforcement_learning) — Fundamentals of reinforcement learning, MDPs, and agent architectures.'
  },
  {
    heading: '## 8.1 VAEs & GANs',
    repo: '* [TensorFlow-Advanced](https://github.com/mohd-faizy/TensorFlow-Advanced) — Generative deep learning, VAEs, Style Transfer, and GANs in TensorFlow.'
  },
  {
    heading: '## 10.1 Open LLM Implementations',
    repo: '* [NanoTorch-LLM](https://github.com/mohd-faizy/NanoTorch-LLM) — Minimalist, educational Language Model built from scratch using PyTorch.'
  },
  {
    heading: '## 12.1 RAG Frameworks',
    repo: '* [RAG-Design-Patterns](https://github.com/mohd-faizy/RAG-Design-Patterns) — Production-ready implementations of 20 RAG architecture patterns using Python & LangChain.\n* [RAG-DeepSeek](https://github.com/mohd-faizy/RAG-DeepSeek) — Privacy-first local RAG pipeline using DeepSeek-R1 (1.5B), FAISS, Ollama, and Streamlit.'
  },
  {
    heading: '## 12.2 Advanced RAG Techniques',
    repo: '* [RAG-Design-Patterns](https://github.com/mohd-faizy/RAG-Design-Patterns) — Implementations of HyDE, Parent Document Retrieval, Multi-Query expansion, and Reranking.'
  }
];

for (const entry of entriesToAdd) {
  const headingIdx = readme.indexOf(entry.heading);
  if (headingIdx !== -1) {
    // Check if repo already included in this section
    const nextHeadingIdx = readme.indexOf('\n## ', headingIdx + 5);
    const sectionChunk = readme.substring(headingIdx, nextHeadingIdx !== -1 ? nextHeadingIdx : headingIdx + 1000);
    
    // Check first repo URL
    const firstUrl = entry.repo.match(/\((https:\/\/github\.com\/[^)]+)\)/)[1];
    if (!sectionChunk.includes(firstUrl)) {
      // Find the end of the callout guide or the first bullet point
      const calloutEnd = sectionChunk.indexOf('\n\n* [');
      if (calloutEnd !== -1) {
        const insertPos = headingIdx + calloutEnd + 2;
        readme = readme.substring(0, insertPos) + entry.repo + '\n' + readme.substring(insertPos);
        console.log(`Inserted repo into ${entry.heading}`);
      }
    } else {
      console.log(`Already present in ${entry.heading}`);
    }
  } else {
    console.warn(`Could not find heading: ${entry.heading}`);
  }
}

fs.writeFileSync('README.md', readme, 'utf8');
console.log('Successfully synced author repositories to README.md!');
