require('dotenv').config;

module.exports = {
    port: process.env.PORT,
    mongoConfig: {
        username: process.env.MONGO_USERNAME,
        password: process.env.MONGO_PASSWORD,
        database: process.env.MONGO_DATABASE,
        usersTable: process.env.USERS_TABLE,
        roomsTable: process.env.ROOMS_TABLE,
    },
};