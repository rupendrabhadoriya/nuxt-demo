const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())


app.get('/api/posts', (req, res) => {
console.log('this is get method..', req);
})


app.listen(3000, () => {
  console.log('Server listening on port 3000')
})