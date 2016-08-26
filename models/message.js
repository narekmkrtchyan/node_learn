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
  },
  id:{
    type:String,
  },
  gender:{
    type:String,
  },
  img_url:{
    type:String,
  }
});

exports.Message = mongoose.model('Message', schemaMessages);
