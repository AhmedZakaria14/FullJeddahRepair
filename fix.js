const fs = require('fs');
const content = fs.readFileSync('lib/electricity-articles.ts', 'utf8');
const fixed = content.replace(/\\`/g, '`');
fs.writeFileSync('lib/electricity-articles.ts', fixed, 'utf8');
console.log('Fixed backticks');
