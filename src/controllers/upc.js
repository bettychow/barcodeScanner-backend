const model = require('../models/upc')

const getAllUPC = (req, res) => {
  const data = model.getAllUPC()

  data
    .then(result => {
      res.status(200).json({upc: result})
    })
}

const getOneUPC = (req, res) => {
  const data = model.getOneUPC(req.params.code)

  data
    .then(result => {
      res.status(200).json(result)
    })
}

const addUPC = (req, res) => {
  const data = model.addUPC(req.body)

  data
    .then(result => {
      res.status(201).json(result)
    })
}

module.exports = { getAllUPC, getOneUPC, addUPC }