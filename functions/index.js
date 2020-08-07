var functions = require('firebase-functions')

const Razorpay = require('razorpay')

const accountSid = 'ACd3d54f5a4421e13e7f3dd4cc3cd959df';
const authToken = 'nSzcHdlqwcfoRZ95N7xp58UglNaoCa88hXe3Poh3';
const client = require('twilio')(accountSid, authToken);

const razorpay = new Razorpay({
    key_id: 'rzp_test_hTjjOef8p7eYTN',
    key_secret: 'JWCALceNpTHpdu5utAvbhEb5',
})

exports.payment = functions.https.onCall((data, context) => {

    const options = {
        amount: (data.amount * 100).toString(),
        currency: "INR",
        receipt: data.receipt,
        payment_capture: 1
    }

    try {
        var order_created = []

        razorpay.orders.create(options, function (err, order) {
            if(!err){
                order_created.push(order)
            }
            else{
                console.log(err)
            }
        });
        return order_created[0]
    } catch (e) {
        console.log(e)
        return false
    }

})

exports.message = functions.https.onCall((data, context) => {

    return new Promise((resolve, reject) => {
        client.messages
            .create({
                from: 'whatsapp:+919910197196',
                body: 'Hello there!',
                to: 'whatsapp:+91' + data.phone_number
            })
            .then(message =>{
                console.log(message.sid)
                return message;
            }).catch(err=>{
                reject(err);
            });
    });
})