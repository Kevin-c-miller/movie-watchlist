import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { formatDate } from '../../utils/format-date';
// import './MovieDetails.css';

export default function MovieDetails(props) {
  const { movie, fetchMovie } = props;
  const { title } = useParams();
  const navigate = useNavigate();

  const {
    Poster,
    Title,
    Director,
    Actors,
    Genre,
    Runtime,
    Rated,
    BoxOffice,
    Awards,
    Plot,
    Year,
    Writer,
  } = movie;

  useEffect(() => {
    // getting movie that was selected
    fetchMovie(title);

    // eslint-disable-next-line
  }, []);

  if (!title) {
    return (
      <div>
        <img
          src="https://media.giphy.com/media/N256GFy1u6M6Y/giphy.gif"
          alt="loading"
        />
      </div>
    );
  }

  return (
    <>
      {title && (
        <div className="movie-details">
          <div className="back-btn">
            <button
              className="movie-back-btn"
              onClick={() => navigate(`/movies/`)}
            >
              Back to movie list
            </button>
          </div>
          <div className="movieCard-container">
            <Card className="movie-details-card">
              <div className="face face1">
                <div className="content">
                  <Card.Img
                    variant="top"
                    src={Poster}
                    alt={Title}
                    style={{
                      height: '675px',
                      width: '30rem',
                      borderRadius: '35px',
                      border: '5px solid #000',
                    }}
                  />
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <Card.Body>
                    <Card.Title>
                      <h3>
                        <b>{Title} </b>
                      </h3>
                    </Card.Title>
                    <h6>
                      {Year}, <b> {Director}</b>
                    </h6>
                    <Card.Text>
                      <br />
                      <b> {Runtime}</b>
                      <br />
                      <b>Starring: </b> {Actors}
                      <br />
                      <b>Genre: </b> {Genre}
                      <br />
                      <b>Rated:</b> {Rated}
                      <br />
                      <b>Box Office:</b> {BoxOffice}
                      <br />
                      <b>Written By:</b> {Writer}
                      <br />
                      <b>Awards:</b> {Awards}
                      <br />
                      <br />
                      <b> Synopsis:</b> {Plot}
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>
          <div className="add-movie-btn-div">
            {props.currentUser && (
              <button
                className="add-movie-btn"
                onClick={() => {
                  const addedMovie = {
                    title: Title,
                    poster: Poster,
                    rating: Rated,
                    synopsis: Plot,
                    director: Director,
                    starring: Actors,
                    release_year: parseInt(Year),
                    runtime: Runtime,
                    user_id: props.currentUser.id,
                  };
                  props.addMovieToWatchList(props.currentUser.id, addedMovie);
                }}
              >
                Add Movie to watch list
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
