import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import Home from "../public/images/TikTik/home.png";
import Detail from "../public/images/TikTik/detail.png";
import Upload from "../public/images/TikTik/upload.png";
import Profile from "../public/images/TikTik/profile.png";

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

const Text = styled.p`
  opacity: 0.8;
  font-size: 0.9rem;
  @media only screen and (max-width: 768px) {
    text-align: left;
    font-size: 0.8rem;
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

const TikTik = () => {
  const items = [
    {
      title: "Home",
      description: "Tik Tik Homepage",
      icon: Home,
    },
    {
      title: "Video Details",
      description: "Video details, likes and comments",
      icon: Detail,
    },
    {
      title: "Profile Section",
      description: "Profile Section, liked and posted videos",
      icon: Profile,
    },
    {
      title: "Upload Section",
      description: "In this section you can upload the video you want",
      icon: Upload,
    },
  ];
  return (
    <Container>
      <CarouselContainer>
        <Carousel items={items} />
      </CarouselContainer>
      <Description>
        <Text>
          Tik Tik is a project that aims to replicate the renowned video-based
          social media platform, TikTok. It has been entirely developed in
          Typescript, leveraging Next.js, Tailwind, and Zustand. This robust
          application allows users to upload videos, engage with content through
          likes and comments, and explore suggested accounts. Additionally,
          users can access individual profiles to view shared and liked videos.
          The backend implementation utilizes Sanity, while React-oauth/google
          integration handles user authentication and login procedures, ensuring
          a secure and reliable environment.
        </Text>
        <ButtonContainer>
          <a href="https://tiktik-clone-two-fawn.vercel.app/" target="_blank">
            <Button>Website</Button>
          </a>
        </ButtonContainer>
      </Description>
    </Container>
  );
};

export default TikTik;
