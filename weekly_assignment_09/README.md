# Weekly Assignment 9

### Due Monday, 11/4 at 6:00pm

Continue working with your sensor(s). In this assignment, you will create a new table for your sensor data and begin writing values to it at a frequency of **at least once every five minutes**. 

If you haven't yet already, create an account for [AWS Educate](https://aws.amazon.com/education/awseducate/), which will entitle you to $100 in AWS credits. You'll need this credit, because your usage will exceed the free tier allotment for the rest of the semester. 

## Setup and preparation

#### PART ONE

Decide how you will structure data from your sensors into a database (PostgreSQL or DynamoDB, depending on how you will use the data in your visualization) and define a data model/schema for your table(s). Create the appropriate table(s), in the same way you did in [Weekly Assignment 4, Part Two](https://github.com/visualizedata/data-structures/blob/master/weekly_assignment_04.md) (if using PostgreSQL) or [Weekly Assignment 5, Setup and preparation](https://github.com/visualizedata/data-structures/blob/master/weekly_assignment_05.md) (if using DynamoDB). 

For example, if you are using Postgres, your script will look something like this:  

**/setup.js**

```javascript 
const { Client } = require('pg');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'aaron';
db_credentials.host = 'dsdemo.c2g7qw1abcde.us-east-1.rds.amazonaws.com';
db_credentials.database = 'mydb';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to create a table: 
var thisQuery = "CREATE TABLE sensorData ( sensorValue boolean, sensorTime timestamp DEFAULT current_timestamp );";

client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});
```

#### PART TWO

In this assignment, you will write a script that will run continuously in the background to periodically get sensor values and insert them into your database (at a frequency of at least once every five minutes). You will continue to work in Cloud9 for this, however, you will need to change a default setting in Cloud9 to specify that you would like your server to run continuously (rather than shutting down after a period non-use, which is a cost-saving measure). To do this, go to to your Cloud9 environment editor, click the "AWS Cloud9" menu, and choose "Preferences." In the preferences under "EC2 Instance," choose "Never" from the "Stop my environment:" dropdown. 

![](https://github.com/visualizedata/data-structures/raw/master/weekly_assignment_09/week10screenshot.jpeg)

#### PART THREE

To run your script in the background, you will be using [PM2 Runtime](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/), which is a process manager for Node.js. To install it, run:  
`npm install pm2 -g`

Then, initialize a configuration file with:  
`pm2 init`

The initialization creates a configuration file to specify the details of the ecosystem for your script (such as script name and environment variables). The default configuration file is named `ecosystem.config.js` and it will look like [this](https://github.com/visualizedata/data-structures/blob/master/weekly_assignment_09/ecosystem.config.js). 

## Assignment 

After completing all three parts of the setup, you will write a script that will make a request to the Particle API URL that you created in [Weekly Assignment 8](https://github.com/visualizedata/data-structures/tree/master/weekly_assignment_08). Your script will parse the result of the API request and insert the appropriate data into your database.  It will run continuously at a rate of **at least once every five minutes**. 

#### Starter code:   

**/app.js**

```javascript  
var request = require('request');
const { Client } = require('pg');

// PARTICLE PHOTON
var device_id = process.env.PHOTON_ID;
var access_token = process.env.PHOTON_TOKEN;
var particle_variable = 'analogvalue';
var device_url = 'https://api.particle.io/v1/devices/' + device_id + '/' + particle_variable + '?access_token=' + access_token;

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'aaron';
db_credentials.host = process.env.AWSRDS_EP;
db_credentials.database = 'mydb';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

var getAndWriteData = function() {
    
    // Make request to the Particle API to get sensor values
    request(device_url, function(error, response, body) {
        
        // Store sensor value(s) in a variable
        var sv = JSON.parse(body).result;
        
        // Convert 1/0 to TRUE/FALSE for the Postgres INSERT INTO statement
        var sv_mod; 
        if (sv == 1) {
            sv_mod = "TRUE";
        }
        else if (sv == 0) {
            sv_mod = "FALSE";
        }

        // Connect to the AWS RDS Postgres database
        const client = new Client(db_credentials);
        client.connect();

        // Construct a SQL statement to insert sensor values into a table
        var thisQuery = "INSERT INTO sensorData VALUES (" + sv_mod + ", DEFAULT);";
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

You will run this code with PM2. First, modify the following default values in **ecosystem.config.js** :  
`script: 'app.js'` should be updated with the name of the script for your code  
`env: {NODE_ENV: 'development'}` will hold your environment variables; update it with the appropriate variables, separated by commas. It will look something like (but replacing these values with your own credentials):    

```
    env: {
      NODE_ENV: 'development',
      AWSRDS_EP: 'dsdemo.c2g7qw1abcde.us-east-1.rds.amazonaws.com',
      AWSRDS_PW: 'mypassword',
      PHOTON_ID: '0123456789abcdef',
      PHOTON_TOKEN: '123412341234'
    },
```

Finally, instead of running the file with the usual `node app.js`, you will use PM2 to begin running it in the background:  
`pm2 start ecosystem.config.js`

You can check its status with:  
`pm2 list`

You can stop it with:  
`pm2 stop 0`

### Submission requirements

Update your GitHub repository with the relevant file(s). In Canvas, submit the URL of the specific location of this work within your `data-structures` GitHub repository.

---

### Checking your work

You may want to check on your database periodically to ensure that sensor values are recording as expected. Here's some starter code for querying the sensor table: 

```javascript
const { Client } = require('pg');
const cTable = require('console.table');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'aaron';
db_credentials.host = process.env.AWSRDS_EP;
db_credentials.database = 'mydb';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statements for checking your work: 
var thisQuery = "SELECT * FROM sensorData;"; // print all values
var secondQuery = "SELECT COUNT (*) FROM sensorData;"; // print the number of rows
var thirdQuery = "SELECT sensorValue, COUNT (*) FROM sensorData GROUP BY sensorValue;"; // print the number of rows for each sensorValue

client.query(thisQuery, (err, res) => {
    if (err) {throw err}
    else {
    console.table(res.rows);
    }
});

client.query(secondQuery, (err, res) => {
    if (err) {throw err}
    else {
    console.table(res.rows);
    }
});

client.query(thirdQuery, (err, res) => {
    if (err) {throw err}
    else {
    console.table(res.rows);
    }
    client.end();
});
```
