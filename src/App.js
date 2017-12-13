import React, { Component } from 'react'
import { connect } from 'react-redux'

import common from './actions/commonActions'
import agent from './agent'
import HelloWorld from './components/HelloWorld'
import logo from './logo.svg'
import './App.css'

const mapState = state => ({
  ...state.common,
})

const mapDispatch = dispatch => ({
  loadTest: payload =>
    dispatch(common.loadTest(payload)),
})

class App extends Component {
  componentWillMount() {
    this.props.loadTest(agent.getCharacter(1))
  }

  render() {
    const loading = this.props.loading

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld loading={loading}/>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(App)
