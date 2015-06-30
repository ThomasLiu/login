/**
 * Created by user on 11/6/15.
 */

var xmlbuilder   = require('xmlbuilder');
var eventproxy   = require('eventproxy');
var cache        = require('../common/cache');
var config       = require('../config');
var _            = require('lodash');

exports.index = function (req, res, next) {
    req.session._loginReferer = req.headers.referer;
    res.render('index', { title: 'Express'});
}

exports.sitemap = function (req, res, next){
    var urlset = xmlbuilder.create('urlset',
        {version: '1.0', encoding: 'UTF-8'});
    urlset.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

    var ep = new eventproxy();
    ep.fail(next);

    ep.all('sitemap', function (sitemap) {
        res.type('xml');
        res.send(sitemap);
    });

    cache.get('sitemap', ep.done(function (sitemapData){
        if (sitemapData) {
            ep.emit('sitemap', sitemapData);
        } else {
            //将需要给搜索引擎搜索到的网址都加入urlset
            urlset.ele('url').ele('loc','http://');

            var sitemapData = urlset.end();

            cache.set('sitemap', sitemapData, 3600 * 24);
            ep.emit('sitemap', sitemapData);
        }
    }));
}