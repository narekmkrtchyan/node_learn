const multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

module.exports = function(app) {

  // main page
  app.get('/', 		require('./main_page').get);

  // login 
  app.post('/sign_in', require('./sign_in').post);

  //sign up
  app.post('/sign_up', require('./sign_up').post);

  // user account
  app.get('/user', require('./user_account').get);
  
  app.post('/image_upload', upload.single('myimage'), require('./image_upload').post);
    
}
