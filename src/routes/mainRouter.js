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
router.get('/analytics/overview', mainController.analyticsOverview);
router.get('/analytics/reach', mainController.analyticsReach);
router.get('/analytics/engagement', mainController.analyticsEngagement);

router.get('/analytics/profile-visits', mainController.analyticsProfileVisits);
router.get('/analytics/hashtags', mainController.analyticsHashtags);
router.get('/analytics/exports-and-reports', mainController.analyticsExportsAndReports);

module.exports = router;
