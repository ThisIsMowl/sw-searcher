import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import agent from '../agent'
import common from '../actions/commonActions'
import '../SearchPanel.css'

const mapState = state => ({
  searchBox: state.common.searchBox,
  searchType: state.common.searchType,
})

const mapDispatch = dispatch => ({
  fetchDropdownData: payload =>
    dispatch(common.getData('dropdownData', payload)),
  changeSearchValue: (key, payload) =>
    dispatch(common.searchValueChange(key, payload)),
})

class SearchPanel extends Component {
  constructor() {
    super()
    
    this.changeSearchType = (e) => {
      this.props.changeSearchValue('searchType', e.target.value)

      switch (e.target.value) {
        case 'film':
          this.props.fetchDropdownData(agent.RequestAll.films())
          break
        case 'species':
          this.props.fetchDropdownData(agent.RequestAll.species())
          break
        case 'vehicle':
          this.props.fetchDropdownData(agent.RequestAll.vehicles())
          break
        case 'planet':
          this.props.fetchDropdownData(agent.RequestAll.planets())
          break
        case 'character':
          this.props.fetchDropdownData(agent.RequestAll.characters())
          break
        case 'starship':
          this.props.fetchDropdownData(agent.RequestAll.ships())
          break
        default:
      }
    }
  }

  render() {
    const {
      searchType,
    } = this.props

    return (
      <div className="panel--search">
        <div className="content">
          <h1 className="centre-text">SW Searcher</h1>

          <div className="divide-line" />

          <h2 className="centre-text">Select a search type:</h2>

          <form>
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

            <div className="divide-line" />

            <h2 className="centre-text">Select a {searchType}:</h2>


            <button type="button">Search </button>
            <button type="button">Clear Results </button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(SearchPanel)
