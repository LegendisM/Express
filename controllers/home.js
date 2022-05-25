const Todo = require('../model/todo');

exports.Index = (req,res) => {
    Todo.fetchAll((todos) => {
        res.render("index", {
            title:"Home Page",
            todos
        })
    })
}