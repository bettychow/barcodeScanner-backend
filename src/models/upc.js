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
  const errors = []
  return upcQueried
    .then(result => {

      if (result.length === 0) {
        errors.push('UPC not found!')
        return {errors}
      }
      return result
    })
}

const addUPC = (body) => {
  
  const errors = []
  if(!body.product_name || !body.upc) {
    errors.push('Product name and UPC are required.')
    return {errors}
  } else {
    const addUPC = upc.addUPC(body)
    return addUPC
    .then(result => {
      return result
    })
  }
}

module.exports = { getAllUPC, getOneUPC, addUPC }