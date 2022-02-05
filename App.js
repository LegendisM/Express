// TODO: Load express and Create Instance For Global Variable app
global.app = require("express")();

// TODO: Load Classes


// TODO: Listen to Main Root
app.get("/",(request,response)=>
{
    
});

// TODO: Bind App To Port 300
app.listen(3000,()=>{console.log("Server Run With Port 3000")});
