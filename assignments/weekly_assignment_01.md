# Initial Setup

Create a new [GitHub](https://github.com/) repository and name it `data-structures`  
All of your work for this class should be kept in this (well-organized!) repository.

# Weekly Assignment 1

### Due Friday 9/14 at 2:00pm

## Part One

*50% of grade for this assignment. 2/4 points.*

1. Using Node.js (in Cloud 9), make a request for each of the ten "Meeting List Agenda" pages for Manhattan:  
```
https://parsons.nyc/aa/m01.html  
https://parsons.nyc/aa/m02.html  
https://parsons.nyc/aa/m03.html  
https://parsons.nyc/aa/m04.html  
https://parsons.nyc/aa/m05.html  
https://parsons.nyc/aa/m06.html  
https://parsons.nyc/aa/m07.html  
https://parsons.nyc/aa/m08.html  
https://parsons.nyc/aa/m09.html  
https://parsons.nyc/aa/m10.html   
```

2. Using Node.js: For each of the ten files you requested, save the body as a **text file** to your "local" environment (either on your own laptop or in AWS Cloud9).

3. Study the HTML structure and tags and begin to think about how you might parse these files to extract relevant data for these AA meetings.

4. Update your GitHub repository with the relevant files: your `js` file and ten `txt` files. In Canvas, submit the URL of the specific location of this work within your `data-structures` GitHub repository. 

## Starter code

```javascript
// npm install request
// mkdir data

var request = require('request');
var fs = require('fs');

request('https://parsons.nyc/aa/m01.html', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('/home/ec2-user/environment/data/m01.txt', body);
    }
    else {console.log("Request failed!")}
});
```

#### Documentation: 

* [What is `npm`?](https://docs.npmjs.com/getting-started/what-is-npm)  
* [Node request module](https://www.npmjs.com/package/request)  
* [Node fs module](https://nodejs.org/api/fs.html)  

## Part Two

*50% of grade for this assignment. 2/4 points.*

Complete [this form](https://goo.gl/forms/AEKicmVbIg7ribC73). 