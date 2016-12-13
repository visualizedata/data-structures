// QUERY MONGODB

var dbName = 'aa';
var collName = 'meetings';

var http = require("http");
var fs = require("fs");

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

var index1 = fs.readFileSync("index1.txt");
var index3 = fs.readFileSync("index3.txt");

// Retrieve
var MongoClient = require('mongodb').MongoClient;

var server = http.createServer(function(req, res) {

    MongoClient.connect(url, function(err, db) {
        if (err) {return console.dir(err);}
        
        var dateTimeNow = new Date();
        var today = dateTimeNow.getDay();
        var tomorrow;
        if (today == 6) {tomorrow = 0;}
        else {tomorrow = today + 1}
        var hour = dateTimeNow.getHours() - 5;
    
        var collection = db.collection(collName);
    
        collection.aggregate([ // start of aggregation pipeline
            // match by day and time
            { $match : 
                { $or : [
                    { $and: [
                        { dayQuery : today } , { hourQuery : { $gte: hour } }
                    ]},
                    { $and: [
                        { dayQuery : tomorrow } , { hourQuery : { $lte: 4 } }
                    ]}
                ]}
            },
            
            // group by meeting group
            { $group : { _id : {
                latLong : "$latLong",
                meetingName : "$meetingName",
                meetingAddress1 : "$meetingAddress1",
                meetingAddress2 : "$meetingAddress2",
                borough : "$borough",
                meetingDetails : "$meetingDetails",
                meetingWheelchair : "$meetingWheelchair",
                },
                    meetingDay : { $push : "$day" },
                    meetingStartTime : { $push : "$startTime" }, 
                    meetingType : { $push : "$meetingType" }
            }
            },
            
            // group meeting groups by latLong
            {
                $group : { _id : { 
                    latLong : "$_id.latLong"},
                    meetingGroups : { $push : {groupInfo : "$_id", meetingDay : "$meetingDay", meetingStartTime : "$meetingStartTime", meetingType : "$meetingType" }}
                }
            }
        
            ]).toArray(function(err, docs) { // end of aggregation pipeline
            if (err) {console.log(err)}
            
            else {
                res.writeHead(200, {'content-type': 'text/html'});
                res.write(index1);
                res.write(JSON.stringify(docs));
                res.end(index3);
            }
            db.close();
        });
    });
});

server.listen(process.env.PORT);