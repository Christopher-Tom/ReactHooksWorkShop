import React from 'react'
import TableOfContents from './components/toc'
import StateExample from './components/01'

function App() {
  const [tab, setTab] = React.useState(0)
  return (
    <div className="App">
      <TableOfContents />
    </div>
  );
}

export default App;
