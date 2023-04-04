# 📖 Expense Tracking Website Project for WIUT Web-Technology Module (4BUIS011C-n) Documentation 📝

## 🧑‍🎓 ID of the student: **00013292**
<br />

## Public build of the website: <code><a href="https://replit.com/@havaian/webtech-00013292">[ Link ]</a></code>

## Manifest for the project: <code><a href="./MANIFEST.md">[ Link ]</a></code>
<br />

## 👋 Welcome to the documentation for the Expense Tracking Website Project! 
<br />

This project is a web application that helps users track their expenses. It is built with Node.js for the backend, and EJS for the frontend. It uses various libraries such as jQuery, Fontawesome, jQuery confirm, and axios (for front-end) and Dotenv, EJS, Express, Morgan (for back-end).
<br />

## 📁 Project File Structure
### The final project folder structure looks like this:
<br />

```
├── app
│   ├── controllers
│   │   └── mt.controller.js
│   ├── data
│   │   ├── expenses.json
│   │   └── expense_categories.json
│   ├── routes
│   │   └── routes.js
│   ├── models
│   │   └── mt.model.js
│   ├── logs
│   │   ├── morgan.log
│   │   └── access.log
│   └── public
│       ├── assets
│       │   ├── img
│       │   │   └── money-waste-png
│       │   ├── css
│       │   │   └── style.css
│       │   └── js
│       │       └── main.js
│       └── views
│           └── index.ejs
├── .env.sample
├── .gitignore
├── index.js
├── LICENSE
├── MANIFEST.md
├── package-lock.json
├── package.json
└── README.md
```
<br />

The backend of the project is located in the [/app](./app/) directory. The controller file at [/app/controllers/mt.controller.js](./app/controllers/mt.controller.js) contains functions for handling backend operations such as getting all expenses, getting all expense categories, adding an expense, deleting an expense, updating an expense, and deleting all expenses. These functions are exported to the routes file at [/app/routes/routes.js](./app/routes/routes.js) for handling.

Data is stored in JSON files located at [/app/data](./app/data/). The expenses.json file stores expense records, while expense_categories.json stores predefined categories for expense categorization. The data model is defined in the model file at [/app/models/mt.model.js](./app/models/mt.model.js) but is not yet used (the object model for records is controlled from controller file).

Log files are stored at [/app/logs/](./app/logs/). This folder should be created after importing source code from GitHub, after which [morgan.log](./app/logs/morgan.log) and [access.log](./app/logs/access.log) files should be created inside this folder for logging tools to handle.

The frontend of the project is located in the /public directory. Styles for pages are stored at [/app/public/assets/css](./public/assets/css/), while JavaScript files are defined to be stored at [/app/public/assets/js](./public/assets/js/). There is a [main.js](./public/assets/js/main.js) file, but it is not used because EJS variables passed from the server would be impossible to use in the native JavaScript file. Instead, the project uses script tags in the HTML file to handle the EJS variables passed from the server. Images are stored at [/app/public/assets/img](./public/assets/img/), with the only file being a [favicon](./public/assets/img/favicon.png).
<br />

### The [index.js file](./index.js) is the entry point for the project and wraps up all the individual parts into one.
<br />

### Node [package](./package.json) & [package-lock](./package-lock.json) files
<br />

## 💡 Advantages of Project File Structure
The monolithic structure of the project means that the code is structurally divided into modules by their functionality: backend and frontend. This approach makes it easier to maintain the codebase since developers only have to focus on one part of the application at a time. Additionally, all the files related to a specific functionality are located in one place, making it easier to navigate the codebase.
<br />

## 🚀 Launching the Project
### To launch the project, follow these steps:
<uL>

<li> Clone the repository from <code><a>https://github.com/havaian/webtech-00013292</a></code> </li> 
<li> Create a <code>.env</code> file by renaming the <code>.env.sample</code> file and defining the necessary environment variables, such as the port for the application. </li>
<li> Create the <code>/app/logs/</code> directory and create morgan.log and access.log files inside it. </li>
<li> Run the command <code>npm run build</code> to build the project. </li>
<li> Run the command <code>npm run dev</code> to launch the project in development mode. Alternatively, run the command <code>npm start</code> to launch the project in production mode. </li>

</ul>

<br />

# 🎉 Congratulations! You have successfully launched the project.