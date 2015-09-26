// IN THE MONGO SHELL: 
//   use citibike
//   db.createCollection('stations')

var request = require('request');

request('https://www.citibikenyc.com/stations/json', function(error, response, body) {
    var stationData = JSON.parse(body);

    // Connection URL
    var url = 'mongodb://' + process.env.IP + ':27017/citibike';

    // Retrieve
    var MongoClient = require('mongodb').MongoClient; // npm install mongodb

    MongoClient.connect(url, function(err, db) {
        if (err) {return console.dir(err);}

        var collection = db.collection('stations');

        // THIS IS WHERE THE DOCUMENT(S) IS/ARE INSERTED TO MONGO:
        for (var i=0; i < stationData.stationBeanList.length; i++) {
            collection.insert(stationData.stationBeanList[i]);
            }
        db.close();

    }); //MongoClient.connect

}); //request