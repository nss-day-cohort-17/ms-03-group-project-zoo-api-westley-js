process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const { knex } = require('../db/database')
chai.use(chaiHttp)

describe('Animal_Keeper routes', () => {
  beforeEach( () => {
    return knex.migrate.rollback()
    .then( () => {
      return knex.migrate.latest()
    })
    .then( () => {
      return knex.seed.run()
    })
  })

  describe('GET /api/v1/animal_keeper', () => {
    it('should get all the animal_keepers', () => {
      return chai.request(server)
      .get('/api/v1/animal_keeper')
      .then( (res) => {
        res.should.be.json
        res.should.have.status(200)
        res.body.should.be.a('array')
      })
    })
  })

  describe('GET /api/v1/animal_keeper/:id', () => {
    it('should get one animal keeper', () => {
      return chai.request(server)
      .get('/api/v1/animal_keeper/1')
      .then( (res) => {
        res.should.be.json
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('animal_id')
        res.body.should.have.property('keeper_id')
      })
    })
  })

  describe('POST /api/v1/animal_keeper/new', () => {
    it('should add a new animal_keeper to the db', () => {
      return chai.request(server)
      .post('/api/v1/animal_keeper/new')
      .send({
        animal_id: 2,
        keeper_id: 1
      })
      .then( (res) => {
        res.should.have.status(201)
        res.should.be.json
        res.should.be.a('object')
      })
    })
  })

  describe('DELETE /api/v1/animal_keeper/:id', () => {
    it('should delete one animal_keeper', () => {
      return chai.request(server)
      .delete('/api/v1/animals/1')
      .then( (res) => {
        res.should.have.status(202)
        res.should.be.json
        res.should.be.a('object')
      })
    })
  })

  describe('PUT /api/v1/animal_keeper/:id', () => {
    it('should modify an existing animal_keeper that exists in the table', () => {
      return chai.request(server)
      .put('/api/v1/animal_keeper/1')
      .send({
        animal_id: 3,
        keeper_id: 3
      })
      .then( (res) => {
        res.should.have.status(200)
        res.should.be.json
        res.should.be.a('object')
      })
    })
  })


})
