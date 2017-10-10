# Final Assignment 1

## Due Monday 12/11 at 4:00pm

You will expand on weekly assignments one through six to scrape New York's AA Meeting List to capture, clean, and store all meetings in Manhattan (zones one through ten). The meetings data should be stored in MongoDB and queried using the aggregation pipeline. You will use the [Google Maps API](https://developers.google.com/maps/documentation/javascript/) to display relevant meetings as [map markers](https://developers.google.com/maps/documentation/javascript/examples/marker-simple), with [Info windows](https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple) that show all relevant information about the meeting(s) at each marker. [Here's an example, showing one meeting group](http://visualizedata.github.io/datastructures/perrystreet.html). 

The ten "Meeting List Agenda" pages for Manhattan are available at:  
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

### Some questions that may arise as you bind the data to the end-user interface:

1. What information does the end user need? How? Why?  
2. From the data on AA's meeting list, which data is relevant for display in this project? How should it be displayed?  
3. What does a map marker represent? A meeting group? A meeting? A location?  
4. What is the minimum amount of data that can be queried to provide the necessary data for the visual representation?  

### Your work will be assessed on:

1. The integrity of the data  
2. The integrity of the database  
3. The efficiency of the queries and page load  
4. The choices of data structures  
5. The inclusion of relevant data  
6. The coherence and organization of your code and repository  
7. The method for binding the data to the visual representation  