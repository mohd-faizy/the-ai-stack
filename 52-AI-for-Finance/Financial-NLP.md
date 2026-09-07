# Financial NLP

> Domain-specific language models and document extraction pipelines tailored for SEC filings, financial news sentiment, and earnings call transcripts.

## 🎯 What to Learn

- Financial language challenges: Tone nuances, regulatory boilerplate, earnings conference call banter, and quantitative tables
- FinBERT: BERT model fine-tuned on financial corpora (Financial PhraseBank, FiQA) for sentiment classification
- BloombergGPT: 50-billion parameter causal foundation model trained specifically on proprietary financial and general data
- FinGPT: Open-source financial foundation model framework democratizing financial data curation and instruction tuning
- Automated SEC EDGAR filing ingestion: Parsing 10-K, 10-Q, and 8-K reports and extracting risk factors
- Quantifying market sentiment and testing its predictive power against subsequent asset returns

## 📚 Best Learning Resources

### 🥇 Best Overall

- [FinBERT (Prosus)](https://github.com/ProsusAI/finBERT)
  - Type: Financial Sentiment Model
  - Language: English
  - Level: Beginner
  - Why recommended: The industry standard pre-trained NLP model for financial sentiment analysis, trained on financial communications and widely used for real-time market sentiment scoring.

### 🎓 Courses

- [Coursera: Natural Language Processing for Finance (Columbia University)](https://www.coursera.org/) — Columbia University course on text mining, sentiment extraction, and disclosure analysis.

### ▶️ YouTube — English

- [Venelin Valkov / FreeCodeCamp: Video Guides & Tutorials](https://www.youtube.com/@freecodecamp)
  - Channel: Venelin Valkov / FreeCodeCamp
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Hands-on tutorial showing how to classify financial news headlines and calculate daily sentiment scores.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Machine Learning for Algorithmic Trading by Stefan Jansen (Packt)](https://www.packtpub.com/) — Extensive chapter on extracting trading signals from unstructured financial text and SEC filings.

### 💻 GitHub / Implementations

- [FinBERT](https://github.com/ProsusAI/finBERT) — Financial sentiment analysis with BERT.
- [BloombergGPT](https://github.com/bloomberg) — Financial domain LLM.
- [FinGPT](https://github.com/AI4Finance-Foundation/FinGPT) — Open financial LLMs.

## 📄 Foundational Papers

- [FinBERT: A Large Language Model for Extracting Information from Financial Text](https://arxiv.org/abs/2006.08097) — Araci paper demonstrating that domain-adapted financial language models significantly outperform generic models.
- [BloombergGPT: A Large Language Model for Finance](https://arxiv.org/abs/2303.17564) — Landmark paper by Bloomberg on training a 50B parameter hybrid general-and-financial foundation model.

### 🧪 Practice

- [FinBERT Hugging Face Space](https://huggingface.co/spaces/ProsusAI/finbert) — Type or paste earnings headlines and inspect positive/negative probability distributions in real time.

### 🛠️ Projects

- [Automated SEC 10-K Risk Factor Analyzer](https://github.com/AI4Finance-Foundation/FinGPT) — Scrape 10-K filings from Apple and Microsoft, extract the 'Item 1A Risk Factors' section, and generate comparative summaries with FinGPT.

## 🧭 Recommended Learning Path

1. Understand why general sentiment models fail on financial text (e.g. 'profits fell' vs 'profits fell less than expected').
2. Classify financial headlines using FinBERT with the Hugging Face `pipeline`.
3. Scrape and parse SEC EDGAR 10-K and 10-Q filings using `edgar-tools` in Python.
4. Explore FinGPT for financial question answering and earnings call summarization.
5. Correlate sentiment polarity scores with asset price volatility.

## ⭐ Top 3 Resources

1. FinBERT (Prosus AI)
2. FinGPT (AI4Finance Foundation)
3. BloombergGPT Research Paper

