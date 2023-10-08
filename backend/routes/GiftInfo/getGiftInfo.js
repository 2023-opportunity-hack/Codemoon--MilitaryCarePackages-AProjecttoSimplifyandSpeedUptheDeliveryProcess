const express = require('express');
const router = express.Router();
const getGiftInfoController = require('../../controllers/GiftInfoController/getGiftInfoController');

router.get('/getGiftInfo', getGiftInfoController)

module.exports = router;