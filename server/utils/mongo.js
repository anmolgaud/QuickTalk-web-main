const { MongoClient } = require('mongodb');
const { mongoConfig } = require('../config');

const URI = `mongodb+srv://${mongoConfig.username}:${mongoConfig.password}@cluster0.4dxwuhq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const mongo = new MongoClient(URI);

module.exports = mongo;