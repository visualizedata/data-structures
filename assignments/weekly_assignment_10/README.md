# Weekly Assignment 10

### Due Friday, 11/30 at 2:00pm

Using the work from all of your previous weekly assignments, you will create a web server application in Node.js that will respond to various requests for JSON data for AA meetings, dear diary, and your sensor. These requests will provide the data that would be needed to create a visual representation of the data, in the format that is needed. 

**RECOMMENDED READING: [Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)**  

Here's an example of a working application, which navigates to three endpoints:  
[**http://34.239.177.221:8080/**](http://34.239.177.221:8080/)

Notice that for all three of the data sources (AA, Dear Diary, and sensors) the data has been summarized, filtered, aggregated, and/or transformed so that the data could map directly to a visual representation. Examples for each of the data sources: 

### AA Data

For the AA data, individual meetings have been grouped by the location level (with metadata about that location), with a built JSON array to hold the values of the AA meetings days and times. Here's [the data I started with](https://github.com/visualizedata/data-structures/tree/master/assignments/weekly_assignment_06/data). And here is [the result of the filtering and aggregation](http://34.239.177.221:8080/aameetings), which will map to this visualization:  

![](https://github.com/visualizedata/data-structures/raw/master/assignments/resources/aasketch.jpg)

### Dear Diary Data

For the Dear Diary data, the only data returned is that which would be included in the default view. Here's [the data I started with](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_06/addToDynamo.js). And here is [the result of the filtering](http://34.239.177.221:8080/deardiary), which will map to this visualization:  
![](https://github.com/visualizedata/data-structures/raw/master/assignments/resources/deardiarysketch.jpeg)

### Sensor Data

For the sensor data, I have aggregated by date, averaging the boolean tilted/not tilted indicator which shows the average time the sensor is tilted each day. The data is being inserted into a table that I created with this SQL statement:  
`CREATE TABLE sensorData ( sensorValue boolean, sensorTime timestamp DEFAULT current_timestamp );`

Here is [the result of the aggregation](http://34.239.177.221:8080/sensor), which will map to this visualization: 

![](https://github.com/visualizedata/data-structures/raw/master/assignments/resources/tiltsketch.jpeg)

## Starter Code

The files in this directory show a detailed example of a working Node.js Express app that has an index.html file to navigate to three endpoints, one each for your data sources (AA, Dear Diary, and sensors). [`server.js`](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_10/server.js) is the app and [`public/index.html`](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_10/public/index.html) is the static html file to navigate between the endpoints. 

### Submission requirements

Update your GitHub repository with the relevant file(s). In Canvas, submit the URL of the specific location of this work within your `data-structures` GitHub repository. 
