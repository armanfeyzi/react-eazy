import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductViewPageMain from './ProductViewPageMain'
import ProductViewPageSide from './ProductViewPageSide'
import ProductViewPageSimilar from './ProductViewPageSimilar'

export class ProductViewPage extends Component {
  state = {
    similarProduct: null,
  }

  async componentDidMount() {
    if (this.props.product) {
      const response = await fetch(
        `http://5b35ede16005b00014c5dc86.mockapi.io/similar/${this.props.product.id}`,
      )
      const similarProduct = await response.json()
      this.setState({ similarProduct: similarProduct.data })
    }
  }

  async componentDidUpdate() {
    if (!this.state.similarProduct) {
      const response = await fetch(
        `http://5b35ede16005b00014c5dc86.mockapi.io/similar/${this.props.product.id}`,
      )
      const similarProduct = await response.json()
      this.setState({ similarProduct: similarProduct.data })
    }
  }
  render() {
    return (
      <div className="main-view-page">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-12 col-sm-9 main">
              <ProductViewPageMain product={this.props.product} />
            </div>
            <div className="col-12 col-sm-3 side">
              <ProductViewPageSide product={this.props.product} />
            </div>
          </div>
          <div className="row no-gutters similar">
            <ProductViewPageSimilar similarProduct={this.state.similarProduct} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const product =
    state.data && state.data.filter(product => product.id === props.match.params.id)[0]
  return { product }
}

export default connect(mapStateToProps)(ProductViewPage)
