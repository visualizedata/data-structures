var request = require('request'); // npm install request
var async = require('async'); // npm install async
var fs = require('fs');

var apiKey = process.env.GMAKEY;

var meetingsData = [];
var addresses = JSON.parse(fs.readFileSync('/home/ubuntu/workspace/data/meetingsArray.txt'));

function fixAddresses(address) {
    var newAddress = address.substring(0, address.indexOf(',')) + ', New York, NY';
    return newAddress;
}

// eachSeries in the async module iterates over an array and operates on each item in the array in series
async.eachSeries(addresses, function(value, callback) {
    var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + fixAddresses(value).split(' ').join('+') + '&key=' + apiKey;
    var thisMeeting = new Object;
    thisMeeting.address = fixAddresses(value);
    thisMeeting.originalAddress = value;
    request(apiRequest, function(err, resp, body) {
        if (err) {throw err;}
        if (JSON.parse(body).status != "ZERO_RESULTS") {
            thisMeeting.latLong = JSON.parse(body).results[0].geometry.location;
        }
        else {console.log(apiRequest);}
        meetingsData.push(thisMeeting);
    });
    setTimeout(callback, 2000);
}, function() {
    fs.writeFileSync('/home/ubuntu/workspace/data/geocodedMeetingsArray.txt', JSON.stringify(meetingsData));
});