import React from 'react'
import step from '../Images/steps.png'
import '../Components/class.css'

import { connect } from 'react-redux'
import { getNumbers } from '../actions/get-action.js'

class MyCart extends React.Component {
    state = {
        cart: null
    }
    componentDidMount() {
        getNumbers();
    }
    render() {
        if (this.props.basketProps.products.length === 0) {
            return (
                <div className="sticky" >
                    <div className="grad" >
                        Book Now
                    </div>
                    <img src={step} width="350px" alt="s" />
                </div>
            )
        }

        return (
            <div className="sticky" >
                <div className="grad" >
                    Your Cart
                </div>
                <div style={{ padding: "10px", border: "solid 1px grey", borderTop: "none", minHeight: "60vh", borderRadius: "0px 0px 10px 10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }} >
                    <div>
                        {
                            this.props.basketProps.products &&
                            this.props.basketProps.products.map(item => {
                                return <div className="cart-item" >
                                    <div>
                                        <img src={item.image} alt="s" width="100px" />
                                    </div>
                                    <div style={{ width: "200px", marginLeft: "5px" }} >
                                        <div>
                                            {item.title}
                                        </div>
                                        <div className="class-button" style={{ width: "fit-content", color: "#f05f7f" }} onClick={() => { this.remove(this.state.cart, item) }} >
                                            - DELETE
                                        </div>
                                    </div>
                                    <div>
                                        &#8377;{item.price}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }} >
                            <div>
                                <b>Total</b>
                            </div>
                            <div>
                                total price
                            </div>
                        </div>
                        <div className="class-checkout-button" onClick={() => { console.log(this.props) }} >
                            CHECKOUT
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(MyCart);