import React from 'react'
import { connect } from 'react-redux'

import resultListActions from '../../actions/resultsListActions'
import helpers from '../../helpers/helpers'

const mapState = state => ({
  searchType: state.common.searchType,
})

const mapDispatch = dispatch => ({
  transferData: payload =>
    dispatch(resultListActions.movetoResultsPage(payload)),
})

class SearchResult extends React.Component {
  constructor() {
    super()
    this.moveResults = (payload) => {
      this.props.transferData(payload)
    }
  }

  render() {
    const {
      data,
      searchType,
    } = this.props

    if (data) {
      const title = searchType === 'film' ? `Episode ${helpers.toRoman(data.episode_id)}: ${data.title}` : data.name

      return (
        <div className="search-result" key={data.url}>
          <button type="button" className="btn btn-success" onClick={() => this.moveResults(data)}>{title}</button>
        </div>
      )
    }
    return null
  }
}

export default connect(mapState, mapDispatch)(SearchResult)
