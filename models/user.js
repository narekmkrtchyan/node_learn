'use strict'
const crypto 	  = require('crypto');
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
  nikname: {
    type: String,
    required: true,
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  gender:{
    required:true,
    type: String,
  },
  img_url:{
    type:String,
  }
});

exports.User = mongoose.model('User', schemaUsers);
