import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar"
import Button from "../components/Button"
import Footer from "../components/Footer"

export default function About() {
  return (
    <div>
      <Navbar>
      </Navbar>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 style={{ textAlign: "center" }}>Welcome To Coffee App!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-4"><div><br></br></div></Col>
          <Col size="md-4">
            <Button>Sign Up</Button>
          </Col>
          <Col size="md-4"><div><br></br></div></Col>
        </Row>
        <Row>
        <Col size="md-4"><div><br></br></div></Col>
          <Col size="md-4">
            <p>If you already have an account <a href="#">Log in here.</a>
            </p>
          </Col>
          <Col size="md-4"><div><br></br></div></Col>
        </Row>
      </Container>
    </div>
  );
}

