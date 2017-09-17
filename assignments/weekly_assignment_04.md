# DRAFT

# Weekly Assignment 4

### Due 9/25 at 4:00pm

You're going to continue working with the data you scraped, parsed, and augmented in the previous three assignments.

## Setup

MongoDB is preinstalled for every Cloud 9 workspace. But, it requires some initial setup:  
[Instructions for setting up MongoDB in your Cloud 9 workspace](https://community.c9.io/t/setting-up-mongodb/1717)

**After initial setup (which only needs to be done once), complete these steps each time you want to run and use Mongo:**  
1. Open a new terminal window in your Cloud 9 workspace and run the command `./mongod` This will continue to run in the background.   
2. Open another new terminal window and run the command `mongo`. This gives you access to the Mongo shell. 

## Assignment

### Part One

Thinking of 

### Part Two

1. In the Mongo shell, create and switch to a new database for the data you prepared in the previous assignment.  
2. In this new database, create a new collection that will hold a "document" (JSON style data structure) for each "meeting" (however you decide to structure and represent meetings, groups, and or locations).
3. Use the mongodb module in Node to insert these documents to the collection you created in the database you created. Hint: check to make sure you have the correct number of documents!  
4. Update your GitHub repository with the relevant file(s). In Canvas, submit the URL of the specific location of this work within your `data-structures` GitHub repository. 

## Starter Code

```javascript
console.log('hello, world');
```

#### Documentation

* [MongoDB Manual](https://docs.mongodb.com/manual/)
* [MongoDB data types](https://docs.mongodb.com/manual/core/document/) (documents)
* [MongoDB Data Models](https://docs.mongodb.com/manual/core/data-modeling-introduction/)
* [MongoDB's take on denormalization](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-2)
* [MongoDB inserting documents](https://docs.mongodb.com/manual/tutorial/insert-documents/)
* [Setting up MongoDB in Cloud 9](https://community.c9.io/t/setting-up-mongodb/1717)
* [Node mongodb module](https://www.npmjs.com/package/mongodb)
