import React from 'react'
import { connect } from 'react-redux'
import resultListActions from '../../actions/resultsListActions'
import common from '../../actions/commonActions'
import agent from '../../agent'

import SearchResult from './SearchResult'

const mapState = state => ({
  ...state.dropdown,
  loading: state.common.loading,
})

const mapDispatch = dispatch => ({
  nextPage: () =>
    dispatch(resultListActions.increaseResultsPage()),
  previousPage: () =>
    dispatch(resultListActions.decreaseResultsPage()),
  getData: payload =>
    dispatch(common.getData('dropdown', payload)),
  clearData: type =>
    dispatch(common.clearData(type)),
  transferData: payload =>
    dispatch(resultListActions.movetoResultsPage(payload)),
})

class SearchResultsHolder extends React.Component {
  constructor() {
    super()
    this.nextPage = () => {
      this.props.nextPage()
      this.props.clearData('dropdown')
      this.props.getData(agent.RequestAll(this.props.searchType, this.props.page + 1))
    }
    this.previousPage = () => {
      this.props.previousPage()
      this.props.clearData('dropdown')
      this.props.getData(agent.RequestAll(this.props.searchType, this.props.page - 1))
    }

    this.clearAll = () => {
      this.props.clearData('dropdown')
      this.props.clearData('results')
    }
  }

  render() {
    const {
      page: resultsPage,
      searchType,
      loading,
    } = this.props

    let {
      results,
    } = this.props.data

    const {
      next,
      previous,
    } = this.props.data

    if (results && searchType === 'film') {
      results = results.sort((a, b) => a.episode_id - b.episode_id)
    }

    if (searchType !== '') {
      return (
        <div>
          <h2 className="centre-text">Select a {searchType}:</h2>

          {results ?
            results.map(x => (<SearchResult data={x} />))
             : <h2>Loading</h2>}

          <button type="button" onClick={this.previousPage} disabled={loading || !previous}>Previous Page</button>
          <button type="button" onClick={this.nextPage} disabled={loading || !next}>Next Page</button>

          {previous || next ? (
            <h4 className="centre-text">Page {resultsPage}</h4>
          ) : null}

          <button type="button" onClick={this.clearAll}>Clear Results </button>
        </div>
      )
    }
    return null
  }
}

export default connect(mapState, mapDispatch)(SearchResultsHolder)
