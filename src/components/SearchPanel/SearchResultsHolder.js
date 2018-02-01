import React from 'react'
import { connect } from 'react-redux'
import common from '../../actions/commonActions'
import agent from '../../agent'

import SearchResult from './SearchResult'
import ErrorMessageHolder from '../ErrorMessageHolder'
import resultsListActions from '../../actions/resultsListActions';

const mapState = state => ({
  ...state.dropdown,
  loading: state.common.loading,
  error: state.common.error,
})

const mapDispatch = dispatch => ({
  nextPage: () =>
    dispatch(resultListActions.increaseResultsPage()),
  previousPage: () =>
    dispatch(resultListActions.decreaseResultsPage()),
  getData: payload =>
    dispatch(common.getData(payload)),
  clearDropdownData: () =>
    dispatch(resultsListActions.clearDropdownData()),
  clearAll: () =>
    dispatch(common.clearAll()),
  transferData: payload =>
    dispatch(resultListActions.movetoResultsPage(payload)),
})

class SearchResultsHolder extends React.Component {
  constructor() {
    super()
    this.nextPage = () => {
      this.props.nextPage()
      this.props.clearDropdownData()
      this.props.getData(agent.RequestAll(this.props.searchType, this.props.page + 1))
    }
    this.previousPage = () => {
      this.props.previousPage()
      this.props.clearDropdownData()
      this.props.getData(agent.RequestAll(this.props.searchType, this.props.page - 1))
    }

    this.clearAll = () => {
      this.props.clearAll()
    }
  }

  render() {
    const {
      page: resultsPage,
      searchType,
      loading,
      error,
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

    if (searchType !== '' && error === '') {
      return (
        <div>
          {results ? <h2 className="text-center">Select a {searchType}:</h2> : null}

          {results ?
            results.map(x => (<SearchResult data={x} />))
             : <h2 className="text-center loading">Loading...</h2>}

          {previous || next ? (
            <div><h4 className="text-center">Page {resultsPage}</h4></div>
          ) : null}

          <div className="clearfix">
            <button type="button" className="btn btn-info float-left" onClick={this.previousPage} disabled={loading || !previous}>Previous Page</button>
            <button type="button" className="btn btn-info float-right" onClick={this.nextPage} disabled={loading || !next}>Next Page</button>
          </div>

          <div className="clear-button">
            <button type="button" className="btn btn-danger" onClick={this.clearAll}>Clear Results</button>
          </div>
        </div>
      )
    } else if (error !== '') {
      return (
        <ErrorMessageHolder error={error} />
      )
    }
    return null
  }
}

export default connect(mapState, mapDispatch)(SearchResultsHolder)
