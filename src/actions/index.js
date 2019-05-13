export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products,
})

export const getAllProducts = () => async dispatch => {
  const response = await fetch(' http://5b35ede16005b00014c5dc86.mockapi.io/list')
  const products = await response.json()
  dispatch(receiveProducts(products))
}
