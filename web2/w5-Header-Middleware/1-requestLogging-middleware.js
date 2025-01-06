
/* Assignment 1:

    Create a middleware function that logs each incoming request’s HTTP method, 
    URL, and timestamp to the console.
**/

const express = require('express');
const app = express();

function logRequestData(req, res, next) {
    console.log(`Request Method:    ${req.method}`)
    const requestUrl = `${req.protocol}://${req.get('host')}${req.url}`
    console.log(`Request URL:       ${requestUrl}`);
    console.log(`Request Timestamp: ${new Date().toISOString()}`)

    next()
}

app.use(logRequestData);

app.get('/', (req, res) => {
    res.json({
        message: "success"
    });
})

app.get('/home', (req, res) => {
    const requestMethod = req.method
    const requestUrl = `${req.protocol}://${req.get('host')}${req.url}`
    const requestTimestamp = new Date().toISOString();

    res.json({
        'Request Method': requestMethod,
        'Request Url': requestUrl,
        'Request Timestamp': requestTimestamp
    });
})

app.listen(3000);