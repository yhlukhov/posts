const { randomUUID, randomBytes } = require('crypto')
const express = require('express')
const cors = require('cors')

const posts = {}

const app = express()
app.use(express.json())
app.use(cors()) // in case we will need it

app.get('/', (req, res) => {
  res.send(posts)
})

app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/posts', (req, res) => {
  const { title } = req.body
  const id = randomBytes(4).toString('hex')
  posts[id] = { id, title }
  res.status(201).send(posts[id])
})

app.listen(4000, () => console.log('Server is running on port 4000'))
