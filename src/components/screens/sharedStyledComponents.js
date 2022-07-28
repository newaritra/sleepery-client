import styled, { keyframes } from "styled-components";

export const Header = styled.h3`
  font-weight: normal;
  color: white;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #0a0825;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
export const ResponseButton = styled.button`
  border: none;
  height: 2rem;
  width: 10rem;
  border-radius: 1rem;
  background-color: #4e55ab;
  &:focus {
    border: 0.1rem solid white;
  }
  /* font-weight: bold; */
  color: white;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  height: 2rem;
  width: 15rem;
  border-radius: 1rem;
  padding: 0.5rem 0.8rem;
  font-size: 0.8rem;
  font-weight: bold;
  
  &:nth-child(n) {
    border: 0.2rem solid #4e55ab;
  }
  &:nth-child(2n) {
    border: 0.2rem solid #4e55ab;
  }
`;

export const ResponseButtonTime = styled.input`
  border: none;
  height: 2rem;
  width: 10rem;
  border-radius: 1rem;
  background-color: #4e55ab;
  cursor: pointer;
`;

export const NextButton = styled.button`
  border: none;
  height: 2rem;
  width: 2rem;
  font-size: 80%;
  border-radius: 50%;
  background-color: rgb(246, 173, 31);
  cursor: pointer;
`;

const logoAnimate = keyframes`
from{
    transform:translateY(0rem);
}
33%{
    
    transform:translateY(0.2rem);
}
66%{
    
    transform:translateY(-0.2rem);
}
to{
    transform:translateY(0rem)
}
`;

export const LogoImage = styled.img`
  width: 5rem;
  object-fit: contain;
  animation-name: ${logoAnimate};
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
