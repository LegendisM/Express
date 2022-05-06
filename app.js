/*
* Import Packages
*/
const express = require('express');
const path = require('path');

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
* Load Models|Controller|Routers
*/
const homeRoutes = require('./routes/home');
const adminRoutes = require('./routes/admin');

app.use(homeRoutes);
app.use("/admin",adminRoutes)

/*
* Page Not Found - Last Section
*/
app.use((req,res) => {
    res.send("404 Page Not Found");
});

/*
* Listen
*/
app.listen(3000,() => {
    console.log("Server Run.");
});