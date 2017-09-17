# Weekly Assignment 4

### Due 9/25 at 4:00pm

You're going to continue working with the data you scraped, parsed, and augmented in the previous three assignments. **Note: this assignment is worth 6 points instead of the usual 4 points.**

## Setup

MongoDB is preinstalled for every Cloud 9 workspace. But, it requires some initial setup:  
[Instructions for setting up MongoDB in your Cloud 9 workspace](https://community.c9.io/t/setting-up-mongodb/1717)

**After the initial setup (which only needs to be done once), complete these steps each time you want to run and use Mongo in Cloud 9:**  
1. Open a new terminal window in your Cloud 9 workspace and run the command `./mongod` This will continue to run in the background.   
2. Open another new terminal window and run the command `mongo`. This gives you access to the Mongo shell. 

## Assignment

### Part One

Using the Hills text as a starting point (but feel free to strike out on your own), draw a data model for the AA meetings data to be stored in a database. Include all the content/data/variables from the source file that you believe to be relevant, even if you haven't parsed it yet. Upload an image (`png` format) of your drawing to your GitHub repository.  

Some decisions that will help with this drawing:  
1. Will you use a [Normalized Data Model](https://docs.mongodb.com/manual/core/data-model-design/#normalized-data-models) or a Denormalized Data Model? Why?  
2. If you use a Denormalized Data Model, will you use [embedding](https://docs.mongodb.com/manual/core/data-model-design/#embedded-data-models) or [not](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-2)? Why?  
3. When the data comes back out of the database, how should it be structured? Why?  
4. How would you describe the hierarchy of the data?  

### Part Two

1. In the Mongo shell, create and switch to a new database for the data you prepared in the previous assignment.  
2. In this new database, create a new collection that will hold a "document" (JSON style data structure) for each "meeting" (however you decide to structure and represent meetings, groups, and/or locations).
3. Use the mongodb module in Node to insert these documents to the collection you created in the database you created. Hint: check to make sure you have the correct number of documents!  
4. Update your GitHub repository with the relevant file(s). In Canvas, submit the URL of the specific location of this work within your `data-structures` GitHub repository. 

## Starter Code

#### Mongo shell: 

*After completing the setup:*

I am creating a new *database* named **citibike** and/or switching to a *database* named **citibike** with this command in the Mongo shell:  
`use citibike`

I am creating a *collection* named **stations** in the citibike database with this command in the Mongo shell:  
`db.createCollection('stations')`

#### Node.js:

```javascript
// npm install mongodb

var request = require('request');

// IN MONGO exists a database `citibike` with a collection `stations`
var dbName = 'citibike'; // name of Mongo database (created in the Mongo shell)
var collName = 'stations'; // name of Mongo collection (created in the Mongo shell)

// Request the JSON data on citibike stations
// Insert the list of citibike stations (contained in an array) in the Mongo collection
request('https://www.citibikenyc.com/stations/json', function(error, response, body) {
    var stationData = JSON.parse(body);

    // Connection URL
    var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

    // Retrieve
    var MongoClient = require('mongodb').MongoClient; 

    MongoClient.connect(url, function(err, db) {
        if (err) {return console.dir(err);}

        var collection = db.collection(collName);

        // THIS IS WHERE THE DOCUMENT(S) IS/ARE INSERTED TO MONGO:
        collection.insert(stationData.stationBeanList);
        db.close();

    }); //MongoClient.connect

}); //request
```

#### Other helpful Mongo shell commands:

A query to return the contents of the entire **stations** collection with this command in the Mongo shell:    
`db.stations.find()`

Count the number of documents in the **stations** collection with this command in the Mongo shell:    
`db.stations.find().count()`

Empty the entire contents of the **stations** collection without deleting the collection:  
`db.stations.remove({})`

#### Documentation

* [MongoDB Manual](https://docs.mongodb.com/manual/)
* [MongoDB data types](https://docs.mongodb.com/manual/core/document/) (documents)
* [MongoDB Data Models](https://docs.mongodb.com/manual/core/data-modeling-introduction/)
* [MongoDB's take on denormalization](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-2)
* [Node mongodb module](https://www.npmjs.com/package/mongodb)
