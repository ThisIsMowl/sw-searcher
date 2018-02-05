import React from 'react'
import Numeral from 'numeral'

const VehiclePanel = (props) => {
  // Destructure
  const {
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
  } = props.data


  if (name) {
    return (
      <div className="result-content">
        <h3>{name}</h3>
        <h4>Length: {Numeral(length).format()}m</h4>
        <h4>Crew: {Numeral(crew).format()}</h4>
        <h4>Passenger(s): {Numeral(passengers).format()}</h4>
        <h4>Model: {model}</h4>
        <h4>Manufacturer: {manufacturer}</h4>
        <h4>Cargo Capacity: {Numeral(capacity).format()}</h4>
        <h4>Speed: {atmoSpeed}</h4>
        <h4>Hyperdrive Rating: {hyperRating}</h4>
        <h4>Cost: {cost} credits</h4>
        <h4>Consumables: {consumables}</h4>
      </div>
    )
  }
  return null
}

export default VehiclePanel
