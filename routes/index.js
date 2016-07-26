module.exports = function(app) {

  // main page
  app.get('/', 		require('./main_page').get);

  // login 
  app.post('/test', require('./sign_in').post);

  //sign up
  app.post('/sign_up', require('./sign_up').post);

  // user account
  app.get('/user', require('./user_account').get);
    
}
