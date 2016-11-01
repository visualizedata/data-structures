var five = require("johnny-five"), bumper, led;

five.Board().on("ready", function() {

  bumper = new five.Button(2);
  led = new five.Led(13);

  bumper.on("hit", function() {

    led.on();
    console.log("Button was pressed at " + new Date());

  }).on("release", function() {

    led.off();

  });

});