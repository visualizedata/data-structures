var request = require('request');
var fs = require('fs');

request('http://visualizedata.github.io/datastructures/data/m02.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/data/m02meetings.txt', body);
  }
  else {console.error('request failed')}
})