# Instructions for Creating a PostgreSQL DB Instance in AWS

## Setup

*These steps only need to be completed once, to set up your instance.* 

1. Use your AWS account credentials to log in to the [AWS Console](https://console.aws.amazon.com/console/home?region=us-east-1).  
2. The console shows a long list of AWS services. Find and click on the **RDS** service.  
3. In the left-hand column, click **Instances**.  
4. Click the blue **Launch DB Instance** button.  
5. Click the **PostgreSQL** tab.   
6. Click the blue **Select** button.  
7. Click the **PostgreSQL** radio button under the heading **Dev/Test**. Then click the blue **Next Step** button.  
8. Click the checkbox that says **Only show options that are eligible for RDS Free Tier**. Under the section **Instance Specifications**, leave the default settings. Under the **Settings** section, complete all four fields and note the names and passwords you chose. Then click the blue **Next Steps** button.  
9. On the **Configure Advanced Settings** page, only complete the field **Database Name**, enter a name for your database and make a note of it. Keep all other default settings. Click the blue **Launch DB Instance** button.  
10. Click the blue **View Your DB Instances** button.  

It will take a few minutes for AWS to create your DB instance. It is available for use when the status is **available**. When it is **available**, complete the following steps to access the instance:

## Setting up a way to access your instance

1. Click on your instance to reveal its metadata and options.  
2. Copy the **Endpoint**. This is the address for communicating with the database.  
3. Click on the middle icon that reveals the **Configuration Details** at the top left. Under the section **Security and Network** next to **Security Groups**, click the link associated with the name of the security group (res-launch-wizard-)  
4. From the tabs on the bottom of the screen, click **Inbound**.  
5. Click the **Edit** button.  
6. Under **Source** select **Anywhere** from the drop-down menu. Click the blue **Save** button.  
7. Now you can write the `psql` command that will give you access to your DB instance. Here's an example of such a command:  
```
psql --host=mypostgresql.c6c8mwvfdgv0.us-west-2.rds.amazonaws.com --port=5432 --username=awsuser --password --dbname=mypgdb 
```  
But you'll need to change the following credentials:  
1. Replace the value for `host` with the **Endpoint** you copied when setting up a way to access your instance.  
2. Replace `username` value with the username you supplied in the **Setup** section. Note, this username is for the database. It may or may not be the same as the username for your AWS account, depending on what you named it in the **Setup** section.  
3. Replace the `dbname` value with the name of the database you supplied in the **Setup** section.  

## Access your instance

In a Cloud 9 terminal (or in your local terminal if you opt to [install Postgres on your computer](http://postgresguide.com/setup/install.html)), enter the `psql` command you wrote in the previous section. This gives you [shell access to your DB Instance in AWS](http://postgresguide.com/utilities/psql.html).  