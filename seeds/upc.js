
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('upc').del()
    .then(function () {
      // Inserts seed entries
      return knex('upc').insert([
        {id: 1, product_name: 'Torie & Howard Chewie Fruities Organic Candy Assorted Flavors', upc: '0853715003244' },
        {id: 2, product_name: 'Lotte Koala Cookie Chocolate', upc: '0081900080088' },
        {id: 3, product_name: 'Viva Naturals Organic Cacao Powder', upc: 'X000JA59LR'}
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('upc_id_seq', (SELECT MAX(id) FROM upc));`
      )
    })
}
