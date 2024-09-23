const path = require('path');

console.log('Path Module Demonstration:');
console.log('Directory Name:', path.dirname(__filename));
console.log('Base Name:', path.basename(__filename));
console.log('File Extension:', path.extname(__filename));
console.log('Join Paths:', path.join(__dirname, 'folder', 'file.txt'));
