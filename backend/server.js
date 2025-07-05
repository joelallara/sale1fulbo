const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// In-memory matches list
const matches = [];

// List matches
app.get('/matches', (req, res) => {
  res.json(matches);
});

// Create a new match
app.post('/matches', (req, res) => {
  const match = {
    id: matches.length + 1,
    ...req.body,
  };
  matches.push(match);
  res.status(201).json(match);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
