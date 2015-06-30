/**
 * Created by user on 15/6/15.
 */

var tools = require('../../common/tools');
var should = require('should');

describe('test/common/tools.test.js', function () {
    it('should format date', function () {
       tools.formatDate(new Date(0)).should.match(/1970\-01\-01 0\d:00/);
    });
    it('should format date friendly', function () {
       tools.formatDate(new Date(), true).should.equal('几秒前');
    });
});