'use strict';

const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/book', (req, res) => {
  res.render('book');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
