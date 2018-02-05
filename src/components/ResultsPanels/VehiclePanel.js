import React from 'react'
import Numeral from 'numeral'

import helpers from '../../helpers/helpers'

const VehiclePanel = (props) => {
  // Destructure
  const {
    cargo_capacity: capacity,
    consumables,
    cost_in_credits: cost,
    crew,
    length,
    manufacturer,
    max_atmosphering_speed: atmoSpeed,
    model,
    name,
    passengers,
    vehicle_class: vehicleClass,
  } = props.data


  if (name) {
    return (
      <div className="result-content">
        <h3>{name}</h3>
        <h4>Length: {Numeral(length).format()}m</h4>
        <h4>Crew: {Numeral(crew).format()}</h4>
        <h4>No. of Passengers: {Numeral(passengers).format()}</h4>
        <h4>Class: {helpers.capCase(vehicleClass)}</h4>
        <h4>Model: {model}</h4>
        <h4>Manufacturer: {manufacturer}</h4>
        <h4>Cargo Capacity: {Numeral(capacity).format()}</h4>
        <h4>Speed: {atmoSpeed}km/h</h4>
        <h4>Cost: {cost === 'unknown' ? 'Unknown' : `${cost} credits`}</h4>
        <h4>Max. Consumable Supply: {helpers.capCase(consumables)}</h4>
      </div>
    )
  }
  return null
}

export default VehiclePanel
