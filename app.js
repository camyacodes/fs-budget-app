// create express app and integrate it with middleware
const config = require('./utils/config')
const express = require('express')
const app = express()
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

const cors = require('cors')
const mongoose = require('mongoose')
const purchasesRouter = require('./controllers/Purchases')

mongoose.set('strictQuery', false)
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB!')
  })
  .catch((error) => {
    logger.error('Error connecting to MongoDB', error.message)
  })

app.use(cors())
app.use(express.json())
app.use(middleware.morganLog)

app.use('/api/purchases', purchasesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
