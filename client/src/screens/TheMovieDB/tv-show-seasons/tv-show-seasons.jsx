import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const TVShowSeasons = ({ showDetails }) => {
  const [modalShow, setModalShow] = useState(false);

  const hideModal = () => setModalShow(false);

  const tvShowSeasonModal = (season, onHide) => {
    return (
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {season?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span># of Episodes: {season?.episode_count}</span>
          <p>{season?.overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  return (
    <>
      {showDetails?.seasons
        ?.filter((season) => season.season_number !== 0)
        .map((season, key) => (
          <div className="show-details__season" key={key}>
            <button
              className="show-details__season-number"
              onClick={() => {
                tvShowSeasonModal(season?.season_number, hideModal());
              }}
            >
              <b>{season?.name} </b>
            </button>

            {/* {modalShow &&
              tvShowSeasonModal(selectedSeason, hideModal())} */}
          </div>
        ))}
    </>
  );
};
