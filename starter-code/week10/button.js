var five = require("johnny-five"),
  bumper, led, exitBumper;

five.Board().on("ready", function() {

  bumper = new five.Button(7);
  exitBumper = new five.Button(8);
  led = new five.Led(13);

  bumper.on("hit", function() {

    led.on();
    console.log("Button was pressed at " + new Date());

  }).on("release", function() {

    led.off();

  });

  exitBumper.on("hit", function() {

  	process.exit();

  })

});