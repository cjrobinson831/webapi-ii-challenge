const express = require('express');

const postRouter = require('./post-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
    <h2>Lambda Post API</h>
    <p>Welcome to the Lambda Post API</p>
    `);
});

server.use('/api/posts', postRouter)

server.listen(4000, () => {
    console.log('\n*** Server Running on http://localhost:5000 ***\n');
})