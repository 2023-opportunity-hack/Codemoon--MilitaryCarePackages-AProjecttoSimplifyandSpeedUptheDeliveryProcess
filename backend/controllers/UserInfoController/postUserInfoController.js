const mongoose = require('mongoose')
const UserInfoModel = require('../../models/UserInfoModel')

const postUserInfoController = async (req, res)=>{
    const receiverFirstName = req.body.receiverFirstName;
    // const receiverMiddleName = req.body.receiverMiddleName;
    const receiverLastName = req.body.receiverLastName;
    // const receiverCompanyName = req.body.receiverCompanyName;
    const receiverAddressLine1 = req.body.receiverAddressLine1;
    const receiverAddressLine2 = req.body.receiverAddressLine2;
    // const receiverAddressLine3 = req.body.receiverAddressLine3;
    // const receiverAddressCity = req.body.receiverAddressCity;
    const receiverState = req.body.receiverState;
    const receiverZipCode = req.body.receiverZipCode;
    // const receiverPhone = req.body.receiverPhone;
    const receiverEmail = req.body.receiverEmail;
    
    console.log(req.body)
    const newUser = UserInfoModel({
         receiverFirstName,
    //  receiverMiddleName,
     receiverLastName ,
    //  receiverCompanyName ,
     receiverAddressLine1 ,
     receiverAddressLine2 ,
    //  receiverAddressLine3 ,
    //  receiverAddressCity ,
     receiverState,
     receiverZipCode ,
    //  receiverPhone ,
     receiverEmail ,
    })

    try{
        const response = await newUser.save()
        console.log(response)
        res.send({
            result: 1,
            description: "Saved Successfully"
        });
    }
    catch(err){
        console.log(err)
        res.send("Unsuccessul")
    }

}

module.exports = postUserInfoController;