import React from 'react'
import { connect } from 'react-redux'

const mapDispatch = () => ({})

class SearchResultsList extends React.Component {
  render() {
    const searchType = this.props.searchType ? this.props.searchType : 'blah'

    return (
      <div>
        <h2 className="centre-text">Select a {searchType}:</h2>


        <button type="button">Search </button>
        <button type="button">Clear Results </button>
      </div>
    )
  }
}

export default connect(() => ({}), mapDispatch)(SearchResultsList)