const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('.').filter(d => /^\d{2}-/.test(d));

// 1. Check dead video IDs
const deadVideoIds = [
  '0k5G_u1Mv2k', 'F0pDk4qTz9c', '0k5nN5kUu_0', 'kY3jXgM6m28', 'kY3P9hI2_8w',
  'b4N8_B8wVd8', 'kYv_8T53m3I', 'sU14z7dZ1xY', '0e3zP8w_KqU', '0k1Lz3wX1V8',
  'aj3toxl_eqk', 'kY0wU3fX6tQ'
];

let deadVideoOccurrences = 0;
for (const d of dirs) {
  const files = fs.readdirSync(d).filter(f => f.endsWith('.md'));
  for (const f of files) {
    const content = fs.readFileSync(path.join(d, f), 'utf8');
    for (const id of deadVideoIds) {
      if (content.includes(id)) {
        console.error(`ERROR: Found dead video ID ${id} in ${path.join(d, f)}`);
        deadVideoOccurrences++;
      }
    }
  }
}

// 2. Check 100 Days of ML outside 02-Machine-Learning
let misplaced100Days = 0;
for (const d of dirs) {
  if (d === '02-Machine-Learning') continue;
  const files = fs.readdirSync(d).filter(f => f.endsWith('.md'));
  for (const f of files) {
    const content = fs.readFileSync(path.join(d, f), 'utf8');
    if (content.includes('PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH')) {
      console.error(`ERROR: Found 100 Days of ML playlist outside Section 02 in ${path.join(d, f)}`);
      misplaced100Days++;
    }
  }
}

// 3. Verify Relative file links across all READMEs
let brokenRelLinks = 0;
let totalRelLinks = 0;
for (const d of dirs) {
  const readmePath = path.join(d, 'README.md');
  if (fs.existsSync(readmePath)) {
    const content = fs.readFileSync(readmePath, 'utf8');
    const matches = [...content.matchAll(/\[([^\]]+)\]\((?!https?:\/\/)([^)#\s]+)(?:#[^\)]*)?\)/g)];
    for (const m of matches) {
      totalRelLinks++;
      const target = path.resolve(d, m[2]);
      if (!fs.existsSync(target)) {
        console.error(`ERROR: Broken relative link in ${readmePath}: ${m[2]}`);
        brokenRelLinks++;
      }
    }
  }
}

// 4. Verify Root README relative links
const rootReadme = fs.readFileSync('README.md', 'utf8');
const rootMatches = [...rootReadme.matchAll(/\[([^\]]+)\]\((?!https?:\/\/)([^)#\s]+)(?:#[^\)]*)?\)/g)];
for (const m of rootMatches) {
  totalRelLinks++;
  const target = path.resolve('.', m[2]);
  if (!fs.existsSync(target)) {
    console.error(`ERROR: Broken relative link in root README.md: ${m[2]}`);
    brokenRelLinks++;
  }
}

// 5. Verify TOC In-Page Anchors
function githubSlug(str) {
  return str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s/g, '-');
}
const h1s = rootReadme.split('\n').filter(l => /^#\s+/.test(l)).map(l => l.replace(/^#\s+/, '').trim());
const h1Slugs = new Set(h1s.map(githubSlug));
const tocAnchors = [...rootReadme.matchAll(/\* \[([^\]]+)\]\(#([^)]+)\)/g)];
let brokenTocAnchors = 0;
for (const a of tocAnchors) {
  if (!h1Slugs.has(a[2])) {
    console.error(`ERROR: Broken TOC anchor in README.md: ${a[1]} -> #${a[2]}`);
    brokenTocAnchors++;
  }
}

console.log('\n--- VERIFICATION SUMMARY ---');
console.log('Dead Video ID Occurrences:     ', deadVideoOccurrences);
console.log('Misplaced 100 Days Occurrences:', misplaced100Days);
console.log('Total Relative Links Verified: ', totalRelLinks);
console.log('Broken Relative Links:         ', brokenRelLinks);
console.log('Total TOC Anchors Verified:    ', tocAnchors.length);
console.log('Broken TOC Anchors:            ', brokenTocAnchors);

if (deadVideoOccurrences === 0 && misplaced100Days === 0 && brokenRelLinks === 0 && brokenTocAnchors === 0) {
  console.log('\nALL CHECKS PASSED PERFECTLY!');
} else {
  console.error('\nSOME CHECKS FAILED!');
  process.exit(1);
}
