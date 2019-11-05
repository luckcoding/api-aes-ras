const fs = require('fs');
const NodeRSA = require('node-rsa');

const privatePem = fs.readFileSync('./private.pem').toString('utf-8');
const publicPem = fs.readFileSync('./public.pem').toString('utf-8');

module.exports = {
  bits: 1024,
  encrypt(plaintext) {
    if (typeof plaintext !== 'string') {
      plaintext = JSON.stringify(plaintext);
    }
    // return (publicPem)
  }
}