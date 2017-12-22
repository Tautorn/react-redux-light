import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router'

class Main extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="main">
        <div className="container-fluid">
          <Link to="/shoes">
            <h2>Clique aqui para visualizar os calçados</h2>
          </Link>
          {children}
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main
