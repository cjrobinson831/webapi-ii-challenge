const router = require('express').Router()

const Posts = require('../data/db');
const Comments = require('../data/db');

router.get('/', (req, res) => {
    Posts.find(req.query)
        .then(post => {
            if (post) {
                res.status(201).json(post)
            } else {
                res.status(400).json({ message: 'Please provide title and contents for the post' })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'There was an error while saving the post to the database'
            })
        })
})