var express = require('express'), // npm install express
    app = express();

app.get('/', function(req, res) {
   res.send(`<h1>hello, world!</h1>`);
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
