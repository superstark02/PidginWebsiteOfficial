import React from 'react'
import Razorpay from 'razorpay'

export default class Payment extends React.Component {

    state = {
        result: 0
    }

    handlePayment = () => {
        var razorpay = new Razorpay({
            key_id: 'rzp_test_2JULq3nja9oTFR',
            key_secret:'0Gv2d9hBk455vOnHYxhRdlsR',
              // logo, displayed in the payment processing popup
            image: 'https://i.imgur.com/n5tjHFD.png',
          });

        var options = {
            amount: 50000,  // amount in the smallest currency unit
            currency: "INR",
            receipt: "order_rcptid_11",
            payment_capture: '0'
          };

        razorpay.orders.create(options, function(err,order){
            console.log(order)
            console.log(err)
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <button onClick={this.handlePayment} className='call' >
                        Pay
                    </button>
                </div>
                <div>{this.state.result}</div>
            </React.Fragment>
        )
    }
}