import React, { Component } from 'react'

import { connect } from 'react-redux'

import common from '../actions/commonActions'
import agent from '../agent'

const mapState = state => ({
  searchBox: state.common.searchBox,
})

const mapDispatch = dispatch => ({
  changeSearchValue: (key, payload) =>
    dispatch(common.searchValueChange(key, payload)),
  loadTest: () =>
    dispatch(common.loadTest(agent.getFilm(1))),
})

class SearchPanel extends Component {
  constructor() {
    super()

    this.changeSearchValue = (e) => {
      this.props.changeSearchValue(e.target.name, e.target.value)
    }
  }

  componentWillMount() {
    this.props.loadTest()
  }

  render() {
    const search = this.props.searchBox

    return (
      <div className="panel--search">
        <div className="content">
          <h1>Star Wars Searcher</h1>
          <h2>Hello, and welcome to the app.</h2>

          <form>
            <div className="radio">
              <label>
                <input type="radio" value="option1" checked /> Option 1
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="option2" /> Option 2
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="option3" /> Option 3
              </label>
            </div>

            <input type="text" placeholder="Query" name="searchBox" value={search} onChange={this.changeSearchValue} />
          </form>
        </div>
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(SearchPanel)
