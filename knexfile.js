module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/barcode_scanner_dev'
  },
  test: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`
  },
};