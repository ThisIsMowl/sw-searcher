import React from 'react'
import { connect } from 'react-redux'

import CharacterPanel from './CharacterPanel'
import FilmPanel from './FilmPanel'
import PlanetPanel from './PlanetPanel'
import SpeciesPanel from './SpeciesPanel'
import ShipPanel from './ShipPanel'
import VehiclePanel from './VehiclePanel'

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
        return (<SpeciesPanel data={props.data} />)
      case 'starship':
        return (<ShipPanel data={props.data} />)
      case 'vehicle':
        return (<VehiclePanel data={props.data} />)
      case 'character':
        return (<CharacterPanel data={props.data} />)
      default:
        return null
    }
  }
  return null
}

export default connect(mapState, () => ({}))(ResultsPanel)
