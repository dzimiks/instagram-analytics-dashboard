module.exports.home = (req, res) => {
	res.render('home', {
		meta: {
			title: 'Home'
		}
	});
};

module.exports.analytics = (req, res) => {
	res.render('analytics', {
		meta: {
			title: 'Analytics'
		}
	});
};
