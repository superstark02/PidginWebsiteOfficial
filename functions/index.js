const functions = require('firebase-functions');
const razorpay = require('razorpay')

exports.sayHello = functions.https.onCall((data,context)=>{
  return `Hello`;
})

