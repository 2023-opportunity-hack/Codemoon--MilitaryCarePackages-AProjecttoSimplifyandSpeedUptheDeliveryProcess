const ItemInventoryInfoModel = require('../../models/ItemInventoryInfoModel')

const getItemInventoryInfoController = async (req, res)=>{
    var result = [];
    if(req.query.lowestCount) {
        result = await ItemInventoryInfoModel.find().sort({ itemQuantity : 1}).limit(5);
    } else {
        result = await ItemInventoryInfoModel.find()
    }
    res.send(result)
}

module.exports = getItemInventoryInfoController;