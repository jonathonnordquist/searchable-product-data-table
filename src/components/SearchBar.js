import React from 'react';

function SearchBar(props) {
  return (
    <form>
      <div>
        <input type="text" placeholder="Search..."
               className="searchBarField" 
               onChange={((e) => props.updateFilterText(e.target.value))} />
      </div>
      <div className="searchBarCheck">
        <input type="checkbox" className="searchBarCheckBox" onChange={(e) => props.toggleInStock(e.target.checked)} />
        <label className="searchBarCheckLabel" >Only show products in stock</label>
      </div>
    </form>
  );
}

export default SearchBar;