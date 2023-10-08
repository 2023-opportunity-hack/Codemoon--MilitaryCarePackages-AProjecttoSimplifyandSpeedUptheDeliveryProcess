const express = require('express');
const router = express.Router()
const loginController = require( '../../controllers/AuthController/loginController');

router.post('/login', loginController)

module.exports = router;