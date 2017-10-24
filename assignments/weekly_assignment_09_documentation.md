# Instructions for Creating a EC2 Instance in AWS

## Setup

*These steps only need to be completed once, to set up your instance.* 

1. Use your AWS account credentials to sign in to the [AWS Console](https://console.aws.amazon.com/console/home?region=us-east-1).  
2. The console shows a long list of AWS services. Find and click on the **EC2** service.  
3. Click the blue **Launch Instance** button.  
4. In the menu tabs on the lefthand side, click the **Community AMIs** tab.  
5. In the **Search community AMIs** search box, enter "msdv" and press the Enter key on your keyboard.  
6. This search should return one result: **msdv - ami-362df64c**. Click the blue **Select** button beside this result.  
7. Accept all the defaults by clicking the gray **Next: Configure Instance Details** button.  
8. Accept all the defaults by clicking the gray **Next: Add Storage** button.  
9. Accept all the defaults by clicking the gray **Next: Add Tags** button.  
10. Accept all the defaults by clicking the gray **Next: Configure Security Group** button.  
11. Click the blue **Review and Launch** button.  
12. Click the blue **Launch** button.  
13. From the "key pair" pop-up screen, choose **Create New Key Pair**. Give it a name and Click **Download Key Pair**.  
14. **IMPORTANT:** Save the downloaded file (`.pem`) to a secure location. You will not be able to access your instance without this file. **DO NOT LOSE THIS FILE.** And do not store it in a public location.  
15. Click the blue **Launch Instances** button.  
16. Your instance is now launching.  
17. While you wait for the instance to become available, navigate in the **terminal** to the location of the `.pem` file you created and downloaded in steps 13 and 14. In that directory, run the following command, replacing "my-key-pair" with the name of the file you chose in step 13:    
`chmod 400 my-key-pair.pem`

## Setting up a way to access your instance

1. Click on your instance to reveal its metadata and options. Copy the **Public DNS (IPv4)**.  
2. In the terminal, navigate to the location of the `.pem` file you created. Edit this ssh command to replace `my-key-pair.pem` with the name of your `.pem` file and replace `ec2-198-51-100-1.compute-1.amazonaws.com` with the endpoint you copied in the previous step:   
`ssh -i my-key-pair.pem ubuntu@ec2-198-51-100-1.compute-1.amazonaws.com`  
3. Run the `ssh` command you wrote in the previous step. This will connect you to your EC2 instance. 