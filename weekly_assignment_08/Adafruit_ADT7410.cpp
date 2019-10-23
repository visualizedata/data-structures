/*!
 *  @file Adafruit_ADT7410.cpp
 *
 *  @mainpage Adafruit ADT7410 I2C Temp Sensor
 *
 *  @section intro_sec Introduction
 *
 * 	I2C Driver for Microchip's ADT7410 I2C Temp sensor
 *
 * 	This is a library for the Adafruit ADT7410 breakout:
 * 	http://www.adafruit.com/products/1782
 *
 * 	Adafruit invests time and resources providing this open source code,
 *  please support Adafruit and open-source hardware by purchasing products from
 * 	Adafruit!
 *
 *  @section author Author
 *
 *  K.Townsend (Adafruit Industries)
 *
 * 	@section license License
 *
 * 	BSD (see license.txt)
 *
 * 	@section  HISTORY
 *
 *     v1.0 - First release
 */

#include "Arduino.h"
#include <Wire.h>

#include "Adafruit_ADT7410.h"

/*!
 *    @brief  Instantiates a new ADT7410 class
 */
Adafruit_ADT7410::Adafruit_ADT7410() {}

/*!
 *    @brief  Setups the HW
 *    @param  addr
 *    @return True if initialization was successful, otherwise false.
 */
boolean Adafruit_ADT7410::begin(uint8_t addr) {
  _i2caddr = addr;
  Wire.begin();

  uint8_t id = read8(ADT7410_REG__ADT7410_ID) & 0xF8;
  if (id != 0xC8) {
    return false;
  }

  // soft reset
  Wire.beginTransmission(_i2caddr);
  Wire.write(ADT7410_REG__ADT7410_SWRST);
  Wire.endTransmission();

  delay(10);

  return true;
}

/*!
 *   @brief  Reads the 16-bit temperature register and returns the Centigrade
 *           temperature as a float.
 *   @return Temperature in Centigrade.
 */
float Adafruit_ADT7410::readTempC() {
  uint16_t t = read16(ADT7410_REG__ADT7410_TEMPMSB);

  float temp = (int16_t)t;
  temp /= 128.0;

  return temp;
}

/*!
 *    @brief  Low level 8 bit write procedures
 *    @param  reg
 *    @param  value
 */
void Adafruit_ADT7410::write8(uint8_t reg, uint8_t value) {
  Wire.beginTransmission(_i2caddr);
  Wire.write((uint8_t)reg);
  Wire.write((uint8_t)value);
  Wire.endTransmission();
}

/*!
 *    @brief  Low level 16 bit read procedure
 *    @param  reg
 *    @return value
 */
uint16_t Adafruit_ADT7410::read16(uint8_t reg) {
  uint16_t val;

  Wire.beginTransmission(_i2caddr);
  Wire.write((uint8_t)reg);
  Wire.endTransmission(false);

  Wire.requestFrom((uint8_t)_i2caddr, (uint8_t)2);
  val = Wire.read();
  val <<= 8;
  val |= Wire.read();
  return val;
}


/*!
 *    @brief  Low level 8 bit read procedure
 *    @param  reg
 *    @return value
 */
uint8_t Adafruit_ADT7410::read8(uint8_t reg) {
  Wire.beginTransmission(_i2caddr);
  Wire.write((uint8_t)reg);
  Wire.endTransmission(false);

  Wire.requestFrom((uint8_t)_i2caddr, (uint8_t)2);
  return Wire.read();
}

