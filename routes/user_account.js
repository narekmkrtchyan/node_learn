module.exports.get = function(req, res) {
	// TODO: Create session
	res.render('user', {
		user_name: 		'Narek',
		user_nikname: 	'NarekLinux',
		user_age: 		23
	});
}