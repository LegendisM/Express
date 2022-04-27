function Home (request,response) {
    response.render("index",{title:"Home Page"});
}

export {
    Home
}