const express = require('express');
require('dotenv').config();
const config = require('./config');
const mongo = require('./utils/mongo');
const app = express();

app.use(express.json());

app.use('/ping', (req, res, next) => res.status(200).send('Ping successful'));


app.listen(config.port, 'localhost', async () => {
    console.log(`Server started on: ${config.port}`);
});
