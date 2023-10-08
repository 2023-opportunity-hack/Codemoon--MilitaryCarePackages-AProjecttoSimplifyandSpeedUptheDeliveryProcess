const ItemInventoryInfoModel = require('../../models/ItemInventoryInfoModel')

const postItemInventoryInfoController = async (req, res)=>{

    const newItem = new ItemInventoryInfoModel({
        id: req.body.id,
        itemName: req.body.itemName,
        itemType: req.body.itemType,
        itemQuantity: req.body.itemQuantity
    })

    await newItem.save()

    res.send("Success")
}

module.exports = postItemInventoryInfoController;