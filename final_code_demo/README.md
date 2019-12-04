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


