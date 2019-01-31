import React from 'react'
import { connect } from 'react-redux'
import Hotkeys from 'react-hot-keys'

import resultListActions from '../../actions/resultsListActions'
import common from '../../actions/commonActions'
import agent from '../../agent'

import SearchResult from './SearchResult'
import ErrorMessageHolder from '../ErrorMessageHolder'

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
    dispatch(resultListActions.clearDropdownData()),
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

  onKeyDown(keyName, e, handler) {
    e.preventDefault()

    switch (keyName){
      case ('ctrl+x' || 'command+x'):
        this.clearAll()
        break
      case ('a'):
        if (this.props.data.previous) this.previousPage()
        break
      case ('d'):
        if (this.props.data.next) this.nextPage()
        break
      default:
        break
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
        <Hotkeys
          keyName="
            ctrl+x,
            command+x,
            a,
            d
          "
          onKeyDown={this.onKeyDown.bind(this)}
        >
          <div>
            {results ? <h2 className="text-center section-header">Select a {searchType}:</h2> : null}

            {results ?
              results.map(x => (<SearchResult key={x.url} data={x} />))
              : <h2 className="text-center loading">Loading...</h2>}

            <div className="clearfix">
              {!loading ? (<div>
                <button type="button" className="d-sm-none btn btn-sm btn-info float-left" onClick={this.previousPage} disabled={!previous}>Prev Page</button>
                <button type="button" className="d-sm-none btn btn-sm btn-info float-right" onClick={this.nextPage} disabled={!next}>Next Page</button>
                <button type="button" className="d-none d-md-block btn btn-info float-left" onClick={this.previousPage} disabled={!previous}>Prev Page</button>
                <button type="button" className="d-none d-md-block btn btn-info float-right" onClick={this.nextPage} disabled={!next}>Next Page</button>
              </div>) : null}


              {previous || next ? (
                <h4 className="text-center page-text">Page {resultsPage}</h4>
              ) : null}
            </div>

            {!loading ? (<div className="text-center">
              <button type="button" className="d-sm-none btn btn-sm btn-danger clr-results" onClick={this.clearAll}>Clear Results</button>
              <button type="button" className="d-none d-md-block btn btn-danger clr-results" onClick={this.clearAll}>Clear Results</button>
            </div>) : null}

          </div>
        </Hotkeys>
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
