const os = require('os');

console.log('Operating System Info:');
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPU Info:', os.cpus());
console.log('Free Memory:', os.freemem());
console.log('Total Memory:', os.totalmem());