import React from 'react'
import Numeral from 'numeral'

import helpers from '../../helpers/helpers'

const SpeciesPanel = (props) => {
  // Destructure
  const {
    average_height: averageHeight,
    average_lifespan: averageLifespan,
    classification,
    designation,
    eye_colors: eyeColours,
    hair_colors: hairColours,
    language,
    name,
    skin_colors: skinColours,
  } = props.data


  if (name) {
    return (
      <div className="result-content">
        <h3>{name}</h3>
        <h4>Average Height: {Numeral(averageHeight).format('0.00 a')}</h4>
        <h4>Average lifespan: {averageLifespan} years</h4>
        <h4>Classification: {helpers.capCase(classification)}</h4>
        <h4>Designation: {helpers.capCase(designation)}</h4>
        <h4>Language: {language}</h4>
        <h4>Hair Colour(s): {hairColours}</h4>
        <h4>Eye Colour(s): {eyeColours}</h4>
        <h4>Skin Colour(s): {skinColours}</h4>
      </div>
    )
  }
  return null
}

export default SpeciesPanel
