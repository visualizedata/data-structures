## Code Demo: Final Assignments 1, 2, and 3

### Final Assignment 1: AA Map

Demo app running at: **[http://52.201.231.58:8080/aa](http://52.201.231.58:8080/aa)**

Using: 

* A [mapbox account](https://account.mapbox.com/)  
* [Leaflet](https://leafletjs.com/examples/quick-start/)  
* [Moment](https://momentjs.com/timezone/docs/) (for working with Time Zones)

### Final Assignment 2: Sensor Data

Demo app running at: **[http://52.201.231.58:8080/temperature](http://52.201.231.58:8080/temperature)**

Using: 

* [D3.js (version 3)](https://github.com/d3/d3-3.x-api-reference/blob/master/API-Reference.md)
* [Handlebars](https://handlebarsjs.com/) (for [templating](https://github.com/visualizedata/data-structures/blob/master/final_code_demo/templates/sensor.txt))

```javascript
app.get('/temperature', function(req, res) {

    // Connect to the AWS RDS Postgres database
    const client = new Pool(db_credentials);

    // SQL query 
    var q = `SELECT EXTRACT(DAY FROM sensorTime) as sensorday,
             AVG(sensorValue::int) as num_obs
             FROM sensorData
             GROUP BY sensorday
             ORDER BY sensorday;`;

    client.connect();
    client.query(q, (qerr, qres) => {
        if (qerr) { throw qerr }
        else {
            res.end(template({ sensordata: JSON.stringify(qres.rows)}));
            client.end();
            console.log('1) responded to request for sensor graph');
        }
    });
}); 
```


### Final Assignment 3: Process Blog

Demo app running at: **[http://52.201.231.58:8080/processblog](http://52.201.231.58:8080/processblog)**

Using: 

* [JQuery](https://jquery.com/)  
* [Handlebars](https://handlebarsjs.com/) for the [template](https://github.com/visualizedata/data-structures/blob/master/final_code_demo/templates/pb.txt)  
* [AWS SDK for JavaScript](https://aws.amazon.com/sdk-for-node-js/)  

```javascript
app.get('/processblog', function(req, res) {
    // AWS DynamoDB credentials
    AWS.config = new AWS.Config();
    AWS.config.region = "us-east-1";

    // Connect to the AWS DynamoDB database
    var dynamodb = new AWS.DynamoDB();

    // DynamoDB (NoSQL) query
    var params = {
        TableName : "processblog-new",
        KeyConditionExpression: "pk = :primaryKey", // the query expression
        ExpressionAttributeValues: { // the query values
            ":primaryKey": {S: "teaching"}
        }
    };

    dynamodb.query(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            throw (err);
        }
        else {
            res.end(pbtemplate({ pbdata: JSON.stringify(data.Items)}));
            console.log('3) responded to request for process blog data');
        }
    });
});
```

#### Known issue

[https://aws.amazon.com/premiumsupport/knowledge-center/security-token-expired/](https://aws.amazon.com/premiumsupport/knowledge-center/security-token-expired/)

> *Another reason for expiration is using the incorrect time. A consistent and accurate time reference is crucial for many server tasks and processes. If your instance's date and time aren't set correctly, the AWS credentials might be rejected.*

```
0|app      |     at Request.callListeners (/home/ec2-user/node_modules/aws-sdk/lib/sequential_executor.js:116:18)
0|app      |   message: 'The security token included in the request is expired',
0|app      |   code: 'ExpiredTokenException',
0|app      |   time: 2019-12-11T14:30:55.508Z,
0|app      |   requestId: 'H5G8J4KVKCO261D8ANEILAJ237VV4KQNSO5AEMVJF66Q9ASUAAJG',
0|app      |   statusCode: 400,
0|app      |   retryable: true }
```

**fix/workaround:** 

```javascript
    dynamodb.query(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            throw (err);
        }
```