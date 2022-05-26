/*
* Import Packages
*/
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const database = require('./database/database');
const dotEnv = require('dotenv').config({path:'./config/config.env'});
const morgan = require('morgan');

/*
* Create App Instance
*/
const app = express();

/*
* App Config
*/
app.set("view engine","ejs");
app.set("views","views");
app.set('trust proxy', 1);
app.use(morgan('common'));
app.use(cookieParser());
app.use(session({secret:'test_code',resave:false,saveUninitialized:true}));
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