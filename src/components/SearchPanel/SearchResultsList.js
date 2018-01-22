import React from 'react'
import { connect } from 'react-redux'
import resultListActions from '../../actions/resultsListActions'
import common from '../../actions/commonActions'
import agent from '../../agent'

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
  }

  render() {
    const {
      searchType,
      page: resultsPage,
      data,
    } = this.props

    if (searchType !== '' && data !== []) {
      return (
        <div>
          <h2 className="centre-text">Select a {searchType}:</h2>

          {
            data.results ?
              data.results.map((x, i) => (
                <div className="search-result" key={i}>
                  <button type="button" onClick={() => this.moveResults(x)}>{x.name}</button>
                </div>
                ))
            : null
          }

          {data.previous ? (
            <button type="button" onClick={this.previousPage}>Previous Page</button>
          ) : null}
          {data.next ? (
            <button type="button" onClick={this.nextPage}>Next Page</button>
          ) : null}

          <h4 className="centre-text">Page {resultsPage}</h4>

          <button type="button">Clear Results </button>
        </div>
      )
    }
    return null
  }
}

export default connect(mapState, mapDispatch)(SearchResultsList)
