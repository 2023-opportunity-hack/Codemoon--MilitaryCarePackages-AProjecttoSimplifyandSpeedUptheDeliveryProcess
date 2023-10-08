const nodemailer = require('nodemailer')

const EmailController = ({label_url})=>{

    // const {to, subject, text} = {'denishsuhagiya18@gmail.com', "Your Shipping Label", "Please clcik on the below pdf to get access to the shipping label"}

    const transporter = nodemailer.createTransport({
        port: 465,               // true for 465, false for other ports
        host: "smtp.gmail.com",
           auth: {
                user: 'hartiksuhagiya10@gmail.com',
                pass: 'ksmc phsw ukcx zlko',
             },
        secure: true,
        });

    var to = 'hartiksuhagiya10@gmail.com'
    var subject = "Your Shipping Label"
    var text = "Please click on the below pdf to get access to the shipping label"

    const mailData = {
        from:"hartiksuhagiya10@gmail.com",
        to:to,
        subject:subject,
        text:text,
        html: "We're excited to inform you that the shipping label for your order has been successfully created! This important step brings us one step closer to getting your items on their way to you. You can expect to receive tracking information and delivery details shortly. Thank you for choosing us, and we can't wait for you to receive your order soon. <br><br> Regards,<br> Blue Star Mothers",
        attachments: [
            {
                filename: "Shipping Label.pdf",
                path:label_url
            }
        ]
    }

    transporter.sendMail(mailData, (error, info)=>{
        if(error){
            console.log(error)
        }
        res.status(200).send({mesage:"Mail send", message_id: info.messageId});
    })
}




const createShippingLabelController = (req, res) => {
        // Create address object

        var shippo = require('shippo')('shippo_test_60fb21b0e26515340cefad438075431a062b5eb1');

        // var addressFrom = {
        //     "name": "Shawn Ippotle",
        //     "street1": "8239 Victoria Street",
        //     "city": "Oxnard",
        //     "state": "CA",
        //     "zip": "93030",
        //     "country": "US"
        // };

        // var addressTo = {
        //     "name": "Mr Hippo",
        //     "street1": "707 E 6th Street",
        //     "city": "Tempe",
        //     "state": "AZ",
        //     "zip": "85281",
        //     "country": "US"
        // };

        // var parcel = {
        //     "length": "5",
        //     "width": "5",
        //     "height": "5",
        //     "distance_unit": "in",
        //     "weight": "2",
        //     "mass_unit": "lb"
        // };

        var addressFrom = {
            "name": req.body.sendername,
            "street1": req.body.senderstreet1,
            "city": req.body.sendercity,
            "state": req.body.senderstate,
            "zip": req.body.senderzip,
            "country": req.body.sendercountry
        };

        var addressTo = {
            "name": req.body.receivername,
            "street1": req.body.receiverstreet1,
            "city": req.body.receivercity,
            "state": req.body.receiverstate,
            "zip": req.body.receiverzip,
            "country": req.body.receivercountry
        };

        var parcel = {
            "length": req.body.length,
            "width": req.body.width,
            "height": req.body.height,
            "distance_unit": req.body.distance_unit,
            "weight": req.body.weight,
            "mass_unit": req.body.mass_unit 
        };

        console.log(addressFrom, addressTo, parcel)

        shippo.shipment.create({
            "address_from": addressFrom,
            "address_to": addressTo,
            "parcels": [parcel],
            "async": false
        }, function (err, shipment) {
            // asynchronously called
            var rate = shipment.rates[0];

            shippo.transaction.create({
                "rate": rate.object_id,
                "label_file_type": "PDF",
                "async": false
            }, function (err, transaction) {
                // asynchronous callback
                console.log(transaction)
                EmailController({label_url: transaction.label_url})
                res.send({
                    label_url: transaction.label_url
                })
            });
        });
    }

module.exports = createShippingLabelController;