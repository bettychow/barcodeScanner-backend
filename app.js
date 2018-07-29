const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.disable('x-powered-by')

const upcPath = require('./src/routes/upc')

app.use('/upc', upcPath)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({error: err})
})

app.use((req, res, next) => {
  res.status(404).json({error : {message: "Not found!"}})
})

app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app