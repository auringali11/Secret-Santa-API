const express = require('express');
const secretSanta = express();
secretSanta.use(express.json());

const validation = require('./validatePlayers');
const shuffle = require('./shuffle');
const sendMail = require('./mail');

const players = [];

secretSanta.post('/api/players', (req, res) => {
    validation.validatePlayers(req.body.players);
    const shuffledList = shuffle.shuffle(req.body.players);
    sendMail.mail(shuffledList);
    res.send(shuffledList);
});

const port = 3000;
secretSanta.listen(port, () => console.log(`Listening on port ${port}...`));
