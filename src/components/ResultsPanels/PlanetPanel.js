import React from 'react'
import numeral from 'numeral'

import helpers from '../../helpers/helpers'

import '../../ResultsPanel.css'

const PlanetPanel = (props) => {
  // Destructure
  const {
    name,
    rotation_period: rotation,
    orbital_period: orbitalPeriod,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water: surfaceWater,
    population,
  } = props.data

  if (name) {
    return (
      <div className="result-content">
        <h3>{name}</h3>
        <h4>Population: {numeral(population).format('0,0')}</h4>
        <h4>Diameter: {numeral(diameter).format('0.00a')}m</h4>
        <h4>Length of one day: {rotation} hours</h4>
        <h4>Length of one year: {orbitalPeriod} days</h4>
        <h4>Gravity: {gravity}</h4>
        <h4>Terrain: {helpers.capCase(terrain)}</h4>
        <h4>Climate: {helpers.capCase(climate)}</h4>
        <h4>Surface Water: {surfaceWater}</h4>
      </div>
    )
  }
  return null
}

export default PlanetPanel
