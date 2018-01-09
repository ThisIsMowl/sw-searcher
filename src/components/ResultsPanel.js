import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import toRoman from '../helpers/toRoman'

import '../ResultsPanel.css'

const mapState = state => ({
  data: state.common.data,
  loading: state.common.loading,
})

class ResultsPanel extends React.Component {
  render() {
    if (this.props.data.title) {
      let { episode_id: episodeId, title: filmTitle } = this.props.data
      const { opening_crawl: openingCrawl } = this.props.data

      episodeId = episodeId ? toRoman(episodeId) : ''
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

export default withRouter(connect(mapState, () => ({}))(ResultsPanel))
