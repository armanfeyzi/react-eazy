import React, { Component } from 'react'
import ProductListItem from './ProductListItem'

export class ProductViewPageSimilar extends Component {
  render() {
    const { similarProduct } = this.props
    return (
      <div className="similar-components">
        <p className="text">SIMILAR ITEMS</p>
        <div className="container">
          <div className="row no-gutters">
            {similarProduct &&
              similarProduct.map(similarProduct => (
                <ProductListItem key={similarProduct.id} product={similarProduct} />
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ProductViewPageSimilar
