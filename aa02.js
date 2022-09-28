// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

// load the cheerio object into a variable, `content`
// which holds data and metadata about the html file (written as txt)
var content = fs.readFileSync('data/m01.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);

$('tr').each(function(i, elem) {
    if ($(elem).attr("style")=="margin-bottom:10px") {
        console.log($(elem).html());
        console.log('*************')
        // var thisMeeting = {}; // Your function and data collection go here! 
    }
});
