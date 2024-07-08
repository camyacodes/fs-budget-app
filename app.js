// create express app and integrate it with middleware
const config = require('./utils/config')
const logger = require('./utils/logger')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const blogsRouter = require('./controllers/blogs.js')

mongoose.set('strictQuery', false)
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB!')
  })
  .catch((error) => {
    logger.error('Error connecting to MongoDB', error.message)
  })

const app = express()

app.use(express.json())
// app.use(cors)

app.use('/api/blogs', blogsRouter)

module.exports = app
