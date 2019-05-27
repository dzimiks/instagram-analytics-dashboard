// const getRandomInt = require('../utils/utils');

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.home = (req, res) => {
	res.render('home', {
		meta: {
			title: 'Home'
		}
	});
};

module.exports.analyticsOverview = (req, res) => {
	let posts = [];
	let stories = [];
	let countries = [{
		name: 'Serbia',
		percentage: 70.6,
		followers: 1318
	}, {
		name: 'United States',
		percentage: 15.9,
		followers: 297
	}, {
		name: 'India',
		percentage: 7.8,
		followers: 145
	}, {
		name: 'Bosnia and Herzegovina',
		percentage: 2.6,
		followers: 48
	}, {
		name: 'Indonesia',
		percentage: 1.7,
		followers: 31
	}, {
		name: 'Montenegro',
		percentage: 0.8,
		followers: 17
	}, {
		name: 'Croatia',
		percentage: 0.3,
		followers: 6
	}, {
		name: 'Nigeria',
		percentage: 0.2,
		followers: 5
	}, {
		name: 'Italy',
		percentage: 0.1,
		followers: 3
	}];

	for (let i = 400; i < 1200; i += 100) {
		posts.push({
			image: 'https://picsum.photos/' + i + '/' + i + '/?random',
			likes: getRandomInt(100, 500),
			comments: getRandomInt(1, 50)
		});

		stories.push({
			image: 'https://picsum.photos/' + i + '/' + i + '/?random',
			seen: getRandomInt(100, 500),
			impressions: getRandomInt(500, 1000)
		});
	}

	res.render('analytics/overview', {
		meta: {
			title: 'Analytics Overview'
		},
		posts: posts,
		stories: stories,
		countries: countries
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

module.exports.analyticsInsightsPost = (req, res) => {
	res.render('analytics/insights/post', {
		meta: {
			title: 'Analytics Insights Post'
		}
	});
};

module.exports.analyticsInsightsStory = (req, res) => {
	res.render('analytics/insights/story', {
		meta: {
			title: 'Analytics Insights Story'
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
