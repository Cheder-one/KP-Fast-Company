import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
const camilleImage =
  "https://images.pexels.com/photos/3807742/pexels-photo-3807742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const CamillePage = () => {
  return (
    <div className="bg-light">
      <Container>
        <Row className="mt-5">
          <Col md={6} className="d-flex align-items-center">
            <div>
              <h1 className="text-primary display-2 fw-bold mb-4">Camille</h1>
              <p className="lead">
                Camille - женское имя французского происхождения, которое
                означает `молодая помощница`.
              </p>
              <p className="fs-4">
                Это имя было популярным во Франции в XIX веке и стало известным
                благодаря произведениям Александра Дюма, в которых появляется
                героиня по имени Камилла.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <Image src={camilleImage} alt="Camille" fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CamillePage;
