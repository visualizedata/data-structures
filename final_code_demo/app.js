var express = require('express'), 
    app = express();
const { Pool } = require('pg');
var AWS = require('aws-sdk');
const moment = require('moment-timezone');

// AWS RDS credentials
var db_credentials = new Object();
db_credentials.user = process.env.AWSRDS_DBUSERNAME; // DB username
db_credentials.host = process.env.AWSRDS_EP; // RDS endpoint
db_credentials.database = process.env.AWSRDS_DBNAME; // DB name
db_credentials.password = process.env.AWSRDS_PW; // DB password
db_credentials.port = 5432;

// create templates
var hx = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AA Meetings</title>
  <meta name="description" content="Meetings of AA in Manhattan">
  <meta name="author" content="AA">
  <link rel="stylesheet" href="css/styles.css?v=1.0">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
       integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
       crossorigin=""/>
</head>
<body>
<div id="mapid"></div>
<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
   integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
   crossorigin=""></script>
  <script>
  var data = 
  `;
  
var jx = `;
    var mymap = L.map('mapid').setView([40.734636,-73.994997], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);

    for (var i=0; i<data.length; i++) {
        L.marker( [data[i].lat, data[i].lon] ).bindPopup(JSON.stringify(data[i].meetings)).addTo(mymap);
    }
    </script>
    </body>
    </html>`;

// respond to requests for /aameetings
app.get('/aa', function(req, res) {

    var now = moment.tz(Date.now(), "America/New_York"); 
    var dayy = now.day().toString(); 
    var hourr = now.hour().toString(); 

    // Connect to the AWS RDS Postgres database
    const client = new Pool(db_credentials);
    
    // SQL query 
    var thisQuery = `SELECT lat, lon, json_agg(json_build_object('loc', mtglocation, 'address', mtgaddress, 'time', tim, 'name', mtgname, 'day', day, 'types', types, 'shour', shour)) as meetings
                 FROM aadatall 
                 WHERE day = ` + dayy + 'and shour >= ' + hourr + 
                 `GROUP BY lat, lon
                 ;`;

    client.query(thisQuery, (qerr, qres) => {
        if (qerr) { throw qerr }
        
        else {
            var resp = hx + JSON.stringify(qres.rows) + jx;
            res.send(resp);
            client.end();
            console.log('AA) responded to request for aa meeting data');
        }
    });
});

app.get('/temperature', function(req, res) {
    res.send(`<h3>Code demo Wednesday, December 4</h3>
    <h4>Sample SQL Query:</h4>
    <p>SELECT EXTRACT(DAY FROM sensorTime) as sensorday, <br>
             AVG(sensorValue::int) as num_obs <br>
             FROM sensorData <br>
             GROUP BY sensorday <br>
             ORDER BY sensorday;</p>`);
}); 

app.get('/processblog', function(req, res) {
    res.send('<h3>Code demo Wednesday, December 11</h3>');
}); 

// serve static files in /public
app.use(express.static('public'));

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

// listen on port 8080
app.listen(8080, function() {
    console.log('Server listening...');
});