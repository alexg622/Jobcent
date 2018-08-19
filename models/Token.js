const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TokenSchema = new Schema({
  sponsor_uuid: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  name: {
    type: String,
    required: true
  },
  totalTokens: {
    type: Number,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  }
});

module.exports = Token = mongoose.model("tokens", TokenSchema)
