import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "./context/ScreenContext";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  NextButton,
  ResponseButton,
} from "./sharedStyledComponents";

const ScreenOne = () => {
  const context = useContext(Context);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();
  const handleSelected = (val) => {
    console.log(val);
    setResponse(val);
  };

  useEffect(() => {
    console.log(context.isLoggedIn)
    if (!context.isLoggedIn) navigate("/login");
  }, []);

  const handleSubmit = async () => {
    try {
      if (!response) {
        throw "Response not selected";
        // return;
      }
      await axios.post(
        "http://localhost:3030/answers",
        {
          ques_id: 1,
          response,
        },
        { headers: { Authorization: "Bearer " + localStorage.getItem("user") } }
      );
      console.log("here");
      navigate("/screen-two");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Header>How many hours do you sleep at night?</Header>
      <ResponseButton onClick={(e) => handleSelected(e.target.innerText)}>
        {" "}
        {`<`} 6 hours
      </ResponseButton>
      <ResponseButton
        style={{ backgroundColor: "#406682" }}
        onClick={(e) => handleSelected(e.target.innerText)}
      >
        {" "}
        {`<`} 4 hours
      </ResponseButton>
      <ResponseButton
        style={{ backgroundColor: "#395499" }}
        onClick={(e) => handleSelected(e.target.innerText)}
      >
        8 hours
      </ResponseButton>
      <NextButton
        onClick={() => handleSubmit()}
        // dangerouslySetInnerHTML={{ __html: "&U+02192;" }}
      >
        {" "}
        &#x27A1;
      </NextButton>
    </Container>
  );
};

export default ScreenOne;
