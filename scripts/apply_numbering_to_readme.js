const fs = require('fs');
const path = require('path');

const tax = JSON.parse(fs.readFileSync('taxonomy.json', 'utf8'));
let content = fs.readFileSync('README.md', 'utf8');

// 1. Update Table of Contents
for (const s of tax) {
  const padNum = String(s.num).padStart(2, '0');
  
  // Original anchor slug for this title
  // Example: #foundations, #speech--audio
  // Find line: * [Title](#anchor)
  const escapedTitle = s.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const tocRegex = new RegExp(`\\* \\[${escapedTitle}\\]\\(#[^)]+\\)`, 'g');
  
  // New slug: padNum + '-' + original slug
  // For example: 01. Foundations -> #01-foundations
  // 06. Speech & Audio -> #06-speech--audio
  const newSlug = `${padNum}-${s.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`.replace(/&/g, '');
  // Let's compute GitHub slug properly
  // In GFM: "06. Speech & Audio" -> "06-speech--audio"
  let gfmSlug = `${padNum}. ${s.title}`
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // removes '.' and '&'
    .replace(/\s+/g, '-');    // spaces become '-'
    
  // If original had '&', GFM leaves double-dash '--'
  if (s.title.includes('&')) {
    gfmSlug = `${padNum}. ${s.title}`
      .toLowerCase()
      .replace(/&/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  }

  content = content.replace(tocRegex, (match) => {
    // Extract old anchor
    const oldAnchorMatch = match.match(/\(#([^)]+)\)/);
    const oldAnchor = oldAnchorMatch ? oldAnchorMatch[1] : '';
    const targetAnchor = `${padNum}-${oldAnchor}`;
    return `* [${padNum}. ${s.title}](#${targetAnchor})`;
  });
}

// 2. Update H1 section headers
// Currently: # Foundations
// Becomes: # 01. Foundations
for (const s of tax) {
  const padNum = String(s.num).padStart(2, '0');
  const oldH1 = `\n# ${s.title}\n`;
  const newH1 = `\n# ${padNum}. ${s.title}\n`;
  if (content.includes(oldH1)) {
    content = content.replace(oldH1, newH1);
  } else {
    console.warn(`Warning: Could not find H1 for: ${oldH1}`);
  }
}

// 3. Update H2 subsection headers and their callouts
// For each section s, sub index i (1-based):
// Currently: ## Subsection Title
// Becomes: ## s.num.i Subsection Title
for (const s of tax) {
  s.subsections.forEach((sub, idx) => {
    const subNum = `${s.num}.${idx + 1}`;
    
    // Replace ## Title
    const oldH2 = `\n## ${sub.title}\n`;
    const newH2 = `\n## ${subNum} ${sub.title}\n`;
    if (content.includes(oldH2)) {
      content = content.replace(oldH2, newH2);
    } else {
      console.warn(`Warning: Could not find H2 for: ${oldH2}`);
    }

    // Replace in section top callout:
    // > - [Title](folder/file.md) -> > - [subNum Title](folder/file.md)
    const oldCalloutItem = `> - [${sub.title}](${s.folder}/${sub.fileName})`;
    const newCalloutItem = `> - [${subNum} ${sub.title}](${s.folder}/${sub.fileName})`;
    content = content.replace(oldCalloutItem, newCalloutItem);

    // Replace in subsection callout:
    // > 📖 *Curated Learning Guide:* [Title — Study Guide, Courses & Repositories](folder/file.md)
    const oldSubCallout = `> 📖 *Curated Learning Guide:* [${sub.title} — Study Guide, Courses & Repositories](${s.folder}/${sub.fileName})`;
    const newSubCallout = `> 📖 *Curated Learning Guide:* [${subNum} ${sub.title} — Study Guide, Courses & Repositories](${s.folder}/${sub.fileName})`;
    content = content.replace(oldSubCallout, newSubCallout);
  });
}

fs.writeFileSync('README.md', content, 'utf8');
console.log('Successfully updated README.md with proper hierarchical numbering!');
