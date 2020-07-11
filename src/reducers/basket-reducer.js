import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, DELETE_PRODUCT_BASKET} from "../actions/types";

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            var index = state.products.indexOf(action.payload)
            if(index < 0){
                state.products.push(action.payload)
                state.basketNumbers = state.basketNumbers + 1
                state.cartCost = state.cartCost + action.amount
            }
            
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
            if(indec>-1){
                state.products.splice(indec,1)
                state.basketNumbers = state.basketNumbers - 1
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