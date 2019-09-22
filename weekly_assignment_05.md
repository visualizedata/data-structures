# Weekly Assignment 5

### Due Tuesday 10/1 at 9:00am

You will start to work with data for the "Process Blog" project (the data source for Final Assignment 2). 

## Setup and preparation

You will use Amazon Web Services to create a table in [Amazon DynamoDB](https://aws.amazon.com/dynamodb/), a NoSQL database service. 

#### Steps to create a table in DynamoDB: 

1. Sign in to the [AWS Console](https://aws.amazon.com/console/) and navigate to [DynamoDB](https://console.aws.amazon.com/dynamodb/home?region=us-east-1).  
2. Click the blue "Create table" button.  
3. Enter a "Table name" (e.g. `processblog`). Enter a "Primary key" name (e.g. `pk`) and choose a data type from the dropdown menu (String, Binary, or Number). I recommend number or string. Click the blue "Create" button.    

## Assignment

### Part One: Plan

Using the Hills text as a starting point (but feel free to strike out on your own), draw a data model for your "Process Blog" data to be stored in this database table. Include all the content/data/variables from your "Process Blog" project that you believe to be relevant. Upload an image (`png` format) of your drawing to your GitHub repository.  

Some decisions that will help with this drawing:  
1. Will you use a [Normalized Data Model or a Denormalized Data Model](https://www.quora.com/What-is-normalized-vs-denormalized-data)? Why?  
2. When the data comes back out of the database, how should it be structured? Why?  
3. How would you describe the hierarchy of the data?  

### Part Two: Create some data for the table in your database

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

### Part Three: Populate your database

Use the [AWS SDK for JavaScript](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/) to work with your DynamoDB table in Node.js. Install with:  
`npm install aws-sdk`

### Set up permissions for your Cloud9 EC2 instance to be able to access DynamoDB: 

[This video](https://drive.google.com/open?id=11ZwSwG6PZUwcPCNOk29RLqRn8qxcFCz-) walks through the instructions in this section (must be signed into New School Google account to view). 

1. Open your Cloud9 environment.  
2. In the AWS Console, navigate to the `IAM` service. In the left-hand column, click **Roles**. Click the blue **Create role** button. Under the header **Choose the service that will use this role**, click **EC2** then click **Next: Permissions**. In the **Filter policies** search field, type `dynamodb` to filter the options to show only permissions related to DynamoDB; click **`AmazonDynamoDBFullAccess`**, making sure that the checkbox is selected; click the blue **Next: Tags** button. Click the blue **Next: Review** button. In the **Role name** field, give this role a name. Click the blue **Create role** button.  
3. In the AWS Console, navigate to the `EC2` service. Click **Running Instances**. Click on name of the instance that is associated with your Cloud9 environment for this course (it should indicate that it's highlighted with a blue background and a blue filled check button); the naming convention for Cloud9 EC2 instances is `aws-cloud9-` + the name of your C9 environment + some identifier string. Click the **Actions** dropdown. In the **Instance Settings** menu, select **Attach/Replace IAM Role**. In the **IAM role** dropdown, select the role you created in the previous step. Click the blue **Apply** button.  
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
