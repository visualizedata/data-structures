var dbName = 'mongoTest';
var collName = 'threeMeetings';

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// Retrieve
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
    if (err) {
        return console.dir(err);
    }

    var collection = db.collection(collName);

    collection.aggregate( [

        { $unwind : "$meetingList" },
        
        { $match : { "meetingList.day" : "Tuesdays" } },
        
        { $group : {  _id : { 
            meetingName : "$meetingName",
            meetingHouse : "$meetingHouse",
            meetingAddress1 : "$meetingAddress1",
            meetingAddress2 : "$meetingAddress2",
            meetingDetails : "$meetingDetails",
            meetingWheelchair : "$meetingWheelchair",
            latLong : "$latLong"
        }, 
            meetingDay : { $push : "$meetingList.day" },
            startTime : { $push : "$meetingList.startTime" },
            startTimeHour : { $push : "$meetingList.startTimeHour" },
            endTime : { $push : "$meetingList.endTime" },
            meetingType : { $push : "$meetingList.meetingType" },
            specialInterest : { $push : "$meetingList.specialInterest" }
        }},
        
        { $group : { _id : { latLong : "$_id.latLong" }, 
                    meetingGroups : { $addToSet : {  meetingGroup : "$_id", 
                                                meetings : {
                                                meetingDays : "$meetingDay",
                                                startTimes : "$startTime",
                                                startTimeHours : "$startTimeHour",
                                                endTimes : "$endTime",
                                                meetingTypes : "$meetingType",
                                                specialInterest : "$specialInterest"
                                                }
                    } }
                    } }
        
         ]).toArray(function(err, docs) {
        if (err) {console.log(err);}
        else {
            // console.log(JSON.stringify(docs));
            for (var i=0; i < docs.length; i++) {
                console.log(JSON.stringify(docs[i], null, 4));
                console.log('');
            }
        }
        db.close();
        
    });

}); //MongoClient.connect