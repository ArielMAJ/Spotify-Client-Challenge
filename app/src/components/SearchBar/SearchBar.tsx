import React, { useState } from "react";
import ArtistCard from "../ArtistCard/OpenableCard";
import "./SearchBar.css";
import token from "../../assets/.secrets.json";
import OpenableCard from "../ArtistCard/OpenableCard";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [apiKey, setApiKey] = useState(token["token"]);
  const [results, setResults] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!searchQuery) {
      setResults([]);
    } else {
      const type = "album";
      // const market = "BR";
      const limit = 10;
      const offset = 0;
      const apiURL = `https://api.spotify.com/v1/search?q=${searchQuery}&type=${type}&limit=${limit}&offset=${offset}&include_external=audio`; //&market=${market}

      const headers = new Headers();
      headers.append("Authorization", `Bearer ${apiKey}`);

      fetch(apiURL, {
        method: "GET",
        headers: headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then((data) => {
          setResults(data["albums"]["items"]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="searchBar"
          type="text"
          id="searchInput"
          name="q"
          value={searchQuery}
          placeholder="Search for an album..."
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </form>
      {results.map((result) => (
        <OpenableCard result={result} />
      ))}
    </div>
  );
}

export default SearchBar;
