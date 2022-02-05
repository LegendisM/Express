// TODO: Load express and Create Instance For Global Variable app
global.App = require("express")();
// TODO: Disabled global.Mysql = require("./database/db.js").GetDB();

// TODO: Load Routes
const IndexRoute = require("./routes/index.js");

// TODO: Bind App To Port 300
App.listen(3000,()=>{console.log("Server Run With Port 3000")});
