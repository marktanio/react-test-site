import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="bg-light text-center py-5 min-vh-100 d-flex align-items-center justify-content-center text-center hero-background"
      style={{ minHeight: "80vh" }}
    >
      <Container>
        <h1 className="display-4 mb-3">Welcome to My Personal Brand</h1>
        <p className="lead">Bringing creativity to life</p>
        <Button variant="primary" size="lg" className="mt-5 px-5 custom-btn">
          Learn More
        </Button>
      </Container>
    </section>
  );
};

export default Hero;
