## App Demo: Final Assignments 1, 2, and 3

Using:

* Node.js (in Cloud 9, for now. Deployment options covered later.)  
* [Express](https://expressjs.com/)  

### Final Assignment 1: AA Map

Using: 

* A [mapbox account](https://account.mapbox.com/)  
* [Leaflet](https://leafletjs.com/examples/quick-start/)  
* [Moment](https://momentjs.com/timezone/docs/) (for working with Time Zones)

### Final Assignment 2: Sensor Data

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


