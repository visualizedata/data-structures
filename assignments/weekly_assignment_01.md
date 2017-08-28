# Initial Setup

Create a new GitHub repository and name it `data-structures`  
All of your work for this class should be kept in this (well-organized!) repository.

# Weekly Assignment 1

### Due Monday 9/4 at 4:00pm

1. Using Node.js (in Cloud 9), make a request for each of the ten "Meeting List Agenda" pages for Manhattan:  
```
http://visualizedata.github.io/datastructures/data/m01.html  
http://visualizedata.github.io/datastructures/data/m02.html  
http://visualizedata.github.io/datastructures/data/m03.html  
http://visualizedata.github.io/datastructures/data/m04.html  
http://visualizedata.github.io/datastructures/data/m05.html  
http://visualizedata.github.io/datastructures/data/m06.html  
http://visualizedata.github.io/datastructures/data/m07.html  
http://visualizedata.github.io/datastructures/data/m08.html  
http://visualizedata.github.io/datastructures/data/m09.html  
http://visualizedata.github.io/datastructures/data/m10.html  
```

2. For each of the ten files you requested, save the body as a text file to your "local" environment in Cloud9 (using Node.js)

3. Study the HTML structure and begin to think about how you might parse these files (Document Object Model) to extract the relevant data for each meeting.

4. Update your GitHub repository with the relevant file(s)

## Starter code

```javascript
var request = require('request');
var fs = require('fs');

request('http://visualizedata.github.io/thesis/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/data/thesis.txt', body);
  }
  else {console.error('request failed')}
})
```