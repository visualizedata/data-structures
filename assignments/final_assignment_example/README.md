# example final project
	
This example shows a working AA Meeting map, viewable at:    
**[http://34.239.177.221:8080/aa](http://34.239.177.221:8080/aa)**	

This code can be adapted for your own map and also for the other two final assignments (*Dear Diary* and *sensor data*). It builds on all 11 of the weekly assignments. The only addition is the use of [Leaflet](https://leafletjs.com/) (*an open-source JavaScript library for mobile-friendly interactive maps*; I recommend [this quick start guide](https://leafletjs.com/examples/quick-start/)) to render the map and map points with relevant meeting data.  

[`server.js`](https://github.com/visualizedata/data-structures/blob/master/assignments/final_assignment_example/server.js) shows how responses to requests for `/aa` are handled:  

* The SQL query parameters are built with `Date.now()` in JavaScript (to get the current day and hour) in order to query for meetings that are on the current day of the week and are either in progress or will occur later in the day.  
* The query is passed to my AWS RDS Postgres database.  
* The results from the query are used to build the HTML and JavaScript for the response to the request for `/aa`.  
* The associated static files are stored in `/public`: `index.html` and `css/styles.css`.  As well as any other files you might create in building the map.  

## making your work available to others over the internet 
  
AWS Cloud9 does not, by default, make applications available to others over the internet. The "Preview" functionality makes your running application viewable by **you only**. In order to make your visualizations available publicly, you may do one of the following:    
  
1. [Modify your Cloud9 instance to be available to others over the internet](https://docs.aws.amazon.com/cloud9/latest/user-guide/app-preview.html?icmpid=docs_ac9_ide#app-preview-share).  
2. Move your work to [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/). *AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS. You can simply upload your code and Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring. At the same time, you retain full control over the AWS resources powering your application and can access the underlying resources at any time. There is no additional charge for Elastic Beanstalk - you pay only for the AWS resources needed to store and run your applications.*

