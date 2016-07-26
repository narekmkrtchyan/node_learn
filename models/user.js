'use strict'
const crypto 	= require('crypto');
const mongoose 	= require('../libs/db/mongoose');

let schemaUsers = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  nukname: {
    type: String,
    required: true,
  },
  email: {
    required: true,
    unique: true,
    type: String,
  }
});

exports.User = mongoose.model('User', schemaUsers);
