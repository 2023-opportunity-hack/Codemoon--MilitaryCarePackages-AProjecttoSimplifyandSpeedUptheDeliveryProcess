const express = require('express');
const router = express.Router()
const postUserInfoController = require( '../../controllers/UserInfoController/postUserInfoController');

router.post('/postUserInfo', postUserInfoController)

module.exports = router;