import axios from 'axios';
import { formatDatewithDashes } from '../../utils/format-date';
const KEY = process.env.REACT_APP_MOVIEDB_KEY;
const url = `https://api.themoviedb.org/3`;
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTkxNGQ4N2U4MmRhY2Y4ZjJhYTgxZDMyZWQwZTgxNCIsIm5iZiI6MTY0NzYxMzA3OS45MzIsInN1YiI6IjYyMzQ5NDk3ZDdjZDA2MDAxY2RhY2EwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1PPhFhYuE-urpZZwOl7-MI0K1RitynvaXFJjj-8_mfQ',
	},
};

export const searchMovie = async (searchValue) => {
	const res = await axios.get(
		`${url}/search/movie&query=${searchValue}`,
		options
	);
	return res.data.results;
};

export const searchTvShow = async (searchValue) => {
	const res = await axios.get(
		`${url}/search/tv?api_key=${KEY}&query=${searchValue}`
	);

	return res.data.results;
};

export const getTopRatedMovies = async () => {
	try {
		const res = await axios.get(
			`${url}/movie/top_rated?api_key=${KEY}`,
			options
		);
		return res.data.results;
	} catch (error) {
		console.error(error);
	}
};

export const getPopularMovies = async () => {
	try {
		const res = await axios.get(`${url}/movie/popular?api_key=${KEY}`);
		return res.data.results;
	} catch (error) {
		console.error(error);
	}
};

export const getMovieDBDetails = async (movie_id) => {
	try {
		const res = await axios.get(`${url}/movie/${movie_id}?api_key=${KEY}`);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getMovieTrailer = async (movie_id) => {
	try {
		const res = await axios.get(
			`${url}/movie/${movie_id}/videos?api_key=${KEY}`
		);
		return res.data.results;
	} catch (error) {
		console.error(error);
	}
};

export const getSimilarMovies = async (movie_id) => {
	try {
		const res = await axios.get(
			`${url}/movie/${movie_id}/similar?api_key=${KEY}`
		);

		return res.data.results;
	} catch (error) {
		console.error(error);
	}
};

export const getSteamingProviders = async (movie_id) => {
	try {
		const res = await axios.get(
			`${url}/movie/${movie_id}/watch/providers?api_key=${KEY}`
		);
		return res.data.results.US;
	} catch (error) {
		console.error(error);
	}
};

export const getNowPlayingMovies = async () => {
	try {
		// one Month ago
		const date = new Date();
		date.setUTCDate(date.getUTCDate() - 30);
		const oneMonthAgo = formatDatewithDashes(date);

		// today
		const today = new Date();
		const todaysDate = formatDatewithDashes(today);

		const res = await axios.get(
			`${url}/discover/movie?api_key=${KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&primary_release_date.gte=${oneMonthAgo}&release_date.lte=${todaysDate}`
		);

		return res.data.results;
	} catch (error) {
		console.error(error);
	}
};

export const getUpcomingMovies = async () => {
	try {
		const date = new Date();

		// Tomorrow
		date.setUTCDate(date.getUTCDate() + 1);
		const tomorrow = formatDatewithDashes(date);

		// 6 months from today
		date.setUTCMonth(date.getUTCMonth() + 6);
		const sixMonthsLater = formatDatewithDashes(date);

		const res = await axios.get(
			`${url}/discover/movie?api_key=${KEY}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&primary_release_date.gte=${tomorrow}&primary_release_date.lte=${sixMonthsLater}`
		);

		return res.data.results;
	} catch (error) {
		console.error(error);
	}
};

export const getMovieCredits = async (movie_id) => {
	try {
		const res = await axios.get(
			`${url}/movie/${movie_id}/credits?api_key=${KEY}`
		);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

// not currently in use
export const getLatest = async () => {
	try {
		const res = await axios.get(`${url}/movie/latest?api_key=${KEY}`);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

// not currently in use
export const getRecommendations = async (movie_id) => {
	try {
		const res = await axios.get(
			`${url}/movie/${movie_id}/recommendations?api_key=${KEY}`
		);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

//  TV SHOWS //

// Top Rated
export const getPopularTvShows = async () => {
	const res = await axios.get(`${url}/tv/top_rated?api_key=${KEY}`);

	return res.data.results;
};

// Trending
export const getTrendingTvShows = async () => {
	const res = await axios.get(`${url}/trending/tv/day?api_key=${KEY}`);
	return res.data.results;
};

// trailers/videos
export const getTvShowVideos = async (id) => {
	const res = await axios.get(`${url}/tv/${id}/videos?api_key=${KEY}`);
	return res.data.results;
};

// get show details
export const getShowDetails = async (show_id) => {
	const res = await axios.get(`${url}/tv/${show_id}?api_key=${KEY}`);
	return res.data;
};

// tv streaming
export const getTvShowStreaming = async (show_id) => {
	const res = await axios.get(
		`${url}/tv/${show_id}/watch/providers?api_key=${KEY}`
	);
	return res.data;
};

// similar tv series
export const getSimilarTvShows = async (show_id) => {
	try {
		const res = await axios.get(`${url}/tv/${show_id}/similar?api_key=${KEY}`);
		return res.data.results;
	} catch (error) {
		console.error(error);
	}
};

// tv credits
export const getTvCredits = async (show_id) => {
	try {
		const res = await axios.get(`${url}/tv/${show_id}/credits?api_key=${KEY}`);

		return res.data;
	} catch (error) {
		console.error(error);
	}
};

// airing today
export const getAiringTodayTv = async () => {
	try {
		const date = new Date();
		const todaysDate = formatDatewithDashes(date);

		const res = await axios.get(
			`${url}/discover/tv?api_key=${KEY}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc&air_date.lte=${todaysDate}&air_date.gte=${todaysDate}&with_origin_country=US`
		);

		return res.data;
	} catch (error) {
		console.error(error);
	}
};

// Person details
export const getPersonDetails = async (person_id) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTkxNGQ4N2U4MmRhY2Y4ZjJhYTgxZDMyZWQwZTgxNCIsIm5iZiI6MTY0NzYxMzA3OS45MzIsInN1YiI6IjYyMzQ5NDk3ZDdjZDA2MDAxY2RhY2EwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1PPhFhYuE-urpZZwOl7-MI0K1RitynvaXFJjj-8_mfQ',
			},
		};

		const res = await axios.get(
			`${url}/person/${person_id}?language=en-US`,
			options
		);

		return res.data;
	} catch (error) {
		console.error(error);
	}
};

// Person movie credit
export const getFilmography = async (person_id) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTkxNGQ4N2U4MmRhY2Y4ZjJhYTgxZDMyZWQwZTgxNCIsIm5iZiI6MTY0NzYxMzA3OS45MzIsInN1YiI6IjYyMzQ5NDk3ZDdjZDA2MDAxY2RhY2EwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1PPhFhYuE-urpZZwOl7-MI0K1RitynvaXFJjj-8_mfQ',
			},
		};

		const res = await axios.get(
			`${url}/person/${person_id}/movie_credits?language=en-US`,
			options
		);

		return res.data;
	} catch (error) {
		console.error(error);
	}
};
