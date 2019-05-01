var express = require('express');
var router = express.Router();
var Blockchain = require('../lib/block-chain');

let myBlockChain = new Blockchain();

    router.get('/', ( req , res ) => {
       res.json(myBlockChain.getBlockchain());
    });

    router.get('/check', ( req , res ) => {
        let valid = myBlockChain.checkValid();
        if(valid){
            res.send("Blockchain is secured...");
        }
        else{
            res.send("Blockchain is compromised...");
        }
    });

    router.post('/addblock', ( req , res ) => {
        console.log("Mining block...");
        myBlockChain.addBlock(req.body);
        res.json(myBlockChain.getBlockchain());
    });

    module.exports = router;

