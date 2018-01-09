import React, { Component } from 'react'

import { connect } from 'react-redux'

import common from '../actions/commonActions'
import agent from '../agent'

const mapState = state => ({
  searchBox: state.common.searchBox,
  searchType: state.common.searchType,
})

const mapDispatch = dispatch => ({
  changeSearchValue: (key, payload) =>
    dispatch(common.searchValueChange(key, payload)),
  loadTestPlan: () =>
    dispatch(common.loadTest(agent.getCharacter(1))),
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
    const searchType = this.props.searchType

    return (
      <div className="panel--search">
        <div className="content">
          <h1>Star Wars Searcher</h1>
          <h2>Hello, and welcome to the app.</h2>

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

            <button type="button">Search </button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(SearchPanel)
