# piezo

*measures knock*

Product: [Piezo Buzzer - PS1240](https://www.adafruit.com/product/160)

#### Tools needed: 

- Particle Photon or Electron
- Hook up wires
- 1 Megohm resistor

## Setup

![photo of setup](img/piezo.JPG)

## Starter Code

*Adapted from an example in the [Particle docs](https://docs.particle.io/guide/getting-started/examples/photon/#read-your-photoresistor-function-and-variable)*

``` cpp
// -----------------------------------------
// Piezo
// -----------------------------------------

// In this example, we're going to register a Particle.variable() with the cloud so that we can read the level of a piezo.

int piezo = A0; // This is the input pin where you read the value of the sensor.

int analogvalue; // Here we are declaring the integer variable analogvalue, which we will use later to store the value of the sensor.
// In this case, the value will be the Unix Timestamp of the last time the piezo was knocked or jolted. 
int knockLim = 100; // Threshold that defines a 'jolt'.

void setup() {

    // This lets the device know which pin will be used to read incoming voltage.
    pinMode(piezo,INPUT);  // Our sensor pin is input (reading the sensor)

    // We are going to declare a Particle.variable() here so that we can access the value of the sensor from the cloud.
    Particle.variable("analogvalue", &analogvalue, INT);
    // This is saying that when we ask the cloud for "analogvalue", this will reference the variable analogvalue in this app, which is an integer variable.

}

void loop() {

    if (analogRead(piezo) > knockLim) {

        // If the piezo has been knocked or jolted, store the Unix Timestamp as an integer
        analogvalue = Time.now();
        delay(100);
        
    }
    
}
```

