// READ DATA FROM A CSV FILE
// INSERT "ROWS" AS "DOCUMENTS" TO MONGODB

var dbName = 'majstu';
var collName = 'undp';
var fileToRead = '/home/ubuntu/workspace/data/datatest1.csv';

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// Retrieve
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
    if (err) {return console.dir(err);}

    var collection = db.collection(collName);
    
    //Converter Class 
    var Converter = require("csvtojson").Converter;
    var converter = new Converter({});

    //read from file 
    require("fs").createReadStream(fileToRead).pipe(converter);

    // end_parsed will be emitted once parsing finished 
    // insert to Mongo
    converter.on("end_parsed", function(jsonArray) {
        collection.insert(jsonArray); //here is your result jsonarray 
        db.close();
    });

}); //MongoClient.connect