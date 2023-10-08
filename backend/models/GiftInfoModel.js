const mongoose = require('mongoose')

const GiftInfoModelSchema = new mongoose.Schema({
    shippingDate: String,
    itemDescription: String,
    itemQuantity: String,
    itemWeightLb: String,
    itemWeightOz: String,
    itemValue: String,
    itemCountryOfOrigin: String,  
})

const GiftInfoModel = mongoose.model("GiftInfo", GiftInfoModelSchema);

module.exports = GiftInfoModel;