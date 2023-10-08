const mongoose = require('mongoose');
const GiftInfoModel = require("../../models/GiftInfoModel.js");

const getGiftInfoController = async (req, res) => {

    const giftInfo = await GiftInfoModel.find({});

    console.log(giftInfo);
    
    return res.status(200).json(giftInfo);
}


module.exports =  getGiftInfoController