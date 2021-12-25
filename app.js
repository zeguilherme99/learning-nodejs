const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Users</h1>')
});

app.use('/', (req, res, next) => {
    res.send('<h1>Learning JS</h1>')
});

app.listen(3000);
