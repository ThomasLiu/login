/**
 * Created by user on 13/6/15.
 */

var should = require('should');
var config = require('../../config');
var app = require('../../app');
var request = require('supertest')(app);

describe('test/controllers/site.test.js', function () {
   it('should / 200', function (done) {
       request.get('/').end(function(err, res) {
           res.status.should.equal(200);
           res.text.should.containEql('Express');
           res.text.should.containEql('Welcome');
           done(err);
       });
   })

   it('should /sitemap.xml 200', function (done) {
      request.get('/sitemap.xml')
          .expect(200, function (err, res) {
              res.text.should.containEql('<url>');
              done(err);
          });
   });

});