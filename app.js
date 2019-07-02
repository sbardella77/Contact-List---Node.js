const express = require('express')
const app = express()
const PORT = 1234

const router = require('./controller/router')

app.use(express.static('public'))

app.set('views', __dirname + '/view')
app.set('view engine', 'pug')

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server start on port n:${PORT}`)
})
