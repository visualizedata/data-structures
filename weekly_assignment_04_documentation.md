# Instructions for Creating a PostgreSQL DB Instance in AWS

## Setup

*These steps only need to be completed once, to set up your instance.* 

1. Use your AWS account credentials to log in to the [AWS Console](https://console.aws.amazon.com/console/home?region=us-east-1). **IMPORTANT: Use the account affiliated with your AWS Educate account; do this by logging into AWS Educate and clicking the blue "AWS Console" button to launch that account.**    
2. The console shows a long list of AWS services. Find and click on the **RDS** service.  
3. In the left-hand column, click **Databases**.  
4. Click the orange **Create database** button.  
5. Make the following changes on this page; for the sections/options that aren't mentioned in this instruction, leave the default settings. In the **Choose a database creation method** section, click the **Standard Create** radio button. In the **Engine options** section, click the **PostgreSQL** radio button. In the **Templates** section, click the **Free tier** radio button. In the **Settings** section in the **DB instance identifier** field, enter this name: `data-structures`. In the **Master username** field, enter a username that is easy for you to remember. In the **Master password** and **Confirm password** fields, enter a secure password that is easy for you to remember. **Keep track of your username and password. You'll need them later!** Expand the **Additional configuration** section and in the **Initial database name** field, enter `aa`. Finally, click the orange **Create database** button.   

It will take a few minutes for AWS to create your DB instance. It is available for use when the status is **available**. When it is **available**, complete the following steps to access the instance:

## Setting up a way to access your instance

*These steps only need to be completed once, to set up access to your instance.* 

1. Click on your instance to reveal its metadata and options.  
2. In the **Connectivity & security** section, copy the **Endpoint**. The endpoint is the address for communicating with the database. You'll need it in your Node.js scripts (along with your database name, username, and password). Under the **Security** header, click the URL directly beneath the **VPC security groups** subheading (it should look something like this: `default (sg-01234567)`) Click on that security group row and then click the **Inbound** tab. Click the **Edit** button. Click the **Add Rule** button. In the new row at the bottom, in the **Type** dropdown, select **PostgreSQL** and under **Source** select **Anywhere** from the drop-down menu. Click the blue **Save** button.  
3. You are now ready to connect to your new database. 