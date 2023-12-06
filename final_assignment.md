# Final Assignment

You will expand on the weekly assignments to scrape all ten zones of New York's AA Meeting List to capture, clean, and store all meetings in Manhattan (zones one through ten). The meetings [data should be read into DuckDB in an Observable Notebook and queried using SQL. You will use MapBox](https://observablehq.com/@aaronxhill/integrating-duckdb-user-inputs-and-mapbox) (or similar mapping services) to display relevant meetings as map markers with popups that show all relevant information about the meeting(s) at each marker.  

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

### Checklist of Deliverables:

1. All work for the final assignment submission should be included in an Observable Notebook. To include other files (including code, documentation, context, etc.), link to them in your Observable Notebook.  
2. The Observable Notebook should have a reasonable bare minimum of relevant user inputs for the parameters you wish to include in your map/visualization design.  
3. The values for those user inputs should be passed to your DuckDB query.  
4. The result of the DuckDB query should populate the map markers as well as any metadata that will be shown with each of the map markers.  
5. Anyone arriving at your Observable Notebook should be able to find and adjust user inputs and get a refreshed map/visualization showing meetings and data for the meetings that match the criteria set by the user.  

### Your work will be assessed on:

1. The integrity of the data  
2. The integrity of the database  
3. The efficiency of the queries and page load  
4. The choices of data structures  
5. The inclusion of relevant data  
6. The coherence and organization of your code and repository  
7. The method for binding the data to the visual representation  