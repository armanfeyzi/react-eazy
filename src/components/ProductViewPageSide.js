import React, { Component } from 'react'

export class ProductViewPageSide extends Component {
  render() {
    const { product } = this.props
    return product ? (
      <div className="view-page-side-component">
        <div className="icons">
          <div className="icon-1">
            <i className="far fa-heart" />
            <p>Wishlist</p>
          </div>
          <div className="icon-2">
            <i className="fas fa-share-alt" />
            <p>Share</p>
          </div>
        </div>
        <p className="price">Price</p>
        <p className="price-amount">{product.attributes.price}</p>
        <p className="Item-condition">Item condition</p>
        <p className="condition">{product.attributes.condition}</p>
        <p className="seller-info-text">Seller info</p>
        <div className="seller">
          <i className="fas fa-user-circle" />
          <div className="seller-data">
            <p className="name">{product.attributes.seller_name}</p>
            <p className="type">{product.attributes.seller_type}</p>
          </div>
        </div>
        <div className="contact">
          <p className="text">Interested with the ad? Contact the seller</p>

          <div className="phone">
            <i className="fas fa-phone" />
            <p>{product.attributes.phone}</p>
          </div>

          <div className="email">
            <i className="fas fa-envelope" />
            <p>Email</p>
          </div>

          <div className="chat">
            <i className="fas fa-comments" />
            <p>Chat</p>
          </div>
        </div>
      </div>
    ) : null
  }
}

export default ProductViewPageSide
