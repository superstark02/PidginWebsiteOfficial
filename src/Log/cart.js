import React from 'react'
import step from '../Images/steps.png'
import '../Components/class.css'
import firebase,{rdb} from '../firebase'

import { connect } from 'react-redux'
import { getNumbers } from '../actions/get-action.js'
import { deleteBasket } from '../actions/delete-action'

class MyCart extends React.Component {
    state = {
        cart: []
    }
    componentDidMount() {
        getNumbers();
        
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                rdb.ref().child("carts").child(user.uid).orderByChild()
            }
        })
    }
    render() {
        if (this.state.cart.length === 0) {
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
                            this.state.cart &&
                            this.state.cart.map(item => {
                                return <div className="cart-item" >
                                    <div>
                                        <img src={item.image} alt="s" width="100px" />
                                    </div>
                                    <div style={{ width: "200px", marginLeft: "5px" }} >
                                        <div>
                                            {item.title}
                                        </div>
                                        <div className="class-button" style={{ width: "fit-content", color: "#f05f7f" }} onClick={()=>{this.props.deleteBasket(item)}} >
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
                                {}
                            </div>
                        </div>
                        <div className="class-checkout-button" onClick={() => { console.log(this.state.cart) }} >
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

export default connect(mapStateToProps, { getNumbers,deleteBasket })(MyCart);