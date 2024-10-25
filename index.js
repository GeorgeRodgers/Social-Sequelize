const { Comment, Like, Post, Profile, User } = require("./models/index");

// Define your associations here

User.hasOne(Profile);
Profile.belongsTo(User);

Post.belongsTo(User);
User.hasMany(Post);

Comment.belongsTo(Post);
Post.hasMany(Comment);

User.belongsToMany(Like, {through: "UserLikes"});
Like.belongsToMany(User, {through: "UserLikes"});

module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}