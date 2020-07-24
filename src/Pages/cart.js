import React from 'react'
import './cart.css'
import Footer from '../Components/Footer'
import firebase,{rdb} from '../firebase'

import { connect } from 'react-redux'
import { getNumbers } from '../actions/get-action.js'
import { deleteBasket } from '../actions/delete-action'

class CartPage extends React.Component{
    state = {
        cart:[],
        user:null
    }

    componentDidMount() {
        getNumbers();

        firebase.auth().onAuthStateChanged(user => {
            if(user){
                rdb.ref().child("carts").child(user.uid).on('value', snap =>{
                    var item = []
                    snap.forEach(doc=>{
                        item.push(doc.val())
                    })
                    this.setState({cart:item})
                })
            }
        })
    }

    render() {

        return (
            <React.Fragment>
                <div className="desktop wrap" style={{backgroundColor:"white"}} >
                    <div className="cart-container" >
                    <div style={{borderBottom:"solid 1px #202020",padding:"20px 0px"}} >
                        <h1>
                            Your CART
                        </h1>
                    </div>

                    {
                        this.state.cart.length === 0 ? (
                            <div>Hey</div>
                        ) : (
                            <table className="cart-items" >
                                <tr className="cart-items-header" >
                                    <th>
                                        S.NO.
                                    </th>
                                    <th>
                                        Name Of The Course
                                    </th>
                                    <th>
                                        Number Of Students
                                    </th>
                                    <th>
                                        Total Price
                                    </th>
                                </tr>
                                {
                                    this.state.cart&&
                                    this.state.cart.map(item=>{
                                        return (
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    {item.title}
                                                </td>
                                                <td>
                                                    <input defaultValue={1} />
                                                </td>
                                                <td>
                                                    {item.price}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        )
                    }

                    </div>
                </div>

                <div className="mobile" >

                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers,deleteBasket })(CartPage);