const CryptoJS = require('crypto-js');

const Parse = CryptoJS.enc.Utf8.parse;
const Stringify = CryptoJS.enc.Utf8.stringify;
const Opts = {
  mode:CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7,
}
const { encrypt: Encrypt, decrypt: Decrypt } = CryptoJS.AES

module.exports = {
  genKey(len = 16) {
    const random = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for (let i = 0; i < len; i++) {
      str = str + random.charAt(Math.random() * random.length);
    }
    return str
  },

  encrypt(plaintext, key) {
    if (typeof plaintext !== 'string') {
      plaintext = JSON.stringify(plaintext);
    }
    const encrypted = Encrypt(Parse(plaintext), Parse(key), Opts);
    return encrypted.toString();
  },

  decrypt(ciphertext, key) {
    const decrypted = Decrypt(ciphertext, Parse(key), Opts);
    const decstr = Stringify(decrypted).toString();
    return /^(\{|\[)/.test(decstr) ? JSON.parse(decstr) : decstr;
  }
}