import React from 'react'

import ResultsPanel from './components/ResultsPanel'
import SearchPanel from './components/SearchPanel'
import './App.css'

const App = () => (
  <div className="App">
    <div className="container">
      <SearchPanel />
    
      <div className="panel--results">
        <div className="content">

          <ResultsPanel />

        </div>
      </div>
    </div>
  </div>
)

export default App
