import React from 'react'
import { connect } from 'react-redux'

import resultListActions from '../../actions/resultsListActions'
import helpers from '../../helpers/helpers'

const mapDispatch = dispatch => ({
  transferData: payload =>
    dispatch(resultListActions.movetoResultsPage(payload)),
})

class SearchResultsList extends React.Component {
  constructor() {
    super()
    this.moveResults = (payload) => {
      this.props.transferData(payload)
    }
  }

  render() {
    const {
      results,
      loading,
      searchType,
    } = this.props

    if (results && !loading && searchType) {
      return results.map((x) => {
        const title = searchType === 'film' ? `Episode ${helpers.toRoman(x.episode_id)}: ${x.title}` : x.name
        return (
          <div className="search-result" key={x.url}>
            <button type="button" onClick={() => this.moveResults(x)}>{title}</button>
          </div>
        )
      })
    } else if (loading) {
      return (
        <h2>Loading</h2>
      )
    }
    return null
  }
}

export default connect(() => ({}), mapDispatch)(SearchResultsList)
