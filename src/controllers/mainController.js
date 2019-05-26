module.exports.home = (req, res) => {
	res.render('home', {
		meta: {
			title: 'Home'
		}
	});
};

module.exports.analyticsOverview = (req, res) => {
	res.render('analytics/overview', {
		meta: {
			title: 'Analytics Overview'
		}
	});
};

module.exports.analyticsReach = (req, res) => {
	res.render('analytics/reach', {
		meta: {
			title: 'Analytics Reach'
		}
	});
};

module.exports.analyticsEngagement = (req, res) => {
	res.render('analytics/engagement', {
		meta: {
			title: 'Analytics Engagement'
		}
	});
};

module.exports.analyticsProfileVisits = (req, res) => {
	res.render('analytics/profile-visits', {
		meta: {
			title: 'Analytics Profile Visits'
		}
	});
};

module.exports.analyticsHashtags = (req, res) => {
	res.render('analytics/hashtags', {
		meta: {
			title: 'Analytics Hashtags'
		}
	});
};

module.exports.analyticsExportsAndReports = (req, res) => {
	res.render('analytics/exports-and-reports', {
		meta: {
			title: 'Analytics Exports And Reports'
		}
	});
};
