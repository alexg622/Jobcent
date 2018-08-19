const express = require('express');
const router = express.Router();
const Wallet = require('../../models/Wallet');
const Token = require('../../models/Token');

router.post('/wallets/:public_key', (req, res) => {
  Wallet.findById(req.params.public_key).then(wallet => {
    Token.findById(req.body.id).then(token => {
      wallet.unshit(token)
      wallet.save()
      res.json(wallet)
    })
  })
})

router.get('/wallets/:public_key', (req, res) => {
  Wallet.findById(req.params.public_key).then(wallet => {
    res.json(wallet);
  })
})
