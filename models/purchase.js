// mongoose model and schema for mongodb
const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
  date: Date,
  place: { type: String, require: true },
  category: { type: String, require: true },
  amount: { type: Number, require: true },
})

const Purchase = mongoose.model('Purchases', purchaseSchema)

module.exports = Purchase
