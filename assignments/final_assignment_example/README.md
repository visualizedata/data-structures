# example final project
	
This example shows a working AA Meeting map, viewable at:    
**[http://34.239.177.221:8080/aa](http://34.239.177.221:8080/aa)**	

This code can be adapted for your own map and also for the other two final assignments (*Dear Diary* and *sensor data*). It builds on all 11 of the weekly assignments. The only addition is the use of [Leaflet](https://leafletjs.com/) (*an open-source JavaScript library for mobile-friendly interactive maps*; I recommend [this quick start guide](https://leafletjs.com/examples/quick-start/)) to render the map and map points with relevant meeting data.  

[`server.js`](https://github.com/visualizedata/data-structures/blob/master/assignments/final_assignment_example/server.js) shows how responses to requests for `/aa` are handled:  

* The SQL query parameters are built with `Date.now()` in JavaScript (to get the current day and hour) in order to query for meetings that are on the current day of the week and are either in progress or will occur later in the day.  
* The query is passed to my AWS RDS Postgres database.  
* The results from the query are used to build the HTML and JavaScript for the response to the request for `/aa`.  
* The associated static files are stored in `/public`: `index.html` and `css/styles.css`.  As well as any other files you might create in building the map.  

  