const url = require('url');

const myUrl = new URL('https://www.example.com:8080/pathname/?search=test#hash');

console.log('URL Module Demonstration:');
console.log('Protocol:', myUrl.protocol);
console.log('Host:', myUrl.host);
console.log('Pathname:', myUrl.pathname);
console.log('Search Params:', myUrl.searchParams);
