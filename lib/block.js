var SHA256 = require('crypto-js').SHA1;

class Block {
    constructor(index,timestamp, data, previousHash) {
        // if(data){
            this.index = index;
            this.timestamp = timestamp;//Math.floor(new Date()/100);
            this.data = data;
            this.previousHash = previousHash;
            this.nounce = 0;
            this.hash = this.calculateHash(this);
        // }
    }
    /// our functions...
    calculateHash(block) {
        // console.log("cal",block);
        return SHA256(block.index + block.previousHash + block.timestamp + JSON.stringify(block.data) + block.nounce).toString();
      }

    mineBlock(difficulty){
      while(this.hash.substr(0,difficulty) !== Array(difficulty+1).join("0")){
        this.nounce += 1;
        this.hash = this.calculateHash(this);
      }
      console.log("Block Mined : "+this.hash);
    }
  }
  
module.exports = Block;