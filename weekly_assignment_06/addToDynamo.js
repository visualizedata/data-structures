var diaryEntries = [];

class DiaryEntry {
  constructor(topic, dt, entry) {
    this.topic = {};
    this.topic.S = topic;
    this.dt = {}; 
    this.dt.N = new Date(dt).valueOf().toString();
    this.entry = {};
    this.entry.S = entry;
  }
}

diaryEntries.push(new DiaryEntry('personal', 'March 10, 1976 11:30:00', "I was born!"));
diaryEntries.push(new DiaryEntry('personal', 'October 31, 2015 13:00:00', "I piloted my first solo flight! I ate pancakes to celebrate."));
diaryEntries.push(new DiaryEntry('work', 'June 1, 1998 08:00:00', "I started my first professional job."));
diaryEntries.push(new DiaryEntry('work', 'September 25, 2019 12:10:00', "I taught my favorite students."));
diaryEntries.push(new DiaryEntry('cats', 'September 26, 2019 23:00:00', "Eudora chased his tail."));
diaryEntries.push(new DiaryEntry('work', 'October 2, 2019 12:10:00', "I taught my favorite students."));
diaryEntries.push(new DiaryEntry('cats', 'October 3, 2019 22:15:00', "Mr. Jingles took a nap."));
diaryEntries.push(new DiaryEntry('work', 'October 9, 2019 12:10:00', "Class doesn't meet."));

console.log(diaryEntries);

var AWS = require('aws-sdk'); // npm install aws-sdk
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var async = require('async'); 
var dynamodb = new AWS.DynamoDB();

async.eachSeries(diaryEntries, function(value, callback) {
    
    var params = {};
    params.Item = value; 
    params.TableName = "aaronprocessblog";
    
    dynamodb.putItem(params, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
    
    setTimeout(callback, 1000);
}, function() {
    console.log('Done!');
});