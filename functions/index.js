var functions = require('firebase-functions')
const Razorpay = require('razorpay')

const razorpay = new Razorpay({
    key_id: 'rzp_test_hTjjOef8p7eYTN',
    key_secret: 'JWCALceNpTHpdu5utAvbhEb5',
})

exports.payment = functions.https.onCall((data, context) => {


    console.log(data);
    console.log(razorpay);
    /*const options = {
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
    }*/

    return data;

})
