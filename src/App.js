import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'

import ResultsPanel from './components/ResultsPanel'
import SearchPanel from './components/SearchPanel'
import './App.css'

const App = () => (
  <div className="App">
    <div className="container">
      <SearchPanel />
      <div className="panel--results">
        <div className="content">

          <Switch>
            <Route exact path="/" component={ResultsPanel} />
          </Switch>

        </div>
      </div>
    </div>
  </div>
)

export default withRouter(App)
