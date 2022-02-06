const express = require("express");
const router = express.Router();

// TODO: Route Of Login
router.get("/login" , (request,response)=>
{
    response.render('authentication/login');
})

// TODO: Route Of Register
router.get("/register" , (request,response)=>
{
    response.render('authentication/register');
})

// TODO: Route Of ForgotPassword
router.get("/forgotPassword" , (request,response)=>
{
    response.render('authentication/forgotPassword');
})

App.use(router);
