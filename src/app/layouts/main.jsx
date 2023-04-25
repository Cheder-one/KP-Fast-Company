import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import IssueForm from "./other/issueForm";

function Main() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="text-center">Welcome to the Main Page</h1>
            <p className="text-center">
              This is the main page of our app. Here you can find all the latest
              news and updates.
            </p>
            <div className="text-center">
              <Button href="/about" variant="primary">
                About Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <footer className="fixed-bottom">
        <Container>
          <Row>
            <Col md={10}>
              <p>Copyright © 2021</p>
            </Col>
            <Col md={2}>
              <Button
                className="btn-outline-danger btn-sm"
                variant="outline-danger"
                onClick={handleShowModal}
              >
                Report an Issue
              </Button>
            </Col>
          </Row>
        </Container>
      </footer>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Body>
          <IssueForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Main;
