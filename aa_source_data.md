# Initial Setup

Create a new [GitHub](https://github.com/) repository and name it `data-structures`  
All of your work for this class should be kept in this (well-organized!) repository.

You'll need an [AWS Educate](https://aws.amazon.com/education/awseducate/) account to use for your work this semester. You will create a Cloud 9 environment in this AWS Educate account for your work in this course. Do not use the Major Studio AWS account that Daniel sent you. The compute expenses are very unlikely to exceed what you get on the free tier plus the $100 credit you receive from signing up for AWS Educate. 

# Weekly Assignment 1

## Part One

1. Using Node.js (in Cloud 9), make a request for each of the ten "Meeting List Agenda" pages for Manhattan. **Important: show the code for all ten requests.**    
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

2. Using Node.js: For each of the ten files you requested, save the body as a **text file** to your "local" environment (in AWS Cloud9).

3. Study the HTML structure and tags and begin to think about how you might parse these files to extract relevant data for these AA meetings.

4. Update your GitHub repository with the relevant files: your `js` file and ten `txt` files, plus a `md` file with your documentation. In Canvas, submit the URL of the specific location of this work within your `data-structures` GitHub repository. 

## Starter code

```javascript
// npm install got
// mkdir data

const fs = require('fs');
const got = require('got');

(async () => {
	try {
		const response = await got('https://parsons.nyc/thesis-2021/');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/thesis.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
```

#### Documentation: 

* [What is `npm`?](https://docs.npmjs.com/getting-started/what-is-npm)  
* [Node got module](https://www.npmjs.com/package/got)  
* [Node fs module](https://nodejs.org/api/fs.html)  

## Map of AA zones

![](https://github.com/visualizedata/data-structures/raw/master/assets/aa.png)
