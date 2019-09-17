# Final Assignment 1

## Due Monday 12/16 at 6:00pm

You will expand on weekly assignments 1, 2, 3, 4, 6, 7, 10, and 11 to scrape all ten zones of New York's AA Meeting List to capture, clean, and store all meetings in Manhattan (zones one through ten). The meetings data should be stored in PostgreSQL and queried using the `pg` module in Node. You will use [Leaflet](https://leafletjs.com/examples/quick-start/) to display relevant meetings as map markers with popups that show all relevant information about the meeting(s) at each marker. [Here's an example of a submission in a previous class](http://www.jaimetanner.com/main/18ukyau9e5ai0f9dfklrsuum4ld4rz). 

The ten "Meeting List Agenda" pages for Manhattan are available at:  
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