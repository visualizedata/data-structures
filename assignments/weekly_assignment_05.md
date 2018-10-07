# Weekly Assignment 5

### Due 10/12 at 2:00pm

You will start to work with data for the "Dear Diary" project (the data source for Final Assignment 2). 

## Setup and preparation

You will use Amazon Web Services to create a table in [Amazon DynamoDB](https://aws.amazon.com/dynamodb/), a NoSQL database service. 

#### Steps to create a table in DynamoDB: 

1. Sign in to the [AWS Console](https://aws.amazon.com/console/) and navigate to [DynamoDB](https://console.aws.amazon.com/dynamodb/home?region=us-east-1).  
2. Click the blue "Create table" button.  
3. Enter a "Table name" (e.g. `deardiary`). Enter a "Primary key" name (e.g. `pk`) and choose a data type from the dropdown menu (String, Binary, or Number). I recommend number or string. Click the blue "Create" button.    

## Assignment

### Part One: Plan

Using the Hills text as a starting point (but feel free to strike out on your own), draw a data model for your "Dear Diary" data to be stored in this database table. Include all the content/data/variables from your "Dear Diary" project that you believe to be relevant. Upload an image (`png` format) of your drawing to your GitHub repository.  

Some decisions that will help with this drawing:  
1. Will you use a [Normalized Data Model or a Denormalized Data Model](https://www.quora.com/What-is-normalized-vs-denormalized-data)? Why?  
2. When the data comes back out of the database, how should it be structured? Why?  
3. How would you describe the hierarchy of the data?  

### Part Two: Create some data for the table in your database

In Part Three of this assignment, you will be using [`putItem`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property) in the [AWS SDK for JavaScript in Node.js](https://aws.amazon.com/sdk-for-node-js/). The documentation shows how the items should be mapped and how to specify data types. In preparation for Part Three, the following starter code creates several "Items" destined for DynamoDB (adhering to the expected Item attributes and values), storing them in an array named `diaryEntries`: 

```javascript
var diaryEntries = [];

class DiaryEntry {
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

diaryEntries.push(new DiaryEntry(0, 'March 10, 1976', "I was born!", true, ["baby food", "baby formula"]));
diaryEntries.push(new DiaryEntry(1, 'October 31, 2015', "I piloted my first solo flight!", true, ["pancakes"]));
diaryEntries.push(new DiaryEntry(2, 8675309, "867-5309?", false));
diaryEntries.push(new DiaryEntry(3, 'October 8, 2018', "I taught my favorite students.", true, ["peas", "carrots"]));

console.log(diaryEntries);
```

### Part Three: Populate your database

Use the [AWS SDK for JavaScript](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/) to work with your DynamoDB table in Node.js. Install with:  
`npm install aws-sdk`

### Set up the AWS SDK:  

The AWS SDK requires credentials to access your AWS account. Follow [this guide](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-your-credentials.html) to get your two access keys: **Access key ID** and **Secret access key**. You will need these credentials later, so be sure to store them somewhere safe. **IMPORTANT: Treat them as you would treat a password. Store them in environment variables for use in Node.js.** 

The following starter code uses the AWS SDK to put the first Item into the DynamoDB table (from the `diaryEntries` array created in the previous step). Modify this code to put **at least three items** into your table. First, modify the `params` object with your Item(s) and TableName. You should also modify the environment variable names unless you used the same names as me. If you created your table in a different region (the starter code uses region `us-east-1`), you should modify `region` in the starter code. Additionally, you will need to come up with a way to loop over all of the items in your array, making sure not to attempt more than 2 puts per second (like you did in the previous assignment, as you iterated over each request to your PostgreSQL endpoint). Check your table in the AWS Console (look in the "Items" tab) to make sure your items (at least three!) were successfully put into the table.   

```javascript
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

var params = {};
params.Item = diaryEntries[0]; 
params.TableName = "deardiary";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
```

### Submission requirements

Update your GitHub repository with the relevant file(s). In Canvas, submit the URL of the specific location of this work within your `data-structures` GitHub repository. 
