const express = require('express');
const app = express();
const port = 3000;

let todos = [
    { id: 1, task: 'Learn Docker' },
    { id: 2, task: 'Build ToDo app' }
];

app.get('/', (req, res) => {
    res.send('<h1>ToDo App</h1><ul>' + todos.map(todo => `<li>${todo.task}</li>`).join('') + '</ul>');
});

app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
});

