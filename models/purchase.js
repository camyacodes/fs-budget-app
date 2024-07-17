// mongoose model and schema for mongodb
const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
  date: Date,
  place: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
})

purchaseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Purchase = mongoose.model('Purchases', purchaseSchema)

module.exports = Purchase
