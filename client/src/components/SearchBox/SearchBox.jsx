import React from 'react';

export default function SearchBox(props) {
  const { searchValue, setSearchValue } = props;
  return (
    <div className="col col-sm-4 search">
      <input
        className="form-control"
        placeholder="Type to search.."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
