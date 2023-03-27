import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 490px;
  background-color: transparent;
  @media only screen and (max-width: 768px) {
    height: 190px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  @media only screen and (max-width: 768px) {
    padding-top: 75px;
    width: 400px; // redugimos 400 a ambas width y
    height: 230px; // redugimos 400 a ambas width y height
  }
`;

const ImageCarousel = styled.img`
  width: 700px;
  height: 400px;
  border: 0.5px solid #da4ea2;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #da4ea2;
  @media only screen and (max-width: 768px) {
    width: 380px; // redugimos 400 a ambas width y
    height: 230px;
  }
`;

const TextCarousel = styled.div`
  font-style: italic;
  font-size: 1.2rem;
  margin: 40px 0 40px 0;
  padding: 0 20px 0 20px;
  white-space: normal;
  color: #da4ea2;
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
    margin: 5px 0 5px 0;
    margin-top: 22px;
    margin-left: 18px;
    margin-right: 18px;
  }
`;

export const CarouselItem = ({ item }) => {
  return (
    <ItemContainer>
      <ContentContainer>
        <ImageCarousel src={item.icon} key={item.title} />
        <TextCarousel>{item.description}</TextCarousel>
      </ContentContainer>
    </ItemContainer>
  );
};
