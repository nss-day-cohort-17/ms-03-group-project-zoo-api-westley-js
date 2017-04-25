process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const { knex } = require('../db/database');
chai.use(chaiHttp);

// 
// describe('Show keeper routes', () => {
//
//   beforeEach( () => {
//     return knex.migrate.rollback()
//     .then( () => {
//       return knex.migrate.latest()
//     })
//     .then( () => {
//       return knex.seed.run()
//     });
//   });
//
//   describe('Get all keepers', () => {
//     it('should get all keepers', () => {
//       return chai.request(server)
//       .get('/api/v1/keepers')
//       .then( (res) => {
//         res.should.have.status(200);
//       });
//     });
//   });
//
// })
