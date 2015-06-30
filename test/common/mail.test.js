/**
 * Created by user on 15/6/15.
 */
var mail = require('../../common/mail');
var should = require('should');

describe('test/common/mail.test.js', function () {
    describe('sendActiveMail', function () {
        it('should ok', function () {
            mail.sendActiveMail('thomas_0836@qq.com', 'token', 'ThomasLau');
        });
    });

    describe('sendReserPassMail', function () {
        it('should ok', function () {
            mail.sendResetPassMail('thomas_0836@qq.com', 'token', 'ThomasLau');
        });
    })
})