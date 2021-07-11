import React from "react";
import TableOfContents from "./components/toc";

function App() {
  const [tab, setTab] = React.useState(0);
  return (
    <div className="App">
      <TableOfContents />
    </div>
  );
}

export default App;
