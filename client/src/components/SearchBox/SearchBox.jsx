import React from 'react';
import { useContext, useEffect } from 'react';
import MovieContext from '../../context/movieContext';

export default function SearchBox() {
  // const { searchValue, setSearchValue } = props;

  const { searchValue, setSearchValue } = useContext(MovieContext);

  // render movies by user search
  //  useEffect(() => {
  //   const movieSearch = async () => {
  //     try {
  //       // const searchedMovies = await searchMovie(searchValue);
  //       // setMovies(searchedMovies);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   movieSearch();
  // }, [searchValue]);

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
