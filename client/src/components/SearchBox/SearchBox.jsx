import React from 'react';
import { useContext } from 'react';
import MovieContext from '../../context/movieContext';

export default function SearchBox() {
  const { searchValue, setSearchValue } = useContext(MovieContext);

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
