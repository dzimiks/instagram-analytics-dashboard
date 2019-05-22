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
router.get('/signin', mainController.signin);
router.get('/signup', mainController.signup);

module.exports = router;
