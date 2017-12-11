import React, { Component } from 'react'
import { connect } from 'react-redux'

import common from './actions/commonActions'
import HelloWorld from './components/HelloWorld'
import logo from './logo.svg'
import './App.css'

const mapState = state => ({
  ...state.common,
})

const mapDispatch = dispatch => ({
  appLoad: () =>
    dispatch(common.appLoaded())
})

class App extends Component {
  componentWillMount() {
    this.props.appLoad()
  }

  render() {
    const appLoaded = this.props.appLoaded

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld working={appLoaded}/>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(App)
