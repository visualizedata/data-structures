// IN THE MONGO SHELL: 
//   use citibike
//   db.createCollection('stations')

var request = require('request');

var stationData;

request('https://www.citibikenyc.com/stations/json', function(error, response, body) {
    stationData = JSON.parse(body);
    stationData = stationData.stationBeanList;
    
    // Connection URL
    var url = 'mongodb://' + process.env.IP + ':27017/citibike';

    // Retrieve
    var MongoClient = require('mongodb').MongoClient; // npm install mongodb

    MongoClient.connect(url, function(err, db) {
        if (err) {
            return console.dir(err);
        }

        var collection = db.collection('stations');

        // THIS IS WHERE THE DOCUMENT(S) IS/ARE INSERTED TO MONGO:
        collection.insert(stationData);
        db.close();

    }); //MongoClient.connect
}); //request