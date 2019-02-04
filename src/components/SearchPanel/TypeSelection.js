import React from 'react'
import { connect } from 'react-redux'
import Hotkeys from 'react-hot-keys'

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
      let _selection = typeof e === 'string' ? e : e.target.value

      this.props.changeSearchValue('searchType', _selection)
      this.props.clearViewingPanel()
      this.props.clearDropdownData()
      this.props.fetchDropdownData(agent.RequestAll(_selection, 1))
    }
  }

  onKeyDown(keyName, e, handler) {
    e.preventDefault()

    switch (keyName) {
      case 'f':
        this.changeSearchType('film')
        break
      case 'p':
        this.changeSearchType('planet')
        break
      case 'c':
        this.changeSearchType('character')
        break
      case 'e':
        this.changeSearchType('species')
        break
      case 't':
        this.changeSearchType('starship')
        break
      case 'v':
        this.changeSearchType('vehicle')
        break
      default:
        break
    }
  }

  render() {
    const searchType = this.props.searchType ? this.props.searchType : ''

    return (
      <Hotkeys
        keyName='
          f,
          p,
          c,
          e,
          t,
          v
        '
        onKeyDown={this.onKeyDown.bind(this)}
      >
        <div>
          <div className="radio">
            <label>
              <input type="radio" value="film" checked={searchType === 'film'} onChange={this.changeSearchType} /> <u>F</u>ilm
          </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="planet" checked={searchType === 'planet'} onChange={this.changeSearchType} /> <u>P</u>lanet
          </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="character" checked={searchType === 'character'} onChange={this.changeSearchType} /> <u>C</u>haracter
          </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="species" checked={searchType === 'species'} onChange={this.changeSearchType} /> Sp<u>e</u>cies
          </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="starship" checked={searchType === 'starship'} onChange={this.changeSearchType} /> S<u>t</u>arships
          </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="vehicle" checked={searchType === 'vehicle'} onChange={this.changeSearchType} /> <u>V</u>ehicles
          </label>
          </div>
        </div>
      </Hotkeys>
    )
  }
}

export default connect(() => ({}), mapDispatch)(TypeSelection)