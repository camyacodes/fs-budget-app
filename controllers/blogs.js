// individual router methods for blog url
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})

blogsRouter.post('/', (request, response) => {
  const body = request.body
  console.log(body)

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  })

  blog
    .save()
    .then((addedBlog) => {
      response.json(addedBlog)
    })
    .catch((error) => {
      response.status(404).json('Error adding blog', error.message).end()
    })
})

module.exports = blogsRouter
