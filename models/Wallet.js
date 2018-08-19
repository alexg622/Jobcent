const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WalletSchema = new Schema({
  public_key: {
    type: String,
    required: true
  },
  tokens: [
    {
      token: {
        type: Schema.Types.ObjectId,
        ref: "tokens"
      }
    }
  ]
});

module.exports = Wallet = mongoose.model("wallets", WalletSchema)
