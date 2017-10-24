# Weekly Assignment 9

### Due 10/30 at 4:00pm

Continue working with your sensors. You will begin writing sensor data to your SQL database.

## Setup and preparation

Follow [these instructions](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_09_documentation.md) to set up and access an EC2 instance you will use for your Node.js server in this class; the setup should take about 10 minutes to complete. 

## Assignment 

After completing the setup and preparation in the previous section:  
* Modify the starter code with your Particle Photon and AWS RDS credentials. Remember to create and use environment variables for the private credentials.  
* Modify the variable storage of sensor values to collect the appropriate values from your sensors.  
* Modify the constructed `INSERT INTO` statement to programmatically construct (with your sensor values) the `INSERT INTO` statement you wrote in the previous assignment.  
* Modify the `setInterval` argument(s) so that data is written at a frequency that supports the interface design for your sensor data.  
* Move this script to your EC2 instance. You could do this in various ways. The most straightforward might be to clone a repository that contains this script.   
* Run the script on your EC2 instance using the Node process manager [PM2](http://pm2.keymetrics.io/).    
* Verify that rows are being written to your PostgreSQL database as expected.  

## Starter Code

```javascript
var request = require('request');
const { Client } = require('pg');

// PARTICLE PHOTON
var device_id = process.env.PHOTON_ID;
var access_token = process.env.PHOTON_TOKEN;
var particle_variable = 'fototemp';
var device_url = 'https://api.particle.io/v1/devices/' + device_id + '/' + particle_variable + '?access_token=' + access_token;

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'aaron';
db_credentials.host = process.env.AWSRDS_EP;
db_credentials.database = 'sensors';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

var getAndWriteData = function() {
    // Make request to the Particle API to get sensor values
    request(device_url, function(error, response, body) {
        // Store sensor values in variables
        var device_json_string = JSON.parse(body).result;
        var photo = JSON.parse(device_json_string).photo;
        var tempC = JSON.parse(device_json_string).tempC;

        // Connect to the AWS RDS Postgres database
        const client = new Client(db_credentials);
        client.connect();

        // Construct a SQL statement to insert sensor values into a table
        var thisQuery = "INSERT INTO sensordata VALUES (" + photo + "," + tempC + ", DEFAULT);";
        console.log(thisQuery); // for debugging

        // Connect to the AWS RDS Postgres database and insert a new row of sensor values
        client.query(thisQuery, (err, res) => {
            console.log(err, res);
            client.end();
        });
    });
};

// write a new row of sensor data every five minutes
setInterval(getAndWriteData, 300000);
```

### Submission

In Canvas, submit the URL of the specific location of this work within your `data-structures` GitHub repository. It should include the Node.js code you're using for your AWS EC2 instance.  