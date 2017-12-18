import React from 'react'
import { connect } from 'react-redux'

import toRoman from '../helpers/toRoman'

import '../ResultsPanel.css'

const mapState = state => ({
  data: state.common.data,
  loading: state.common.loading,
})

class ResultsPanel extends React.Component {
  render() {
    const data = this.props.data
    const episodeId = toRoman(data.episode_id)
    const title = data.title ? data.title.toUpperCase() : '' 
    const openingCrawl = data.opening_crawl

    return (
      <div className="panel--results">
        <div className="content">

          <div className="titles">
            <h1>STAR WARS</h1>
            <h2>EPISODE {episodeId}</h2>
            <h2>{title}</h2>
          </div>

          <p className="opening-crawl">
            {openingCrawl}
          </p>


        </div>
      </div>
    )
  }
} 

export default connect(mapState, () => ({}))(ResultsPanel)
