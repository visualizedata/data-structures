# accelerometer

*measures acceleration forces*

Product: [ADXL335](https://www.adafruit.com/product/163)

#### Tools needed:

- Particle Photon or Electron
- [Soldering iron](http://resources.parsons.edu/tools-equipment/)
- [Solder](http://a.co/5OKteuL)
- Hook up wires

## Setup

![photo of setup](img/accel.JPG)

## Starter Code

*Adapted from an example in the [Particle docs](https://docs.particle.io/guide/getting-started/examples/photon/#read-your-photoresistor-function-and-variable)*

``` cpp
// -----------------------------------------
// Accelerometer
// -----------------------------------------

// In this example, we're going to register a Particle.variable() with the cloud so that we can read the level of an accelerometer sensor.

int z = A0; // This is the input pin where you read the Z value of the sensor.
int y = A1; // This is the input pin where you read the Y value of the sensor.
int x = A2; // This is the input pin where you read the X value of the sensor.

int analogval_z; // Here we are declaring the integer variable analogvalue, which we will use later to store the value of the sensor.
int analogval_y; // Here we are declaring the integer variable analogvalue, which we will use later to store the value of the sensor.
int analogval_x; // Here we are declaring the integer variable analogvalue, which we will use later to store the value of the sensor.

char json_str[50]; // A placeholder for a string of JSON

void setup() {

    // This lets the device know which pins will be used to read incoming voltages.
    pinMode(z, INPUT);  
    pinMode(y, INPUT);  
    pinMode(x, INPUT);  

    // We are going to declare a Particle.variable() here so that we can access the value of the sensor from the cloud.
    Particle.variable("json", json_str);
    // This is saying that when we ask the cloud for "analogvalue", this will reference the variable analogvalue in this app, which is a double variable.

}

void loop() {

    // check to see what the value of the sensor is and store it in the int variable analogvalue
    analogval_z = analogRead(z);
    analogval_y = analogRead(y);
    analogval_x = analogRead(x);
    // provide access to a single variable, string in JSON format
    sprintf(json_str, "{\"z\": %u, \"y\": %u, \"x\": %u}", analogval_z, analogval_y, analogval_x);
    delay(50);
    
}
```
