
import { https } from 'firebase-functions'

var Razorpay = require('razorpay')

const razorpay = new Razorpay({
    key_id: 'rzp_test_hTjjOef8p7eYTN',
    key_secret: 'JWCALceNpTHpdu5utAvbhEb5',
})


export const payment = https.onCall((data, context) => {

    const options = {
        amount: (data.amount * 100).toString(),
        currency:"INR",
        receipt: data.receipt,
        payment_capture: 1
    }

    try {
        var order_created = []
        
        razorpay.orders.create(options, function(err, order) {
            order_created.push(order)
          });
          return order_created[0]
    }catch(e){
        console.log(e)
        return false
    }

})