# Weekly Assignment 8

### Due 10/23 at 4:00pm

Continue working with your sensors.

Decide how you will structure data from your sensors into a table (or multiple tables) in a SQL database. Use these decisions to define a data model/schema for your table(s). Be very specific about the [data types](https://www.postgresql.org/docs/9.4/static/datatype.html) you will use for each column. Your data model/schema should be for a normalized relational database.

## Setup and preparation

Cloud 9 is for prototyping. We will start moving away from this environment, [toward a more stable infrastructure](https://github.com/visualizedata/infrastructure). If you haven't yet already, create an account for [Amazon Web Services](https://aws.amazon.com/). Also sign up for [AWS Educate](https://aws.amazon.com/education/awseducate/), which will entitle you to $100 in AWS credits. 

You will use Amazon Web Services to host your PostgreSQL database server. Follow [these instructions](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_08_documentation.md) to set up and access an instance you will use for your SQL work in this class; the setup should take about 30 minutes to complete. 

If you are new to SQL, complete [this tutorial](https://www.codeschool.com/courses/try-sql).

## Assignment 

After completing all the setup and preparation in the previous section:

In a Cloud 9 terminal (or in your local terminal if you opt to [install Postgres on your computer](http://postgresguide.com/setup/install.html)), enter the `psql` command you wrote in the previous section. This gives you [shell access to your DB Instance in AWS](http://postgresguide.com/utilities/psql.html).  

In the Postgres shell, write and run a SQL statement that creates a table in this database. Use the schema/data model that you created in the previous assignment to determine data types for each column. EXAMPLE:  
```
CREATE TABLE buttonData (
message varchar(40),
buttonTime timestamp DEFAULT current_timestamp);
```

Write and run a SQL statement that inserts a single row into this table. The row should include fictitious values that you would expect to get from a reading from your sensors. EXAMPLE:  
```
INSERT INTO buttonData VALUES ('hello, button', DEFAULT);
```

### Submission

In Canvas, submit the URL of the specific location of this work within your `data-structures` GitHub repository. It should include:  
1. an articulation of your data model  
2. the SQL code you used to create your table(s) and insert a row of values into the table(s)
