const express = require('express');
const users =require('./users/users.route')
const repairs = require('./repairs/repairs.route')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', users);
app.use("/api/v1", repairs);



module.exports = app;