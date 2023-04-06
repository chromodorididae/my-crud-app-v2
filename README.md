# my-crud-app-v2

Introduction: A paragraph used to introduce interested parties to the project and needs to include one or more screenshots.
![Screenshot](screenshot.png)
This project uses JWT tokens to authenticate users. Most site functionality is limited to registered users.
Passwords are hashed using bcrypt and stored in MongoDB with other user data.
Following login, users may filter through different categories or tags of dishes as well as enter additional information on a mock application page.
Only registered users may post comments and only the original commentor may edit or delete their post.

Technologies Used: A list of all technologies, libraries, APIs, etc. used in the project.
<br />
MongoDB - NoSQL database
<br />
Moongose - Object Data Modeling library (schemas)
<br />
Express - backend
<br />
React - frontend
<br />
Node - runtime environment
<br />
Bootstrap - framework (forms, icons)
<br />
Axios - HTTP requests (connects backend to frontend UI)
<br />
Cors - server security feature, restricts browser scripts 
<br />
Bcyrpt - hashing


Getting Started: Links to the project's planning (Trello board) and the deployed app.
<br />
https://trello.com/invite/b/bYGXBRA0/ATTIf0b816b99a37675a750000e63fd84d2973D9F7B1/crud-application
<br />
https://final-client-9wbh.onrender.com/login

Unsolved Problems: List any unsolved issues.
<br />
Rename categories and possibly gallery. The categories page was intended to display a list of tags and redirect back to the index page but I thought it was more user friendly to do this on a single page.<br />
Create and connect shopping page routes to database - I am planning to use https://fakestoreapi.com/

Future Enhancements: Identify future features and enhancements planned for the project.
<br />
remove grid and/or make more friendly to use on mobile-devices
