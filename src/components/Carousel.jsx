import React, { useState } from "react";
import styled from "styled-components";
import { CarouselItem } from "./CarouselItem";
import Dashboard from "../public/images/HenryCinema/Dashboard.png";
import FoodAndDrinks from "../public/images/HenryCinema/FoodAndDrinks.png";
import FoodsList from "../public/images/HenryCinema/FoodsList.png";
import HomeDM from "../public/images/HenryCinema/HomeDM.png";
import HomeNM from "../public/images/HenryCinema/HomeNM2.png";
import MoviesSection from "../public/images/HenryCinema/MoviesSection.png";
import Reviews from "../public/images/HenryCinema/Reviews.png";
import ShoppingBag from "../public/images/HenryCinema/ShoppingBag.png";
import Team from "../public/images/HenryCinema/Team.png";

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;

const CarouselButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ButtonArrow = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  margin: 5px;
  color: #da4ea2;
  padding: 10px;
`;

const IndicatorButtons = styled.button`
  border: none;
  cursor: pointer;
  background: none;
  color: #da4ea2;
  margin: 5px;
  padding: 10px;
`;

const Indicators = styled.div`
  background: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
  };

  const items = [
    {
      title: "Home Day Mode",
      description: "Homepage in daylight mode",
      icon: HomeDM,
    },
    {
      title: "Home Night Mode",
      description: "Homepage in nightlight mode",
      icon: HomeNM,
    },
    {
      title: "Movies Section",
      description:
        "Movies section, where you can search and filter by genre, rating, and score",
      icon: MoviesSection,
    },
    {
      title: "Food and Drinks",
      description: "Food and beverage section",
      icon: FoodAndDrinks,
    },
    {
      title: "Shopping Bag",
      description: "Adding products to the shopping bag",
      icon: ShoppingBag,
    },
    {
      title: "Reviews",
      description: "Reviews section",
      icon: Reviews,
    },
    {
      title: "Dashboard",
      description: "Administrative dashboard accessible only to admin users.",
      icon: Dashboard,
    },
    {
      title: "Foods List",
      description: "Stock lists in the administrative dashboard.",
      icon: FoodsList,
    },
    {
      title: "Team",
      description: "All the members who contributed to the project.",
      icon: Team,
    },
  ];
  return (
    <CarouselContainer>
      <Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {items.map((item) => {
          return <CarouselItem item={item} />;
        })}
      </Inner>
      <CarouselButtons>
        <ButtonArrow
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className={`material-symbols-outlined`}>arrow_back_ios</span>
        </ButtonArrow>
        <Indicators>
          {items.map((item, index) => {
            return (
              <IndicatorButtons
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span className={`material-symbols-outlined`}>
                  radio_button_checked
                </span>
              </IndicatorButtons>
            );
          })}
        </Indicators>
        <ButtonArrow
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className={`material-symbols-outlined`}>arrow_forward_ios</span>
        </ButtonArrow>
      </CarouselButtons>
    </CarouselContainer>
  );
};

export default Carousel;
