const cron = require('node-cron');
const Todo = require('../models/Todo');

const scheduleReminders = () => {
    cron.schedule('* * * * *', async () => {
        const now = new Date();
        const todos = await Todo.find({ dueDate: { $lte: now }, completed: false });
        todos.forEach(todo => {
            console.log(`Reminder: Your task "${todo.title}" is due!`);
        });
    });
};

module.exports = scheduleReminders;

