/*
* Import Packages
*/
const express = require('express');
const {join : JoinPath} = require('path');

/*
* Create App Instance
*/
const app = express();

/*
* App Config
*/
app.use(express.static(JoinPath(__dirname,"public")));
app.use(express.urlencoded({extended : false}));

/*
* Load Models|Controller|Routers
*/
const homeRoutes = require('./routes/home');
app.use(homeRoutes);

/*
* Listen
*/
app.listen(3000,() => {
    console.log("Server Run.");
});