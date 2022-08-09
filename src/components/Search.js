import React from "react";

import './Search.css';

const Search = ({placeholder, handleChange}) => {
    return (
        <input
            className="search"
            type='search' 
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

export default Search;