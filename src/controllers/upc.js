const model = require('../models/upc')

const getOneUPC = (req, res) => {

  console.log('RRRRRRR', req.params)
  const data = model.getOneUPC(req.params.code)

  data
    .then(result => {
      res.status(200).json(result)
    })
}

module.exports = { getOneUPC }