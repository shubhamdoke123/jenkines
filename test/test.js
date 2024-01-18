var request = require('supertest');
var app = require('../index.js');describe('GET /', function() {
 it('respond with hello sd', function(done) { //navigate to root and check the the response is "hello sd"
 request(app).get('/').expect('hello sd', done);
 });
});
