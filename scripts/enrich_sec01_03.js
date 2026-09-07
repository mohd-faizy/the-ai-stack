const fs = require('fs');
const path = require('path');

console.log('Enriching Sections 01, 02, and 03...');

// Helper to append a GitHub repo if not present
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

// Helper to append a project if not present
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

// --- Section 01: Foundations ---
addGitHubRepo('01-Foundations/Mathematics-and-Linear-Algebra.md', {
  name: 'mohd-faizy/maths-for-intelligent-systems',
  url: 'https://github.com/mohd-faizy/maths-for-intelligent-systems',
  desc: 'Comprehensive mathematical and statistical foundations for AI, ML, Deep Learning, Transformers, Reinforcement Learning, and Agentic Systems.'
});

addGitHubRepo('01-Foundations/Mathematics-and-Linear-Algebra.md', {
  name: 'mohd-faizy/Math4ML-LinearAlgebra',
  url: 'https://github.com/mohd-faizy/Math4ML-LinearAlgebra',
  desc: 'Rigorous Jupyter notebook implementations of Linear Algebra, Multivariate Calculus, Matrix Decompositions, and PCA from scratch.'
});

addProject('01-Foundations/Mathematics-and-Linear-Algebra.md', {
  title: 'Mathematical Foundations for Intelligent Systems Lab',
  url: 'https://github.com/mohd-faizy/maths-for-intelligent-systems',
  desc: 'Interactive Python notebooks deriving and visualizing eigenvalues, spectral projections, and matrix factorizations for AI architectures.'
});

addGitHubRepo('01-Foundations/Statistics-and-Probability.md', {
  name: 'mohd-faizy/Stats-with-Data',
  url: 'https://github.com/mohd-faizy/Stats-with-Data',
  desc: 'Practical statistical methods, probability distributions, regression modeling, and hypothesis testing in Python.'
});

addGitHubRepo('01-Foundations/Optimization.md', {
  name: 'mohd-faizy/maths-for-intelligent-systems',
  url: 'https://github.com/mohd-faizy/maths-for-intelligent-systems',
  desc: 'Derivations and implementations of gradient descent, Adam, momentum, Newton-Raphson, and constrained optimization algorithms.'
});

addGitHubRepo('01-Foundations/Data-Visualization.md', {
  name: 'mohd-faizy/omni-eda',
  url: 'https://github.com/mohd-faizy/omni-eda',
  desc: 'Fully automated, production-grade Exploratory Data Analysis (EDA) for pandas DataFrames generating rich statistical and visual reports.'
});

addGitHubRepo('01-Foundations/Data-Visualization.md', {
  name: 'mohd-faizy/test_omniEDA',
  url: 'https://github.com/mohd-faizy/test_omniEDA',
  desc: 'Benchmark and demonstration repository for automated multi-dataset visual and statistical analysis.'
});

// --- Section 02: Machine Learning ---
addGitHubRepo('02-Machine-Learning/General-Machine-Learning.md', {
  name: 'mohd-faizy/Machine_Learning_with_Python',
  url: 'https://github.com/mohd-faizy/Machine_Learning_with_Python',
  desc: 'Comprehensive toolkit and notebooks covering classical supervised and unsupervised machine learning algorithms, model evaluation, and inference.'
});

addGitHubRepo('02-Machine-Learning/General-Machine-Learning.md', {
  name: 'mohd-faizy/Machine-Learning-Algorithms',
  url: 'https://github.com/mohd-faizy/Machine-Learning-Algorithms',
  desc: 'From-scratch algorithmic implementations of core ML models in Python Jupyter Notebooks with detailed mathematical explanations.'
});

addGitHubRepo('02-Machine-Learning/Feature-Engineering.md', {
  name: 'mohd-faizy/Preprocess_ML',
  url: 'https://github.com/mohd-faizy/Preprocess_ML',
  desc: 'Production-ready preprocessing pipelines using Scikit-Learn: imputation, scaling, polynomial features, and categorical encodings.'
});

addGitHubRepo('02-Machine-Learning/Time-Series.md', {
  name: 'mohd-faizy/TF04_Sequences-Time-Series-and-Prediction',
  url: 'https://github.com/mohd-faizy/TF04_Sequences-Time-Series-and-Prediction',
  desc: 'Time series forecasting and sequential prediction pipelines using TensorFlow, RNNs, LSTMs, and ConvNets.'
});

// --- Section 03: Deep Learning ---
addGitHubRepo('03-Deep-Learning/Frameworks.md', {
  name: 'mohd-faizy/PyTorch-Essentials',
  url: 'https://github.com/mohd-faizy/PyTorch-Essentials',
  desc: 'Complete journey from PyTorch fundamentals to advanced custom layers, autograd mechanics, training loops, and dynamic graph inspection.'
});

addGitHubRepo('03-Deep-Learning/Frameworks.md', {
  name: 'mohd-faizy/the-incredible-pytorch',
  url: 'https://github.com/mohd-faizy/the-incredible-pytorch',
  desc: 'The Incredible PyTorch: curated collection of tutorials, papers, architectures, and community resources.'
});

addGitHubRepo('03-Deep-Learning/Frameworks.md', {
  name: 'mohd-faizy/DeepLearning_Specialization_with_TensorFlow',
  url: 'https://github.com/mohd-faizy/DeepLearning_Specialization_with_TensorFlow',
  desc: 'Hands-on neural network implementations, backprop derivations, and deep learning architectures with TensorFlow.'
});

addGitHubRepo('03-Deep-Learning/Training-Utilities.md', {
  name: 'mohd-faizy/Probabilistic-Deep-Learning-with-TensorFlow',
  url: 'https://github.com/mohd-faizy/Probabilistic-Deep-Learning-with-TensorFlow',
  desc: 'Quantifying uncertainty, epistemic noise, and variational inference in deep learning using TensorFlow Probability.'
});

console.log('Sections 01, 02, and 03 enriched successfully.');
