import React from 'react'
import '../CSS/Pages/Cart.css'
import Footer from '../Components/Footer'
import firebase, { rdb } from '../firebase'
import MyAppBar from '../Components/AppBar'
import MappBar from '../Components/mAppBar'

class CartPage extends React.Component {
    state = {
        cart: [],
        user: null,
        total_amount: 0,
    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                rdb.ref().child("carts").child(user.uid).on('value', snap => {
                    var item = []
                    snap.forEach(doc => {
                        item.push(doc.val())
                    })
                    this.setState({ cart: item })

                    //getting total amount
                    var total = 0;
                    for (var i = 0; i < item.length; i++) {
                        total = total + item[i].price;
                    }
                    this.setState({ total_amount: total })
                    //
                })
            }
        })
    }

    render() {

        return (
            <React.Fragment>
                <MyAppBar/>
                <div className="mobile" >
                    <MappBar/>
                </div>
                <div className="wrap" style={{ backgroundColor: "white" }} >
                    <div className="cart-container" >
                        <div style={{ borderBottom: "solid 1px #202020", padding: "20px 0px" }} >
                            <h1>
                                Your CART
                        </h1>
                        </div>

                        <table className="cart-items" >
                            <tr className="cart-items-header" >
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
                                this.state.cart &&
                                this.state.cart.map(item => {
                                    return (
                                        <tr>
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

                    </div>
                </div>

                <div className="mobile" >

                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default CartPage;