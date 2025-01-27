const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

const port = 3000;

//This is the solution. The server now gracefully handles errors.
//This will print an error message to console instead of crashing the server
server.on('error', err => {
  console.error('Server error:', err);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});