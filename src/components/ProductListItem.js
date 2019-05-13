import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export class ProductListItem extends Component {
  handleClick = id => {
    this.props.history.push(`/view/${id}`)
  }
  render() {
    const { product } = this.props

    return (
      <div className="col-6 col-sm-4 col-md-3 col-lg-2 card-around ">
        <div className="product-card" onClick={() => this.handleClick(product.id)}>
          {product.id % 3 === 1 ? <img src="/image/1.png" alt="image1" /> : null}
          {product.id % 3 === 2 ? <img src="/image/2.png" alt="image2" /> : null}
          {product.id % 3 === 0 ? <img src="/image/3.png" alt="image3" /> : null}
          <p className="title">{product.attributes.title}</p>
          <p className="price">{product.attributes.price}</p>
        </div>
      </div>
    )
  }
}

export default withRouter(ProductListItem)
