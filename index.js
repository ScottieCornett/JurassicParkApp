const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ExpressError = require('./utils/ExpressError');
const bookTrip = require('./routes/bookTrip');
const dinos = require('./routes/dinos');
const contact = require('./routes/contact');
const thanks = require('./routes/thanks');

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

app.use('/booktrip', bookTrip);
app.use('/dinosaurs', dinos);
app.use('/contact', contact);
app.use('/thanks', thanks);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.all('*', (req, res, next) => {
  next(new ExpressError('Not Found', 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) {
    err.message = 'Something went wrong';
  }
  res.status(statusCode).render('error', { err });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
