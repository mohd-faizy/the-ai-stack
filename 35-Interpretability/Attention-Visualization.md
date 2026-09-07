# Attention Visualization

> Visual exploration tools and attribution mapping to inspect multi-head attention weights, head specialization, and token interactions across transformer layers.

## 🎯 What to Learn

- Attention weight matrices: Query-Key dot products and softmax heatmaps
- BertViz: Interactive attention visualization across head view, model view, and neuron view
- Attention rollout and attention flow: Tracing information propagation through deep transformer layers
- Transformer Debugger (OpenAI): Visualizing neuron activations and explaining circuit behavior with LLMs
- Limitations of raw attention: Why attention weights do not equal explanation (Attention is not Explanation debate)
- Head attribution: Pruning and analyzing specialized attention heads (copy heads, syntax heads)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [BertViz](https://github.com/jessevig/bertviz)
  - Type: Visualization Tool
  - Language: English
  - Level: Intermediate
  - Why recommended: The most widely used interactive visualization tool for transformer attention heads, supporting BERT, GPT-2, RoBERTa, and modern LLMs.

### 🎓 Courses

- [Stanford CS224N: Natural Language Processing with Deep Learning](https://web.stanford.edu/class/cs224n/) — Lecture covering attention mechanisms, multi-head attention visualizations, and linguistic probing.

### ▶️ YouTube — English

- [Jesse Vig / NLP Video: Video Guides & Tutorials (Jesse Vig / NLP Video)](https://www.youtube.com/results?search_query=Jesse%20Vig%20%2F%20NLP%20Video%20Jesse%20Vig%20%2F%20NLP%20Video%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Jesse Vig / NLP Video
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Jesse Vig demonstrates how to use BertViz to inspect syntactic attention heads and coreference resolution.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Natural Language Processing with Transformers (O'Reilly)](https://www.oreilly.com/library/view/natural-language-processing/9781098103231/) — Chapter on model interpretability, probing attention patterns, and visualizing representations.

### 💻 GitHub / Implementations

- [BertViz](https://github.com/jessevig/bertviz) — Visualize attention in transformer models.
- [Attention Flow](https://github.com/samiraabnar/attention_flow) — Attention rollout and flow analysis.
- [Transformer Debugger](https://github.com/openai/transformer-debugger) — Tool for investigating transformer behavior.

## 📄 Foundational Papers

- [A Multiscale Visualization of Attention in the Transformer Model (BertViz)](https://arxiv.org/abs/1906.05714) — Introduces multiscale visualization paradigms for multi-head attention across layers.
- [Attention is not Explanation](https://arxiv.org/abs/1902.10186) — Jain & Wallace critique demonstrating that attention weights often correlate poorly with feature importance.

### 🧪 Practice

- [BertViz Colab Notebook](https://colab.research.google.com/drive/1hXIQ77A4TYS4y3UthWF-CiOpwp40q2) — Run interactive attention visualizations on your own text sequences in Google Colab.

### 🛠️ Projects

- [Attention Head Linguistic Probing](https://github.com/jessevig/bertviz) — Identify which attention heads in a transformer track syntax dependencies and coreference using BertViz.

## 🧭 Recommended Learning Path

1. Extract attention matrices from Hugging Face models using `output_attentions=True`.
2. Plot head attention heatmaps using matplotlib and Seaborn.
3. Install BertViz and explore the Model View across 12 layers.
4. Study the 'Attention is not Explanation' debate and evaluate gradient x attention alternatives.
5. Experiment with OpenAI's Transformer Debugger.

## ⭐ Top 3 Resources

1. BertViz (Jesse Vig)
2. OpenAI Transformer Debugger
3. CircuitsVis (Neel Nanda & Callum McDougall)

