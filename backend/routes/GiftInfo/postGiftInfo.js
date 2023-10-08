const express = require('express');
const router = express.Router();
const postGiftInfoController = require('../../controllers/GiftInfoController/postGiftInfoController');

router.put('/postGiftInfo', postGiftInfoController)

module.exports = router;