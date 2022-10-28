const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 8000

const app = express()

// CORS
app.use(cors())

// for parsing application/json
app.use(bodyParser.json()) 

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })) 

// use router
app.use('/', require('./routes/index'))

app.listen(port, () => {
  console.log('server run on http://localhost:' + port)
})
