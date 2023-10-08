const mongoose = require('mongoose');
const GiftInfoModel = require("../../models/GiftInfoModel.js");

const postGiftInfoController = async (req, res) => {

    console.log(req)
    
    const newGiftInfo = new GiftInfoModel({
    shippingDate: req.body.shippingDate,
    itemDescription: req.body.itemDescription,
    itemQuantity: req.body.itemQuantity,
    itemWeightLb: req.body.itemWeightLb,
    itemWeightOz: req.body.itemWeightOz,
    itemValue: req.body.itemValue,
    itemCountryOfOrigin: req.body.itemCountryOfOrigin,
    })

    await newGiftInfo.save();
    console.log('Saving new gift')
    return res.status(200).json(newGiftInfo);
}


module.exports =  postGiftInfoController