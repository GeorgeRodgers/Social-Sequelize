const { Sequelize } = require("sequelize");
const {db} = require(`../db/connection`)

const User = db.define("user", {
    username: Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports = User;