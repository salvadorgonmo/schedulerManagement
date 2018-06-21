const express = require('express')
const app = express()
const port = 8080

const userRoutes = require('./routes/userRoutes')

app.use('/', userRoutes)

app.listen(port, function () {
  console.log('app working on port: ', port)
})
