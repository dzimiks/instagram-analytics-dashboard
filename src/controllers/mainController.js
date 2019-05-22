module.exports.home = (req, res) => {
	res.render('home', {
		meta: {
			title: 'Home'
		}
	});
};

module.exports.signin = (req, res) => {
	res.render('signin', {
		meta: {
			title: 'Sign In'
		}
	});
};

module.exports.signup = (req, res) => {
	res.render('signup', {
		meta: {
			title: 'Sign Up'
		}
	});
};
