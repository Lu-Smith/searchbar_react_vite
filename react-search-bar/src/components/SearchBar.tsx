import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className='input-wrapper'>
        <FaSearch id="search-icon" />
        <input type="text" placeholder='Type to search...' />
    </div>
  )
}

export default SearchBar;