var fs = require('fs');
var cheerio = require('cheerio'); // npm install cheerio

var content = fs.readFileSync('/home/ubuntu/workspace/data/m02meetings.txt');

var $ = cheerio.load(content);

$('tbody').find('tr').each(function(i, elem){
        console.log($(elem).find('td').eq(0).html().split('<br>')[2].trim());
    });