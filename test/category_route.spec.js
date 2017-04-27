// process.env.NODE_ENV = 'test';
//
// const chai = require('chai');
// const should = chai.should();
// const chaiHttp = require('chai-http');
// const server = require('../app');
// const { knex } = require('../db/database');
// chai.use(chaiHttp);
//
// describe('Show Categories routes', () => {
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
//   describe('Get all categories', () => {
//     it('should get all categories', () => {
//       return chai.request(server)
//       .get('/api/v1/categories')
//       .then( (res) => {
//         res.should.have.status(200);
//       });
//     });
//   });
//
//   describe('GET  /api/v1/categories/:id', () => {
//     it('should return a single category by id', () => {
//       return chai.request(server)
//       .get('/api/v1/categories/1')
//       .then( (res) => {
//         res.should.have.status(200);
//         res.should.be.json;
//         res.body.should.be.a('object');
//         res.body.should.have.property('name');
//         res.body.name.should.equal('Big Dino');
//
//       });
//     });
//   });
//
//   describe('POST  /api/v1/categories/new', () => {
//     it('should add a new category to the categories table', () => {
//       return chai.request(server)
//       .post('/api/v1/categories/new')
//       .send({
//         "name": "Woah its a T-rex"
//       })
//       .then( (res) => {
//         res.should.have.status(201)
//         res.should.be.json
//         res.should.be.a('object')
//       });
//     });
//   });
//
//   // This will only work if a category doesn't belong to an animal
//
//   // describe('DELETE  /api/v1/categories/:id', () => {
//   //   it('should remove a single category from the categories table', () => {
//   //     return chai.request(server)
//   //     .delete('/api/v1/categories/1')
//   //     .then( (res) => {
//   //       res.should.have.status(202);
//   //       res.should.be.json;
//   //       res.body.should.be.a('object');
//   //     });
//   //   });
//   });
//
// });
