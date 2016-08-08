'use strict'
const crypto 	  = require('crypto');
const mongoose 	= require('../libs/db/mongoose');

let schemaMessages = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  sendTime: {
    type: Date,
  },
  sender: {
    type: String,
  }
});

exports.Message = mongoose.model('Message', schemaMessages);
