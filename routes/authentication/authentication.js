// TODO: Route Of Login
App.get("/login" , (request,response)=>
{
    response.send('Welcome to Login screen Route');
})

// TODO: Route Of Register
App.get("/register" , (request,response)=>
{
    response.send('Welcome to Register screen Route');
})

// TODO: Route Of ForgotPassword
App.get("/forgotPassword" , (request,response)=>
{
    response.send('Welcome to ForgotPassword screen Route');
})
