const fs = require('fs');

const art3 = require('./art3.js');
const art4 = require('./art4.js');
const art5 = require('./art5.js');
const art6 = require('./art6.js');

// We need to fetch current art1 and art2 from lib/electricity-articles.ts
// I'll keep them as they were but make sure they are long as the user wants them to be very long.
// Since we generated art3, 4, 5, 6 as standalone modules, let's assemble them.

let currentData = fs.readFileSync('lib/electricity-articles.ts', 'utf8');

// We just want the first two articles from the current file and replace the rest.
// A safe way: parse it or just replace the items by require or string manipulation.
// But we actually can just re-write the whole file using our full structure.
// I will fetch art1 and art2 content up to "hidden-lighting-installation-jeddah".

let articlesStr = currentData.substring(currentData.indexOf('export const articles'), currentData.indexOf(`slug: 'hidden-lighting-installation-jeddah'`));

// Since substring matching might be tricky, let's do a split based on slugs or just fully generate them all here.
// I'll simply write a script that updates the array. Wait, I can just use a regex or string replacement.

const content = `import { Article } from './electricity-articles-types'; // If we have types

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  toc: { id: string; title: string }[];
  contentSections: {
    id: string;
    title: string;
    content: string;
  }[];
}

// I will just get the first two articles from currentData, and then append art3, art4, art5, art6.
`;

fs.writeFileSync('combine.js', `
const fs = require('fs');
const art3 = require('./art3.js');
const art4 = require('./art4.js');
const art5 = require('./art5.js');
const art6 = require('./art6.js');

function escapeBackticks(str) {
  return str.replace(/\\\`/g, '\\\\\\\`').replace(/\\$/g, '\\\\$');
}

function objectToCode(obj) {
  return "{\\n" + 
    "slug: '" + obj.slug + "',\\n" +
    "title: '" + obj.title + "',\\n" +
    "metaTitle: '" + obj.metaTitle + "',\\n" +
    "metaDescription: '" + obj.metaDescription + "',\\n" +
    "heroImage: '" + obj.heroImage + "',\\n" +
    "toc: " + JSON.stringify(obj.toc) + ",\\n" +
    "contentSections: [" + obj.contentSections.map(sec => 
      "{ id: '" + sec.id + "', title: '" + sec.title + "', content: \`" + escapeBackticks(sec.content) + "\` }"
    ).join(',\\n') + "]\\n" +
  "}";
}

let content = fs.readFileSync('lib/electricity-articles.ts', 'utf-8');
// Find the array start
let prefix = content.substring(0, content.indexOf("    slug: 'hidden-lighting-installation-jeddah'"));

// we need to step back to the start of the object \`{\` just before \`slug: 'hidden-lighting-installation-jeddah'\`
let lastBraceIdx = prefix.lastIndexOf('{');
prefix = prefix.substring(0, lastBraceIdx);

const newContent = prefix + 
  objectToCode(art3) + ",\\n" +
  objectToCode(art4) + ",\\n" +
  objectToCode(art5) + ",\\n" +
  objectToCode(art6) + "\\n];\\n";

fs.writeFileSync('lib/electricity-articles.ts', newContent);
console.log("File updated successfully");
`);
