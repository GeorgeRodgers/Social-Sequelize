const { Sequelize } = require("sequelize");
const {db} = require(`../db/connection`)

const Post = db.define("post", {
    title: Sequelize.STRING,
    body: Sequelize.STRING,
    createdAt: Sequelize.STRING
});

module.exports = Post;