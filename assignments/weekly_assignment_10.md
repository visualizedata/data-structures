# Weekly Assignment 10

### Due 11/6 at 4:00pm

Continue working with your sensors. You will write a query for the sensor data in your SQL database, restructuring the data in the process. You will create an endpoint that will provide this data to a (hypothetical) front-end interface that contains a visual representation of this data.

## Assignment 

Using the [Express module](https://expressjs.com/) in Node.js, write a script that responds to http requests with JSON containing a single summarization/aggregation of key data from your sensor, using the [pg module](https://node-postgres.com/) to connect to and query the AWS database. 

## Starter Code

```javascript
var express = require('express'),
    app = express();
const { Pool } = require('pg');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'aaron';
db_credentials.host = process.env.AWSRDS_EP;
db_credentials.database = 'sensors';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

app.get('/', function(req, res) {
    // Connect to the AWS RDS Postgres database
    const client = new Pool(db_credentials);

    // SQL query
    var q = `SELECT EXTRACT(DAY FROM sensortime AT TIME ZONE 'America/New_York') as sensorday, 
             EXTRACT(MONTH FROM sensortime AT TIME ZONE 'America/New_York') as sensormonth, 
             count(*) as num_obs, 
             max(lightsensor) as max_light, 
             min(lightsensor) as min_light,
             max(tempsensor) as max_temp, 
             min(tempsensor) as min_temp
             FROM sensordata 
             GROUP BY sensormonth, sensorday;`;
             
    client.connect();
    client.query(q, (qerr, qres) => {
        res.send(qres.rows);
        console.log('responded to request');
    });
    client.end();
});

// app.listen(3000, function() {
app.listen(process.env.PORT, function() {
    console.log('Server listening...');
});
```

### Submission

In Canvas, submit the URL of the endpoint described in the assignment. (It is the endpoint for your AWS EC2 instance.)