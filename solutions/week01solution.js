var request = require('request');
var fs = require('fs');

request('http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=02&borough=M', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/data/m02meetings.txt', body);
  }
  else {console.error('request failed')}
})