const mongoose  = require('mongoose');
const config    = require('../../config');

mongoose.connect((
                config.get('mongoose:uri')),
                config.get('mongoose:options')
              );
mongoose.set('debug', true);
module.exports = mongoose;