# Instructions for Creating a PostgreSQL DB Instance in AWS

## Setup

*These steps only need to be completed once, to set up your instance.* 

1. Use your AWS account credentials to log in to the [AWS Console](https://console.aws.amazon.com/console/home?region=us-east-1).  
2. The console shows a long list of AWS services. Find and click on the **RDS** service.  
3. In the left-hand column, click **Instances**.  
4. Click the orange **Create database** button.  
5. Click the **PostgreSQL** radio button.   
6. Click the orange **Next** button.  
7. Click the **Dev/Test** radio button then click the orange **Next** button.  
8. Click the checkbox that says **Only enable options eligible for RDS Free Usage Tier**. Under the **Settings** section, complete all the fields to give your database a DB instance identifier, a username, and a password. **Keep track of your username and password. You'll need them later** Then click the orange **Next** button.  
9. On the **Configure Advanced Settings** page, only complete the field **Database name**: enter a name for your database and make a note of it. Keep all other default settings. Click the orange **Create database** button.  
10. Click the orange **View DB instance details** button.  

It will take a few minutes for AWS to create your DB instance. It is available for use when the status is **available**. When it is **available**, complete the following steps to access the instance:

## Setting up a way to access your instance

1. Click on your instance to reveal its metadata and options.  
2. In the **Details** section, copy the **Endpoint**. The endpoint is the address for communicating with the database. You'll need it in your Node.js scripts (along with your database name, username, and password).    
3. Under **Security groups**, click the URL to open the *drs-launch-wizard* security group.   
4. From the tabs on the bottom of the screen, click **Inbound**.  
5. Click the **Edit** button.  
6. Under **Source** select **Anywhere** from the drop-down menu. Click the blue **Save** button.  