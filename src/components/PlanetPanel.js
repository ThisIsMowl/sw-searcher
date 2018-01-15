import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import numeral from 'numeral'

import agent from '../agent'
import common from '../actions/commonActions'
import helpers from '../helpers/helpers'

import '../ResultsPanel.css'

const mapState = state => ({
  data: state.common.resultsData,
  loading: state.common.loading,
})

const mapDispatch = dispatch => ({
  loadTestPlan: payload =>
    dispatch(common.getData('resultsData', payload)),
  unloadPage: () =>
    dispatch(common.unloadPage()),
})

class PlanetPanel extends React.Component {
  componentWillMount() {
    this.props.loadTestPlan(agent.Requests.getPlanet(1))
  }

  componentWillUnmount() {
    this.props.unloadPage()
  }

  render() {
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
    } = this.props.data

    return (
      <div className="opening-crawl">
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
}

export default withRouter(connect(mapState, mapDispatch)(PlanetPanel))
