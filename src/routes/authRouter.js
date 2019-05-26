const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

// Setting layout for all "user" requests to main layout, and passing control to next handler
router.all('/*', function (req, res, next) {
	req.app.locals.layout = 'auth/layout';
	next();
});

// GET
router.get('/signin', authController.signin);
router.get('/signup', authController.signup);

module.exports = router;
