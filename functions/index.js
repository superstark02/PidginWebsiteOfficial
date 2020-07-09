const app = require('express')
const Razorpay = require('razorpay')
const functions = require('firebase-functions')

const razorpay = new Razorpay({
    key_id: 'rzp_test_hTjjOef8p7eYTN',
    key_secret: 'JWCALceNpTHpdu5utAvbhEb5',
})

/*app.post('/payment', async (req, res) => {

    const amount = 5

    const options = {
        amount: (amount * 100).toString(),
        currency:"INR",
        receipt: 'short-id',
        payment_capture: 1
    }

    try {
        const response = await razorpay.orders.create(options)
        res.send('ok')
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount,
        })
    }catch(e){
        console.log(e)
    }
})*/

exports.payment = functions.https.onCall((data, context) => {

    const options = {
        amount: (data.amount * 100).toString(),
        currency:"INR",
        receipt: data.receipt,
        payment_capture: 1
    }

    try {
        const response =  razorpay.orders.create(options)
        //response.id response.amount response.currency
        return response
    }catch(e){
        console.log(e)
        return false
    }

})
