import React from 'react'
import { connect } from 'react-redux'
import resultListActions from '../../actions/resultsListActions'
import common from '../../actions/commonActions'

const mapState = state => ({
  ...state.dropdown,
})

const mapDispatch = dispatch => ({
  nextPage: () => 
    dispatch(resultListActions.increaseResultsPage()),
  previousPage: () =>
    dispatch(resultListActions.decreaseResultsPage()),
  loadDropdownData: payload =>
    dispatch(common.getData('dropdown', payload)),
})

class SearchResultsList extends React.Component {
  constructor() {
    super()
    this.nextPage = () => {
      this.props.nextPage()
    }
    this.previousPage = () => {
      this.props.previousPage()
    }
  }

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
    }
    return null
  }
}

export default connect(mapState, mapDispatch)(SearchResultsList)