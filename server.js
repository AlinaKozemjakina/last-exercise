const express = require('express');
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todo.routes');
const dotenv = require('dotenv');
const app = express();

app.use(express.json());


app.use('/', todoRouter );

app.listen(5000, () => {
    console.log('Server is running on Port 5000.');
});
