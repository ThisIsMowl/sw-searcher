import React from 'react'
import { connect } from 'react-redux'

const mapState = state => ({
  data: state.common.data,
  type: state.common.searchType,
})

const ResultsPanel = (props) => {
  if (props.data && props.type) {
    switch (props.type) {
      case 'planet':
        return (<h4>Planet</h4>)
      case 'film':
        return (<h4>Film</h4>)
      case 'species':
        return (<h4>Species</h4>)
      case 'starship':
        return (<h4>Starship</h4>)
      case 'vehicle':
        return (<h4>Vehicle</h4>)
      case 'character':
        return (<h4>Character</h4>)
      default:
        return null
    }
  }
  return null
}

export default connect(mapState, () => ({}))(ResultsPanel)
