/**
 * Created by user on 11/6/15.
 */

var config = require('../config');
var Redis = require('ioredis');

var client = new Redis({
    port: config.redis_port,
    host: config.redis_host,
    db: config.redis_db,
});

exports = module.exports = client;