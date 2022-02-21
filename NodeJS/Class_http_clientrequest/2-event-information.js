const http = require('http');

const options = {
  host: '127.0.0.1',
  port: 5000,
  path: '/length_request'
};

// Make a request
const req = http.request(options);
req.end();

req.on('information', (info) => {
  console.log(`Got information prior to main response: ${info.statusCode}`);
});