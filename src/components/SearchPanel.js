import React, { Component } from 'react'

import { connect } from 'react-redux'

import common from '../actions/commonActions'

import '../SearchPanel.css'

const mapState = state => ({
  searchBox: state.common.searchBox,
  searchType: state.common.searchType,
})

const mapDispatch = dispatch => ({
  changeSearchValue: (key, payload) =>
    dispatch(common.searchValueChange(key, payload)),
})

class SearchPanel extends Component {
  constructor() {
    super()

    this.changeSearchValue = (e) => {
      this.props.changeSearchValue(e.target.name, e.target.value)
    }

    this.changeSearchType = (e) => {
      this.props.changeSearchValue('searchType', e.target.value)
    }
  }

  render() {
    const {
      searchType,
    } = this.props

    return (
      <div className="panel--search">
        <div className="content">
          <h1 className="app-title">SW Searcher</h1>

          <h2>Select a search type:</h2>

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

            <div className="">
              <h2>Select a {searchType}:</h2>
            </div>

            <button type="button">Search </button>
            <button type="button">Clear Results </button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(SearchPanel)
