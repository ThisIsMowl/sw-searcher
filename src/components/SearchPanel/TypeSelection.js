import React from 'react'
import { connect } from 'react-redux'

import common from '../../actions/commonActions'
import agent from '../../agent'

const mapDispatch = dispatch => ({
  fetchDropdownData: payload =>
    dispatch(common.getData('dropdownData', payload)),
  changeSearchValue: (key, payload) =>
    dispatch(common.searchValueChange(key, payload)),
})

class TypeSelection extends React.Component {
  constructor() {
    super()

    this.changeSearchType = (e) => {
      this.props.changeSearchValue('searchType', e.target.value)

      switch (e.target.value) {
        case 'film':
          this.props.fetchDropdownData(agent.RequestAll.films(1))
          break
        case 'species':
          this.props.fetchDropdownData(agent.RequestAll.species(1))
          break
        case 'vehicle':
          this.props.fetchDropdownData(agent.RequestAll.vehicles(1))
          break
        case 'planet':
          this.props.fetchDropdownData(agent.RequestAll.planets(1))
          break
        case 'character':
          this.props.fetchDropdownData(agent.RequestAll.characters(1))
          break
        case 'starship':
          this.props.fetchDropdownData(agent.RequestAll.ships(1))
          break
        default:
      }
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