// TODO: Import Libraries
const express = require("express");

// TODO: Load express and Create Instance For Global Variable app
global.App = express();
// global.Mysql = require("./database/db.js").GetDB();

// TODO: App Config
App.set('view engine','ejs');
App.use(express.static('public'));
App.use(express.json());
App.use(express.urlencoded({extended:true}));

// TODO: Import Routers
const IndexRouter = require("./routes/index");
const AuthenticationRouter = require("./routes/authentication/authentication");
const BlogRouter = require("./routes/blog/blog");

// TODO: Bind App To Port 300
App.listen(3000,()=>{console.log("Server Run With Port 3000")});
