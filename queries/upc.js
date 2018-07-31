const knex = require('./db')

const getAllUPC = () => {
  return knex('upc')
    .select('product_name', 'upc')
}

const getOneUPC = (code) => {
  return knex('upc')
    .select('*')
    .where('upc', code)
    .returning('*')
}

const addUPC = (body) => {
  return knex('upc')
    .where('upc', body.upc)
    .first()
    .then(found => {
      if(found) {
        return 'UPC already exists!'
      }
      else{
        return knex
          .insert(body)
          .into('upc')
          .returning('*')
      }
    })
}

module.exports = { getAllUPC, getOneUPC, addUPC }