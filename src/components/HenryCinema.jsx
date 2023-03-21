import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CarouselContainer = styled.div`
  width: 800px;
  height: 550px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgba(218, 78, 162, 0.2);
`;

const Top = styled.div``;

const Button = styled.button`
  box-shadow: inset 0px 0px 0px 2.5px rgba(0, 0, 0, 0.4);
  background-color: #da4ea2;
  color: #f2f2f2;
  font-weight: 500;
  height: 35px;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 9999;

  &:active {
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

const HenryCinema = () => {
  return (
    <Container>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
      <Button>Visit Website</Button>
    </Container>
  );
};

export default HenryCinema;
