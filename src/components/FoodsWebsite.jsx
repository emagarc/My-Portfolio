import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import LP from "../public/images/FoodsWebsite/LP.png";
import FoodsCards from "../public/images/FoodsWebsite/FoodCards.png";
import FoodDetail from "../public/images/FoodsWebsite/FoodDetail.png";
import FoodsForm from "../public/images/FoodsWebsite/FoodsForm.png";

const Container = styled.div`
  text-align: left;
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
  background-color: #2c065d;
  border: 0.5px solid #da4ea2;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #da4ea2;
  z-index: 9999;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  margin-top: 20px; /* Espacio mediano */
  line-height: 1.5; /* Interlineado legible */
  text-align: justify; /* Texto justificado */
  background-color: #2c065d;
  border: 1px solid #da4ea2;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #da4ea2;
  z-index: 9999;
  padding: 15px;
  color: #f2f2f2;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5), 0px 0px 10px rgba(0, 0, 0, 0.5);
  opacity: 1;
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
  z-index: 9999;
`;

const Text = styled.p`
  opacity: 0.8;
`;

const Button = styled.button`
  align-self: flex-start;
  box-shadow: inset 0px 0px 0px 2.5px rgba(0, 0, 0, 0.4);
  background-color: #da4ea2;
  color: whitesmoke;
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

const FoodsWebsite = () => {
  const items = [
    {
      title: "Landing Page",
      description: "Landing Page",
      icon: LP,
    },
    {
      title: "Food Cards",
      description: "Recipe Cards",
      icon: FoodsCards,
    },
    {
      title: "Recipe Detail",
      description:
        "See the details and step-by-step instructions for the recipe.",
      icon: FoodDetail,
    },
    {
      title: "Food Form",
      description: "Through this form, you can create your own recipe.",
      icon: FoodsForm,
    },
  ];
  return (
    <Container>
      <CarouselContainer>
        <Carousel items={items} />
      </CarouselContainer>
      <Description>
        <Text>
          This project was a prelude to the final project of the FullStack web
          developer course at Henry. It was an individual project aimed at
          putting into practice all the knowledge acquired during the bootcamp.
          Simply put, an API for recipes was used to consume information and
          display different recipes on the screen. Clicking on each recipe
          provides detailed information. The website includes a landing page and
          a main page where recipes are displayed, with the ability to filter by
          type or search by name. Additionally, there is a form with validators
          that allows users to create their own recipe. This was my first
          project, which is why I hold it in high regard.
        </Text>
        <ButtonContainer>
          <a href="https://henry-cinemafront-production.up.railway.app/">
            <Button>Visit Website</Button>
          </a>
        </ButtonContainer>
      </Description>
    </Container>
  );
};

export default FoodsWebsite;
