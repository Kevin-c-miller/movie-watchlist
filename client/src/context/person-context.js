import { createContext, useState } from 'react';

import { getPersonDetails } from '../services/apiConfig/theMovieDb';

const PersonContext = createContext();

export const UserMovieProvider = ({ children }) => {
	const [personDetails, setPersonDetails] = useState({});

	const fetchPersonDetails = async (id) => {
		try {
			const details = await getPersonDetails(id);

			setPersonDetails(details);

			return details;
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<PersonContext.Provider value={{ fetchPersonDetails, personDetails }}>
			{children}
		</PersonContext.Provider>
	);
};
export default PersonContext;
