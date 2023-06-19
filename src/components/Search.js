import React, { useState } from "react";
import "../styles/search.css";
import button from "../images/search.png"

function Search() {
  return (
    <div className="search-form">
      <img
        className="search-form_logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasa logo in red"
      />
      <div className="search-form_wrapper">
        <input type="text" className="search-form_input" />
        <input
          type="image"
          src={button}
          title="magnifying glass icons"
          label="text"
          alt="magnifying glass"
          className="search-form_button"
        />
      </div>
    </div>
  );
}

export default Search;
