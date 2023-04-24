import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Main = () => {
  return (
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
  );
};

export default Main;
