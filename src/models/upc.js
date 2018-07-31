const upc = require('../../queries/upc')

const getAllUPC = () => {
  const allUPC = upc.getAllUPC()

  return allUPC
    .then(result => {
      return result
    })
}

const getOneUPC = (code) => {
  const upcQueried = upc.getOneUPC(code)

  return upcQueried
    .then(result => {
      return result
    })
}

const addUPC = (body) => {
  const addUPC = upc.addUPC(body)

  return addUPC
    .then(result => {
      return result
    })
}

module.exports = { getAllUPC, getOneUPC, addUPC }