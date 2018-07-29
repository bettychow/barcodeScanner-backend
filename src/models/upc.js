const upc = require('../../queries/upc')

const getOneUPC = (code) => {
  const upcQueried = upc.getOneUPC(code)

  return upcQueried
    .then(result => {

      console.log('MMMMM', result)
      return result
    })
}

module.exports = { getOneUPC }