const { Sequelize } = require("sequelize");
const {db} = require(`../db/connection`)

const Comment = db.define("comment", {
    body: Sequelize.STRING,
    createdAt: Sequelize.STRING
});

module.exports = Comment;