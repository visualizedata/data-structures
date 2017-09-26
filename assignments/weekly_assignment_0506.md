# Weekly Assignment 5/6

### Due 10/9 at 4:00pm

Finish parsing and cleaning the rest of the data in your "zone" (the zone that corresponds with the last digit of your student ID number), and update/replace your MongoDB collection. You will then query data from the NoSQL database you have created, restructuring the data in the process. **Note: this combined week 5/6 assignment is worth 6 points.**

### Part One

*For the zone you were assigned:*  
Go back to the raw file you collected in Weekly Assignment 1 and finish parsing the rest of the file (that you started in Weekly Assignment 2). Parse and clean **all** relevant data that you will need to map and display the AA meetings for your zone. Make sure everything is geocoded (Weekly Assignment 3) and replace the collection you wrote in Weekly Assignment 4 with the new, complete (and **cleaned!**) data. 

### Part Two

Using the MongoDB [aggregation pipeline](https://docs.mongodb.com/manual/meta/aggregation-quick-reference/), write a query/aggregation that returns all meetings in your zone that begin on Tuesdays at or after 7:00pm. Include relevant information about the meeting group, the location, special instructions, and details about the meetings. The result should **not contain** meetings on other days and meetings that begin before 7:00pm on Tuesdays. 

### Submission

Update your GitHub repository with the relevant file(s), including your Node script and a JSON file of the output of your aggregation. In Canvas, submit the URL of the specific location of this work within your `data-structures` GitHub repository. 

## Starter Code

```javascript
var fs = require('fs');

var dbName = 'citibike';
var collName = 'stations';

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// Retrieve
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
    if (err) {return console.dir(err);}

    var collection = db.collection(collName);

    // Select three Citibike stations
    collection.aggregate([{ $limit : 3 }]).toArray(function(err, docs) {
        if (err) {console.log(err)}
        
        else {
            console.log("Writing", docs.length, "stations as a result of this aggregation.");
            fs.writeFileSync('mongo_aggregation_result.JSON', JSON.stringify(docs));
        }
        db.close();
        
    });

}); //MongoClient.connect
```

#### Documentation

* [MongoDB queries](https://docs.mongodb.com/manual/tutorial/query-documents/)  
* [MongoDB aggregation](https://docs.mongodb.com/manual/aggregation/)  
* [aggregation quick reference](https://docs.mongodb.com/manual/meta/aggregation-quick-reference/)  
* [SQL to MongoDB Mapping Chart](https://docs.mongodb.com/manual/reference/sql-comparison/) (helpful if you already know SQL)