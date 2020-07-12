import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, DELETE_PRODUCT_BASKET } from "../actions/types";
import firebase, { rdb } from '../firebase'

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: []
}

function addItem(item, email) {

    rdb.ref("carts").child(email).child(item.title).set({
        title: item.title,
        image: item.image,
        price: parseInt(item.price, 10),
        mode: "Offline",
    })
}

function deleteItem(title) {

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            rdb.ref("carts").child(user.uid).child(title).remove()
        }
    })

}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    var index = state.products.indexOf(action.payload)
                    if (index < 0) {
                        state.products.push(action.payload)
                        state.basketNumbers = state.basketNumbers + 1
                        state.cartCost = state.cartCost + action.amount
                        addItem(action.payload, user.uid)
                    }
                }
            })
            return {
                basketNumbers: state.basketNumbers,
                products: state.products,
                amount: state.cartCost
            }

        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case DELETE_PRODUCT_BASKET:
            var indec = state.products.indexOf(action.payload)
            if (indec > -1) {
                state.products.splice(indec, 1)
                state.basketNumbers = state.basketNumbers - 1
                deleteItem(action.payload.title)
            }
            return {
                basketNumbers: state.basketNumbers,
                products: state.products,
                amount: state.cartCost + action.amount
            }
        default:
            return state;

    }
}