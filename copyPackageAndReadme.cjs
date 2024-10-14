const fs = require('fs');

if (fs.existsSync('package.json')) {
    fs.copyFileSync('package.json', 'dist/package.json');
} else {
    console.warn('Package.json not found.');
}

if (fs.existsSync('README.md')) {
    fs.copyFileSync('README.md', 'dist/README.md');
} else {
    console.warn('README.md not found.');
}
