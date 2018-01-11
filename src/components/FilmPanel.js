import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import agent from '../agent'
import common from '../actions/commonActions'

import helpers from '../helpers/helpers'

import '../ResultsPanel.css'

const mapState = state => ({
  data: state.common.data,
  loading: state.common.loading,
})

const mapDispatch = dispatch => ({
  loadTestFilm: () =>
    dispatch(common.getData('results', agent.getFilm(2))),
  unloadPage: () =>
    dispatch(common.unloadPage()),
})

class FilmPanel extends React.Component {
  componentWillMount() {
    this.props.loadTestFilm()
  }

  componentWillUnmount() {
    this.props.unloadPage()
  }

  render() {
    if (this.props.data.title) {
      let { episode_id: episodeId, title: filmTitle } = this.props.data
      const { opening_crawl: openingCrawl } = this.props.data

      episodeId = episodeId ? helpers.toRoman(episodeId) : ''
      filmTitle = filmTitle ? filmTitle.toUpperCase() : ''

      return (
        <div>
          <div className="titles">
            <h1>STAR WARS</h1>
            <h2>EPISODE {episodeId}</h2>
            <h2>{filmTitle}</h2>
          </div>

          <p className="opening-crawl">
            {openingCrawl}
          </p>
        </div>

      )
    } else {
      return (
        <div className="titles">
          <h1>Loading...</h1>
        </div>
      )
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(FilmPanel))
