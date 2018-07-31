require("dotenv").load()
const chai = require("chai")
      should = chai.should()
      chaiHttp = require("chai-http")
      server = require("../app")
      config = require("../knexfile").test

chai.use(chaiHttp)
chai.use(require("chai-as-promised"))

describe('API Routes', () => {
  beforeEach(() => {
    const tmpConnection = require('knex')({ client: 'pg', connection: process.env.DATABASE_URL })
    return tmpConnection.raw(`CREATE DATABASE ${process.env.DATABASE_NAME};`)
      .catch(() => Promise.resolve('Everything is OK'))
      .then(() => global.knex = require('../queries/db'))
      .then(() => knex.migrate.rollback(config))
      .then(() => knex.migrate.latest(config))
      .then(() => knex.seed.run())
      .catch(() => console.log(`Migrations or seeds failed.`))
  })

  describe('#GET /upc', () => {
    it('Should return all UPCs', () => {
      chai.request(server)
        .get('/upc')
        .end((err, res) => {

          console.log('res in test', res.body)
          res.should.have.status(200)
          res.should.be.json
          res.body.upc.should.be.a('array')
        })
    })
  })

  describe('#GET /upc/code', () => {
    it('Should return a UPC', done => {
      const code = '853715003244'
      chai.request(server)
        .get(`/upc/${code}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.should.be.json
          res.body.should.be.a('array')
          res.body[0].should.have.property('id')
          res.body[0].should.have.property('product_name')
          res.body[0].should.have.property('upc')
          done()
        })
    })
  })

  describe('#POST /upc', () => {
    it('Should add a new UPC', done => {
      chai.request(server)
        .post('/upc')
        .send({
          product_name: "Whole Foods 365 Organic Instant Oatmeal Original",
          upc: '099482419905'
        })
        .end((err, res) => {
          res.should.have.status(201)
          res.should.be.json
          res.body.should.be.a('array')
          res.body[0].should.have.property('id')
          res.body[0].should.have.property('product_name')
          res.body[0].should.have.property('upc')
          done()
        })
    })
  })
})
