// Import express
const express = require('express');

// Create an express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Simple in-memory "database"
let users = [
  { id: 1, name: 'Alice', age: 23 },
  { id: 2, name: 'Bob', age: 28 }
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET one user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// POST create a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update a user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.name = req.body.name || user.name;
  user.age = req.body.age || user.age;

  res.json(user);
});

// DELETE a user
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: 'User deleted' });
});

// Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
