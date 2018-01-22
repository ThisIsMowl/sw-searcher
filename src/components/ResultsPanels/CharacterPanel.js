import React from 'react'
import helpers from '../../helpers/helpers'

const CharacterPanel = (props) => {
  // Destructure
  const {
    name,
    height,
    mass,
    gender,
    hair_color: hairColour,
    skin_color: skinColour,
    eye_color: eyeColour,
    birth_year: birthYear,
  } = props.data


  if (name) {
    return (
      <div className="opening-crawl">
        <h3>{name}</h3>
        <h4>Born: {birthYear}</h4>
        <h4>Gender: {helpers.capCase(gender)}</h4>
        <h4>Height: {height}cm</h4>
        <h4>Weight: {mass}kg</h4>
        <h4>Skin Colour: {helpers.capCase(skinColour)}</h4>
        <h4>Hair Colour: {helpers.capCase(hairColour)}</h4>
        <h4>Eye Colour: {helpers.capCase(eyeColour)}</h4>
      </div>
    )
  }
  return null
}

export default CharacterPanel
