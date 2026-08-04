import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MovieContext from "../../../context/movie-context";

import "./CastMemberDetailsPage.css";
import { formatDatewithSlashes } from "../../../utils/format-date";

export default function CastMemberDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    fetchPersonDetails,
    personDetails,
    filmography,
    fetchFilmography,
    tvFilmography,
    fetchTVFilmography,
  } = useContext(MovieContext);

  const { name, birthday, deathday, biography, place_of_birth, profile_path } =
    personDetails;

  useEffect(() => {
    try {
      fetchPersonDetails(id);
      fetchFilmography(id);
      fetchTVFilmography(id);
    } catch (err) {
      console.log(err);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // sort filmography in ascending order from earliest to most recent

  return (
    id && (
      <div className="cast-details-page">
        <button
          onClick={() => navigate(-1)}
          className="cast-details-page__back-btn"
        >
          Back
        </button>
        <div className="cast-member-name">{name}</div>

        <div className="cast-member-life-info">
          <div className="cast-member-birthday">
            <span className="cast-member-birthday-label">DOB: </span>
            <span className="cast-member-birthday-value">
              {formatDatewithSlashes(birthday)} {place_of_birth}
            </span>
          </div>

          {deathday && (
            <div className="cast-member-death">
              <span className="cast-member-death-label">Death:</span>
              <span className="cast-member-death-value">{deathday}</span>
            </div>
          )}
        </div>

        <div className="cast-member-info">
          <img
            src={`https://image.tmdb.org/t/p/original${profile_path}`}
            alt={"name headshot"}
            className="cast-member-headshot"
          />

          <div className="cast-member-bio">{biography}</div>
        </div>

        <div className="cast-member-info__filmography">
          <div className="cast-member-info__filmography-header">
            Filmography
          </div>
          <div className="cast-member-info__credits">
            <div className="cast-member-info__header">Film</div>
            {filmography?.cast?.length &&
              filmography.cast.map((credit) => (
                <div
                  className="cast-member-info__credit"
                  key={credit.credit_id}
                >
                  <Link
                    to={`/movies/${credit.id}`}
                    className="cast-member-info__title"
                  >
                    {credit.title}
                  </Link>
                  <span className="cast-member-info__role">
                    {credit.character}
                  </span>
                  <span className="cast-member-info__date">
                    {credit.release_date.slice(0, 4)}
                  </span>
                </div>
              ))}
          </div>
          <div className="cast-member-info__credits">
            <div className="cast-member-info__header">Television</div>
            {tvFilmography?.cast?.length &&
              tvFilmography.cast.map((credit) => (
                <div
                  className="cast-member-info__credit"
                  key={credit.credit_id}
                >
                  <Link
                    to={`/movies/tv/${credit.id}`}
                    className="cast-member-info__title"
                  >
                    {credit.name}
                  </Link>
                  <span className="cast-member-info__role">
                    {credit.character}
                  </span>
                  <span className="cast-member-info__date">
                    {credit.first_credit_air_date.slice(0, 4)}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* <div className="cast-member-filmography"></div> */}
        {/* awards */}
      </div>
    )
  );
}
