# Sensors

* [accelerometer](https://github.com/visualizedata/data-structures/blob/master/assignments/final_assignment_03/accelerometer.md)  
* [button](https://github.com/visualizedata/data-structures/blob/master/assignments/final_assignment_03/button.md)  
* [force sensitive resistor](https://github.com/visualizedata/data-structures/blob/master/assignments/final_assignment_03/fsr.md)  
* [hall effect](https://github.com/visualizedata/data-structures/blob/master/assignments/final_assignment_03/hall.md)  
* [infrared light](https://github.com/visualizedata/data-structures/blob/master/assignments/final_assignment_03/ir.md)  
* [infrared light -- REPLACEMENT](https://github.com/visualizedata/data-structures/blob/master/assignments/final_assignment_03/ir2.md)  
* [photoresistor](https://github.com/visualizedata/data-structures/blob/master/assignments/final_assignment_03/photocell.md)  
* [piezo](https://github.com/visualizedata/data-structures/blob/master/assignments/final_assignment_03/piezo.md)  
* [potentiometer](https://github.com/visualizedata/data-structures/blob/master/assignments/final_assignment_03/potentiometer.md)  
* [temperature](https://github.com/visualizedata/data-structures/blob/master/assignments/final_assignment_03/temperature.md)  
* [tilt ball](https://github.com/visualizedata/data-structures/blob/master/assignments/final_assignment_03/tilt.md)  

## Breadboard Layouts

#### Standard

![](https://cdn.sparkfun.com/assets/3/d/f/a/9/518c0b34ce395fea62000002.jpg)

#### Mini

![](https://cdn.sparkfun.com/assets/e/7/7/e/c/5175c500ce395f5a49000004.jpg)

# Setup

1. Complete steps 1 and 2A in the Particle [Getting Started Guide](https://docs.particle.io/guide/getting-started/start/photon/).  
2. Familiarize yourself with the [Console](https://docs.particle.io/guide/tools-and-features/console/). Log into [the Console](https://console.particle.io/) and verify that your device is listed. Make note of your *Device ID*.   
3. Familiarize yourself with the [Web IDE](https://docs.particle.io/guide/getting-started/build/photon/). Log into [the Web IDE](https://build.particle.io/) and go through the 'Blink an LED' example app.  
4. In the Web IDE under 'Settings,' retrieve and make note of your *Access Token*.  
5. Familiarize yourself with [Particle Variables](https://docs.particle.io/reference/firmware/photon/#particle-variable-).  

# Assignment

### Part One

1. Set up the two sensors you were assigned, making appropriate connections to the Photon.  
2. In the Web IDE, copy and modify the starter code for your two sensors so that you can access their values.  
3. In the Web IDE, set up a **single variable** that will be accessible with [Particle Cloud API](https://docs.particle.io/reference/api/). The variable must return a string of valid JSON [[tutorial here](https://community.particle.io/t/using-spark-publish-with-simple-json-data/3469)] that includes the values of **both** of your sensors.  
4. Submit to Canvas the URL (including your Device ID and Access Token) that retrieves this JSON data from the Particle Cloud API.  
5. Leave your photon connected to power and connected to a Wifi network.  

### Part Two

Sketch a design for an interface to the data you'll be collecting with the two sensors you were assigned. Bring the sketch to class next week. 