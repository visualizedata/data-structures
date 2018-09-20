# Weekly Assignment 3

### Due 9/18 at 4:00pm

Continue work on the file you parsed in Weekly Assignment 2. If you haven't already, organize your data into a [JSON format](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) so that it will be easier to access the data for your work on this assignment.  
[[GIST: pushing to an array](https://gist.github.com/aaronxhill/38067bb58805896fdbb5)]

Write a script that makes a request to the Google Maps API for each address, using the address data you parsed in Weekly Assignment 2. You'll need to do some work on the address data (using code!) to prepare them for the API queries. For example, the parsed value `50 Perry Street, Ground Floor,` should be modified to `50 Perry Street, New York, NY`. And for use in the Google Maps API, it should be further modified to `50+Perry+Street,+New+York,+NY`. The addresses are messy and may yield weird results from the API response. Don't worry too much about this right now. But, start to think about it; in a later assignment we'll have to clean these up.  
[[GIST: modifying this address data in preparation for the Google Maps API](https://gist.github.com/aaronxhill/e44cade3e426349470b5)]

Your final output should be an **array** that contains an object for each meeting. The array should have a length equal to the number of meetings. Each object should hold the relevant data for each meeting. For now, we're focusing on the addresses and geographic coordinates. An example:  
`[ { address: '63 Fifth Ave, New York, NY', 
latLong: { lat: 40.7353041, lng: -73.99413539999999 } }, 
{ address: '16 E 16th St, New York, NY', 
latLong: { lat: 40.736765, lng: -73.9919024 } },
{ address: '2 W 13th St, New York, NY', 
latLong: { lat: 40.7353297, lng: -73.99447889999999 } } ]`

Save the array as a text file.

Be mindful of:  
* API rate limits  
* Asyncronous JavaScript (but don't overuse `setTimeout`)  
* Keeping your API key off of GitHub (use a Linux environment variable instead)  
* Keeping only the data you need from the API response, not all the data  

Update your GitHub repository with the relevant file(s). In Canvas, submit the URL of the specific location of this work within your `data-structures` GitHub repository. 

## Starter Code

### Setting environment variables in Linux

Environment variables help keep APIs secret (and off of GitHub!).  Here's a way to create a new environment variable in each session: 

```
export NEW_VAR="Content of NEW_VAR variable"
printenv | grep NEW_VAR
```

Now you can use the environment variable in Node.js with `process.env`:

```javascript
var newVar = process.env.NEW_VAR;
```

However, this creates an ephemeral variable. There are [ways to create permanent environment variables](https://www.npmjs.com/package/dotenv). 

### Node.js script

```javascript
var request = require('request'); // npm install request
var async = require('async'); // npm install async

var apiKey = process.env.GMAKEY;

var meetingsData = [];
var addresses = ["63 Fifth Ave, New York, NY", "16 E 16th St, New York, NY", "2 W 13th St, New York, NY"];

// eachSeries in the async module iterates over an array and operates on each item in the array in series
async.eachSeries(addresses, function(value, callback) {
    var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value.split(' ').join('+') + '&key=' + apiKey;
    var thisMeeting = new Object;
    thisMeeting.address = value;
    request(apiRequest, function(err, resp, body) {
        if (err) {throw err;}
        thisMeeting.latLong = JSON.parse(body).results[0].geometry.location;
        meetingsData.push(thisMeeting);
    });
    setTimeout(callback, 2000);
}, function() {
    console.log(meetingsData);
});
```

#### Documentation

* [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial)
* [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/intro)
* [Node Async module](http://caolan.github.io/async/)
* [Tutorial: creating and using environment variables in Linux](https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps).
