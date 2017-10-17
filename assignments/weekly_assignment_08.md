# Weekly Assignment 8

### Due 10/23 at 4:00pm

Continue working with your sensors.

Decide how you will structure data from your sensors into a table (or multiple tables) in a SQL database. Use these decisions to define a data model/schema for your table(s). Be very specific about the [data types](https://www.postgresql.org/docs/9.4/static/datatype.html) you will use for each column. Your data model/schema should plan for a normalized relational database.

## Setup and preparation

Cloud 9 is for prototyping. We will start moving away from this environment, [toward a more stable infrastructure](https://github.com/visualizedata/infrastructure). If you haven't yet already, create an account for [Amazon Web Services](https://aws.amazon.com/). Also sign up for [AWS Educate](https://aws.amazon.com/education/awseducate/), which will entitle you to $100 in AWS credits. 

You will use Amazon Web Services to host your PostgreSQL database server. Complete steps one and two in [this guide for setting up Amazon Relational Database Service](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SettingUp.html). Step one is "Sign Up for AWS." Step two is "Create an IAM User." Follow the instructions for these two steps; it should take about 30 minutes. 

If you are new to SQL, complete [this tutorial](https://www.codeschool.com/courses/try-sql).

## Assignment 

Create a [PostgreSQL database with Amazon Relational Database Service (RDS)](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreatePostgreSQLInstance.html).

In a Cloud 9 terminal, use `[psql](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ConnectToPostgreSQLInstance.html#USER_ConnectToPostgreSQLInstance.psql)` to:  
Write and run a SQL statement that creates a table in this database. Use the schema/data model that you created in the previous assignment to determine data types for each column. EXAMPLE:  
```
CREATE TABLE buttonData (
message varchar(40),
buttonTime timestamp DEFAULT current_timestamp);
```

Write and run a SQL statement that inserts a row into this table. The row should include fictitious values that you would expect to get from a reading from your sensor. EXAMPLE:  
```
INSERT INTO buttonData VALUES ('hello, button', DEFAULT);
```

### Submission

In Canvas, submit the URL of the specific location of this work within your `data-structures` GitHub repository. It should include:  
1. an articulation of your data model  
2. the SQL code you used to create your table(s) and insert a row of values into the table(s)
