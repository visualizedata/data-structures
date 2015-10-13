// IN THE MONGO SHELL: 
//   use aa
//   db.createCollection('meetings')

var fs = require('fs');

var geocodedMeetingsArray = JSON.parse(fs.readFileSync('/home/ubuntu/workspace/data/geocodedMeetingsArray.txt'));

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/aa';

// Retrieve
var MongoClient = require('mongodb').MongoClient; // npm install mongodb

MongoClient.connect(url, function(err, db) {
    if (err) {
        return console.dir(err);
    }

    var collection = db.collection('meetings');

    // THIS IS WHERE THE DOCUMENT(S) IS/ARE INSERTED TO MONGO:
    collection.insert(geocodedMeetingsArray);
    db.close();
    
}); //MongoClient.connect