import React from "react";
import Header from "./components/Header";
import Journey from "./components/Journey";
import data from "./data";

function App() {
  const journals = data.map((journal) => (
    <div>
      <Journey key={journal.id} item={journal} />
      <hr />
    </div>
  ));
  return (
    <div className="App">
      <Header />
      <section>{journals}</section>
    </div>
  );
}

export default App;
