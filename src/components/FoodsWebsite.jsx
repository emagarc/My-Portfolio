import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import LP from "../public/images/FoodsWebsite/LP.png";
import FoodsCards from "../public/images/FoodsWebsite/FoodCards.png";
import FoodDetail from "../public/images/FoodsWebsite/FoodDetail.png";
import FoodsForm from "../public/images/FoodsWebsite/FoodsForm.png";

const Container = styled.div`
  margin-right: 150px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CarouselContainer = styled.div`
  width: 780px;
  height: 350px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #2c065d;
  border: 1px solid #da4ea2;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #da4ea2;
  z-index: 9999;
  @media only screen and (max-width: 768px) {
    width: 420px;
    height: 320px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
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
  @media only screen and (max-width: 768px) {
    width: 400px; // redugimos 400 a ambas width y height
    height: 290px;
    padding: 10px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 15px;
  align-self: flex-end;
  z-index: 9999;
  @media only screen and (max-width: 768px) {
    margin-top: 0px;
    margin-right: 5px;
  }
`;

const Text = styled.p`
  opacity: 0.8;
  font-size: 0.9rem;
  @media only screen and (max-width: 768px) {
    text-align: left;
    font-size: 0.8rem;
  }
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
          This project served as a precursor to the final project of the
          FullStack web developer course at Henry. It was an individual project
          aimed at putting into practice all the knowledge acquired during the
          bootcamp. Essentially, an API for recipes was used to consume
          information and display different recipes on the screen. The website
          includes a landing page and a main page where recipes are displayed,
          with the ability to filter by type or search by name. Clicking on each
          recipe provides detailed information about it. Additionally, there is
          a form with validators that allows users to create their own recipe
          and display it alongside the rest. This was my first project, which is
          why I hold it in high regard.
        </Text>
        <ButtonContainer>
          <a href="https://github.com/emagarc/PI-Food-Henry" target="_blank">
            <Button>Repository</Button>
          </a>
        </ButtonContainer>
      </Description>
    </Container>
  );
};

export default FoodsWebsite;
