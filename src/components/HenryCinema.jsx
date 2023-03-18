import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import Dashboard from "../public/images/HenryCinema/Dashboard.png";
import FoodAndDrinks from "../public/images/HenryCinema/FoodAndDrinks.png";
import FoodsList from "../public/images/HenryCinema/FoodsList.png";
import HomeDM from "../public/images/HenryCinema/HomeDM.png";
import HomeNM2 from "../public/images/HenryCinema/HomeNM2.png";
import MoviesSection from "../public/images/HenryCinema/MoviesSection.png";
import Reviews from "../public/images/HenryCinema/Reviews.png";
import ShoppingBag from "../public/images/HenryCinema/ShoppingBag.png";
import Team from "../public/images/HenryCinema/Team.png";

const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;

const CarouselContainer = styled.div`
  max-width: 1000px;
  max-height: 500px;
  overflow: hidden;

  .slick-arrow {
    width: 50px;
    height: 50px;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const SubTitle = styled.h2`
  color: #da4ea2;
  font-size: 25px;
`;

const Desc = styled.p`
  font-size: 24px;
  color: #f2f2f2;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5), 0px 0px 10px rgba(0, 0, 0, 0.5);
  opacity: 0.8;
`;

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

const imagesHC = [
  HomeNM2,
  HomeDM,
  MoviesSection,
  FoodAndDrinks,
  ShoppingBag,
  Reviews,
  Dashboard,
  FoodsList,
  Team,
];

const HenryCinema = () => {
  return (
    <Container>
      <Top>
        <CarouselContainer>
          <Carousel images={imagesHC} />
        </CarouselContainer>
        <Desc>What I Do</Desc>
      </Top>
      <Button>Visit Website</Button>
    </Container>
  );
};

export default HenryCinema;
