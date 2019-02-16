import React from "react";

const SearchBox = ( {searchfield, searchChange} ) => {
    return (
        <div className='searchDiv'>
            <input className='searchInput' type='search' placeholder='Roboter suchen' 
            onChange={searchChange}/> 
        </div>
    );
}

export default SearchBox;