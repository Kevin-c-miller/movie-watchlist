import React from 'react';

export default function SearchBox(props) {
  return (
    <div className="col col-sm-4 search">
      <input
        className="form-control"
        placeholder="Type to search.."
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
      />
    </div>
  );
}
