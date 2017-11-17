# model for final submission

This is an example of a final app that is running on your EC2 instance to submit your work on final assignments one and two. 

This example assumes that your two databases (PostgreSQL on AWS RDS and MongoDB on the MSDV cluster) are complete. 

The [migrating_to_mongo_cluster](https://github.com/visualizedata/data-structures/tree/master/assignments/final_assignments/migrating_to_mongo_cluster) directory contains an example of how you might migrate your parsed, cleaned AA data to your database on the MSDV Mongo cluster.

[`app.js`](https://github.com/visualizedata/data-structures/blob/master/assignments/final_assignments/app.js) runs your Node web server on your EC2 instance. `index1.txt` and `index3.txt` are read in the `app.js` file to be used in constructing the response to requests for the AA meeting map. 

The final submission would include a URL to the endpoint for your designed interface to the sensor data visualization:  
[http://ec2-54-89-140-69.compute-1.amazonaws.com:3000/](http://ec2-54-89-140-69.compute-1.amazonaws.com:3000/)

...and also a URL to your AA meeting map:  
[http://ec2-54-89-140-69.compute-1.amazonaws.com:3000/aa](http://ec2-54-89-140-69.compute-1.amazonaws.com:3000/aa)