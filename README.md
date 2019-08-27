**Parsons School of Design, The New School  
School of Art, Media and Technology  
Master of Science, Data Visualization**

# Data Structures

### PGDV 5110 Syllabus, Fall 2019

Wednesdays, 12:10pm - 2:50pm  
66 5th Avenue, Room 710

**Faculty:** [Aaron Hill](https://aaronhill.io/) | Office Hours: Tuesdays 3:00pm - 4:00pm, Location: 2 W 13th Street, room 404 (Book office hours on Starfish)

**Tutor Specialist:** [Ryan Best](https://ryanabest.com/) | Office Hours TBD

**Piazza:** We will be using this collaboration tool for work on assignments. It is a Q&A forum for the 11 weekly and 3 final assignments. All questions/issues about the assignments should be posted here, building a shared knowledge base in the process. Questions/issues raised in office hours (for both faculty and tutor specialist) should also be posed here prior to the office hour meeting and the answer/resolution will be posted by the person who originally posed the question. From the tool's documentation: "Piazza questions and answers are like Wikipedia: anyone can contribute to them. Collaboratively edited questions and answers are far easier to read and comprehend than a long thread of comments."

**Course description:** Curating raw data presents issues of technology, speed, and efficiency, as well as broader ethical considerations of what it means to represent and make conclusions about groups and individuals from their data. This course covers the database, semi-structured data, and unstructured data. Students will gain familiarity with underlying data structures; techniques and tools, including acquisition, augmentation, and restructuring; data storage and aggregation; access to parallel and distributed computing; high-volume data, disparate sources, and performance; and streaming data, real time, and dynamic queries.

**Prerequisites:** Basic knowledge of JavaScript, HTML/CSS, Linux command line, Git, and [GitHub](https://lab.github.com/githubtraining/introduction-to-github).

## Course Overview

Duration | Description
--- | -------
Week 1 | Introductions and overview of semester
Weeks 2 - 4 | Fundamental data structures; modeling structured data
Week 5 | Modeling semi-structured data
Week 6 | The Query
Weeks 7 - 9 | Physical sensors and IoT; data cleaning
Week 10-11 | Interface design
Weeks 12 - 14 | Reliability, scalability, maintainability, sustainability; Labs
Week 15 | Final presentations (video) and reflections (Canvas)

## Course Outline

### August 28 (Week 1)

Introduction to data structures.

**Weekly Assignment 1, due Friday 8/30 at 6:00pm:**  
You will "get" some HTML files, save them, and study their structure.  

#### Documentation: 

* [What is `npm`?](https://docs.npmjs.com/getting-started/what-is-npm)  
* [Node request module](https://www.npmjs.com/package/request)  
* [Node fs module](https://nodejs.org/api/fs.html)  

### September 4 (Week 2)

The web as a database. "Raw data."

#### Read:
* Gitelman, Introduction and Color Plates  
* Hills, Part One (pp. 17-42)
* [Express/Node Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction) (read carefully the "Node" introduction and quickly skim the "Express" introduction)

**Weekly Assignment 2, due Monday 9/9 at 6:00pm:**  
You will parse one of the HTML files you saved last week and log essential data to the console.

#### Documentation:
* [Node cheerio module](https://www.npmjs.com/package/cheerio)
* [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

### September 11 (Week 3)

Fundamental data structures. Data augmentation and integration. GitHub for open source collaboration. 

#### Read:

* Gitelman, Chapter 5
* Hills, Chapters 10, 11, and 12
* [Javascript data types and structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
* [Working with objects (JavaScript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)  

**Weekly Assignment 3, due Monday 9/16 at 6:00pm:**  
Using data you parsed last week, you will interface with TAMU GeoServices to augment the data you collected.

#### Documentation:

* [TAMU GeoServices](http://geoservices.tamu.edu/)  
* [TAMU GeoServices Geocoding APIS](http://geoservices.tamu.edu/Services/Geocode/WebService/)  
* [Node Async module](http://caolan.github.io/async/)
* [Tutorial: creating and using environment variables in Linux](https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps).

### September 18 (Week 4)

Data models I: SQL database.

#### Read: 

* Gitelman, Chapter 2
* Hills, Chapters 13, 14, 15, and 16

**Weekly Assignment 4, due Monday 9/23 at 6:00pm:**  
You will design a schema, create a new managed PostgreSQL database, and write SQL code to populate your database with your AA data. You will negotiate with your classmates to collaborate on wrangling the data for all ten AA zones (in groups, with a maximum of five group members, with each group member contributing data from at least two zones). 

**Final Assignment 1 distributed:** Map of AA meetings in Manhattan.

#### Documentation: 

* [SQL tutorial](https://www.codecademy.com/learn/learn-sql)  
* [PostgreSQL data types](https://www.postgresql.org/docs/9.4/static/datatype.html)  
* [PostgreSQL documentation](https://www.postgresql.org/docs/9.4/static/)
* [Node `pg` module](https://www.npmjs.com/package/pg)

### September 25 (Week 5)

Data models I: NoSQL database.

#### Read:
* Gitelman, Chapter 6  
* Hills, Chapter 17  

**Weekly Assignment 5, due Tuesday 10/1 at 9:00am:**  
You will design a (non)schema, create a new managed DynamoDB database, and write code to populate your database with your "Process Blog" data. 

**Final Assignment 2 distributed:** "Process Blog," a source of semi-structured, qualitative data.  

### October 2 (Week 6)

The Query. Indexes, joins, query optimization, and data restructuring. The E-R model. Data provision. 

#### Read: 

* Hills, Chapter 5  
* Gitelman, Data Flakes: An Afterword to "Raw Data" Is an Oxymoron

**Weekly Assignment 6, due Monday 10/7 at 6:00pm:**  
You will write queries for both the SQL and NoSQL databases you have created, filtering, aggregating, and/or restructuring the data in the process. 

### October 9: No class, Yom Kippur

### October 16 (Week 7)

Sensors. Data gathering and surveillance.

**Weekly Assignment 7, due Monday 10/21 at 6:00pm:**  
Switching gears from previous assignments, you will use an IoT development board and sensors to collect and log data to your local computer. You will also sketch your first iteration of the design of an interactive visualization of the data you will collect from the sensor.

#### Read:

* Gitelman, Chapter 7

#### Documentation: 

* Particle documentation [ [Photon](https://docs.particle.io/guide/getting-started/intro/photon/) | [Electron](https://docs.particle.io/guide/getting-started/intro/electron/) ]

### October 23 (Week 8)

Data cleaning. Logging issues.

Data cleaning workshop. 

**Weekly Assignment 8, due Monday 10/28 at 6:00pm:**  
Finish parsing and cleaning the rest of the AA data in all ten Manhattan "zones", and update/replace the data in your Postgres table(s).  

#### Read:

* Gitelman, Chapter 4  
* [For Big-Data Scientists, 'Janitor Work' Is Key Hurdle to Insights](https://nyti.ms/2jNUfHo), The New York Times, August 17, 2014

#### Documentation: 

* [GitHub issues](https://guides.github.com/features/issues/)

Note: [IEEE VIS](http://ieeevis.org/year/2019/welcome) conference is October 20-25

### October 30 (Week 9)

[[slides](https://docs.google.com/presentation/d/1nd7drZiU8r7XEZzOhSSCZrX6G7_n-2Ce7Rq3twWToHU/edit?usp=sharing)]

IoT.

**Weekly Assignment 9, due Monday 11/4 at 6:00pm:**  
You will begin writing sensor data to a database. 

**Final Assignment 3 distributed:** Surveilling your life. 

Debate: SQL vs. NoSQL [[1/2](https://projects.fivethirtyeight.com/2018-midterm-election-forecast/house/?ex_cid=rrpromo) | [3/4](https://www.nytimes.com/interactive/2018/11/04/technology/jobs-not-mobs.html?action=click&module=Top%20Stories&pgtype=Homepage)]

#### Read: 

* Gitelman, Chapter 3
* Klepman, Chapter 2

### November 6 (Week 10)

From database to visual representation.  

**Weekly Assignment 10, due Monday 11/11 at 6:00pm:**  
You will create endpoints to connect your data to the design of your front-end interface. 

#### Read:

* Gitelman, Chapter 1 

### November 13 (Week 11)

Interface design. 

**Weekly Assignment 11, due Monday 11/18 at 6:00pm:**  
**Note: this assignment is worth 5 points.**  
You will submit the final designs for the interfaces for each of your three data sources.  

#### Read: 

* [REDESIGNING DESIGN / JOS DE MUL](http://opendesignnow.org/index.html%3Fp=401.html)  

#### Documentation:

* [What is Node.js and Express?](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)  
* [Express](http://expressjs.com/)  
* [Handlebars](http://handlebarsjs.com/) 

### November 20 (Week 12)

Discussion: Reliability. Lab. 

Klepmann reading led by: TBD

#### Read:

* Klepmann, Chapter 1. Read from the beginning through the "Reliability Section." 
* [How the internet works](https://edri.org/wp-content/uploads/2013/10/paper03_web_20120123.pdf)  

### November 27: No class, Thanksgiving holiday

### December 4 (Week 13)

Discussion: Scalability. Serverless computing. When do you need a database(s)? When do you not? Lab.

Klepmann reading led by: TBD

#### Read:

* Klepmann, Chapter 1. Read the "Scalability Section." 
* [MapReduce: Simplified Data Processing on Large Clusters, Jeffrey Dean and Sanjay Ghemawat](https://research.google.com/archive/mapreduce.html)  
* [immens paper](http://vis.stanford.edu/papers/immens)

### December 11 (Week 14)

Discussion: Maintainability. Lab.

Klepmann reading led by: TBD

#### Read:

* Klepmann, Chapter 1. Read the "Maintainability Section" and through the end of the chapter.  
* Gitelman, Chapter 8  
* [What is code?](https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/)  

**Final Assignments 1, 2, and 3 due Monday 12/16 at 6:00pm:**  

### Virtual meeting (Week 15)

Final assignment presentation videos posted by Monday, December 16 at 6:00pm. Comments due by Tuesday, December 17 at 6:00pm  

Terminating and cleaning up your AWS resources and credentials. [[**checklist**](https://github.com/visualizedata/data-structures/blob/master/assignments/resources/AWS_shutdown.md)]

In the final class meeting, you will present your work in groups, by theme. Group and theme assignments: 

## Learning Outcomes

By the successful completion of this course, students will be able to demonstrate:

* Proficiency with various techniques to acquire, process, restructure, and analyze raw data.  
* Ability to program and work within structured and unstructured databases to deliver and exchange data.  
* Knowledge of methods for web development, hosting, and processing of data for visualizations, often from very large data sources.  
* An understanding of computer science principles that support computational efficiency and speed.  
* An understanding of the limitations and ethical considerations when using data to represent individuals and groups.

### Final Grade Calculation

| Description | % |
|:--|:--|
| Attendance | 5% |
| Engagement and process blog | 5% |
| Weekly Assignments (11 total) | 45% |
| Final assignment 1 | 15% |
| Final assignment 2 | 15% |
| Final assignment 3 | 15% |

Weekly assignments are worth 4 points each, unless otherwise indicated. They are due 6:00pm the Monday after they are assigned, unless otherwise indicated. The quality of your [documentation](https://lab.github.com/githubtraining/communicating-using-markdown) is a part of the grade for every assignment, including all the weekly and final assignments. All documentation must be kept in your (well organized!) `data-structures` repository, using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). 

#### Late assignments:

If an assignment is less than 48 hours late, the maximum possible grade is 75%.  
If an assignment is 48-96 hours late, the maximum possible grade is 50%.  
If an assignment is 96-144 hours late, the maximum possible grade is 25%.  
If an assignment is more than 144 hours late, no credit will be given.  

### Required Reading

*"[Raw Data" Is an Oxymoron](http://a.co/6bZnQzs)*, Lisa Gitelman, 2013. This book is available in the library at the reserve desk.  
*"[NoSQL and SQL Data Modeling: Bringing Together Data, Semantics, and Software](http://a.co/6v7bJVs)"*, Ted Hills, 2016. This book will be available in the library at the reserve desk.  
*"[Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems](http://a.co/dbjbtnU)"*, Martin Kleppmann, 2017. This book is available electronically through course reserves.  

### Office Hours (by appointment through Starfish)

Tuesdays, 3:00pm - 4:00pm, location TBD (or other time, by appointment)

### Materials and Supplies

In this course we will rely exclusively on open source software and we will work with the software by writing code: JavaScript, SQL, and some basic Linux.

We will also rely on cloud-based services to provide infrastructure, platforms, and computational power:

* [Amazon Web Services](https://aws.amazon.com/) (or similar) for computing infrastructure, platforms, and computational power.  
* [AWS Cloud 9](https://aws.amazon.com/cloud9/) for a working environment to use for prototyping and experimentation.  

#### Required:

* A modern web browser. Preferred: [Google Chrome](https://www.google.com/chrome/). Acceptable: [Firefox](https://www.mozilla.org/en-US/firefox/). Not acceptable: Internet Explorer, Safari.  
* Bring your laptop to every class.  
* A (free) [GitHub](https://github.com/) account   
* A (free) [Amazon Web Services (AWS)](https://aws.amazon.com/) account  
* A (free) [AWS Educate](https://aws.amazon.com/education/awseducate/) account  
* A microcontroller and sensors (as assigned; they will be provided; do not buy)
* It is also helpful to have a text editor installed locally. Sublime and Atom are popular choices. Atom integrates well with GitHub.   
* If you decide to work locally (instead of in Cloud9), you may need to install and maintain additional software such as Git (installed with [Xcode in OSX](https://developer.apple.com/xcode/)), [Node.js](https://nodejs.org/en/download/), npm (which is installed with Node.js), and other software. **The tutor specialist will not support troubleshooting for local installations.**

### Resources

The university provides many resources to help students achieve academic and artistic excellence. These resources include:

* The University (and associated) Libraries: [http://library.newschool.edu](http://library.newschool.edu)  
* The University Learning Center: [http://www.newschool.edu/learning-center](http://www.newschool.edu/learning-center)  
* University Disabilities Service: [http://www.newschool.edu/student-disability-services/](http://www.newschool.edu/student-disability-services/)  

In keeping with the university's policy of providing equal access for students with disabilities, any student with a disability who needs academic accommodations is welcome to meet with me privately. All conversations will be kept confidential. Students requesting any accommodations will also need to contact Student Disability Service (SDS). SDS will conduct an intake and, if appropriate, the Director will provide an academic accommodation notification letter for you to bring to me. At that point, I will review the letter with you and discuss these accommodations in relation to this course.

### Making Center 

The Making Center is a constellation of shops, labs, and open workspaces that are situated across the New School to help students express their ideas in a variety of materials and methods.  We have resources to help support woodworking, metalworking, ceramics and pottery work, photography and film, textiles, printmaking, 3D printing, manual and CNC machining, and more. A staff of technicians and student workers provide expertise and maintain the different shops and labs.  Safety is a primary concern, so each area has policies for access, training, and etiquette that students and faculty should be familiar with. Many areas require specific orientations or trainings before access is granted.  Detailed information about the resources available, as well as schedules, trainings, and policies can be found at [http://resources.parsons.edu](http://resources.parsons.edu). 

### Grading Standards

**A** Work of exceptional quality  
**A-** Work of high quality  
**B+** Very good work  
**B** Good work; satisfies course requirements 
Satisfactory completion of a course is considered to be a grade of B or higher.  
**B-** Below-average work  
**C+** Less than adequate work  
**C** Well below average work  
**C-** Poor work; lowest possible passing grade  
**F** Failure  
**GM** Grade missing for an individual  

*Grades of **D** are not used in graduate level courses.*

Grade of **W**:  
The grade of **W** may be issued by the Office of the Registrar to a student who officially withdraws from a course within the applicable deadline. There is no academic penalty, but the grade will appear on the student transcript.

Grade of **Z**:  
This grade is to be assigned to students who have **never attended or stopped attending** classes.  Exceptions can be made if the student has completed enough work to warrant a grade (including a failing grade), and arrangements have been made with the instructor(s) and the Dean’s Office prior to grade submission.  The Z grade does not calculate into the student’s GPA.  

Grades of **Incomplete**:  
The grade of **I**, or temporary incomplete, may be granted to a student under unusual and extenuating circumstances, such as when the student's academic life is interrupted by a medical or personal emergency. This mark is not given automatically but only upon the student's request and at the discretion of the instructor. A Request for Incomplete form must be completed and signed by student and instructor. The time allowed for completion of the work and removal of the **I** mark will be set by the instructor with the following limitations: 

> Work must be completed no later than one year following the end of the class. Grades of **I** not revised in the prescribed time will be recorded as a final grade of **N** by the Registrar’s Office. 

### College, School, Program and Class Policies:

A comprehensive overview of policy may be found under [Policies: A to Z](https://www.newschool.edu/about/university-resources/policies/). Students are also encouraged to consult the [Academic Catalog for Parsons](https://www.newschool.edu/provost/academic-catalogs/). 

### Canvas

Use of Canvas may be an important resource for this class. Students should check it for announcements before coming to class each week.
 
### Electronic Devices 

The use of electronic devices (phones, tablets, laptops, cameras, etc.) is permitted when the device is being used in relation to the course's work. All other uses are prohibited in the classroom and devices should be turned off before class starts.

### Responsibility 

Students are responsible for all assignments, even if they are absent. Late assignments, failure to complete the assignments for class discussion and/or critique, and lack of preparedness for in-class discussions, presentations and/or critiques will jeopardize your successful completion of this course.  

### Active Participation and Attendance
Class participation is an essential part of class and includes: keeping up with reading, assignments, projects, contributing meaningfully to class discussions, active participation in group work, and coming to class regularly and on time.  

Parsons’ attendance guidelines were developed to encourage students’ success in all aspects of their academic programs. Full participation is essential to the successful completion of coursework and enhances the quality of the educational experience for all, particularly in courses where group work is integral; thus, Parsons promotes high levels of attendance. Students are expected to attend classes regularly and promptly and in compliance with the standards stated in this course syllabus. 

While attendance is just one aspect of active participation, absence from a significant portion of class time may prevent the successful attainment of course objectives. A significant portion of class time is generally defined as the equivalent of three weeks, or 20%, of class time. Lateness or early departure from class may be recorded as one full absence. Students may be asked to withdraw from a course if habitual absenteeism or tardiness has a negative impact on the class environment.

I will assess each student’s performance against all of the assessment criteria in determining your final grade.

### Academic Honesty and Integrity

Compromising your academic integrity may lead to serious consequences, including (but not limited to) one or more of the following: failure of the assignment, failure of the course, academic warning, disciplinary probation, suspension from the university, or dismissal from the university.

Students are responsible for understanding the University’s policy on academic honesty and integrity and must make use of proper citations of sources for writing papers, creating, presenting, and performing their work, taking examinations, and doing research. It is the responsibility of students to learn the procedures specific to their discipline for correctly and appropriately differentiating their own work from that of others. The full text of the policy, including adjudication procedures, is found on the university website under [Policies: A to Z](https://www.newschool.edu/about/university-resources/policies/). Resources regarding what plagiarism is and how to avoid it can be found on the [Learning Center’s website](https://www.newschool.edu/learning-center/resources-workshops/).

The New School views "academic honesty and integrity" as the duty of every member of an academic community to claim authorship for his or her own work and only for that work, and to recognize the contributions of others accurately and completely. This obligation is fundamental to the integrity of intellectual debate, and creative and academic pursuits. Academic honesty and integrity includes accurate use of quotations, as well as appropriate and explicit citation of sources in instances of paraphrasing and describing ideas, or reporting on research findings or any aspect of the work of others (including that of faculty members and other students). Academic dishonesty results from infractions of this "accurate use." The standards of academic honesty and integrity, and citation of sources, apply to all forms of academic work, including submissions of drafts of final papers or projects. All members of the University community are expected to conduct themselves in accord with the standards of academic honesty and integrity. Please see the complete policy in the Parsons Catalog.

### Intellectual Property Rights

The New School (the "university") seeks to encourage creativity and invention among its faculty members and students. In doing so, the University affirms its traditional commitment to the personal ownership by its faculty members and students of Intellectual Property Rights in works they create. The complete policy governing Intellectual Property Rights may be seen on the [university website, on the Provost's page](https://www.newschool.edu/provost/accreditation-policies/).

