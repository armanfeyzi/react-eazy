import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductListItem from './ProductListItem'

class ProductListPage extends Component {
  render() {
    const { products } = this.props
    return (
      <div className="product-page">
        <div className="container">
          <h2 className="list-page-title">LISTING</h2>
          <div className="row justify-content-center no-gutters">
            {products &&
              products.map(product => <ProductListItem key={product.id} product={product} />)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.data,
})

export default connect(mapStateToProps)(ProductListPage)
