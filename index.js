const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const catchAsync = require('./utils/wrapAsync');
const Contact = require('./models/contact');
const Dinosaur = require('./models/dinosaur');
const wrapAsync = require('./utils/wrapAsync');

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
app.post(
  '/contact',
  wrapAsync(async (req, res, next) => {
    const contact = new Contact(req.body.contact);
    await contact.save();
    res.redirect('/');
  })
);

app.get('/dinosaurs', async (req, res) => {
  const dinosaurs = await Dinosaur.find({});
  res.render('dinos/index', { dinosaurs });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Something went wrong' } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
