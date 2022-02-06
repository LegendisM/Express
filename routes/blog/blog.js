const express = require("express");
const router = express.Router();

// TODO: Route Of Main Blog Page
router.get("/blog",(request,response)=>
{
    response.render('blog/blog');
})

App.use(router);
