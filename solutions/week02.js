var fs = require('fs');
var cheerio = require('cheerio'); // npm install cheerio

var content = fs.readFileSync('/home/ubuntu/workspace/data/m02meetings.txt');
var meetings = [];

var $ = cheerio.load(content);

$('tbody').find('tr').each(function(i, elem){
        meetings.push($(elem).find('td').eq(0).html().split('<br>')[2].trim());
    });

console.log(meetings.length); // print number of meetings in meetings array
fs.writeFileSync('/home/ubuntu/workspace/data/meetingsArray.txt', JSON.stringify(meetings));