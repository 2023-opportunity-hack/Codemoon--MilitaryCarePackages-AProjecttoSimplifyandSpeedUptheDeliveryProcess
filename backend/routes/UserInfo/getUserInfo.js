const express = require('express');
const router = express.Router()
const getUserInfoController = require( '../../controllers/UserInfoController/getUserInfoController');

router.get('/getUserInfo', getUserInfoController)

module.exports = router;