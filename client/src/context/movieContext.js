import { createContext, useState } from 'react';

// set to variable
const MovieContext = createContext();

// need a provider
export const MovieProvider = ({ children }) => {
  const [dbMovie, setDbMovie] = useState([]);

  return (
    <MovieContext.Provider value={{ dbMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
