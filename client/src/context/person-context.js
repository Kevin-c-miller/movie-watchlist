import { createContext, useState } from 'react';
import { getFilmography } from '../services/apiConfig/theMovieDb';

const PersonContext = createContext();

export const UserMovieProvider = ({ children }) => {
	const [filmography, setFilmography] = useState([]);

	const fetchFilmography = async (id) => {
		try {
			const details = await getFilmography(id);

			setFilmography(details);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<PersonContext.Provider
			value={{
				filmography,
				fetchFilmography,
			}}
		>
			{children}
		</PersonContext.Provider>
	);
};
export default PersonContext;
