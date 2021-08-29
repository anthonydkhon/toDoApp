import React from 'react';

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <input 
                type="text" 
                placeholder="Search tasks..."
                onChange={handleChange}
                id="search" 
                name="search"
                aria-label="Search for a task" />
        </div>
    )
}

export default SearchBar;
