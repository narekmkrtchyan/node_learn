'use strict'
const crypto 	= require('crypto');
const mongoose 	= require('../libs/db/mongoose');

let schemaUsers = mongoose.Schema({
  your_name: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  emaile: {
    required: true,
    unique: true,
    type: String,
  }
});

exports.User = mongoose.model('User', schemaUsers);
