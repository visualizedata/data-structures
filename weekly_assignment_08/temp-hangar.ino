// Adafruit IO ADT7410 Example
//
// Adafruit invests time and resources providing this open source code.
// Please support Adafruit and open source hardware by purchasing
// products from Adafruit!
//
// Written by Ladyada and Brent Rubell for Adafruit Industries
// Copyright (c) 2019 Adafruit Industries
// Licensed under the MIT license.
//
// All text above must be included in any redistribution.

/************************ Example Starts Here *******************************/
// #include <Wire.h>
// adt7410 sensor
#include "Adafruit_ADT7410.h"

// Create the ADT7410 temperature sensor object
Adafruit_ADT7410 tempsensor = Adafruit_ADT7410();
double tempvalue;

void setup()
{
  tempsensor.begin();
  // sensor takes 250 ms to get first readings
  delay(500);
  Particle.variable("tempsensor", &tempvalue, DOUBLE);
}

void loop()
{
  // Read and print out the temperature, then convert to *F
  float c = tempsensor.readTempC();
  float f = (c * 9 / 5) + 32; 

  tempvalue = f; 
  delay(500);
}
