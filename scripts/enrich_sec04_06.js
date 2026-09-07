const fs = require('fs');

console.log('Enriching Sections 04, 05, and 06...');

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

// --- Section 04: Computer Vision ---
addGitHubRepo('04-Computer-Vision/Core-Vision.md', {
  name: 'mohd-faizy/Computer-Vision-Zero-to-Hero',
  url: 'https://github.com/mohd-faizy/Computer-Vision-Zero-to-Hero',
  desc: 'Practical computer vision repository implementing image transformations, feature matching, and deep vision pipelines using OpenCV and PyTorch.'
});

addGitHubRepo('04-Computer-Vision/Core-Vision.md', {
  name: 'mohd-faizy/TF02_Convolutional-Neural-Networks-in-TensorFlow',
  url: 'https://github.com/mohd-faizy/TF02_Convolutional-Neural-Networks-in-TensorFlow',
  desc: 'Convolutional neural network architectures in TensorFlow: feature visualization, data augmentation, transfer learning, and dropout regularization.'
});

addGitHubRepo('04-Computer-Vision/Segmentation.md', {
  name: 'mohd-faizy/TensorFlow-Advanced',
  url: 'https://github.com/mohd-faizy/TensorFlow-Advanced',
  desc: 'Advanced computer vision implementations covering semantic segmentation with U-Net, FCN, and custom loss functions.'
});

addGitHubRepo('04-Computer-Vision/Object-Detection.md', {
  name: 'mohd-faizy/TensorFlow-Advanced',
  url: 'https://github.com/mohd-faizy/TensorFlow-Advanced',
  desc: 'Object detection architectures, bounding box coordinate regression, anchor boxes, and IoU metric evaluation in TensorFlow.'
});

// --- Section 05: Natural Language Processing ---
addGitHubRepo('05-Natural-Language-Processing/NLP-Frameworks.md', {
  name: 'mohd-faizy/The-NLP-Pandect',
  url: 'https://github.com/mohd-faizy/The-NLP-Pandect',
  desc: 'A comprehensive encyclopedic reference repository covering classical NLP to transformer-based language representations.'
});

addGitHubRepo('05-Natural-Language-Processing/NLP-Frameworks.md', {
  name: 'mohd-faizy/Natural_Language_Processing_in_Python',
  url: 'https://github.com/mohd-faizy/Natural_Language_Processing_in_Python',
  desc: 'Applied natural language processing workflows: tokenization, vocabulary indexing, TF-IDF, Word2Vec, and sequence modeling.'
});

addGitHubRepo('05-Natural-Language-Processing/Tokenization.md', {
  name: 'mohd-faizy/TF03_Natural-Language-Processing-in-TensorFlow',
  url: 'https://github.com/mohd-faizy/TF03_Natural-Language-Processing-in-TensorFlow',
  desc: 'Text tokenization, subword encodings, padding sequences, and embedding layers for recurrent neural networks.'
});

addGitHubRepo('05-Natural-Language-Processing/Text-Classification-and-Sentiment.md', {
  name: 'mohd-faizy/NLP_Projects',
  url: 'https://github.com/mohd-faizy/NLP_Projects',
  desc: 'End-to-end text classification, sentiment analysis, document clustering, and sequence prediction models.'
});

addProject('05-Natural-Language-Processing/NLP-Frameworks.md', {
  title: 'Comprehensive NLP Knowledge Base & Model Suite',
  url: 'https://github.com/mohd-faizy/The-NLP-Pandect',
  desc: 'Extensive documentation and code examples walking through text normalization, linguistic parsing, and transformer inference.'
});

console.log('Sections 04, 05, and 06 enriched successfully.');
