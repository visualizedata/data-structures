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
diaryEntries.push(new DiaryEntry('work', 'October 8, 2018 12:10:00', "I taught my favorite students."));
diaryEntries.push(new DiaryEntry('work', 'October 8, 2018 19:00:00', "I taught my favorite students."));
diaryEntries.push(new DiaryEntry('cats', 'October 8, 2018 23:00:00', "Eudora chased his tail."));
diaryEntries.push(new DiaryEntry('work', 'October 15, 2018 12:10:00', "I taught my favorite students."));
diaryEntries.push(new DiaryEntry('work', 'October 15, 2018 19:00:00', "I taught my favorite students."));
diaryEntries.push(new DiaryEntry('cats', 'October 15, 2018 22:15:00', "Mr. Jingles took a nap."));
diaryEntries.push(new DiaryEntry('work', 'October 22, 2018 12:10:00', "Chris Bost is the guest lecturer."));
diaryEntries.push(new DiaryEntry('work', 'October 22, 2018 19:00:00', "Chris Bost is the guest lecturer."));

console.log(diaryEntries);

var AWS = require('aws-sdk'); // npm install aws-sdk
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-1";

var async = require('async'); 
var dynamodb = new AWS.DynamoDB();

async.eachSeries(diaryEntries, function(value, callback) {
    
    var params = {};
    params.Item = value; 
    params.TableName = "aarondiary";
    
    dynamodb.putItem(params, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
    
    setTimeout(callback, 1000);
}, function() {
    console.log('Done!');
});