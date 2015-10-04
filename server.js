/**
 * Created by rs on 4/10/15.
 */
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var jquery=require('jquery');
var globalArray=[];


//app.listen('8081')
//console.log('Magic happens on port 8081');
//exports = module.exports = app;

var options = {
    url: 'http://www.asklaila.com/search/Mumbai/-/Tailor/?searchNearby=false',
    headers: {
        'User-Agent': 'Mozilla'
    }
};

request(options, function callback(error, response, body) {
//console.log(body);
   // var cheerio = require('cheerio'),
        $ = cheerio.load(body);

var l=$('.col-xs-10.col-sm-12.col-md-12.col-lg-12.pad0.topSpaceMargin').children().closest('a');
    var len= l.length;
for( var i=0;i< l.length;i++){
        console.log(l[i].attribs);
    }
 //  console.log(l);
});
