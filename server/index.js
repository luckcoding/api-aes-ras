const http = require('http');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end('Hello World\n');
}).listen(8080);

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

console.log('Server running at http://127.0.0.1:8080/');

// const Aes = require('./aes');

// function run(input) {
//   const genKey = Aes.genKey();
//   const ciphertext = Aes.encrypt(input, genKey);
//   console.log('密文:', ciphertext);
//   const plaintext = Aes.decrypt(ciphertext, genKey);
//   console.log('明文:', plaintext);
// }

// run('luckcoding@gmail.com:github');
// run({ name: 'luckcoding', suffix: 'abc!@#123:' });

