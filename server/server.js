const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

const tasks = [];

for (let i = 0; i < 10; i++) {
    tasks.push({title: `Task ${i + 1} title`, done: false, description: `Task ${i + 1} Description`});
}

app.get('/api/tasks', (req, res) => {
    res.send(tasks);
})

app.post('/api/tasks', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.send(tasks)
})

app.listen(3000)
