import React from 'react'
import { connect } from 'react-redux'

import common from '../../actions/commonActions'
import resultsListActions from '../../actions/resultsListActions'
import agent from '../../agent'

const mapDispatch = dispatch => ({
  fetchDropdownData: payload =>
    dispatch(common.getData(payload)),
  changeSearchValue: (key, payload) =>
    dispatch(common.searchValueChange(key, payload)),
  clearViewingPanel: () =>
    dispatch(common.clearViewingPanel()),
  clearDropdownData: () =>
    dispatch(resultsListActions.clearDropdownData()),
})

class TypeSelection extends React.Component {
  constructor() {
    super()

    this.changeSearchType = (e) => {
      this.props.changeSearchValue('searchType', e.target.value)
      this.props.clearViewingPanel()
      this.props.clearDropdownData()
      this.props.fetchDropdownData(agent.RequestAll(e.target.value, 1))
    }
  }

  render() {
    const searchType = this.props.searchType ? this.props.searchType : ''

    return (
      <div>
        <div className="radio">
          <label>
            <input type="radio" value="film" checked={searchType === 'film'} onChange={this.changeSearchType} /> Film
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="planet" checked={searchType === 'planet'} onChange={this.changeSearchType} /> Planet
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="character" checked={searchType === 'character'} onChange={this.changeSearchType} /> Character
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="species" checked={searchType === 'species'} onChange={this.changeSearchType} /> Species
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="starship" checked={searchType === 'starship'} onChange={this.changeSearchType} /> Starships
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="vehicle" checked={searchType === 'vehicle'} onChange={this.changeSearchType} /> Vehicles
          </label>
        </div>
      </div>
    )
  }
}

export default connect(() => ({}), mapDispatch)(TypeSelection)