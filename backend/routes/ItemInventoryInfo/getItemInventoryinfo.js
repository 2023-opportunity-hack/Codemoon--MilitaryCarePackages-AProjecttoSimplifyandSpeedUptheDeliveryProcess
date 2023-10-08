const express = require('express')
const router = express.Router()
const getItemInventoryInfoController = require('../../controllers/ItemInventoryInfoController/getItemInventoryInfoController.js');

router.get('/getItemInventoryInfo', getItemInventoryInfoController)

module.exports = router;
