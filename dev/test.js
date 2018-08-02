const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
bitcoin.createNewBlock(2389, 'QWERTYUI', 'KJHGFDSA');
bitcoin.createNewTransaction(100, 'SANGASDFGHJK', 'DUNGZXCVBNM');

console.log(bitcoin);