# CourseRegisterProject
JinXing's project for research engineer HW

## How to run it
1. If you don't have mysql on your local computer please install mysql first https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/
2. After successfully install mysql database, open your mysql client and create database and table 
```
create database course;
```
```
use course;
```
```
source [path of course.sql];
```
3. Fill database account credentials in seq.js 

Open seq.js change database name, userName name and passWord to your own configuration


4. Run the frontend on local host, open terminal and go to frontend folder, In the front-end file directory
```
npm install
```
```
npm run start
```
5. Run the backend on local host, open terminal and go to backend folder, In the back-end file directory
```
npm install
```
```
npm run start
```

## How to test it (assignment requirment)
### Use any front-end technology to create a form and a panel/modal/card to display the result of registration request.
1. Please input a false username and a registered email and choose a course, then click submit, there will be display "This email has been registered, please confirm your username".
<img width="1410" alt="image" src="https://user-images.githubusercontent.com/91811861/198793973-6801145c-5810-478a-96a4-58a36939527d.png">
2. Please input vaild username and vaild email (already registered) and choose a course with enough capacity, then click submit, there will be display "Successfully registered".
<img width="1436" alt="image" src="https://user-images.githubusercontent.com/91811861/198785787-8f19306b-47fc-47f5-a7c7-bfc593033dab.png">
3. Please input vaild username and vaild email (already registered) and choose a course with not enough capacity (<1), then click submit, there will be display "Sorry, the class is full, and you are in waitlist".
<img width="1444" alt="image" src="https://user-images.githubusercontent.com/91811861/198786985-4527484b-07dd-415e-90e3-1fb1d050dabd.png">
4. Please input vaild username and vaild email (already registered) and choose a course which you already registered, then click submit, there will be display "Sorry, this course is already in your course list".
<img width="1458" alt="image" src="https://user-images.githubusercontent.com/91811861/198793246-da3e1a12-3130-4747-bbd7-b3407feb6604.png">
5. Please input vaild username and vaild email (not registered) and choose a course with enough capacity, then click submit, there will be display "Successfully registered a new user and successfully enrolled a course".
<img width="1449" alt="image" src="https://user-images.githubusercontent.com/91811861/198788051-bea7f3eb-e30c-4e68-bf8a-92f948278544.png">
6. Please input vaild username and vaild email (not registered) and choose a course with not enough capacity (<1), then click submit, there will be display "Successfully registered a new user, but the class is full, and you are in waitlist".
<img width="1451" alt="image" src="https://user-images.githubusercontent.com/91811861/198788550-7e1fdee9-3026-4c36-967d-5123442351f7.png">

##
### Form Input: User full name, email address, current semester or year, dropdown list of available courses, a text box for comments/ message to instructor and button to submit.
1. There are username, emailaddress, semester and year dropdown list, and then the semester and year can determine the courses and show in courses dropdown list. 
<img width="1458" alt="image" src="https://user-images.githubusercontent.com/91811861/198764773-4e107fb1-3aec-4183-9156-59bab4b4dddb.png">
2. You need to enter username, vaild email address and choose a course and then you can click submit button, if there is invaild part, submit is unclickable and there will be alert.
<img width="1458" alt="image" src="https://user-images.githubusercontent.com/91811861/198765587-6c7373d1-7160-4914-94ae-6f7ee40042cd.png">
3. You can use reset button to reset all the form information
##

### Ability to submit the form. Send a request to the server for processing
I tried to use React create the frontend interface, and do the form validation in the frontend, then use axios send request to backend.
##
### Use any server-side framework to handle requests, validate and respond to the request.
I tried to use Express create the backend and use getCourse and addCourse Api to handle the request.
##
### Add user authentication
Please check the validation part, it includes user and course validation
##
### Create a dummy database with user and course models. Validate user and course from database. Add user if does not exist. Can use any database management tech.
I tried to create user table, course table and usermaptocourse table in mysql database, and do the validation using these tables, please check the validation part for detail.

##
### Database schema
courses table
<img width="615" alt="image" src="https://user-images.githubusercontent.com/91811861/198812750-932ea104-5f4a-410f-83cf-5f375ec6a910.png">
users table
<img width="370" alt="image" src="https://user-images.githubusercontent.com/91811861/198812764-1cfb9426-20d7-443e-8d96-d40a6e832646.png">
select_course table
<img width="249" alt="image" src="https://user-images.githubusercontent.com/91811861/198812776-9a28ed44-aa36-4772-9567-5e28b6fca14c.png">


##
