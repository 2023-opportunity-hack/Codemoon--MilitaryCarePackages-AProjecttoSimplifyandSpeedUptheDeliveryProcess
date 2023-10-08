const ItemInventoryInfoModel = require('../../models/ItemInventoryInfoModel')

const postItemInventoryInfoController = async (req, res)=>{

    const item = await ItemInventoryInfoModel.findOne({ itemName: req.body.itemName});
    // console.log(item);

    if(!item) {
        const newItem = new ItemInventoryInfoModel({
            id: req.body.id,
            itemName: req.body.itemName,
            itemType: req.body.itemType,
            itemQuantity: req.body.itemQuantity
        })

        await newItem.save();
    } else {
        var new_quantity = String(parseInt(item.itemQuantity) + parseInt(req.body.itemQuantity));
        console.log(new_quantity);

        await ItemInventoryInfoModel.findOneAndUpdate(
            { itemName: req.body.itemName },
            { $set: { itemQuantity: new_quantity }},
            { returnOriginal: false},
        );
    }

    res.send("Success")
}

module.exports = postItemInventoryInfoController;