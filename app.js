const express = require('express');
const app = express();
const dogRoutes = require('./dog/route/dog.route');

app.use(express.json());
app.set("view engine", "ejs");
app.use('/', dogRoutes);

module.exports = app
