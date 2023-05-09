import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainPage = () => {
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
              <Link to="/order">
                <Button variant="primary btn-lg mt-5">Make an Order</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <footer className="fixed-bottom">
        <Container>
          <Row>
            <Col md={10}>
              <p>Copyright © 2023</p>
            </Col>
            <Col md={2}>
              <Link to="/feedback">
                <Button
                  className="btn-outline-danger btn-sm"
                  variant="outline-danger"
                >
                  Report an Issue
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default MainPage;
