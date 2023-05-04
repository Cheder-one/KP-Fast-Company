import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";

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
            <Link to="/">
              <Button variant="primary">Return to homepage</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Page404;
