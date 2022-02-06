// TODO : Load Classes
let authentication = require("./authentication/authentication");
const blog = require("./blog/blog");

// TODO: Listen to Main Root
App.get("/",(request,response)=>
{
    response.render('index',{title:"Index Page",test:"Welcome Mannn"});
});
