# Weekly Assignment 4

### Due 10/5 at 2:00pm

You're going to continue working with the data you scraped, parsed, and augmented in the previous three assignments. In this assignment, you will write your AA data to a relational database. 

## Setup and preparation

You will use Amazon Web Services to host a PostgreSQL database server. Follow [these instructions](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_04_documentation.md) to set up and access an instance you will use for your SQL work in this class; the setup should take about 30 minutes to complete. 

If you have trouble connecting to your AWS RDS instance, refer to [this guide](https://aws.amazon.com/premiumsupport/knowledge-center/rds-cannot-connect/). 

If you are new to SQL, complete [this tutorial](https://www.codecademy.com/learn/learn-sql).

## Assignment

### Part One: Plan

Using the Hills text as a starting point (but feel free to strike out on your own), draw a data model for the AA meetings data to be stored in a database. Include all the content/data/variables from the source file that you believe to be relevant, even if you haven't parsed it yet. Upload an image (`png` format) of your drawing to your GitHub repository.  

Some decisions that will help with this drawing:  
1. Will you use a [Normalized Data Model or a Denormalized Data Model](https://www.quora.com/What-is-normalized-vs-denormalized-data)? Why?  
2. When the data comes back out of the database, how should it be structured? Why?  
3. How would you describe the hierarchy of the data?  

### Part Two: Create a table(s) in your database

Modify the following starter code to replace the database credentials with your own. It includes three SQL sample statements that you can modify to accomplish any of the following tasks in your new database, with the help of the `pg` module in Node:  

1. Create a new table.  
2. Remove (delete!) a table.  
3. Query a table.  

```javascript
const { Client } = require('pg');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'aaron';
db_credentials.host = 'dsdemo.c2g7qw1juwkg.us-east-1.rds.amazonaws.com';
db_credentials.database = 'mydb';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to create a table: 
var thisQuery = "CREATE TABLE aalocations (address varchar(100), lat double precision, long double precision);";
// Sample SQL statement to delete a table: 
// var thisQuery = "DROP TABLE aalocations;"; 
// Sample SQL statement to query the entire contents of a table: 
// var thisQuery = "SELECT * FROM aalocations;";

client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});
```

### Part Three: Populate your database

Use the [`pg` module](https://node-postgres.com/) in Node to insert your AA data in the database you created. Hint: check to make sure you have the correct number of rows! **Note: it is not expected that this data be complete and clean yet. For now, just insert the documents/data you have.**  

Modify the following starter code to replace the database credentials with your own. It includes three SQL queries that you can modify to accomplish the following tasks in your new database, with the help of the `pg` module in Node:  

```javascript
const { Client } = require('pg');
var async = require('async');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'aaron';
db_credentials.host = 'dsdemo.c2g7qw1juwkg.us-east-1.rds.amazonaws.com';
db_credentials.database = 'mydb';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

var addressesForDb = [ { address: '63 Fifth Ave, New York, NY', latLong: { lat: 40.7353041, lng: -73.99413539999999 } }, { address: '16 E 16th St, New York, NY', latLong: { lat: 40.736765, lng: -73.9919024 } }, { address: '2 W 13th St, New York, NY', latLong: { lat: 40.7353297, lng: -73.99447889999999 } } ];

async.eachSeries(addressesForDb, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aalocations VALUES (E'" + value.address + "', " + value.latLong.lat + ", " + value.latLong.lng + ");";
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000); 
}); 
```

### Submission requirements

Update your GitHub repository with the relevant file(s). In Canvas, submit the URL of the specific location of this work within your `data-structures` GitHub repository. 
