const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const user_controller = require('../controllers/userController');

// GET Req for single user
router.get('/', auth.authenticateToken, user_controller.user_detail);

// POST Req for creating a new user
router.post('/signup', user_controller.user_signup_post);

// POST Req for login
router.post('/login', user_controller.user_login_post);

module.exports = router;
