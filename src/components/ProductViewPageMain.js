import React, { Component } from 'react'

export class ProductViewPageMain extends Component {
  render() {
    const { product } = this.props
    return product ? (
      <div className="view-page-main-component">
        <p className="route">{`Home > Electronics > Games & Console > ${
          product.attributes.title
        }`}</p>
        <div className="image">
          {product.id % 3 === 1 ? <img src="/image/1.png" alt="image1" /> : null}
          {product.id % 3 === 2 ? <img src="/image/2.png" alt="image2" /> : null}
          {product.id % 3 === 0 ? <img src="/image/3.png" alt="image3" /> : null}
        </div>
        <div className="title-flag">
          <h2 className="title">DESCRIPTION</h2>
          <i className="fas fa-flag" />
          <p className="flag">Report Ad</p>
        </div>
        <p className="description-text">${product.attributes.description}</p>
      </div>
    ) : null
  }
}

export default ProductViewPageMain
