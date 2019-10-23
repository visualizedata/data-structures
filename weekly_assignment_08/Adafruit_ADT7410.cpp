/*!
 *  @file Adafruit_ADT7410.h
 *
 * 	I2C Driver for Microchip's ADT7410 I2C Temp sensor
 *
 * 	This is a library for the Adafruit ADT7410 breakout:
 * 	http://www.adafruit.com/products/xxxx
 *
 * 	Adafruit invests time and resources providing this open source code,
 *please support Adafruit and open-source hardware by purchasing products from
 * 	Adafruit!
 *
 *
 *	BSD license (see license.txt)
 */

#ifndef _ADAFRUIT_ADT7410_H
#define _ADAFRUIT_ADT7410_H

#include "Arduino.h"
#include <Wire.h>

#define ADT7410_I2CADDR_DEFAULT 0x48 ///< I2C address

#define ADT7410_REG__ADT7410_TEMPMSB 0x0
#define ADT7410_REG__ADT7410_TEMPLSB 0x1
#define ADT7410_REG__ADT7410_STATUS  0x2
#define ADT7410_REG__ADT7410_CONFIG  0x3
#define ADT7410_REG__ADT7410_ID      0xB
#define ADT7410_REG__ADT7410_SWRST   0x2F


/*!
 *    @brief  Class that stores state and functions for interacting with
 *            ADT7410 Temp Sensor
 */
class Adafruit_ADT7410 {
public:
  Adafruit_ADT7410();
  boolean begin(uint8_t a = ADT7410_I2CADDR_DEFAULT);
  float readTempC();
  void write8(uint8_t reg, uint8_t val);
  uint16_t read16(uint8_t reg);
  uint8_t read8(uint8_t reg);

private:
  uint8_t _i2caddr;
};

#endif

