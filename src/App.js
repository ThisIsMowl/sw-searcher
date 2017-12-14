import React from 'react'

import ResultsPanel from './components/ResultsPanel'
import SearchPanel from './components/SearchPanel'
import './App.css'

const App = () => (
  <div className="App">
    <div className="container">
      <SearchPanel />
      <ResultsPanel />
    </div>
  </div>
)

export default App
