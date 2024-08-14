// src/components/Footer.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-4">
      <Container>
        <Navbar />
        <Row className="mt-4">
          <Col
            md={6}
            className="d-flex flex-column align-items-center justify-content-center custom-contact"
          >
            <p>Contact: +63 912 345 6789</p>
            <p>Email: example@example.com</p>
          </Col>
          <Col md={6} className="p-0">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.922570763752!2d123.89151111472295!3d10.315699592624471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9997e6e5f3e27%3A0xd4b31a8f5a54aeb!2sCebu%20City!5e0!3m2!1sen!2sph!4v1603407624178!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
