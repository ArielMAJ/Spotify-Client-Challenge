import React from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  return <div className="flex-container flex-column page">
    <h1>Spotify Client</h1>
    <SearchBar />
  </div>;
}

export default App;
