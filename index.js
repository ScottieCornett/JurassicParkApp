const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Contact = require('./models/contact');

mongoose.connect('mongodb://127.0.0.1:27017/jurassicpark');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected!');
});

const app = express();

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/book', (req, res) => {
  res.render('book');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/dinosaurs', (req, res) => {
  res.render('dinos/index');
});

app.use((err, req, res, next) => {
  res.send('Something broke');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
