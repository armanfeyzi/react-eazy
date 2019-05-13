import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './app.css'
import Header from './components/Header'
import ProductListPage from './components/ProductListPage'

import ProductViewPage from './components//ProductViewPage'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route path="/" exact render={() => <Redirect to="/list" />} />
          <Route path="/list" component={ProductListPage} />
          <Route path="/view/:id" component={ProductViewPage} />
        </Router>
      </div>
    )
  }
}

export default App
