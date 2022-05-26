/*
* Import Packages
*/
const express = require('express');
const path = require('path');
const database = require('./database/database');

/*
* Create App Instance
*/
const app = express();

/*
* App Config
*/
app.set("view engine","ejs");
app.set("views","views");
app.use(express.urlencoded({ extended : false }));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"node_modules","bootstrap-v4-rtl","dist")));
app.use(express.static(path.join(__dirname,"node_modules","font-awesome")));

/*
* Database
*/
database.sync().then((result) => {
    console.log("Database Ready . . . ");
}).catch(err => console.log(err));

/*
* Routes
*/
const Routes = require('./routes/init');
app.use(Routes);

/*
* Listen
*/
app.listen(3000,() => {
    console.log("Server Run.");
});