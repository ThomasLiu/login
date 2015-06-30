/**
 * Created by user on 14/6/15.
 */
var app = require('../../app');
var request = require('supertest')(app);
var mm = require('mm');
var mailService = require('../../common/mail');
var UserProxy = require('../../proxy/user');
var pedding = require('pedding');
var should = require('should');

describe('test/controllers/sign.test.js', function(){
    var now = +new Date();
    var loginname = 'testuser' + now;
    var email = 'testuser' + now + '@gmail.com';
    var pass = 'wtffffffffffff';

    afterEach(function () {
       mm.restore();
    });

    describe('sign up', function(){

        it('should visit sign up page', function (done) {
            request.get('/signup')
                .expect(200, function (err, res) {
                    res.text.should.containEql('确认密码');
                    done(err)
                });
        });

        it('should sign up a user', function (done) {
            done = pedding(done, 2);

            mm(mailService, 'sendMail', function (data) {
                data.to.should.match(new RegExp(loginname + '@gmail\\.com'));
                done();
            });
            request.post('/signup')
                .send({
                    loginname: loginname,
                    email: email,
                    pass: pass,
                    re_pass: pass,
                })
                .expect(200, function (err, res) {
                    should.not.exists(err);
                    res.text.should.containEql('欢迎加入');
                    UserProxy.getUserByLoginName(loginname, function (err, user) {
                        should.not.exists(err);
                        user.should.ok;
                        done();
                    });
                });
        });
    });
});