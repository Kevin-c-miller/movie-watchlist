import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function DeleteButton(props) {
  const [show, setShow] = useState(false);

  // showing or closing modal function
  const handleModal = () => {
    setShow((prevShow) => !prevShow);
  };
  return (
    <div>
      <Button variant="danger" onClick={() => handleModal()}>
        Delete
      </Button>
      <Modal
        show={show}
        onHide={() => {
          handleModal();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert alert-danger">
            Are you sure you want to permanently delete this record?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="default"
            onClick={() => {
              handleModal();
            }}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={props.delete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
