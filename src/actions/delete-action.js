import { DELETE_PRODUCT_BASKET } from './types'

export const deleteBasket = (productName) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_PRODUCT_BASKET,
            payload: productName,
        })
    }
}