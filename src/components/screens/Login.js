import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import {
  Container,
  Header,
  LogoImage,
  ResponseButton,
  StyledInput,
} from "./sharedStyledComponents";
import { useNavigate } from "react-router-dom";
import { Context } from "./context/ScreenContext";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const context = useContext(Context);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      if (!data.username.length && !data.password.length) {
        throw "Please enter all field data.";
      }
      let res = await axios.post("http://localhost:3030/login", data);
      //   cookie.set("user", res.data.token, { httpOnly: true, secure: true });
      context.setIsLoggedIn(true);
      localStorage.setItem("user", res.data.token);
      console.log(res, context.isLoggedIn);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  useEffect(() => {
    if (context.isLoggedIn) navigate("/screen-one");
  }, [context.isLoggedIn]);
  return (
    <Container>
      <LogoImage src="/sleepery-logo.jpg" />
      <Header>Enter Login Details</Header>
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
      <ResponseButton onClick={() => handleSubmit()}>Login</ResponseButton>
    </Container>
  );
};

export default Login;
