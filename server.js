const express = require('express');
const todoRouter = require('./routes/todo.routes');
const dotenv = require('dotenv');
const app = express();

app.use(express.json());


app.use('/', todoRouter );

app.listen(3000, () => {
    console.log('Server is running on Port 3000.');
});
