import React from 'react';

const SearchBox  = ({searchUpdate}) =>{
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search champion"
                onChange={searchUpdate}
            />
        </div>
    );
}

export default SearchBox;