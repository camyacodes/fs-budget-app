const totalsRouter = require('express').Router()
const Total = require('../models/total')

// get totals
totalsRouter.get('/', (request, response) => {
  Total.find({}).then((total) => {
    response.json(total)
  })
})

// create totals
totalsRouter.post('/', (request, response, next) => {
  const body = request.body
  const total = new Total({
    limit: body.limit,
    total_spent: body.total_spent,
  })

  total
    .save()
    .then((newTotal) => {
      response.json(newTotal)
    })
    .catch((error) => next(error))
})

// update totals
totalsRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const total = {
    limit: body.limit,
    total_spent: body.total_spent,
  }

  Total.findByIdAndUpdate(request.params.id, total, { new: true })
    .then((updatedTotal) => {
      response.json(updatedTotal)
    })
    .catch((error) => next(error))
})

module.exports = totalsRouter
