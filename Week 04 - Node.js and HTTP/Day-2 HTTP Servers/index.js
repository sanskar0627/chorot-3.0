const express = require("express");
const app = express();
const todos = [];

app.use(express.json());

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { task } = req.body;
  const newtodo = {
    id: todos.length + 1,
    task: task
  };
  todos.push(newtodo);
  res.status(201).json(newtodo);
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
  }
  res.json(todos);

});
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    const { task } = req.body;
    todos[index].task = task;
    return res.status(200).json(todos[index]);
  }
  res.status(404).json({ message: "Todo not found" });

});

app.listen(3000);
