import React from 'react'
import './cart.css'
import Footer from '../Components/Footer'
import firebase,{rdb} from '../firebase'

import { connect } from 'react-redux'
import { getNumbers } from '../actions/get-action.js'
import { deleteBasket } from '../actions/delete-action'

class CartPage extends React.Component{
    state = {
        cart:null,
        user:null
    }

    signIn = async () => {
        const user = await firebase.auth().currentUser
        this.setState({user:user})
    }

    componentDidMount() {
        getNumbers();
        this.signIn();

        if(this.state.user!==null){
            rdb.ref("cart/"+this.state.user.email).once("value").then(snap=>{
                var item = []
                snap.forEach(
                    item.push(snap.val())
                )
                this.setState({cart:item})
            })
        }
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
                        this.state.cart===null ? (
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