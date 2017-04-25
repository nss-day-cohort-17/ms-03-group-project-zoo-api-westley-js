process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const { knex } = require('../db/database');
chai.use(chaiHttp);

describe('Show keeper routes', () => {

  beforeEach( () => {
    return knex.migrate.rollback()
    .then( () => {
      return knex.migrate.latest()
    })
    .then( () => {
      return knex.seed.run()
    });
  });

  describe('Get all keepers', () => {
    it('should get all keepers', () => {
      return chai.request(server)
      .get('/api/v1/keepers')
      .then( (res) => {
        res.should.have.status(200);
      });
    });
  });

  describe('GET  /api/v1/keepers/:id', () => {
    it('should return a single keeper by id', () => {
      return chai.request(server)
      .get('/api/v1/keepers/1')
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('first_name');
        res.body.first_name.should.equal('John');

      });
    });
  });

  describe('POST  /api/v1/keeper/new', () => {
    it('should add a new keeper to the keeper table', () => {
      return chai.request(server)
      .post('/api/v1/keepers/new')
      .send({
        "first_name": "Westley",
        "last_name": "Isbell",
        "gender": "Male",
        "age": "30",
        "date_of_hire": "1/1/1996",
        "speciality": "Imposter Syndrome",
        "keeper_image": "http://cf.broadsheet.ie/wp-content/uploads/2016/11/Chewbacca-starwars.jpg"
      })
      .then( (res) => {
        res.should.have.status(201)
        res.should.be.json
        res.should.be.a('object')
      });
    });
  });

  describe('DELETE  /api/v1/keeper/:id', () => {
    it('should remove a single keeper from the keeper table', () => {
      return chai.request(server)
      .delete('/api/v1/keepers/1')
      .then( (res) => {
        res.should.have.status(202);
        res.should.be.json;
        res.body.should.be.a('object');

        // Must delete from animal-keeper pivot table first

        // chai.request(server)
        // .get('/api/v1/keepers')
        // .then( (res) => {
        //   res.should.have.status(200);
        //   res.should.be.json;
        //   res.body.should.be.a('array')
        // })
      });
    });
  });;

  describe('PUT  /api/v1/keeper/:id', () => {
    it('should modify an existing keeper that exists in the keeper table', () => {
      return chai.request(server)
      .put('/api/v1/keepers/1')
      .send({
        "first_name": "Westley",
        "last_name": "Isbell",
        "gender": "Male",
        "age": "30",
        "date_of_hire": "1/1/1996",
        "speciality": "Imposter Syndrome",
        "keeper_image": "http://cf.broadsheet.ie/wp-content/uploads/2016/11/Chewbacca-starwars.jpg"
      })
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.should.be.a('object');
      });
    });
  });

});
