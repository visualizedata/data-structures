# Weekly Assignment 10

### Due 11/6 at 4:00pm

Continue working with your sensors. You will write a query for the sensor data in your SQL database, restructuring the data in the process. You will create an endpoint that will provide this data to a (hypothetical) front-end interface that contains a visual representation of this data.

## Setup

You'll need to add a rule to your EC2 security group for inbound HTTP traffic on port 3000. 

1. Open the Amazon EC2 console at [https://console.aws.amazon.com/ec2/](https://console.aws.amazon.com/ec2/).  
2. In the navigation pane, choose **Security Groups**. Select the security group for your instance.  
3. Choose **Inbound, Edit, Add Rule**.  
4. For **Type**, choose **Custom TCP Rule**. For **Port Range**, enter **3000**.  For **Source**, choose **Anywhere**. Click the blue **Save** button.  

## Assignment 

Using the [Express module](https://expressjs.com/) in Node.js, write a script that responds to http requests with JSON containing a single summarization/aggregation of key data from your sensor, using the [pg module](https://node-postgres.com/) to connect to and query the AWS database. Run the script on your EC2 instance using the Node process manager [PM2](http://pm2.keymetrics.io/).

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

app.listen(3000, function() {
    console.log('Server listening...');
});
```

### Submission

In Canvas, submit the URL of the endpoint described in the assignment. (It is the endpoint for your AWS EC2 instance.)

An example:  
[http://ec2-54-89-140-69.compute-1.amazonaws.com:3000/](http://ec2-54-89-140-69.compute-1.amazonaws.com:3000/)