var express = require('express'), // npm install express
    app = express();

var landingPage = `<h1>hello, world!</h1>
<ul>
<li><a href="cats.html">About cats</a></li>
<li><a href="/sensor">Sensor page</a></li>
</ul>
`;

app.get('/', function(req, res) {
   res.send(landingPage);
});

app.get('/sensor', function(req, res) {
    res.send('<h3>this is the page for my sensor data</h3>');    
});

// serve static files in /public
app.use(express.static('public'));

// listen on port 8080
app.listen(8080, function() {
    console.log('Server listening...');
});