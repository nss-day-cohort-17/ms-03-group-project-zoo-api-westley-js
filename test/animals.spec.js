process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app')
const { knex } = require('../db/database')
chai.use(chaiHttp)

describe('Animal routes', () => {
  // beforeEach( () => {
  //   return knex.migrate.rollback()
  //     .then( () => {
  //       return knex.migrate.latest()
  //     })
  //     .then( () => {
  //       return knex.seed.run()
  //     })
  // })

  describe('Get all animals', () => {
    it('should get all the animals', () => {
      return chai.request(server)
      .get('/api/v1/animals')
      .then( (res) => {
        res.should.be.json
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body[0].should.have.property('name')
        res.body[0].should.have.property('species')
        res.body[0].should.have.property('age')
        res.body[0].should.have.property('gender')
        res.body[0].should.have.property('category_id')
        res.body[0].should.have.property('number_of_kills')
        res.body[0].should.have.property('animal_image')
        res.body[0].name.should.equal('James')
        res.body[0].species.should.equal('Paluxysaurus')
        res.body[0].age.should.equal('110 million years')
        res.body[0].gender.should.equal('male')
        res.body[0].category_id.should.equal(1)
        res.body[0].number_of_kills.should.equal(1000)
        res.body[0].animal_image.should.equal('http://vignette2.wikia.nocookie.net/dino/images/5/52/Paluxysaurus.jpg/revision/latest?cb=20110816080846')
      })
    })
  })


})
