# Weekly Assignment 8

Switching gears from previous assignments, we will be working with temperature/humidity [**sensors**](https://www.adafruit.com/product/385). 

# Setup

1. Complete steps 1 and 2A in the Particle [Getting Started Guide](https://docs.particle.io/quickstart/photon/#connect-your-photon).  
2. Familiarize yourself with the [Console](https://docs.particle.io/guide/tools-and-features/console/). Log into [the Console](https://console.particle.io/) and verify that your device is listed. Make note of your *Device ID*.   
3. Familiarize yourself with the [Web IDE](https://docs.particle.io/guide/getting-started/build/photon/). Log into [the Web IDE](https://build.particle.io/).  
4. In the Web IDE under 'Settings,' retrieve and make note of your *Access Token*.  
5. Familiarize yourself with [Particle Variables](https://docs.particle.io/reference/device-os/firmware/photon/#particle-variable-).  
6. Set up your sensor. It should look like this: 

![](https://github.com/visualizedata/data-structures/raw/master/weekly_assignment_08/setup.JPG)

**Here's a diagram of this setup, but with a different microcontroller:** 

![](https://github.com/visualizedata/data-structures/raw/master/weekly_assignment_08/weather_m0_dht_bb.png)

# Assignment

### Part One

1. Set up your temperature sensor (or other sensor(s) if you plan to use something different in the final assignment), making appropriate connections to the Photon.  
2. In the [Web IDE](https://build.particle.io), copy and modify the [starter code](https://github.com/visualizedata/data-structures/tree/master/weekly_assignment_08) for your sensor so that you can access its values. IMPORTANT: you must include all seven starter code files (file extensions .ino, .cpp, and .h) in the Web IDE project for this micro controller.   
3. In the Web IDE, set up a **single variable** that will be accessible with [Particle Cloud API](https://docs.particle.io/reference/api/). [NOTE: If working with multiple sensors, the variable must return a string of valid JSON [[tutorial here](https://community.particle.io/t/using-spark-publish-with-simple-json-data/3469)] that includes the values of your sensors.]  
4. Submit to **Canvas** the **URL** (including your Device ID and Access Token) that retrieves this JSON data from the Particle Cloud API.  
5. Leave your photon connected to power and connected to a Wifi network.  

#### EXAMPLE REQUEST (URL)
* Device ID is `0123456789abcdef`  
* Your access token is `123412341234`  
* Your particle variable is `analogvalue`  
* The URL: `"https://api.particle.io/v1/devices/0123456789abcdef/analogvalue?access_token=123412341234"`

### Part Two

Sketch a design for an interface to the data you'll be collecting with the sensor you were assigned. Bring the sketch to class next week. 
## Breadboard Layouts

#### Standard

![](https://cdn.sparkfun.com/assets/3/d/f/a/9/518c0b34ce395fea62000002.jpg)

#### Mini

![](https://cdn.sparkfun.com/assets/e/7/7/e/c/5175c500ce395f5a49000004.jpg)
