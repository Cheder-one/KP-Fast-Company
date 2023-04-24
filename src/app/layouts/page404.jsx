import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Page404 = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">404 - Page not found</h1>
          <p className="text-center">
            Oops! The page you are looking for does not exist.
          </p>
          <div className="text-center">
            <Button href="/" variant="primary">
              Return to homepage
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Page404;
