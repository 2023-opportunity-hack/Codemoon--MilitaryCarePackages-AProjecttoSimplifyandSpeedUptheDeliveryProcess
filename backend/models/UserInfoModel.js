const mongoose = require('mongoose');

const UserInfoModelSchema = new mongoose.Schema({
    receiverFirstName: String,
    // receiverMiddleName: String,
    receiverLastName: String,
    // receiverCompanyName: String,
    receiverAddressLine1: String,
    receiverAddressLine2: String,
    // receiverAddressLine3: String,
    // receiverAddressCity: String,
    receiverState: String,
    receiverCountry: String,
    receiverZipCode: String,
    // receiverPhone: String,
    receiverEmail: String,
    receiverGender: String,
    receiverBranch: String,
    receiverCarePackageType: String,
})

const UserInfoModel = mongoose.model('UserInfo', UserInfoModelSchema);

module.exports = UserInfoModel;