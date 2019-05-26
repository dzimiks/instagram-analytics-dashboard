const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

// Setting layout for all "user" requests to main layout, and passing control to next handler
router.all('/*', function (req, res, next) {
	req.app.locals.layout = 'layout';
	next();
});

// GET
router.get('/', mainController.home);

// Analytics
router.get('/analytics/overview', mainController.analyticsOverview);
router.get('/analytics/reach', mainController.analyticsReach);
router.get('/analytics/engagement', mainController.analyticsEngagement);
router.get('/analytics/profile-visits', mainController.analyticsProfileVisits);
router.get('/analytics/hashtags', mainController.analyticsHashtags);
router.get('/analytics/exports-and-reports', mainController.analyticsExportsAndReports);

// Conversations
router.get('/conversations', mainController.conversations);

// Publishing
router.get('/publishing/post-scheduler', mainController.publishingPostScheduler);
router.get('/publishing/tips-and-tricks', mainController.publishingTipsAndTricks);

// Search
router.get('/search/users', mainController.searchUsers);
router.get('/search/hashtags', mainController.searchHashtags);

// Tools
router.get('/tools/instagram-audit', mainController.toolsInstagramAudit);

// FAQ
router.get('/faq', mainController.faq);

// Account
router.get('/account/settings', mainController.accountSettings);
router.get('/account/social-profiles', mainController.accountSocialProfiles);

module.exports = router;
