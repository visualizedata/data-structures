var five = require("johnny-five"), bumper, led;
var pg = require('pg');

// connection string
var un = ''; // aws db username
var pw = ''; // aws db password
var db = ''; // aws db database name
var ep = ''; // aws db endpoint
var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

var whammies = [[1750, 500, 'whammy', 5000, 'whammy', 750, 800, 'whammy', 500, 2000, 2000, 750, 700, 1400], ['whammy', 1250, 500, 3000, 700, 750, 100, 1500, 2500, 1500, 600, 'whammy', 1000], [2250, 'whammy', 4000, 750, 500, 'whammy', 'whammy', 2000, 1000, 2500, 700, 750], [1750, 500, 2000, 3000, 'whammy', 700, 'whammy', 750, 200, 'whammy', 500, 2000, 600, 1600], [350, 750, 250, 1000, 525, 'whammy', 450, 'whammy', 300, 200, 500, 400, 300, 200]];

// Returns a random integer between min (included) and max (excluded)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function whammyMachine (whammyObject) {
	var whammyScreen = whammyObject[getRandomInt(0, 5)];
	return whammyScreen[getRandomInt(0, whammyScreen.length)]
}

five.Board().on("ready", function() {

  bumper = new five.Button(2);
  led = new five.Led(13);

  bumper.on("hit", function() {
  	var buttonResult = whammyMachine(whammies);
  	var buttonWhammy, buttonValue; 
  	if (buttonResult === 'whammy') {
  		buttonWhammy = true; 
  		buttonValue = 0; 
  	}
  	else {
  		buttonWhammy = false;
  		buttonValue = buttonResult;
  	}
  	var insertIntoQuery = "INSERT INTO wham VALUES ('No whammy!!!', DEFAULT, " + buttonWhammy + ", " + buttonValue + ");"
    led.on();
    console.log(buttonResult);

    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }

      client.query(insertIntoQuery, function(err, result) {
        //call `done()` to release the client back to the pool
        done();

        if(err) {
          return console.error('error running query', err);
        }
    });

  });

    }).on("release", function() {
      led.off();
    });

});