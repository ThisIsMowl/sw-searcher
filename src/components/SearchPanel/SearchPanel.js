import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'react-select/dist/react-select.css'

import '../../SearchPanel.css'

import TypeSelection from './TypeSelection'
import SearchResultsList from './SearchResultsList'

const mapState = state => ({
  searchType: state.common.searchType,
})

class SearchPanel extends Component {
  render() {
    const {
      searchType,
    } = this.props

    return (
      <div className="panel--search">
        <div className="content">
          <h1 className="centre-text">SW Searcher</h1>

          <div className="divide-line" />

          <h2 className="centre-text">Select a search type:</h2>

          <form>

            <TypeSelection searchType={searchType} />

            <div className="divide-line" />

            <SearchResultsList searchType={searchType} />
          </form>
        </div>
      </div>
    )
  }
}

export default connect(mapState, () => ({}))(SearchPanel)
