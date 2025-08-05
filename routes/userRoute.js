const express = require('express');
const {registerController} = require('../controllers/userController');
const app = express();

// router object
const router = express.Router();

// Routes
// Register / POST route
router.post('/register',registerController);

module.exports = router;