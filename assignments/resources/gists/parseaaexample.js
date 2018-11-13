var fs = require('fs');
var cheerio = require('cheerio');
var async = require('async');

var html = fs.readFileSync('data/m07.txt');

var $ = cheerio.load(html);

var selectionOfTheTR = $('tr[style="margin-bottom:10px"]');

var newData = [];

console.log(selectionOfTheTR.length);

async.eachSeries(selectionOfTheTR, function(value, callback) {

    var cheerioTRElement = $(value);
    var TRTextContent = cheerioTRElement.text();
    var arrayOfLines = TRTextContent.split("\n");
    var addressLine = arrayOfLines[4];
    var titleLine = arrayOfLines[3];
    var address = addressLine.trim();
    var title = titleLine.trim();
    var wheelchairImage = cheerioTRElement.find("img");
    var wheelchairAccess;
    if (wheelchairImage.length > 0) {
        wheelchairAccess = true;
    }
    else {
        wheelchairAccess = false;
    }

    var secondTDElement = cheerioTRElement.find("td:nth-child(2)");
    var secondTDElementText = secondTDElement.text();

    function loopOverMeetings() {
        var secondTDElementLinesArray = secondTDElementText.split("\n");

        for (var i = 0; i < secondTDElementLinesArray.length; i++) {
            if (secondTDElementLinesArray[i].search('days') >= 0) {
                var thisMtg = secondTDElementLinesArray[i].trim();
                var day = thisMtg.split(" ")[0];
                var startTime = thisMtg.split(" ")[3] + " " + thisMtg.split(" ")[4];
                var endTime = thisMtg.split(" ")[6] + " " + thisMtg.split(" ")[7];
                var meetingType = thisMtg.split("Meeting").pop();

                newData.push({
                    address: address,
                    title: title,
                    wheelchairAccess: wheelchairAccess,
                    info: {
                        day: day,
                        startTime: startTime,
                        endTime: endTime,
                        meetingType: meetingType,
                    }
                });
            }
        }

    }
    loopOverMeetings();

    callback();
});

fs.writeFileSync('exploration.json', JSON.stringify(newData, null, 4));
console.log(newData.length); // should be ~165 for zone 7
