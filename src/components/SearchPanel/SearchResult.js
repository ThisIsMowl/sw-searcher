import React from 'react'
import { connect } from 'react-redux'

import resultListActions from '../../actions/resultsListActions'
import helpers from '../../helpers/helpers'

const mapState = state => ({
  searchType: state.common.searchType,
})

const mapDispatch = dispatch => ({
  transferData: payload =>
    dispatch(resultListActions.movetoViewingPanel(payload)),
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

    let { index } = this.props
    index = index === 9 ? 0 : index + 1

    if (data) {
      const title = searchType === 'film' ? `Episode ${helpers.toRoman(data.episode_id)}: ${data.title}` : data.name

      return (
        <div className="search-result">
          <div className="result-hotkey">{index}</div>
          <button type="button" className="d-sm-none btn btn-sm btn-success" onClick={() => this.moveResults(data)}>{title}</button>
          <button type="button" className="d-none d-md-block btn btn-success" onClick={() => this.moveResults(data)}>{title}</button>
        </div>
      )
    }
    return null
  }
}

export default connect(mapState, mapDispatch)(SearchResult)
