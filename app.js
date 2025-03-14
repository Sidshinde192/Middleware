// Name: Siddhesh Shinde
const express = require('express');
const loggerMiddleware = require('./middleware/loggerMiddleware');

const app = express();


app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Middleware Implemented Successfully');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
