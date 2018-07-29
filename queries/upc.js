const knex = require('./db')

const getAllUPC = () => {
  return knex('upc')
    .select('*')
}

const getOneUPC = (code) => {
  return knex('upc')
    .select('*')
    .where('upc', code)
    .returning('*')
}

module.exports = { getAllUPC, getOneUPC }