import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar"
import Button from "../components/Button"
// import Footer from "../components/Footer"
import Login from "../components/Login"

export default function About() {
  return (
    <div>
      <Container style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
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
            <p style={{ fontSize: "small", textAlign: "center" }}>If you already have an account <a href="/Login">Log in here.</a>
            </p>
          </Col>
          <Col size="md-4"><div><br></br></div></Col>
        </Row>
      </Container>
      
      
    </div>
  );
}