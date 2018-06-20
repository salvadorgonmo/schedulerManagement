const express = require('express')
const app = express()
const port = 8080

app.listen(port, function () {
  console.log('app working on port: ', port)
})
