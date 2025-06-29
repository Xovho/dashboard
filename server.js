
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

let players = {};

app.post('/update', (req, res) => {
  const { username, candyBlossom, inventoryValue } = req.body;
  players[username] = {
    candyBlossom,
    inventoryValue,
    lastSeen: Date.now()
  };
  res.sendStatus(200);
});

app.get('/list', (req, res) => {
  res.json(players);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
