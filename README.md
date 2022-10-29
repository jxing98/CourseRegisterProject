# CourseRegisterProject
JinXing's project for research engineer HW

## How to run it
1. Download the file and unzip it
2. If you don't have mysql on your local computer please install mysql first https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/
3. After successfully install mysql database, open your terminal and create database and table 
```
create database course;
```
```
use course;
```
```
source [path of course.sql];
```
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

## How to test it
### Use any front-end technology to create a form and a panel/modal/card to display the result of registration request.
1. Please input vaild username and vaild email and choose a course with enough capacity, then click submit, there will be display ""
 <img width="1462" alt="image" src="https://user-images.githubusercontent.com/91811861/198762803-7220c1c9-40de-4b1a-a8a8-5f430d7edcfb.png">
 
### Form Input: User full name, email address, current semester or year, dropdown list of available courses, a text box for comments/ message to instructor and button to submit.
1. There are username, emailaddress, semester and year dropdown list, and then the semester and year can determine the courses and show in courses dropdown list. 
<img width="1458" alt="image" src="https://user-images.githubusercontent.com/91811861/198764773-4e107fb1-3aec-4183-9156-59bab4b4dddb.png">
2. You need to enter username, vaild email address and choose a course and then you can click submit button, if there is invaild part, submit is unclickable and there will be alert.
<img width="1458" alt="image" src="https://user-images.githubusercontent.com/91811861/198765587-6c7373d1-7160-4914-94ae-6f7ee40042cd.png">
3. You can use reset button to reset all the form information

