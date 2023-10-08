const express = require('express')
const getGiftInfo = require('./routes/GiftInfo/getGiftInfo.js')
const postGiftInfo = require('./routes/GiftInfo/postGiftInfo.js')
const getUserInfo = require('./routes/UserInfo/getUserInfo.js')
const postUserInfo = require('./routes/UserInfo/postUserInfo.js')
const getItemInventoryInfo = require('./routes/ItemInventoryInfo/getItemInventoryInfo.js')
const postItemInventoryInfo = require('./routes/ItemInventoryInfo/postItemInventoryInfo.js')
const app = express()
const bodyParser = require('body-parser')
const connectDB = require('./db/connectDB.js');
const cors = require('cors')
const createShippingLabelController = require('./controllers/ShippingLabelController/createShippingLabelController.js')
const PORT = 8000

connectDB()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())

app.use('/userInfo', getUserInfo)
app.use('/userInfo', postUserInfo)
app.use('/giftInfo', getGiftInfo)
app.use('/giftInfo', postGiftInfo)
app.use('/itemInventory', getItemInventoryInfo)
app.use('/itemInventory', postItemInventoryInfo)

app.post('/create-label', createShippingLabelController)

app.post('/', (req, res)=>{ 
    const {name} = req.body; 
      console.log(req.body)
    res.send(`Welcome ${name}`); 
}) 

app.listen(PORT, ()=>{
    console.log(`Server running at PORT: ${PORT}`)
})
