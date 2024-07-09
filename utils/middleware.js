const logger = require('./logger')
var morgan = require('morgan')
// AKA "do something to the request and/or response" Express is a series of middleware function calls!

// unknownnEndpoint error
const unknownEndpoint = (request, response) => {
  return response.status(404).send({ error: 'unknown endpoint' })
}

// Morgan
morgan.token('content', function (request) {
  return JSON.stringify(request.body)
})

const morganLog = morgan(
  ':method :url :status :res[content-length] - :response-time ms :content'
)

// errorHandler
const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

module.exports = {
  unknownEndpoint,
  morganLog,
  errorHandler,
}
