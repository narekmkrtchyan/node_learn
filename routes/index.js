module.exports = function(app) {

  // main page
  app.get('/', 		require('./main_page').get);

  // get time
  app.get('/test', 	require('./get_time').get);
  
  // login 
  app.post('/test', require('./sign_in').post);

  //sign up
  app.post('/sign', require('./sign_up').post);
    
}
