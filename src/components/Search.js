import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

function Search({ setSearchResults }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(searchInput));
  };

  return (
    <>
      <img
        className="search-form_logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasa logo in red"
      />
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="search-form_input"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          alt="magnifying glass button"
          className="search-form_button"
        />
      </form>
    </>
  );
}

export default Search;
