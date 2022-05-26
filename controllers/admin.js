const Todo = require('../model/todo');

exports.addTodo = async (req,res) => {
    if (!req.body.todo) return res.redirect("/"); 

    const todo = await Todo.create({
        text: req.body.todo
    });

    res.redirect("/");
}

exports.deleteTodo = async (req,res) => {
    Todo.destroy({where:{id:req.params.id}});
    res.redirect("/");
}

exports.completeTodo = async (req,res) => {
    const todo = Todo.findByPk(req.params.id);
    (await todo).update({completed:true});
    res.redirect("/");
}