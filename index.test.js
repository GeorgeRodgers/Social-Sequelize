const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');
const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const comments = require(`./seed/comments.json`)
const likes = require(`./seed/likes.json`)
const posts = require(`./seed/posts.json`)
const profiles = require(`./seed/profiles.json`)
const users = require(`./seed/users.json`)


describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await db.sync({ force: true });
        await Comment.bulkCreate(comments);
        await Like.bulkCreate(likes);
        await Post.bulkCreate(posts);
        await Profile.bulkCreate(profiles);
        await User.bulkCreate(users);

    })

    // Write your tests here
    
    test("replace with your test", function() {
        expect(true).toBe(true);
    })




})