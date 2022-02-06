const express = require("express");
const router = express.Router();

router.get("/",(request,response)=>
{
    response.render('index',{title:"Index Page",test:"Welcome Mannn"});
});

App.use(router);
