import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'react-select/dist/react-select.css'

import '../../SearchPanel.css'

import TypeSelection from './TypeSelection'
import SearchResultsHolder from './SearchResultsHolder'

const mapState = state => ({
  searchType: state.common.searchType,
})

const SearchPanel = (props) => {
  const {
    searchType,
  } = props

  return (
    <div className="panel--search">
      <div className="content">
        <h1 className="text-center">SW Searcher</h1>

        <div className="divide-line" />

        <h2 className="text-center">Select a search type:</h2>

        <form>

          <TypeSelection searchType={searchType} />

          <div className="divide-line" />

          <SearchResultsHolder searchType={searchType} />
        </form>
      </div>
    </div>
  )
}

export default connect(mapState, () => ({}))(SearchPanel)
