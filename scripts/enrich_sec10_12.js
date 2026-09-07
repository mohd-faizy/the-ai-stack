const fs = require('fs');

console.log('Enriching Sections 10, 11, and 12...');

function addGitHubRepo(filePath, repoObj) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(repoObj.url)) return;

  const targetHeading = '### 💻 GitHub / Implementations\n\n';
  if (content.includes(targetHeading)) {
    const replacement = `${targetHeading}- [${repoObj.name}](${repoObj.url}) — ${repoObj.desc}\n`;
    content = content.replace(targetHeading, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added repo ${repoObj.name} to ${filePath}`);
  }
}

function addProject(filePath, projObj) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(projObj.url) && content.includes(projObj.title)) return;

  const targetHeading = '### 🛠️ Projects\n\n';
  if (content.includes(targetHeading)) {
    const replacement = `${targetHeading}- [${projObj.title}](${projObj.url}) — ${projObj.desc}\n`;
    content = content.replace(targetHeading, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added project ${projObj.title} to ${filePath}`);
  }
}

// --- Section 10: Large Language Models ---
addGitHubRepo('10-Large-Language-Models/Open-LLM-Implementations.md', {
  name: 'mohd-faizy/NanoTorch-LLM',
  url: 'https://github.com/mohd-faizy/NanoTorch-LLM',
  desc: 'A minimalist, educational Language Model built from scratch using PyTorch. Learn the core mechanics of LLMs, module-by-module.'
});

addProject('10-Large-Language-Models/Open-LLM-Implementations.md', {
  title: 'NanoTorch-LLM From-Scratch Decoder',
  url: 'https://github.com/mohd-faizy/NanoTorch-LLM',
  desc: 'Step-by-step modular implementation of causal multi-head self-attention, rotary position embeddings, and autoregressive text generation.'
});

// --- Section 12: Retrieval-Augmented Generation ---
addGitHubRepo('12-RAG/RAG-Frameworks.md', {
  name: 'mohd-faizy/RAG-Design-Patterns',
  url: 'https://github.com/mohd-faizy/RAG-Design-Patterns',
  desc: 'Production-ready implementations of 20 RAG architecture patterns using Python & LangChain (naive, multi-query, routing, self-RAG, agentic RAG).'
});

addGitHubRepo('12-RAG/RAG-Frameworks.md', {
  name: 'mohd-faizy/RAG-DeepSeek',
  url: 'https://github.com/mohd-faizy/RAG-DeepSeek',
  desc: 'Local privacy-preserving RAG pipeline leveraging DeepSeek-R1 (1.5B), FAISS vector search, Ollama, Hugging Face, and Streamlit.'
});

addProject('12-RAG/RAG-Frameworks.md', {
  title: '20 Production RAG Architecture Patterns Suite',
  url: 'https://github.com/mohd-faizy/RAG-Design-Patterns',
  desc: 'Comprehensive reference implementation benchmark testing 20 distinct retrieval patterns from sentence-window to agentic routing.'
});

addProject('12-RAG/RAG-Frameworks.md', {
  title: 'Local Enterprise Document Q&A with DeepSeek-R1 & FAISS',
  url: 'https://github.com/mohd-faizy/RAG-DeepSeek',
  desc: 'Fully local, zero-API-cost PDF search and question-answering assistant running entirely on consumer hardware.'
});

addGitHubRepo('12-RAG/Advanced-RAG-Techniques.md', {
  name: 'mohd-faizy/RAG-Design-Patterns',
  url: 'https://github.com/mohd-faizy/RAG-Design-Patterns',
  desc: 'Modular implementations of advanced retrieval strategies: HyDE, parent-document chunking, cross-encoder reranking, and self-reflective loops.'
});

addProject('12-RAG/Advanced-RAG-Techniques.md', {
  title: 'Advanced Query Expansion & Cross-Encoder Reranker',
  url: 'https://github.com/mohd-faizy/RAG-Design-Patterns',
  desc: 'Production pipeline combining multi-query generation with BGE / Cohere reranking for ultra-high precision passage retrieval.'
});

console.log('Sections 10, 11, and 12 enriched successfully.');
