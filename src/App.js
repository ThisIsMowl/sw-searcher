import React from 'react'

import FilmPanel from './components/FilmPanel'
import CharacterPanel from './components/CharacterPanel'
import PlanetPanel from './components/PlanetPanel'

import SearchPanel from './components/SearchPanel/SearchPanel'
import './App.css'

const App = () => (
  <div className="App">
    <div className="container">
      <SearchPanel />
      <div className="panel--results">
        <div className="content" />
      </div>
    </div>
  </div>
)

export default App
