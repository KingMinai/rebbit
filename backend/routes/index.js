const express = require('express');
const router = express.Router();

// Controller modules
const auth = require('../controllers/authController');
const post_controller = require('../controllers/postController');

// GET home page.
router.get('/r/', post_controller.home);

// POST ROUTES --------------------------------------------------
// GET Req for single post
router.get('/r/:id', auth.authenticateToken, post_controller.post_detail);

// POST Req for creating a new post
router.post('/r/new_post', auth.authenticateToken, post_controller.post_create_post);

// POST Req for updateing a post
router.post('/r/:id/update', auth.authenticateToken, post_controller.post_update_post);

// POST Req for deleting a post
router.post('/r/:id/delete', auth.authenticateToken, post_controller.post_delete_post);

module.exports = router;
