**Parsons School of Design, The New School  
School of Art, Media and Technology  
Master of Science, Data Visualization**

# Data Structures

### PGDV 5110 Syllabus, Fall 2018

**Section A:** Monday, 7:00pm - 9:40pm  
**Section B:** Monday, 12:10pm - 2:50pm (Parsons Paris student joining by Google Hangout)  
66 5th Avenue, Room 710

**Faculty:** [Aaron Hill](https://www.newschool.edu/parsons/faculty.aspx?id=4d6a-5577-4d6a-4d7a) | Office Hours: Tuesdays 4:00pm - 6:00pm, L404 (Book office hours on Starfish)

**Teaching Assistant:** Alonso Alcocer | Office Hours: Wednesdays 4:00pm - 7:00pm, Thursdays 4:00pm - 7:00pm, L404 (Book office hours at: [https://alonsoag86.youcanbook.me/](https://alonsoag86.youcanbook.me/))  

Curating raw data presents issues of technology, speed, and efficiency, as well as broader ethical considerations of what it means to represent and make conclusions about groups and individuals from their data. This course covers the database, semi-structured data, and unstructured data. Students will gain familiarity with underlying data structures; techniques and tools, including acquisition, augmentation, and restructuring; data storage and aggregation; access to parallel and distributed computing; high-volume data, disparate sources, and performance; and streaming data, real time, and dynamic queries.

**Prerequisites:** Basic knowledge of [JavaScript](http://a.co/d/baNV2sd), [HTML](https://lab.github.com/githubtraining/introduction-to-html)/CSS, Linux command line, Git, and [GitHub](https://lab.github.com/githubtraining/introduction-to-github).

## Course Overview

Duration | Description
--- | -------
Week 1 | Introductions and overview of semester
Weeks 2 - 4 | Fundamental data structures; modeling structured data
Week 5 | Modeling semi-structured data
Week 6 | The Query
Week 7 | Data cleaning
Weeks 8 - 9 | Physical sensors and IoT
Week 10-11 | Interface design
Weeks 12 - 14 | Reliability, scalability, maintainability, sustainability; Labs
Week 15 | Final presentations and reflections

## Course Outline

### August 27 (Week 1)

Introduction to data structures.

**[Weekly Assignment 1](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_01.md), due Friday 9/14 at 2:00pm:**  
You will "get" some HTML files, save them, and study their structure. You will also begin to think about your data sources for final assignments 2 and 3. 

#### Documentation: 

* [What is `npm`?](https://docs.npmjs.com/getting-started/what-is-npm)  
* [Node request module](https://www.npmjs.com/package/request)  
* [Node fs module](https://nodejs.org/api/fs.html)  

### September 3: No class, Labor Day holiday

### September 10: No class, Rosh Hashanah holiday

### September 17 (Week 2)

The web as a database. "Raw data."

#### Read:
* Gitelman, Introduction and Color Plates  
* Hills, Part One (pp. 17-42)
* [Express/Node Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction) (read carefully the "Node" introduction and quickly skim the "Express" introduction)

**[Weekly Assignment 2](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_02.md), due Friday 9/21 at 2:00pm:**  
You will parse one of the HTML files you saved last week and log essential data to the console.

#### Documentation:
* [Node cheerio module](https://www.npmjs.com/package/cheerio)
* [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

### September 24 (Week 3)

Fundamental data structures. Data augmentation and integration. GitHub for open source collaboration. 

#### Read:

* Gitelman, Chapter 5
* Hills, Chapters 10, 11, and 12
* [Javascript data types and structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
* [Working with objects (JavaScript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)  

**[Weekly Assignment 3](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_03.md), due Friday 9/28 at 2:00pm:**  
Using data you parsed last week, you will interface with TAMU GeoServices to augment the data you collected.

#### Documentation:

* [TAMU GeoServices](http://geoservices.tamu.edu/)  
* [TAMU GeoServices Geocoding APIS](http://geoservices.tamu.edu/Services/Geocode/WebService/)  
* [Node Async module](http://caolan.github.io/async/)
* [Tutorial: creating and using environment variables in Linux](https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps).

### October 1 (Week 4)

Data models I: SQL database.

#### Read: 

* Gitelman, Chapter 2
* Hills, Chapters 13, 14, 15, and 16

**[Weekly Assignment 4](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_04.md), due Friday 10/5 at 2:00pm:**  
You will design a schema, create a new managed PostgreSQL database, and write SQL code to populate your database with your AA data. You will negotiate with your classmates to collaborate on wrangling the data for all ten AA zones (in groups, with a maximum of five group members, with each group member contributing data from at least two zones). 

**[Final Assignment 1](https://github.com/visualizedata/data-structures/tree/master/assignments/final_assignment_01) distributed:** Map of AA meetings in Manhattan.

#### Documentation: 

* [~~SQL tutorial~~](https://www.codeschool.com/courses/try-sql)    
* [SQL tutorial](https://www.codecademy.com/learn/learn-sql)  
* [PostgreSQL data types](https://www.postgresql.org/docs/9.4/static/datatype.html)  
* [PostgreSQL documentation](https://www.postgresql.org/docs/9.4/static/)
* [Node `pg` module](https://www.npmjs.com/package/pg)

### October 8 (Week 5)

Data models I: NoSQL database.

#### Read:
* Gitelman, Chapter 6  
* Hills, Chapter 17  

**[Weekly Assignment 5](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_05.md), due Friday 10/12 at 2:00pm:**  
You will design a (non)schema, create a new managed DynamoDB database, and write code to populate your database with your "Dear Diary" data. 

**Final Assignment 2 distributed:** "Dear Diary," a source of semi-structured, qualitative data.  

### October 15 (Week 6)

The Query. Indexes, joins, query optimization, and data restructuring. The E-R model. Data provision. 

#### Read: 

* Hills, Chapter 5  
* Gitelman, Data Flakes: An Afterword to "Raw Data" Is an Oxymoron

**[Weekly Assignment 6](https://github.com/visualizedata/data-structures/tree/master/assignments/weekly_assignment_06), due Friday 10/26 at 2:00pm:**  
You will write queries for both the SQL and NoSQL databases you have created, filtering, aggregating, and/or restructuring the data in the process. 

### October 22 (Week 7)

Data cleaning. Logging issues.

Guest lecture. Data cleaning workshop. 

**[Weekly Assignment 7](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_07.md), due Friday 10/26 at 2:00pm:**  
Finish parsing and cleaning the rest of the AA data in your "zone" (the zone that corresponds with the last digit of your student ID number), and update/replace the data in your Postgres table(s). Continue collaborating with fellow classmates to collectively build a strong data source for all ten zones. 

#### Read:

* Gitelman, Chapter 4  
* [For Big-Data Scientists, 'Janitor Work' Is Key Hurdle to Insights](https://nyti.ms/2jNUfHo), The New York Times, August 17, 2014

#### Documentation: 

* [GitHub issues](https://guides.github.com/features/issues/)

### October 29 (Week 8)

Sensors. Data gathering and surveillance.

#### Read:

* Gitelman, Chapter 7

#### Documentation: 

* Particle documentation [ [Photon](https://docs.particle.io/guide/getting-started/intro/photon/) | [Electron](https://docs.particle.io/guide/getting-started/intro/electron/) ]

### November 5 (Week 9)

[[slides](https://docs.google.com/presentation/d/1nd7drZiU8r7XEZzOhSSCZrX6G7_n-2Ce7Rq3twWToHU/edit?usp=sharing)]

IoT.

Debate: SQL vs. NoSQL [[1/2](https://projects.fivethirtyeight.com/2018-midterm-election-forecast/house/?ex_cid=rrpromo) | [3/4](https://www.nytimes.com/interactive/2018/11/04/technology/jobs-not-mobs.html?action=click&module=Top%20Stories&pgtype=Homepage)]

#### Read: 

* Gitelman, Chapter 3
* Klepman, Chapter 2

**[Weekly Assignment 8](https://github.com/visualizedata/data-structures/tree/master/assignments/weekly_assignment_08), due Friday 11/9 at 2:00pm:**  
Switching gears from previous assignments, you will use an IoT development board and sensors to collect and log data to your local computer. You will also sketch your first iteration of the design of an interactive visualization of the data you will collect from the sensor.

### November 12 (Week 10)

From database to visual representation.  

#### Read:

* Gitelman, Chapter 1

**[Weekly Assignment 9](https://github.com/visualizedata/data-structures/tree/master/assignments/weekly_assignment_09), due Wednesday 11/21 at 2:00pm:**  
You will begin writing sensor data to a database. 

**Final Assignment 3 distributed:** Surveilling your life.  

### November 19 (Week 11)

Interface design. 

#### Read: 

* [REDESIGNING DESIGN / JOS DE MUL](http://opendesignnow.org/index.html%3Fp=401.html)  

**[Weekly Assignment 10](https://github.com/visualizedata/data-structures/tree/master/assignments/weekly_assignment_10), due Friday 11/30 at 2:00pm:**  
You will create endpoints to connect your data to the design of your front-end interface. 

#### Documentation:

* [Express](http://expressjs.com/)  
* [Handlebars](http://handlebarsjs.com/) 
### November 26 (Week 12)

Discussion: Reliability. Lab. 

Klepman reading led by: Aaditi, Rachel, and Rijk (at 12:10pm) and Brad, Christian, Colleen, Felix, Mio, and Simone (at 7:00pm)

#### Read:

* Klepmann, Chapter 1. Read from the beginning through the "Reliability Section." 
* [How the internet works](https://edri.org/wp-content/uploads/2013/10/paper03_web_20120123.pdf)  

**[Weekly Assignment 11](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_11.md), due Friday 11/30 at 2:00pm:**  
**Note: this assignment is worth 5 points.**  
You will submit the final designs for the interfaces for each of your three data sources.  

### December 3 (Week 13)

Discussion: Scalability. Serverless computing. When do you need a database(s)? When do you not? Lab.

Klepman reading led by: Janice, Nataly, Nic, and Zui (at 12:10pm) and Batool, D’hana, Dan G, Juan, Ryan, and Mikaela (at 7:00pm)

#### Read:

* Klepmann, Chapter 1. Read the "Scalability Section." 
* [MapReduce: Simplified Data Processing on Large Clusters, Jeffrey Dean and Sanjay Ghemawat](https://research.google.com/archive/mapreduce.html)  
* [immens paper](http://vis.stanford.edu/papers/immens)

### December 10 (Week 14)

Discussion: Maintainability. Lab.

Klepman reading led by: Adrian, Michael, Shefali, and Yu (at 12:10pm) and Andrew, Candice, Dan R, Doug, Emily, and Feiyi (at 7:00pm)

#### Read:

* Klepmann, Chapter 1. Read the "Maintainability Section" and through the end of the chapter.  
* Gitelman, Chapter 8  
* [What is code?](https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/)  

**Final Assignments 1, 2, and 3 due Friday 12/14 at 2:00pm:**  

### December 17 (Week 15)

Final assignment presentations.

In the final class meeting, you will present your work in groups, by theme. Group and theme assignments: 

#### 12:10pm section:

Group 1. Topic: reliability. Members: Aaditi, Rachel, and Rijk

Group 2. Topic: scalability. Members: Janice, Nataly, Nic, and Zui

Group 3. Topic: maintainability. Members: Adrian, Michael, Shefali, and Yu

#### 7:00pm section:

Group 1. Topic: reliability. Members: Brad, Christian, Colleen, Felix, Mio, and Simone

Group 2. Topic: scalability. Members: Batool, D’hana, Dan G, Juan, Ryan, and Mikaela

Group 3. Topic: maintainability. Members: Andrew, Candice, Dan R, Doug, Emily, and Feiyi

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
| Attendance and engagement | 10% |
| Weekly Assignments (11 total) | 45% |
| Final assignment 1 | 15% |
| Final assignment 2 | 15% |
| Final assignment 3 | 15% |

Weekly assignments are worth 4 points each, unless otherwise indicated. They are due the Friday after they are assigned, by 2:00pm. The quality of your [documentation](https://lab.github.com/githubtraining/communicating-using-markdown) is a part of the grade for every assignment, including all the weekly and final assignments. All documentation must be kept in your (well organized!) `data-structures` repository, using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). 

#### Late assignments:

If an assignment is less than 48 hours late, the maximum possible grade is 75%.  
If an assignment is 48-96 hours late, the maximum possible grade is 50%.  
If an assignment is 96-144 hours late, the maximum possible grade is 25%.  
If an assignment is more than 144 hours late, no credit will be given.  

### Required Reading

*"[Raw Data" Is an Oxymoron](http://a.co/6bZnQzs)*, Lisa Gitelman, 2013. This book is available in the library at the reserve desk.  
*"[NoSQL and SQL Data Modeling: Bringing Together Data, Semantics, and Software](http://a.co/6v7bJVs)"*, Ted Hills, 2016. This book will be available in the library at the reserve desk.  
*"[Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems](http://a.co/dbjbtnU)"*, Martin Kleppmann, 2017. This book is available electronically through course reserves.  

### Office Hours (by appointment)

Tuesdays, 4:00pm - 6:00pm, L404 (or other time, by appointment)

### Materials and Supplies

In this course we will rely exclusively on open source software and we will work with the software by writing code: JavaScript, SQL, and some basic Linux.

We will also rely on cloud-based services to provide infrastructure, platforms, and computational power:

* Cloud 9 for a working environment to use for prototyping and experimentation.  
* Amazon Web Services (or similar) for computing infrastructure, platforms, and computational power.  

#### Required:

* A modern web browser. Preferred: Google Chrome. Acceptable: Firefox. Not acceptable: Internet Explorer, Safari.  
* Bring your laptop to every class.  
* A (free) [GitHub](https://github.com/) account   
* A (free) [Amazon Web Services (AWS)](https://aws.amazon.com/) account  
* A (free) [AWS Educate](https://aws.amazon.com/education/awseducate/) account  
* A microcontroller and sensors (as assigned; they will be provided; do not buy)
* It is also helpful to have a text editor installed locally. Sublime and Atom are popular choices. Atom integrates well with GitHub.   
* If you decide to work locally (instead of in Cloud9), you may need to install and maintain additional software such as Git (installed with [Xcode in OSX](https://developer.apple.com/xcode/)), [Node.js](https://nodejs.org/en/download/), npm (which is installed with Node.js), and other software. 

### Resources

The university provides many resources to help students achieve academic and artistic excellence. These resources include:

* The University (and associated) Libraries: [http://library.newschool.edu](http://library.newschool.edu)  
* The University Learning Center: [http://www.newschool.edu/learning-center](http://www.newschool.edu/learning-center)  
* University Disabilities Service: [http://www.newschool.edu/student-disability-services/](http://www.newschool.edu/student-disability-services/)  

In keeping with the university’s policy of providing equal access for students with disabilities, any student with a disability who needs academic accommodations is welcome to meet with me privately. All conversations will be kept confidential. Students requesting any accommodations will also need to contact Student Disability Service (SDS). SDS will conduct an intake and, if appropriate, the Director will provide an academic accommodation notification letter for you to bring to me. At that point, I will review the letter with you and discuss these accommodations in relation to this course.

### Making Center 

Faculty who are planning curriculum that makes use of specific resources should contact the Making Center in advance to coordinate.

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
The grade of **W** may be issued by the Office of the Registrar to a student who officially withdraws from a course within the applicable deadline. There is no academic penalty, but the grade will appear on the student transcript. A grade of **W** may also be issued by an instructor to a graduate student (except at Parsons and Mannes) who has not completed course requirements nor arranged for an Incomplete.

Grade of **Z**:  
The grade of **Z** is issued by an instructor to a student who has not attended or not completed all required work in a course but did not officially withdraw before the withdrawal deadline. It differs from an **F**, which would indicate that the student technically completed requirements but that the level of work did not qualify for a passing grade. 

Grades of **Incomplete**:  
The grade of **I**, or temporary incomplete, may be granted to a student under unusual and extenuating circumstances, such as when the student's academic life is interrupted by a medical or personal emergency. This mark is not given automatically but only upon the student's request and at the discretion of the instructor. A Request for Incomplete form must be completed and signed by student and instructor. The time allowed for completion of the work and removal of the **I** mark will be set by the instructor with the following limitations: 

Work must be completed no later than one year following the end of the class. Grades of **I** not revised in the prescribed time will be recorded as a final grade of **WF** (for Parsons and Mannes graduate students) or **N** (for all other graduate students) by the Office of the Registrar. The grade of **N** does not affect the GPA but does indicate a permanent incomplete. 

### Divisional, Program and Class Policies:

#### Responsibility 

Students are responsible for all assignments, even if they are absent.  Late assignments, failure to complete the assignments for class discussion and/or critique, and lack of preparedness for in-class discussions, presentations and/or critiques will jeopardize your successful completion of this course.  

#### Participation 

Class participation is an essential part of class and includes: keeping up with reading, assignments, projects, contributing meaningfully to class discussions, active participation in group work, and coming to class regularly and on time.  

#### Attendance 

Parsons' attendance guidelines were developed to encourage students' success in all aspects of their academic programs. Full participation is essential to the successful completion of coursework and enhances the quality of the educational experience for all, particularly in courses where group work is integral; thus, Parsons promotes high levels of attendance. Students are expected to attend classes regularly and promptly and in compliance with the standards stated in this course syllabus. 

While attendance is just one aspect of active participation, absence from a significant portion of class time may prevent the successful attainment of course objectives. A significant portion of class time is generally defined as the equivalent of three weeks, or 20%, of class time. Lateness or early departure from class may be recorded as one full absence. Students may be asked to withdraw from a course if habitual absenteeism or tardiness has a negative impact on the class environment.

Whether the course is a lecture, seminar or studio, faculty will assess each student’s performance against all of the assessment criteria in determining the student’s final grade.

#### Canvas

Use of Canvas may be an important resource for this class. Students should check it for announcements before coming to class each week.  

#### Delays 

In rare instances, I may be delayed arriving to class.  If I have not arrived by the time class is scheduled to start, you must wait a minimum of thirty minutes for my arrival.  In the event that I will miss class entirely, a sign will be posted at the classroom indicating your assignment for the next class meeting.

#### Electronic Devices 

The use of electronic devices (phones, tablets, laptops, cameras, etc.) is permitted when the device is being used in relation to the course's work. All other uses are prohibited in the classroom and devices should be turned off before class starts.

#### Academic Honesty and Integrity

Compromising your academic integrity may lead to serious consequences, including (but not limited to) one or more of the following: failure of the assignment, failure of the course, academic warning, disciplinary probation, suspension from the university, or dismissal from the university.

Students are responsible for understanding the University's policy on academic honesty and integrity and must make use of proper citations of sources for writing papers, creating, presenting, and performing their work, taking examinations, and doing research. It is the responsibility of students to learn the procedures specific to their discipline for correctly and appropriately differentiating their own work from that of others. The full text of the policy, including adjudication procedures, is found at
[http://www.newschool.edu/policies/#](http://www.newschool.edu/policies/#) Resources regarding what plagiarism is and how to avoid it can be found on the Learning Center’s website: [http://www.newschool.edu/university-learning-center/student-resources/](http://www.newschool.edu/university-learning-center/student-resources/)

The New School views "academic honesty and integrity" as the duty of every member of an academic community to claim authorship for his or her own work and only for that work, and to recognize the contributions of others accurately and completely. This obligation is fundamental to the integrity of intellectual debate, and creative and academic pursuits. Academic honesty and integrity includes accurate use of quotations, as well as appropriate and explicit citation of sources in instances of paraphrasing and describing ideas, or reporting on research findings or any aspect of the work of others (including that of faculty members and other students). Academic dishonesty results from infractions of this "accurate use." The standards of academic honesty and integrity, and citation of sources, apply to all forms of academic work, including submissions of drafts of final papers or projects. All members of the University community are expected to conduct themselves in accord with the standards of academic honesty and integrity. Please see the complete policy in the Parsons Catalog.

#### Intellectual Property Rights 

[http://www.newschool.edu/policies/#](http://www.newschool.edu/policies/#)


