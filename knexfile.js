module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/barcode_scanner_dev'
  },
  test: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`
  },
  production: {
    client: 'pg',
    connection: 'postgres://osjplinouypxxi:89374393c32731d6381a549577c0da709c2a994afc7d10da21ac7947217a99af@ec2-54-235-177-183.compute-1.amazonaws.com:5432/d4b93rdt294j3t',
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};

