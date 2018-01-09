import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'

import FilmPanel from './components/FilmPanel'
import CharacterPanel from './components/CharacterPanel'
import SearchPanel from './components/SearchPanel'
import './App.css'

const App = () => (
  <div className="App">
    <div className="container">
      <SearchPanel />
      <div className="panel--results">
        <div className="content">

          <Switch>
            <Route exact path="/" component={CharacterPanel} />
          </Switch>

        </div>
      </div>
    </div>
  </div>
)

export default withRouter(App)
