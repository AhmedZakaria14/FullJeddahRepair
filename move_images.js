const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'app', 'public', 'images');
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(srcDir)) {
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    fs.renameSync(path.join(srcDir, file), path.join(destDir, file));
  }
}
console.log('Moved files successfully.');
