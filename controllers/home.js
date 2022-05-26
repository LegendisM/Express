const Todo = require('../model/todo');

exports.Index = async (req,res) => {
    const todos = await Todo.findAll();

    res.render("index", {
        title:"Home Page",
        todos
    });
}