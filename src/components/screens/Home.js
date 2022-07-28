import React from "react";
import styled from "styled-components";
import {
  Container,
  Header,
  LogoImage,
  ResponseButton,
} from "./sharedStyledComponents";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <LogoImage src="/sleepery-logo.jpg" />
      <Header style={{ fontWeight: "bold", letterSpacing: "0.3rem" }}>
        SLEEPERY
      </Header>
      <Link to="/register">
        <ResponseButton>Register</ResponseButton>
      </Link>
      <Link to="/login">
        <ResponseButton>Login</ResponseButton>
      </Link>
    </Container>
  );
};

export default Home;
