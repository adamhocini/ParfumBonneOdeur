const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = {}; // { username: { password, favorites: [] } }

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }
  if (users[username]) {
    return res.status(400).json({ message: 'User already exists' });
  }
  users[username] = { password, favorites: [] };
  res.json({ message: 'Registered successfully' });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  res.json({ message: 'Login successful', favorites: user.favorites });
});

app.get('/api/favorites', (req, res) => {
  const username = req.query.username;
  const user = users[username];
  if (!user) return res.status(401).json({ message: 'Invalid user' });
  res.json({ favorites: user.favorites });
});

app.post('/api/favorites', (req, res) => {
  const { username, productId } = req.body;
  const user = users[username];
  if (!user) return res.status(401).json({ message: 'Invalid user' });
  if (!user.favorites.includes(productId)) {
    user.favorites.push(productId);
  }
  res.json({ favorites: user.favorites });
});

app.delete('/api/favorites', (req, res) => {
  const { username, productId } = req.body;
  const user = users[username];
  if (!user) return res.status(401).json({ message: 'Invalid user' });
  user.favorites = user.favorites.filter(id => id !== productId);
  res.json({ favorites: user.favorites });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
