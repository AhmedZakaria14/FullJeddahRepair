
const fs = require('fs');
const art3 = require('./art3.js');
const art4 = require('./art4.js');
const art5 = require('./art5.js');
const art6 = require('./art6.js');

function escapeBackticks(str) {
  return str.replace(/\`/g, '\\\`').replace(/\$/g, '\\$');
}

function objectToCode(obj) {
  return "{\n" + 
    "slug: '" + obj.slug + "',\n" +
    "title: '" + obj.title + "',\n" +
    "metaTitle: '" + obj.metaTitle + "',\n" +
    "metaDescription: '" + obj.metaDescription + "',\n" +
    "heroImage: '" + obj.heroImage + "',\n" +
    "toc: " + JSON.stringify(obj.toc) + ",\n" +
    "contentSections: [" + obj.contentSections.map(sec => 
      "{ id: '" + sec.id + "', title: '" + sec.title + "', content: `" + escapeBackticks(sec.content) + "` }"
    ).join(',\n') + "]\n" +
  "}";
}

let content = fs.readFileSync('lib/electricity-articles.ts', 'utf-8');
// Find the array start
let prefix = content.substring(0, content.indexOf("    slug: 'hidden-lighting-installation-jeddah'"));

// we need to step back to the start of the object `{` just before `slug: 'hidden-lighting-installation-jeddah'`
let lastBraceIdx = prefix.lastIndexOf('{');
prefix = prefix.substring(0, lastBraceIdx);

const newContent = prefix + 
  objectToCode(art3) + ",\n" +
  objectToCode(art4) + ",\n" +
  objectToCode(art5) + ",\n" +
  objectToCode(art6) + "\n];\n";

fs.writeFileSync('lib/electricity-articles.ts', newContent);
console.log("File updated successfully");
