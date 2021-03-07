const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/swagger', (req, res) => {
    res.sendFile('public/index.html', { root: '.' });
});

module.exports.swagger = serverless(app);