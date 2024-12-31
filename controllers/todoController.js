const Todo = require('../models/Todo');

const createTodo = async (req, res) => {
    try {
        const todo = new Todo({ ...req.body, userId: req.user.userId });
        await todo.save();
        res.status(201).send(todo);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

const getTodos = async (req, res) => {
    const { completed } = req.query;
    const filter = completed !== undefined ? { completed: completed === 'true' } : {};
    const todos = await Todo.find({ userId: req.user.userId, ...filter });
    res.send(todos);
};

const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(todo);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

const shareTodo = async (req, res) => {
    const { userId } = req.body;
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, {
            $addToSet: { collaborators: userId }
        }, { new: true });
        res.send(todo);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

module.exports = { createTodo, getTodos, updateTodo, shareTodo };

