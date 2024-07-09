// individual router methods for blog url
const purchasesRouter = require('express').Router()
const Purchase = require('../models/purchase')

// Find all purchases
purchasesRouter.get('/', (request, response) => {
  Purchase.find({})
    .then((purchase) => {
      response.json(purchase)
    })
    .catch((error) => {
      response.status(400).json(error.message)
    })
})

// Add a purchase
purchasesRouter.post('/', (request, response, next) => {
  const body = request.body

  const purchase = new Purchase({
    date: Date(),
    place: body.place,
    category: body.category,
    amount: body.amount,
  })

  purchase
    .save()
    .then((savedPurchase) => {
      response.json(savedPurchase)
    })
    .catch((error) => next(error))
})

module.exports = purchasesRouter
