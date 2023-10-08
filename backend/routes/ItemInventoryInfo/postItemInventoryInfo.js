const express = require('express')
const router = express.Router()
const postItemInventoryInfoController = require('../../controllers/ItemInventoryInfoController/postItemInventoryInfoController.js');

router.post('/postItemInventoryInfo', postItemInventoryInfoController)

module.exports = router;
