import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "./context/ScreenContext";
import {
  Container,
  Header,
  NextButton,
  ResponseButtonTime,
} from "./sharedStyledComponents";

const ScreenOne = () => {
  const [response, setResponse] = useState(null);
  const handleSelected = (val) => {
    console.log(val);
    setResponse(val);
  };
  const handleSubmit = async () => {
    if (!response) {
      console.log(response, "Response not selected");
      return;
    }
    await axios.post(
      "http://localhost:3030/answers",
      { ques_id: 2, response },
      { headers: { Authorization: "Bearer " + localStorage.getItem("user") } }
    );
  };
  return (
    <Container>
      <Header>When do you go to sleep at night?</Header>
      <ResponseButtonTime
        type="time"
        onSelect={(e) => handleSelected(e.target.value)}
        // onClick={(e) => handleSelected(e.target.value)}
      />
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
