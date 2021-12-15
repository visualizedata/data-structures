# AWS Shutdown Checklist

This is a checklist of AWS credentials and resources to terminate and/or remove so that you do not incur additional charges. Complete these steps shortly after you have received your final grade for the course. 

## IAM 

Go to [IAM in the AWS console](https://console.aws.amazon.com/iam). Click on "Users." For each of the users (for most of you, there should only be one user), click on the user name and then click the "Security credentials" tab. Under "Access keys," for each of them, click "Make inactive." (You may also delete them, if you prefer (this is safer), by clicking on the "x"). 

## Cloud 9

In your Cloud 9 environment, go to "Preferences" and under "EC2 Instance" under "Stop my environment" change this setting from "Never" to "After 30 minutes." 

You may also wish to delete your Cloud 9 environment if you don't need it anymore, but before doing so, make sure you have updated your repository with all the code from this course that you would like to keep. 

## RDS

Go to [RDS in the AWS console](https://console.aws.amazon.com/rds). Under "Databases," delete all databases that you no longer wish to use. **Do this for all regions.** 

## DynamoDB

Go to [DynamoDB in the AWS console](https://console.aws.amazon.com/dynamodb). Under "Tables," delete all tables that you no longer wish to use. **Do this for all regions.** 

## Elastic Beanstalk

If you used Elastic Beanstalk for your application (most of you didn't use this), remember to go to [EB in the AWS console](https://console.aws.amazon.com/elasticbeanstalk) and delete these environments (unless you wish to keep them). 

## AWS Billing

Finally, go to [AWS Billing in the console](https://console.aws.amazon.com/billing) and make sure that you have terminated all the resources that are listed in the "Bill Details" report. This shows a full list of the resources that are incurring charges (by region). Double check to make sure you stopped the resources you no longer need. Also, keep an eye on billing over the next month to make sure there are no longer charges being incurred. 

