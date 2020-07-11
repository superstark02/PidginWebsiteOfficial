import { ADD_PRODUCT_BASKET } from './types'

export const addBasket = (productName,amount) => {
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: productName,
            amount: amount
        })
    }
}