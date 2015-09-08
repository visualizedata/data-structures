var fs = require('fs');
var cheerio = require('cheerio');

var content = fs.readFileSync('/home/ubuntu/workspace/data/syllabus.txt');

var $ = cheerio.load(content);

$('h4').each(function(i, elem) {
    if ($(elem).text() == "Read") {
        $(elem).next().find('li').each(function(i, elem) {
            console.log($(elem).text());
        });
    }
})