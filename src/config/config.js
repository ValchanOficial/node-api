const express = require('express');
const cors = require('cors');
const app = express();
const requireDir = require('require-dir');
const Database = require('./database');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//-------------------------------------Connect to Database
Database.connect();
requireDir('../models');
//-------------------------------------Routes
app.use('/api', require('../routes'));

module.exports = app;