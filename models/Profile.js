const { Sequelize } = require("sequelize");
const {db} = require(`../db/connection`)

const Profile = db.define("profile", {
    bio: Sequelize.STRING,
    profilePcture: Sequelize.STRING,
    birthday: Sequelize.STRING
});

module.exports = Profile;