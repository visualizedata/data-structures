// IN THE MONGO SHELL: 
//   use aa
//   db.createCollection('meetings')

var dbName = 'aa';
var collName = 'meetings';

var fs = require('fs');

// Read the file that contains an array of objects to insert into the "meetings" collection in "aa" in MongoDB
var geocodedMeetingsArray = JSON.parse(fs.readFileSync('/home/ubuntu/workspace/data/geocodedMeetingsArray.txt'));

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// Retrieve
var MongoClient = require('mongodb').MongoClient; // npm install mongodb

MongoClient.connect(url, function(err, db) {
    if (err) {
        return console.dir(err);
    }

    var collection = db.collection(collName);

    // THIS IS WHERE THE DOCUMENTS ARE INSERTED IN THE meetings COLLECTION IN MONGO:
    collection.insert(geocodedMeetingsArray);
    db.close();
    
}); //MongoClient.connect