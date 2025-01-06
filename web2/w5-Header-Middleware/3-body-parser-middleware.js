const express = require('express');
const parser = require('body-parser');
const app = express();

// express.json() uses body-parser.json() internally. You can use either express.json()
// or use body-parser.json()

// const bodyParser = express.json();
const bodyParser = parser.json();

app.use(bodyParser);

app.post('/sum', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;

    res.json({
        sum: a + b
    });
})

app.listen(3000);
