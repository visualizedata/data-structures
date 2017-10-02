# photoresistor

*measures intensity of light*

Product: [Photo cell (CdS photoresistor)](https://www.adafruit.com/product/161)

#### Tools needed: 

- Particle Photon or Electron
- Hook up wires
- 10K ohm resistor

## Setup

![photo of setup](img/photocell.JPG)

## Starter Code

*Adapted from an example in the [Particle docs](https://docs.particle.io/guide/getting-started/examples/photon/#read-your-photoresistor-function-and-variable)*

``` cpp
// -----------------------------------------
// Photoresistor
// -----------------------------------------

// In this example, we're going to register a Particle.variable() with the cloud so that we can read brightness levels from a photoresistor.

int photoresistor = A0; // This is the input pin where you read the value of the photoresistor.

int analogvalue; // Here we are declaring the integer variable analogvalue, which we will use later to store the value of the photoresistor.

void setup() {

    // This lets the device know which pin will be used to read incoming voltage.
    pinMode(photoresistor,INPUT);  // Our photoresistor pin is input (reading the photoresistor)

    // We are going to declare a Particle.variable() here so that we can access the value of the photoresistor from the cloud.
    Particle.variable("analogvalue", &analogvalue, INT);
    // This is saying that when we ask the cloud for "analogvalue", this will reference the variable analogvalue in this app, which is an integer variable.

}

void loop() {

    // check to see what the value of the photoresistor is and store it in the int variable analogvalue
    analogvalue = analogRead(photoresistor);
    delay(100);
    
}
```