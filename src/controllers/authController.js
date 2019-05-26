module.exports.signin = (req, res) => {
	res.render('auth/signin', {
		meta: {
			title: 'Sign In'
		}
	});
};

module.exports.signup = (req, res) => {
	res.render('auth/signup', {
		meta: {
			title: 'Sign Up'
		}
	});
};
