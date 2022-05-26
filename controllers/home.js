const Todo = require('../model/todo');

exports.Index = async (req,res) => {
    const todos = await Todo.findAll();

    req.session.test++;
    res.render("index", {
        title:`Home Page ${req.session.test}`,
        todos
    });
}