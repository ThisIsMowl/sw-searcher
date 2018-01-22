import React from 'react'
import { connect } from 'react-redux'

import CharacterPanel from './CharacterPanel'
import FilmPanel from './FilmPanel'
import PlanetPanel from './PlanetPanel'

import '../../ResultsPanel.css'

const mapState = state => ({
  data: state.common.data,
  type: state.common.searchType,
})

const ResultsPanel = (props) => {
  if (props.data && props.type) {
    switch (props.type) {
      case 'planet':
        return (<PlanetPanel data={props.data} />)
      case 'film':
        return (<FilmPanel data={props.data} />)
      case 'species':
        return (<h4>Species</h4>)
      case 'starship':
        return (<h4>Starship</h4>)
      case 'vehicle':
        return (<h4>Vehicle</h4>)
      case 'character':
        return (<CharacterPanel data={props.data} />)
      default:
        return null
    }
  }
  return null
}

export default connect(mapState, () => ({}))(ResultsPanel)
