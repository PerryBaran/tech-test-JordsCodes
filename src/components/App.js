import React, { useState } from "react";
import Search from "./Search";
import "../styles/app.css";

function App() {
  const [searchResults, setSearchResults] = useState("");
  return (
    <div className="App">
      <Search setSearchResults={setSearchResults} />
    </div>
  );
}

export default App;
