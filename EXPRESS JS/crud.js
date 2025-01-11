const express = require('express');
const app = express();

//creating server and listening server
app.listen(1234,()=>{
    console.log("Server running");
    });
app.get('/users', (req, res) => {
  // Retrieve a list of users
  res.send(['User  1', 'User  2', 'User  3']);
});

app.post('/users', (req, res) => {
  // Create a new user
  res.send('User  created!');
});

app.put('/users/:id', (req, res) => {
  // Update an existing user
  res.send(`User  ${req.params.id} updated!`);
});

app.delete('/users/:id', (req, res) => {
  // Delete a user
  res.send(`User  ${req.params.id} deleted!`);
});
