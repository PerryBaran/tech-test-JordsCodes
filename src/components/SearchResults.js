import React from "react";
import "../styles/search-results.css";

function SearchResults({ results }) {
  if (!results.length) {
    return <p>No results</p>;
  }
  return (
    <>
      <h2> Results </h2>
      <div className="search-results">
        {results.map((result) => {
          return (
            <img
              src={result}
              alt="spaceImage"
              className="search-results_image"
            />
          );
        })}
      </div>
    </>
  );
}

export default SearchResults;
