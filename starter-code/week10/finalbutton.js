var pg = require('pg');

// add connection string here
var conString = "";

var five = require("johnny-five"), bumper, led, exitBumper; 

five.Board().on("ready", function() {

  bumper = new five.Button(7);
  exitBumper = new five.Button(8);
  led = new five.Led(13);

  bumper.on("hit", function() {

    led.on();

    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }

      client.query("INSERT INTO buttonData VALUES ('hello, button from Node', DEFAULT);", function(err, result) {
        //call `done()` to release the client back to the pool
        done();

        if(err) {
          return console.error('error running query', err);
        }
        console.log(result);
    });

  });

    }).on("release", function() {
      led.off();
    });

  exitBumper.on("hit", function() {
    process.exit();
  })
});