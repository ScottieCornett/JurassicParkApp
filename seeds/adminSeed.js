const mongoose = require('mongoose');
const User = require('../models/user');

mongoose
  .connect('mongodb://127.0.0.1:27017/jurassicpark')
  .then(() => {
    console.log('Mongo connection open!');
  })
  .catch((err) => {
    console.log('Error with Mongo: ', err);
  });

const admin = new User({
  username: 'admin',
  email: 'admin@jp.com',
  password: 'admin',
  isAdmin: true,
});

admin.save();
