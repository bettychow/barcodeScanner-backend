const model = require('../models/upc')

const getAllUPC = (req, res) => {
  const data = model.getAllUPC()

  data
    .then(result => {
      res.status(200).json({upc: result})
    })
}

const getOneUPC = (req, res, next) => {
  const data = model.getOneUPC(req.params.code)

  if (data.errors) {
    return next({ status: 404, message: `UPC not found`, errors: data.errors })
  }

  data
    .then(result => {
      res.status(200).json(result)
    })
}

const addUPC = (req, res, next) => {
  const data = model.addUPC(req.body)

  if (data.errors) {
    return next({ status: 400, message: `Invalid request`, errors: data.errors })
  }

  data
    .then(result => {
      res.status(201).json(result)
    })
}

module.exports = { getAllUPC, getOneUPC, addUPC }