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

module.exports.conversations = (req, res) => {
	res.render('conversations', {
		meta: {
			title: 'Conversations'
		}
	});
};

module.exports.publishingPostScheduler = (req, res) => {
	res.render('publishing/post-scheduler', {
		meta: {
			title: 'Publishing Post Scheduler'
		}
	});
};

module.exports.publishingTipsAndTricks = (req, res) => {
	res.render('publishing/tips-and-tricks', {
		meta: {
			title: 'Publishing Tips And Tricks'
		}
	});
};

module.exports.searchUsers = (req, res) => {
	res.render('search/users', {
		meta: {
			title: 'Search Users'
		}
	});
};

module.exports.searchHashtags = (req, res) => {
	res.render('search/hashtags', {
		meta: {
			title: 'Search Hashtags'
		}
	});
};

module.exports.toolsInstagramAudit = (req, res) => {
	res.render('tools/instagram-audit', {
		meta: {
			title: 'Tools Instagram Audit'
		}
	});
};

module.exports.faq = (req, res) => {
	res.render('faq', {
		meta: {
			title: 'FAQ'
		}
	});
};

module.exports.accountSettings = (req, res) => {
	res.render('account/settings', {
		meta: {
			title: 'Account Settings'
		}
	});
};


module.exports.accountSocialProfiles = (req, res) => {
	res.render('account/social-profiles', {
		meta: {
			title: 'Account Social Profiles'
		}
	});
};
