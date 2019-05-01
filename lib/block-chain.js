var SHA256 = require('crypto-js').SHA1;
var Block = require('./block');

class Blockchain extends Block{
    constructor() {
        super();
        this.chain = [this.createGenesis()];
        this.difficulty = 4;
        this.index=0;
      }
    
    createGenesis() {
        return new Block(this.index,"Wed May 01 2019 20:22:08 GMT+0530 (India Standard Time)", "Genesis block", "0");
    }

    latestBlock() {
        return this.chain[this.chain.length - 1]
      }
    
    addBlock(newBlock) {

        let previousHash = this.latestBlock().hash;
        let dt = new Date();
        let ts = dt.toString();
        let timestamp = ts;
        let data = newBlock;
        let candidateBlock = new Block(++this.index, timestamp, data, previousHash);
        candidateBlock.mineBlock(this.difficulty);
        this.chain.push(candidateBlock);
        return candidateBlock.hash;
    }

    getBlockchain(){
        return this.chain;
    }

    checkValid() {

        for(let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== super.calculateHash(currentBlock)) return false;
            if (currentBlock.previousHash !== previousBlock.hash)  return false;
            if(JSON.stringify(this.chain[0]) !== JSON.stringify(this.createGenesis())) return false;
        }
        return true;

    }
}

module.exports = Blockchain;