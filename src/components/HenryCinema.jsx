import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import Dashboard from "../public/images/HenryCinema/Dashboard.png";
import FoodAndDrinks from "../public/images/HenryCinema/FoodAndDrinks.png";
import FoodsList from "../public/images/HenryCinema/FoodsList.png";
import HomeDM from "../public/images/HenryCinema/HomeDM.png";
import HomeNM from "../public/images/HenryCinema/HomeNM2.png";
import MoviesSection from "../public/images/HenryCinema/MoviesSection.png";
import Reviews from "../public/images/HenryCinema/Reviews.png";
import ShoppingBag from "../public/images/HenryCinema/ShoppingBag.png";
import Team from "../public/images/HenryCinema/Team.png";
import movieID from "../public/images/HenryCinema/movieID.png";

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
  border: 1px solid #da4ea2;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #da4ea2;
  z-index: 9999;
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
`;

const Text = styled.p`
  opacity: 0.8;
  font-size: 1.1rem;
`;

const ButtonContainer = styled.div`
  margin-top: 15px;
  align-self: flex-end;
  z-index: 9999;
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

const HenryCinema = () => {
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
      title: "Movies Details",
      description:
        "Movie details, its trailer, a button to purchase tickets, and the ability to like or comment.",
      icon: movieID,
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
    <Container>
      <CarouselContainer>
        <Carousel items={items} />
      </CarouselContainer>
      <Description>
        <Text>
          Henry Cinema is a web application created by a team of developers as
          part of their final project for the Fullstack web developer course
          offered by Henry. The app allows users to purchase cinema tickets with
          ease, select showtimes, seats, and buy complementary items such as
          food and drinks. The app features a rating and commenting system for
          currently showing movies. Security and comfort are ensured with the
          use of the secure payment platform Mercado Pago. The intuitive user
          interface and efficient booking and purchasing system provide a
          hassle-free experience. Additionally, the app includes an
          administrative panel for administrators to view app statistics and
          manage movies, functions, products, and comments. Overall, Henry
          Cinema offers a complete and personalized shopping experience for
          moviegoers.
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

export default HenryCinema;
