import React from 'react'
import { connect } from 'react-redux'
import resultListActions from '../../actions/resultsListActions'
import common from '../../actions/commonActions'
import agent from '../../agent'
import helpers from '../../helpers/helpers'

const mapState = state => ({
  ...state.dropdown,
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

class SearchResultsList extends React.Component {
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

    this.moveResults = (payload) => {
      this.props.transferData(payload)
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

    if (searchType !== '' && results) {
      return (
        <div>
          <h2 className="centre-text">Select a {searchType}:</h2>

          {
            results ?
              results.map((x) => {
                const title = searchType === 'film' ? `Episode ${helpers.toRoman(x.episode_id)}: ${x.title}` : x.name
                return (
                  <div className="search-result" key={x.url}>
                    <button type="button" onClick={() => this.moveResults(x)}>{title}</button>
                  </div>
                )
              })
            : null
          }

          {previous ? (
            <button type="button" onClick={this.previousPage}>Previous Page</button>
          ) : null}
          {next ? (
            <button type="button" onClick={this.nextPage}>Next Page</button>
          ) : null}

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

export default connect(mapState, mapDispatch)(SearchResultsList)
