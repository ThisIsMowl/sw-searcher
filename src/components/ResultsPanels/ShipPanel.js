import React from 'react'
import Numeral from 'numeral'

import helpers from '../../helpers/helpers'

const ShipPanel = (props) => {
  // Destructure
  const {
    MGLT: mglt,
    cargo_capacity: capacity,
    consumables,
    cost_in_credits: cost,
    crew,
    hyperdrive_rating: hyperRating,
    length,
    manufacturer,
    max_atmosphering_speed: atmoSpeed,
    model,
    name,
    passengers,
    starship_class: shipClass,
  } = props.data


  if (name) {
    return (
      <div className="result-content">
        <h3>{name}</h3>
        <h4>Length: {Numeral(length).format()}m</h4>
        <h4>Crew: {Numeral(crew).format()}</h4>
        <h4>No. of Passengers: {Numeral(passengers).format()}</h4>
        <h4>Model: {model}</h4>
        <h4>Manufacturer: {manufacturer}</h4>
        <h4>Class: {shipClass}</h4>
        <h4>Cargo Capacity: {Numeral(capacity).format()}</h4>
        <h4>Speed: {atmoSpeed}km/h</h4>
        <h4>Hyperdrive Rating: {hyperRating}</h4>
        <h4>MGLT: {mglt}</h4>
        <h4>Cost: {cost === 'unknown' ? 'Unknown' : `${Numeral(cost).format()} credits`}</h4>
        <h4>Max. Consumable Supply: {helpers.capCase(consumables)}</h4>
      </div>
    )
  }
  return null
}

export default ShipPanel
