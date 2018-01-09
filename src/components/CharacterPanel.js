import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import agent from '../agent'
import common from '../actions/commonActions'

import toRoman from '../helpers/toRoman'

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
    return (
      <h1>Character page working</h1>
    )
  }
}

export default withRouter(connect(mapState, mapDispatch)(CharacterPanel))
