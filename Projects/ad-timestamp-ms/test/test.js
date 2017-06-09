const request = require('supertest');
const app = require('../app');

describe('Loading express', function() {
  
  it('responds to /:ts', function testSlash(done) {
    request(app)
      .get('/:ts')
      .expect(200, done);
  });

  it('404 everything else', function testPath(done) {
    request(app)
      .get('/')
      .expect(404, done);
  });

});