import React from 'react'
import { connect } from 'react-redux'

import toRoman from '../helpers/toRoman'

const mapState = state => ({
  data: state.common.data,
  loading: state.common.loading,
})

class ResultsPanel extends React.Component {
  render() {
    const data = this.props.data
    const episodeId = data.episode_id
    const title = data.title ? data.title.toUpperCase() : '' 
    const openingCrawl = data.opening_crawl

    return (
      <div className="panel--results">
        <div className="content">

          <h1>STAR WARS</h1>
          <h2>EPISODE {toRoman(episodeId)}</h2>
          <h2>{title}</h2>

          <p className="opening-crawl">
            {openingCrawl}
          </p>


        </div>
      </div>
    )
  }
} 

export default connect(mapState, () => ({}))(ResultsPanel)
