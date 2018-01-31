import React from 'react'

import SearchPanel from './components/SearchPanel/SearchPanel'
import ResultsPanel from './components/ResultsPanels/ResultsPanel'
import './App.css'

const App = () => (
  <div className="App">
    <div className="insideapp">
      <SearchPanel />
      <div className="panel--results">
        <ResultsPanel />
      </div>
    </div>
  </div>
)

export default App
