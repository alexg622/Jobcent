const express = require('express');
const router = express.Router();
const Token = require('../../models/Token');

router.post('/tokentypes', (req, res) => {
  const newTokens = new Token({
    sponsor_uuid: req.sponsor_uuid,
    name: req.Name,
    totalTokens: req.totalTokens,
    expiryDate: req.ExpiryDate
  })
  newTokens.save()
    .then(tokens => {
      Wallet.findById(tokens.sponsor_uuid).then(wallet => {
        wallet.tokens.unshit(tokens)
        wallet.save()
      })
      res.json(tokens)
    })
    .catch(err => console.log(err));
})
