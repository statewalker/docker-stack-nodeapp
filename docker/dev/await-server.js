import http from 'http';
http
  .createServer((req, res) => res.writeHead(200).end('' + Date.now()))
  .listen(12345, '0.0.0.0', () => console.log('Server is running on http://0.0.0.0:12345'));