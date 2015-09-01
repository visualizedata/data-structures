var request = require('request');
var fs = require('fs');

request('http://visualizedata.github.io/datastructures/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/data/syllabus.txt', body);
  }
  else {console.error("request failed")}
})