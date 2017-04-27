process.env.NODE_ENV = "test";

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const {knex} = require('../db/database');
chai.use(chaiHttp);


describe('Show trainer routes', () => {

  beforeEach( () => {
    return knex.migrate.rollback()
    .then(() => {
      return knex.migrate.latest()
    })
    .then(() => {
      return knex.seed.run()
    })
  });

  describe('Get All the trainers', () => {
    it('should get all the trainers', () => {
      return chai.request(server)
      .get('/api/v1/trainers')
      .then((res) => {
        res.should.have.status(200)
      })
    })
  })

  describe('Get /api/v1/trainers/:id', () => {
    it('should get one trainer with that id', () => {
      return chai.request(server)
      .get('/api/v1/trainers/1')
      .then((res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('first_name');
        res.body.first_name.should.equal('Augy');
      })
    })
  })

})
