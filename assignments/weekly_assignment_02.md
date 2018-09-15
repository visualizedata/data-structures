# Weekly Assignment 2

### Due Friday 9/21 at 2:00pm

We will continue to work with the files you collected in Weekly Assignment 1. For this week, you will work with only one of the files; it will be determined by the last number of your New School ID. The last number of your ID corresponds with the AA Manhattan "zone" you are assigned. For example, if your ID is "N01234567", work with the Zone 7 file. If it is "N09876543", work with the Zone 3 file. If the last number of your New School ID ends with a "0", work with the Zone 10 file. 

1. Using Node.js, read the assigned AA text file that you wrote for last week's assignment. Store the contents of the file in a variable.

2. Ask yourself, "why are we reading this from a saved text file instead of making another request?"

3. Study the HTML structure of this file and began to think about how you might parse it to extract the relevant data for each meeting. Using this knowledge about its structure, write a program in Node.js that will write a new text file that contains the street address for **every** meeting in your assigned AA file. Make a decision about the [data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) you want to use to store this data in a file, knowing that you'll be working with this data again later. 

4. Update your GitHub repository with the relevant file(s); this should include a `.js` file(s) with your code and a `.txt` or other format file(s) with the addresses. In Canvas, submit the URL of the specific location of this work within your `data-structures` GitHub repository. **Note: this should be in a directory that contains only your work for this week.** 

## Starter Code  

```javascript
// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('data/thesis.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);

// print (to the console) names of thesis students
$('h3').each(function(i, elem) {
    console.log($(elem).text());
});

// write the project titles to a text file
var thesisTitles = ''; // this variable will hold the lines of text

$('.project .title').each(function(i, elem) {
    thesisTitles += ($(elem).text()) + '\n';
});

fs.writeFileSync('data/thesisTitles.txt', thesisTitles);
```

#### Documentation

* [Node cheerio module](https://www.npmjs.com/package/cheerio)
* [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)  
* [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)