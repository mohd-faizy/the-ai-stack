const fs = require('fs');

console.log('Enriching Sections 07, 08, and 09...');

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

// --- Section 07: Reinforcement Learning ---
addGitHubRepo('07-Reinforcement-Learning/RL-Algorithms-and-Frameworks.md', {
  name: 'mohd-faizy/Reinforcement_learning',
  url: 'https://github.com/mohd-faizy/Reinforcement_learning',
  desc: 'Reinforcement learning foundations and policy optimization: MDPs, Q-learning, policy gradients, and agent architectures.'
});

addProject('07-Reinforcement-Learning/RL-Algorithms-and-Frameworks.md', {
  title: 'Deep Q-Learning & Policy Gradient Agent Playground',
  url: 'https://github.com/mohd-faizy/Reinforcement_learning',
  desc: 'Complete implementation of value-iteration and policy-gradient algorithms trained on Gymnasium simulated environments.'
});

// --- Section 08: Generative AI ---
addGitHubRepo('08-Generative-AI/VAEs-and-GANs.md', {
  name: 'mohd-faizy/TensorFlow-Advanced',
  url: 'https://github.com/mohd-faizy/TensorFlow-Advanced',
  desc: 'Generative deep learning with TensorFlow: Autoencoders, Variational Autoencoders (VAEs), Neural Style Transfer, and GANs.'
});

addProject('08-Generative-AI/VAEs-and-GANs.md', {
  title: 'Variational Autoencoder & GAN Latent Exploration',
  url: 'https://github.com/mohd-faizy/TensorFlow-Advanced',
  desc: 'Trained generative models generating novel samples and traversing latent feature manifolds.'
});

console.log('Sections 07, 08, and 09 enriched successfully.');
