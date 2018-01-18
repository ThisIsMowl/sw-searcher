import React from 'react'
import { connect } from 'react-redux'
import resultListActions from '../../actions/resultsListActions'

const mapState = state => ({
  ...state.dropdown,
})

const mapDispatch = dispatch => ({
  nextPage: () => 
    dispatch(resultListActions.increaseResultsPage()),
  previousPage: () =>
    dispatch(resultListActions.decreaseResultsPage()),
})

class SearchResultsList extends React.Component {
  render() {
    const {
      searchType,
      page: resultsPage,
    } = this.props

    if (searchType !== '') {
      return (
        <div>
          <h2 className="centre-text">Select a {searchType}:</h2>
          

          <h4 className="centre-text">Page {resultsPage}</h4>

          <button type="button">Search </button>
          <button type="button">Clear Results </button>
        </div>
      )
    } else return null
  }
}

export default connect(mapState, mapDispatch)(SearchResultsList)