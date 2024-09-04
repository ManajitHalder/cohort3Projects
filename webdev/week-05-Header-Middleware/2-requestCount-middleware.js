/*
 Problem:
    Create a middleware that counts total number of requests sent to a server. 
    Also create an endpoint that exposes it
**/

const express = require('express');
const app = express();

let requestCount = 0;

app.use((req, res, next) => {
    requestCount += 1;
    next();
})

app.get('/hi', (req, res) => {
    res.json({
        message: "route hi called"
    });
})

app.get('/hello', (req, res) => {
    res.json({
        message: "route hello called"
    });
})

app.get('/admin', (req, res) => {
    res.json({
        message: `Total number of requests made is ${requestCount}`
    });
})

app.listen(3000);