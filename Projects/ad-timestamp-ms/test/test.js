const request = require('supertest');
const app = require('../app');

describe('GET /', function() {
  
  it('responds to /:ts with JSON', function testSlash(done) {
    request(app)
      .get('/:ts')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('responds to / with HTML', function testPath(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('responds to unix timestamp with JSON', function(done) {
    request(app)
    .get('/1450137600')
    .expect('Content-Type', /json/)
    .expect(200, done);
  })

  it('responds to date string with JSON', function(done) {
    request(app)
    .get('/December 15, 2015')
    .expect('Content-Type', /json/)
    .expect(200, done);
  })

  it('responds to invalid date string with null', function(done) {
    request(app)
    .get('/alksdjfa')
    .expect(200, {
      unix: null,
      natural: null
    }, done);
  });

  it('formats date given unix timestamp', function(done) {
    request(app)
    .get('/1450137600')
    .expect(200, {
      unix: 1450137600,
      natural: 'December 15, 2015'
    }, done);
  });

  it('gives unix timestamp given date', function(done) {
    request(app)
    .get('/December 15, 2015')
    .expect(200, {
      unix: 1450159200,
      natural: 'December 15, 2015'
    }, done);
  })

});