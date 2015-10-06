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
var tempUrl1="http://www.asklaila.com/search/Mumbai/-/Tailor/";
var tempUrl2="?searchNearby=false";
var chngvr=["","10","20","30","40","50","60","70","80","90","100","110","120","130","140","150","160","170","180","190"];

//customize the url and loop thru all 20 pages to store for later use
//for(var kk=0;kk<chngvr.length;kk++){
//   // console.log('cm here');
//    var urls=tempUrl1 + chngvr[kk]+ tempUrl2;
//    var options = {
//      //  url: 'http://www.asklaila.com/search/Mumbai/-/Tailor/?searchNearby=false',
//        url:urls,
//        headers: {
//            'User-Agent': 'Mozilla'
//        }
//    };
////now just need to store all the links for later use
//    request(options, function callback(error, response, body) {
//       // console.log('cm here');
//        $ = cheerio.load(body);
//        var l=$('.col-xs-10.col-sm-12.col-md-12.col-lg-12.pad0.topSpaceMargin').children().closest('a');
//        var len= l.length;
//        for( var i=0;i< l.length;i++){
//            globalArray.push(l[i].attribs.href)
//             console.log(l[i].attribs.href);
//        }
//
//    });
//
//    //if (kk=chngvr.length-1){
//    //    //callback function
//    //   printglobalArray();
//    //}
//}


//function printglobalArray(){
//    console.log(globalArray);
//
//}

//finding tailor info inside
//tel number
var options = {
    //  url: 'http://www.asklaila.com/search/Mumbai/-/Tailor/?searchNearby=false',
    url:"http://www.asklaila.com/listing/Mumbai/Kemps+Corner/Millionaire/FcYYFNnd/",
    headers: {
        'User-Agent': 'Mozilla'
    }}
request(options, function callback(error, response, body) {
    $ = cheerio.load(body);
    var l=$('.tel');
    var len= l[0].children;
  //  console.log(len);
    for(var i=0;i< l.length;i++){
        console.log(l[i].children[0].data);
    }
});



