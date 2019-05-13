import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <Link className="navbar-brand" to="/">
          <span className="part1">eazy</span>
          <span className="part2">.my</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          id="hamburger-icon"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Notification
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Login/Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
