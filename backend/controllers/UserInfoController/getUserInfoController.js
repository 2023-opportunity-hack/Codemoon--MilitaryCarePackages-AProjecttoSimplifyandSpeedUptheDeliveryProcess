const mongoose = require('mongoose');
const UserInfoModel = require("../../models/UserInfoModel.js");

const getUserInfoController = async (req, res) => {

    // const {email} = req.email;

    // const userInfo = await UserInfoModel.find({receiverEmail: email});
    const userInfo = await UserInfoModel.find({});

    return res.status(200).json(userInfo);

}


module.exports =  getUserInfoController