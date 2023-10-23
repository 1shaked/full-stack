import './App.css'
import { ExpandedTable } from './components/expandedTable'
import { PinnedColumn } from './components/pinnedColumn/main'

function App() {

  return (
    <div className="App">
      <PinnedColumn />
      <hr />
      <ExpandedTable />
    </div>
  )
}

export default App
