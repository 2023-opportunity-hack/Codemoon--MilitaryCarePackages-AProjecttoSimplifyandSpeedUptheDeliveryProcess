const mongoose = require('mongoose');

const ItemInventoryInfoModelSchema = mongoose.Schema({
    id: String,
    itemName: String,
    itemQuantity: String,
    itemType: String,
    expiryDate: String
})

const ItemInventoryInfoModel = mongoose.model("ItemInventoryInfo", ItemInventoryInfoModelSchema)

module.exports = ItemInventoryInfoModel