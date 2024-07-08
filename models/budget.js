// mongoose model and schema for mongodb
const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
  date: Date,
  place: { type: String, require: true },
  category: { type: String, require: true },
  amount: { type: Number, require: true },
})

const Purchase = mongoose.model('Purchase', purchaseSchema)

const limitSchema = new mongoose.Schema({
  limit: Number,
})

const Limit = mongoose.model('Limit', limitSchema)

module.exports = { Purchase, Limit }
