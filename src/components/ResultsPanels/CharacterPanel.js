import React from 'react'
import { connect } from 'react-redux'
import agent from '../agent'
import common from '../actions/commonActions'
import helpers from '../helpers/helpers'

import '../ResultsPanel.css'

const mapState = state => ({
  data: state.common.data,
  loading: state.common.loading,
})

const mapDispatch = dispatch => ({
  loadTestChar: () =>
    dispatch(common.loadTest(agent.getCharacter(1))),
  unloadPage: () =>
    dispatch(common.unloadPage()),
})

class CharacterPanel extends React.Component {
  componentWillMount() {
    this.props.loadTestChar()
  }

  componentWillUnmount() {
    this.props.unloadPage()
  }

  render() {
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
    } = this.props.data

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
}

export default connect(mapState, mapDispatch)(CharacterPanel)
