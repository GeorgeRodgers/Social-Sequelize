const { Sequelize } = require("sequelize");
const {db} = require(`../db/connection`)

const Like = db.define("like", {
    reactionType: Sequelize.STRING,
    createdAt: Sequelize.STRING
});

module.exports = Like;