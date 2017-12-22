import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { ShoesActions } from 'state/shoes/shoes-action'
import { connect } from 'react-redux'
import map from 'lodash/map'

class Shoes extends Component {
  componentWillMount() {
    this.props.loadShoes()
  }

  shoe(item) {
    const { id, name, store } = item
    return (
      <div key={`shoe-${id}`}>
        <div>Name: {name} </div>
        <div>Loja: {store} </div>
      </div>
    )
  }

  renderShoes() {
    const { shoes } = this.props
    return (
      <div>
        <h1>Shoes</h1>
        {map(shoes, this.shoe)}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderShoes()}
      </div>
    )
  }
}

Shoes.propTypes = {
  loadShoes: PropTypes.func.isRequired,
  shoes: PropTypes.array.isRequired
}

const mapProps = state => ({
  shoes: state.shoes.shoes
})

const mapActions = {
  loadShoes: () => ShoesActions.loadShoes(),
  updateFieldForm: text => ShoesActions.updateFieldForm(text)
}

export default connect(mapProps, mapActions)(Shoes)
