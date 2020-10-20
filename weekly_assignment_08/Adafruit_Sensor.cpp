#include "Adafruit_Sensor.h"

/**************************************************************************/
/*!
    @brief  Prints sensor information to serial console
*/
/**************************************************************************/
void Adafruit_Sensor::printSensorDetails(void) {
  sensor_t sensor;
  getSensor(&sensor);
  switch ((sensors_type_t)sensor.type) {
  case SENSOR_TYPE_ACCELEROMETER:
    break;
  case SENSOR_TYPE_MAGNETIC_FIELD:
    break;
  case SENSOR_TYPE_ORIENTATION:
    break;
  case SENSOR_TYPE_GYROSCOPE:
    break;
  case SENSOR_TYPE_LIGHT:
    break;
  case SENSOR_TYPE_PRESSURE:
    break;
  case SENSOR_TYPE_PROXIMITY:
    break;
  case SENSOR_TYPE_GRAVITY:
    break;
  case SENSOR_TYPE_LINEAR_ACCELERATION:
    break;
  case SENSOR_TYPE_ROTATION_VECTOR:
    break;
  case SENSOR_TYPE_RELATIVE_HUMIDITY:
    break;
  case SENSOR_TYPE_AMBIENT_TEMPERATURE:
    break;
  case SENSOR_TYPE_OBJECT_TEMPERATURE:
    break;
  case SENSOR_TYPE_VOLTAGE:
    break;
  case SENSOR_TYPE_CURRENT:
    break;
  case SENSOR_TYPE_COLOR:
    break;
  }

}
