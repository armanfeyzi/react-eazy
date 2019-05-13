import { RECEIVE_PRODUCTS } from '../actions'

const getAllProducts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products
    default:
      return state
  }
}

export default getAllProducts
