const request = require('supertest');
const server = require('./app');

describe('loading express', function() {
  const server;
  beforeEach(function() {
    server = require('./app');
  });
  afterEach(function() {
    server.close();
  });
  
  it('responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});