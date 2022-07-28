import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  LogoImage,
  ResponseButton,
  StyledInput,
} from "./sharedStyledComponents";

const Register = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      if (!data.username.length && !data.password.length) {
        throw "Please enter all field data.";
      }
      let res = await axios.post("http://localhost:3030/register", data);
      console.log(res);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <LogoImage src="/sleepery-logo.jpg" />
      <Header>Enter Registration Details</Header>
      <StyledInput
        value={data.username}
        onChange={(e) =>
          setData((data) => {
            return { ...data, username: e.target.value.toLowerCase() };
          })
        }
        placeholder="Enter Username"
      />
      <StyledInput
        value={data.password}
        onChange={(e) =>
          setData((data) => {
            return { ...data, password: e.target.value.toLowerCase() };
          })
        }
        placeholder="Enter password"
        type="password"
      />
      <ResponseButton onClick={() => handleSubmit()}>Register</ResponseButton>
    </Container>
  );
};

export default Register;
