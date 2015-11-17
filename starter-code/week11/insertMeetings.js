// This program inserts three AA meetings into a mongo database named "mongoTest"
// in a collection named "threeMeetings"

var dbName = 'mongoTest';
var collName = 'threeMeetings';

var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;
var MongoClient = require('mongodb').MongoClient;

function mongoIt () {
    MongoClient.connect(url, function(err, db) {
        
        if (err) {return console.dir(err);}
    
        var collection = db.collection(collName);
    
            // WRITE TO MONGO
            collection.insert(meetings);
    
        db.close();
    
    }); //MongoClient.connect
}

setTimeout(mongoIt, 200);

var meetings = [
	{
		"borough": "Manhattan",
		"zone": 5,
		"meetingName": "COURAGE TO CHANGE - Courage To Change",
		"meetingHouse": "",
		"meetingAddress1": "122 East 37th Street, Basement,",
		"meetingAddress2": "(Betw. Park &amp; Lexington Avenues ) NY 10016",
		"meetingAddress3": "",
		"meetingDetails": "Wed.6:15 BB=OD Big Book Study Fri.7:30pm=Anniv. Meeting every Fri.",
		"meetingWheelchair": "",
		"latLong" : [ 40.748323, -73.97884499999999 ],
		"meetingList": [
			{
				"day": "Sundays",
				"startTime": "12:45 PM",
				"startTimeHour": 12,
				"endTime": "1:45 PM",
				"meetingType": "S",
				"specialInterest": "First Step Workshop"
			},
			{
				"day": "Sundays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Sundays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "C",
				"specialInterest": "Promises"
			},
			{
				"day": "Mondays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "S",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "BB",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Fridays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Fridays",
				"startTime": "7:30 PM",
				"startTimeHour": 19,
				"endTime": "8:30 PM",
				"meetingType": "OD",
				"specialInterest": ""
			}
		]
	},
	{
		"indx": 15,
		"borough": "Manhattan",
		"zone": 5,
		"meetingName": "MUSTARD SEED - Mustard Seed     (:I)",
		"meetingHouse": "",
		"meetingAddress1": "122 East 37th Street,  Basement,",
		"meetingAddress2": "(Betw Park &amp; Lexington Avenues) NY 10016",
		"meetingAddress3": "",
		"meetingDetails": "Sun.7:30am,Tue.6:15pm B & Wed.6:15pm C =Meditation Wkshp., Sun.9:30am Step=Back to Basics, Fri.7:30pm=Anniv.every Fri. Thurs. 8am back room, Gratitude",
		"meetingWheelchair": "",
		"latLong" : [ 40.748323, -73.97884499999999 ],
		"meetingList": [
			{
				"day": "Tuesdays",
				"startTime": "6:15 AM",
				"startTimeHour": 6,
				"endTime": "7:15 AM",
				"meetingType": "BB",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "7:30 AM",
				"startTimeHour": 7,
				"endTime": "8:30 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "7:30 AM",
				"startTimeHour": 7,
				"endTime": "8:30 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "7:30 AM",
				"startTimeHour": 7,
				"endTime": "8:30 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "7:30 AM",
				"startTimeHour": 7,
				"endTime": "8:30 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "7:30 AM",
				"startTimeHour": 7,
				"endTime": "8:30 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Mondays",
				"startTime": "7:30 AM",
				"startTimeHour": 7,
				"endTime": "8:30 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "7:30 AM",
				"startTimeHour": 7,
				"endTime": "8:30 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Sundays",
				"startTime": "7:30 AM",
				"startTimeHour": 7,
				"endTime": "8:30 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Mondays",
				"startTime": "7:30 AM",
				"startTimeHour": 7,
				"endTime": "8:30 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Fridays",
				"startTime": "7:30 AM",
				"startTimeHour": 7,
				"endTime": "8:30 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "7:30 AM",
				"startTimeHour": 7,
				"endTime": "8:30 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Saturdays",
				"startTime": "8:00 AM",
				"startTimeHour": 8,
				"endTime": "9:00 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Saturdays",
				"startTime": "8:00 AM",
				"startTimeHour": 8,
				"endTime": "9:00 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "8:00 AM",
				"startTimeHour": 8,
				"endTime": "9:00 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Sundays",
				"startTime": "8:15 AM",
				"startTimeHour": 8,
				"endTime": "9:15 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "9:30 AM",
				"startTimeHour": 9,
				"endTime": "10:30 AM",
				"meetingType": "C",
				"specialInterest": "Daily Reflections"
			},
			{
				"day": "Wednesdays",
				"startTime": "9:30 AM",
				"startTimeHour": 9,
				"endTime": "10:30 AM",
				"meetingType": "C",
				"specialInterest": "Daily Reflections"
			},
			{
				"day": "Tuesdays",
				"startTime": "9:30 AM",
				"startTimeHour": 9,
				"endTime": "10:30 AM",
				"meetingType": "C",
				"specialInterest": "Daily Reflections"
			},
			{
				"day": "Mondays",
				"startTime": "9:30 AM",
				"startTimeHour": 9,
				"endTime": "10:30 AM",
				"meetingType": "C",
				"specialInterest": "Daily Reflections"
			},
			{
				"day": "Sundays",
				"startTime": "9:30 AM",
				"startTimeHour": 9,
				"endTime": "10:30 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Sundays",
				"startTime": "9:30 AM",
				"startTimeHour": 9,
				"endTime": "10:30 AM",
				"meetingType": "S",
				"specialInterest": ""
			},
			{
				"day": "Saturdays",
				"startTime": "9:30 AM",
				"startTimeHour": 9,
				"endTime": "10:30 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Fridays",
				"startTime": "9:30 AM",
				"startTimeHour": 9,
				"endTime": "10:30 AM",
				"meetingType": "C",
				"specialInterest": "Daily Reflections"
			},
			{
				"day": "Saturdays",
				"startTime": "10:00 AM",
				"startTimeHour": 10,
				"endTime": "11:00 AM",
				"meetingType": "BB",
				"specialInterest": ""
			},
			{
				"day": "Sundays",
				"startTime": "11:00 AM",
				"startTimeHour": 11,
				"endTime": "12:00 PM",
				"meetingType": "BB",
				"specialInterest": ""
			},
			{
				"day": "Fridays",
				"startTime": "11:30 AM",
				"startTimeHour": 11,
				"endTime": "12:30 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "11:30 AM",
				"startTimeHour": 11,
				"endTime": "12:30 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "11:30 AM",
				"startTimeHour": 11,
				"endTime": "12:30 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "11:30 AM",
				"startTimeHour": 11,
				"endTime": "12:30 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Mondays",
				"startTime": "11:30 AM",
				"startTimeHour": 11,
				"endTime": "12:30 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Saturdays",
				"startTime": "12:45 PM",
				"startTimeHour": 12,
				"endTime": "1:45 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Fridays",
				"startTime": "12:45 PM",
				"startTimeHour": 12,
				"endTime": "1:45 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "12:45 PM",
				"startTimeHour": 12,
				"endTime": "1:45 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "12:45 PM",
				"startTimeHour": 12,
				"endTime": "1:45 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "12:45 PM",
				"startTimeHour": 12,
				"endTime": "1:45 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Mondays",
				"startTime": "12:45 PM",
				"startTimeHour": 12,
				"endTime": "1:45 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Sundays",
				"startTime": "12:45 PM",
				"startTimeHour": 12,
				"endTime": "1:45 PM",
				"meetingType": "S",
				"specialInterest": "First Step Workshop"
			},
			{
				"day": "Sundays",
				"startTime": "3:00 PM",
				"startTimeHour": 15,
				"endTime": "4:00 PM",
				"meetingType": "C",
				"specialInterest": "Women"
			},
			{
				"day": "Fridays",
				"startTime": "3:15 PM",
				"startTimeHour": 15,
				"endTime": "4:15 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "3:15 PM",
				"startTimeHour": 15,
				"endTime": "4:15 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "3:15 PM",
				"startTimeHour": 15,
				"endTime": "4:15 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "3:15 PM",
				"startTimeHour": 15,
				"endTime": "4:15 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Mondays",
				"startTime": "3:15 PM",
				"startTimeHour": 15,
				"endTime": "4:15 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Saturdays",
				"startTime": "5:30 PM",
				"startTimeHour": 17,
				"endTime": "6:30 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Sundays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:00 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Fridays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "BB",
				"specialInterest": ""
			},
			{
				"day": "Mondays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "S",
				"specialInterest": ""
			},
			{
				"day": "Fridays",
				"startTime": "7:30 PM",
				"startTimeHour": 19,
				"endTime": "8:30 PM",
				"meetingType": "OD",
				"specialInterest": ""
			},
			{
				"day": "Saturdays",
				"startTime": "7:30 PM",
				"startTimeHour": 19,
				"endTime": "8:30 PM",
				"meetingType": "",
				"specialInterest": "Meditation"
			},
			{
				"day": "Tuesdays",
				"startTime": "8:00 PM",
				"startTimeHour": 20,
				"endTime": "9:00 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Sundays",
				"startTime": "8:00 PM",
				"startTimeHour": 20,
				"endTime": "9:00 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "8:00 PM",
				"startTimeHour": 20,
				"endTime": "9:00 PM",
				"meetingType": "C",
				"specialInterest": "Men"
			},
			{
				"day": "Wednesdays",
				"startTime": "8:00 PM",
				"startTimeHour": 20,
				"endTime": "9:00 PM",
				"meetingType": "S",
				"specialInterest": ""
			},
			{
				"day": "Mondays",
				"startTime": "8:00 PM",
				"startTimeHour": 20,
				"endTime": "9:00 PM",
				"meetingType": "B",
				"specialInterest": "Women"
			},
			{
				"day": "Fridays",
				"startTime": "10:00 PM",
				"startTimeHour": 22,
				"endTime": "11:00 PM",
				"meetingType": "OD",
				"specialInterest": ""
			}
		]
	},
	{
		"indx": 43,
		"borough": "Manhattan",
		"zone": 7,
		"meetingName": "SEVENTY-NINTH STREET WORKSHOP - Seventy-Ninth Street Workshop    (:I)",
		"meetingHouse": "St. Monica's Church",
		"meetingAddress1": "413 East 79th Street,  Basement,",
		"meetingAddress2": "(Betw 1st &amp; York Avenues) NY 10021",
		"meetingAddress3": "",
		"meetingDetails": "Sun.10am=11th S, Tue.6am=Came To Believe Thu.6am=Step & Trad.",
		"meetingWheelchair": "",
		"latLong" : [ 40.77223, -73.95168 ],
		"meetingList": [
			{
				"day": "Tuesdays",
				"startTime": "6:00 AM",
				"startTimeHour": 6,
				"endTime": "7:00 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Mondays",
				"startTime": "6:00 AM",
				"startTimeHour": 6,
				"endTime": "7:00 AM",
				"meetingType": "C",
				"specialInterest": "Daily Reflections"
			},
			{
				"day": "Fridays",
				"startTime": "6:00 AM",
				"startTimeHour": 6,
				"endTime": "7:00 AM",
				"meetingType": "BB",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "6:00 AM",
				"startTimeHour": 6,
				"endTime": "7:00 AM",
				"meetingType": "S",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "6:00 AM",
				"startTimeHour": 6,
				"endTime": "7:00 AM",
				"meetingType": "C",
				"specialInterest": "As Bill Sees It"
			},
			{
				"day": "Tuesdays",
				"startTime": "7:15 AM",
				"startTimeHour": 7,
				"endTime": "8:15 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Mondays",
				"startTime": "7:15 AM",
				"startTimeHour": 7,
				"endTime": "8:15 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Fridays",
				"startTime": "7:15 AM",
				"startTimeHour": 7,
				"endTime": "8:15 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "7:15 AM",
				"startTimeHour": 7,
				"endTime": "8:15 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "7:15 AM",
				"startTimeHour": 7,
				"endTime": "8:15 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Saturdays",
				"startTime": "8:00 AM",
				"startTimeHour": 8,
				"endTime": "9:00 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Sundays",
				"startTime": "8:00 AM",
				"startTimeHour": 8,
				"endTime": "9:00 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "8:30 AM",
				"startTimeHour": 8,
				"endTime": "9:30 AM",
				"meetingType": "T",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "8:30 AM",
				"startTimeHour": 8,
				"endTime": "9:30 AM",
				"meetingType": "C",
				"specialInterest": "Promises"
			},
			{
				"day": "Mondays",
				"startTime": "8:30 AM",
				"startTimeHour": 8,
				"endTime": "9:30 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Fridays",
				"startTime": "8:30 AM",
				"startTimeHour": 8,
				"endTime": "9:30 AM",
				"meetingType": "S",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "8:30 AM",
				"startTimeHour": 8,
				"endTime": "9:30 AM",
				"meetingType": "BB",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "10:00 AM",
				"startTimeHour": 10,
				"endTime": "11:00 AM",
				"meetingType": "T",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "10:00 AM",
				"startTimeHour": 10,
				"endTime": "11:00 AM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "10:00 AM",
				"startTimeHour": 10,
				"endTime": "11:00 AM",
				"meetingType": "S",
				"specialInterest": ""
			},
			{
				"day": "Mondays",
				"startTime": "10:00 AM",
				"startTimeHour": 10,
				"endTime": "11:00 AM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Saturdays",
				"startTime": "10:00 AM",
				"startTimeHour": 10,
				"endTime": "11:00 AM",
				"meetingType": "C",
				"specialInterest": "Children Welcome"
			},
			{
				"day": "Sundays",
				"startTime": "10:00 AM",
				"startTimeHour": 10,
				"endTime": "11:00 AM",
				"meetingType": "S",
				"specialInterest": ""
			},
			{
				"day": "Fridays",
				"startTime": "10:00 AM",
				"startTimeHour": 10,
				"endTime": "11:00 AM",
				"meetingType": "BB",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "12:30 PM",
				"startTimeHour": 12,
				"endTime": "1:30 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "12:30 PM",
				"startTimeHour": 12,
				"endTime": "1:30 PM",
				"meetingType": "S",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "12:30 PM",
				"startTimeHour": 12,
				"endTime": "1:30 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Mondays",
				"startTime": "12:30 PM",
				"startTimeHour": 12,
				"endTime": "1:30 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Saturdays",
				"startTime": "12:30 PM",
				"startTimeHour": 12,
				"endTime": "1:30 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Sundays",
				"startTime": "12:30 PM",
				"startTimeHour": 12,
				"endTime": "1:30 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Fridays",
				"startTime": "12:30 PM",
				"startTimeHour": 12,
				"endTime": "1:30 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Saturdays",
				"startTime": "2:00 PM",
				"startTimeHour": 14,
				"endTime": "3:00 PM",
				"meetingType": "C",
				"specialInterest": "Women"
			},
			{
				"day": "Sundays",
				"startTime": "2:00 PM",
				"startTimeHour": 14,
				"endTime": "3:00 PM",
				"meetingType": "C",
				"specialInterest": "Men"
			},
			{
				"day": "Fridays",
				"startTime": "4:00 PM",
				"startTimeHour": 16,
				"endTime": "5:00 PM",
				"meetingType": "S",
				"specialInterest": "First Step Workshop"
			},
			{
				"day": "Thursdays",
				"startTime": "4:00 PM",
				"startTimeHour": 16,
				"endTime": "5:00 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "4:00 PM",
				"startTimeHour": 16,
				"endTime": "5:00 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "4:00 PM",
				"startTimeHour": 16,
				"endTime": "5:00 PM",
				"meetingType": "BB",
				"specialInterest": ""
			},
			{
				"day": "Mondays",
				"startTime": "4:00 PM",
				"startTimeHour": 16,
				"endTime": "5:00 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Saturdays",
				"startTime": "4:00 PM",
				"startTimeHour": 16,
				"endTime": "5:00 PM",
				"meetingType": "S",
				"specialInterest": "Steps 1-2-3"
			},
			{
				"day": "Sundays",
				"startTime": "4:00 PM",
				"startTimeHour": 16,
				"endTime": "5:00 PM",
				"meetingType": "C",
				"specialInterest": "As Bill Sees It"
			},
			{
				"day": "Fridays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "C",
				"specialInterest": "Children Welcome"
			},
			{
				"day": "Thursdays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "O",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "S",
				"specialInterest": ""
			},
			{
				"day": "Mondays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "T",
				"specialInterest": ""
			},
			{
				"day": "Saturdays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Sundays",
				"startTime": "6:15 PM",
				"startTimeHour": 18,
				"endTime": "7:15 PM",
				"meetingType": "OD",
				"specialInterest": ""
			},
			{
				"day": "Sundays",
				"startTime": "8:00 PM",
				"startTimeHour": 20,
				"endTime": "9:00 PM",
				"meetingType": "C",
				"specialInterest": "Promises"
			},
			{
				"day": "Fridays",
				"startTime": "8:00 PM",
				"startTimeHour": 20,
				"endTime": "9:00 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "8:00 PM",
				"startTimeHour": 20,
				"endTime": "9:00 PM",
				"meetingType": "BB",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "8:00 PM",
				"startTimeHour": 20,
				"endTime": "9:00 PM",
				"meetingType": "C",
				"specialInterest": "Sponsorship Workshop"
			},
			{
				"day": "Saturdays",
				"startTime": "8:00 PM",
				"startTimeHour": 20,
				"endTime": "9:00 PM",
				"meetingType": "O",
				"specialInterest": ""
			},
			{
				"day": "Saturdays",
				"startTime": "10:00 PM",
				"startTimeHour": 22,
				"endTime": "11:00 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Sundays",
				"startTime": "10:00 PM",
				"startTimeHour": 22,
				"endTime": "11:00 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Fridays",
				"startTime": "10:00 PM",
				"startTimeHour": 22,
				"endTime": "11:00 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Thursdays",
				"startTime": "10:00 PM",
				"startTimeHour": 22,
				"endTime": "11:00 PM",
				"meetingType": "S",
				"specialInterest": ""
			},
			{
				"day": "Tuesdays",
				"startTime": "10:00 PM",
				"startTimeHour": 22,
				"endTime": "11:00 PM",
				"meetingType": "C",
				"specialInterest": ""
			},
			{
				"day": "Mondays",
				"startTime": "10:00 PM",
				"startTimeHour": 22,
				"endTime": "11:00 PM",
				"meetingType": "B",
				"specialInterest": ""
			},
			{
				"day": "Wednesdays",
				"startTime": "10:00 PM",
				"startTimeHour": 22,
				"endTime": "11:00 PM",
				"meetingType": "C",
				"specialInterest": ""
			}
		]
	}
];