// mongoose model and schema for mongodb
const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
  amount: { type: Number, require: true },
  date: Date,
  category: { type: String, require: true },
})

const Purchase = mongoose.model('Purchase', purchaseSchema)

module.exports = Purchase
