const ItemInventoryInfoModel = require('../../models/ItemInventoryInfoModel')

const getItemInventoryInfoController = async (req, res)=>{

    const result = await ItemInventoryInfoModel.find()

    res.send(result)
}

module.exports = getItemInventoryInfoController;