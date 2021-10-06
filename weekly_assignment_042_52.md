# Weekly Assignments 4.2 and 5.2

# 4.2
You're going to continue working with the data you scraped, parsed, and augmented in the previous three assignments. In this assignment, you will write your AA data to a relational database. 

## Setup and preparation

You will use Amazon Web Services to host a PostgreSQL database server. Follow [these instructions](https://github.com/visualizedata/data-structures/blob/master/weekly_assignment_04_documentation.md) to set up and access an instance you will use for your SQL work in this class; the setup should take about 30 minutes to complete. 

If you have trouble connecting to your AWS RDS instance, refer to [this guide](https://aws.amazon.com/premiumsupport/knowledge-center/rds-cannot-connect/). 

If you are new to SQL, consider [this tutorial](https://www.linkedin.com/learning/sql-essential-training-2).

## Assignment

### Part 4.2a: Create a table(s) in your database

Modify the following starter code to replace the database credentials with your own. It includes two SQL sample statements that you can modify to accomplish any of the following tasks in your new database, with the help of the `pg` module in Node:  

1. Create a new table.  
2. Remove (delete!) a table.  

**``wa04a.js``** 

```javascript
const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();  

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

client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});
```

### Part 4.2b: Populate your database

Use the [`pg` module](https://node-postgres.com/) in Node to insert your AA data in the database you created. Hint: check to make sure you have the correct number of rows! **Note: it is not expected that this data be complete and clean yet. For now, just insert the documents/data you have.**  

Modify the following starter code to replace the database credentials with your own. It includes three SQL queries that you can modify to accomplish the following tasks in your new database, with the help of the `pg` module in Node:  

**``wa04b.js``** 

```javascript
const { Client } = require('pg');
var async = require('async');  
const dotenv = require('dotenv');
dotenv.config();  

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

### Part 4.2c: Check your work

To see what's in your new database table, let's query all of its contents: 

**``wa04c.js``** 

```javascript
const { Client } = require('pg');  
const dotenv = require('dotenv');
dotenv.config();  

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

// Sample SQL statement to query the entire contents of a table: 
var thisQuery = "SELECT * FROM aalocations;";

client.query(thisQuery, (err, res) => {
    console.log(err, res.rows);
    client.end();
});
```

# 5.2

You will start to work with data for the "Process Blog" project (the data source for [Final Assignment 2](https://github.com/visualizedata/data-structures/blob/master/final_assignment_2.md)). 

## Setup and preparation

You will use Amazon Web Services to create a table in [Amazon DynamoDB](https://aws.amazon.com/dynamodb/), a NoSQL database service. 

#### Steps to create a table in DynamoDB: 

1. Sign in to the [AWS Console](https://aws.amazon.com/console/) and navigate to [DynamoDB](https://console.aws.amazon.com/dynamodb/home?region=us-east-1).  
2. Click the blue "Create table" button.  
3. Enter a "Table name" (e.g. `processblog`). Enter a "Primary key" name (e.g. `pk`) and choose a data type from the dropdown menu (String, Binary, or Number). I recommend number or string. Click the blue "Create" button. If you intend to use a sort key as well, click "Add sort key" and enter a sort key name (e.g. `sk`) and choose a data type from the dropdown menu.     

## Assignment

### Part 5.2a: Create some data for the table in your database

In Part Three of this assignment, you will be using [`putItem`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property) in the [AWS SDK for JavaScript in Node.js](https://aws.amazon.com/sdk-for-node-js/). Reference the [DynamoDB class](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html) for information about the [PutItem method](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property) and data types. The documentation shows how the items should be mapped and how to specify data types. In preparation for Part Three, the following starter code creates several "Items" destined for DynamoDB (adhering to the expected Item attributes and values), storing them in an array named `blogEntries`: 

```javascript
var blogEntries = [];

class BlogEntry {
  constructor(primaryKey, date, entry, happy, iate) {
    this.pk = {};
    this.pk.N = primaryKey.toString();
    this.date = {}; 
    this.date.S = new Date(date).toDateString();
    this.entry = {};
    this.entry.S = entry;
    this.happy = {};
    this.happy.BOOL = happy; 
    if (iate != null) {
      this.iate = {};
      this.iate.SS = iate; 
    }
    this.month = {};
    this.month.N = new Date(date).getMonth().toString();
  }
}

blogEntries.push(new BlogEntry(0, 'August 28 2019', "Yay, first day of class!", true, ["Cheez-Its", "M&Ms"]));
blogEntries.push(new BlogEntry(1, 'October 31, 2015', "I piloted my first solo flight!", true, ["pancakes"]));
blogEntries.push(new BlogEntry(2, 8675309, "867-5309?", false));
blogEntries.push(new BlogEntry(3, 'September 25, 2019', "I taught my favorite students.", true, ["peas", "carrots"]));

console.log(blogEntries);
```

### Part 5.2b: Populate your database

Use the [AWS SDK for JavaScript](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/) to work with your DynamoDB table in Node.js. Install with:  
`npm install aws-sdk`

### Set up permissions for your Cloud9 EC2 instance to be able to access DynamoDB: 

[This video](https://drive.google.com/open?id=11ZwSwG6PZUwcPCNOk29RLqRn8qxcFCz-) walks through the instructions in this section (must be signed into New School Google account to view). 

1. Open your Cloud9 environment.  
2. In the AWS Console, navigate to the `IAM` service. In the left-hand column, click **Roles**. Click the blue **Create role** button. Under the header **Common use cases**, click **EC2** then click **Next: Permissions**. In the **Filter policies** search field, type `dynamodb` to filter the options to show only permissions related to DynamoDB; click **`AmazonDynamoDBFullAccess`**, making sure that the checkbox is selected; click the blue **Next: Tags** button. Click the blue **Next: Review** button. In the **Role name** field, give this role a name. Click the blue **Create role** button.  
3. In your Cloud9 environment for Data Structures, click on the user icon in the upper righthand corner (it's a circle with the first letter of your username). From the dropdown, click "Manage EC2 Instance." Click the **Actions** dropdown. In the **Instance Settings** menu, select **Attach/Replace IAM Role**. In the **IAM role** dropdown, select the role you created in the previous step. Click the blue **Apply** button.  
4. Your Cloud9 environment (and the underlying EC2 instance) now has permission to access DynamoDB. A lot of the AWS documentation guides you to manage permissions with an "AWS Access Key" (a.k.a. "Access key ID" and "Secret access key"). **PLEASE DON'T EVER DO THIS!!!** If these keys ever make it onto GitHub, your AWS will be comprised within a few minutes, often incurring charges in the tens of thousands of dollars. You can avoid this by always using IAM permissions (as you just did in the previous three items in this list) and **NEVER, EVER USING A SECRET ACCESS KEY**. 

### Starter code:  

The following starter code uses the AWS SDK to put the first Item into the DynamoDB table (from the `blogEntries` array created in the previous step). Modify this code to put **at least three items** into your table. First, modify the `params` object with your Item(s) and TableName. If you created your table in a different region (the starter code uses region `us-east-1`), you should modify `region` in the starter code. Additionally, you will need to come up with a way to loop over all of the items in your array, making sure not to attempt more than 2 puts per second (like you did in the previous assignment, as you iterated over each request to your PostgreSQL endpoint). Check your table in the AWS Console (look in the "Items" tab) to make sure your items (at least three!) were successfully put into the table.   

```javascript
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

var params = {};
params.Item = blogEntries[0]; 
params.TableName = "processblog";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
```

### Submission requirements

Update your GitHub repository with the relevant file(s). In Canvas, submit the URL of the specific location of this work within your `data-structures` GitHub repository. 
