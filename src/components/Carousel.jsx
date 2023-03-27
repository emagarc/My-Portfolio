import React, { useState } from "react";
import styled from "styled-components";
import { CarouselItem } from "./CarouselItem";

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 800px;
    height: 320px; // redugimos 400 a ambas width y height
  }
`;

const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;

const CarouselButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 768px) {
    gap: 160px;
    margin-top: 15px;
  }
`;

const ButtonArrowL = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  margin: 5px;
  color: #da4ea2;
  padding: 10px;
  transition: transform 0.15s ease-in-out, box-shadow 0.7s ease-in-out;
  &:active {
    transform: translateY(10px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    transition-delay: 0.05s;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 0px;
    padding: 0px;
    margin-left: 50px;
    z-index: 10000;
  }
`;

const ButtonArrowR = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  margin: 5px;
  color: #da4ea2;
  padding: 10px;
  transition: transform 0.15s ease-in-out, box-shadow 0.7s ease-in-out;
  &:active {
    transform: translateY(10px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    transition-delay: 0.05s;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 0px;
    padding: 0px;
    margin-right: 50px;
    z-index: 10000;
  }
`;

const IndicatorButtons = styled.button`
  border: none;
  cursor: pointer;
  background: none;
  color: ${(props) =>
    props.index === props.activeIndicator ? "white" : "#da4ea2"};
  margin: 5px;
  padding: 10px;
  transition: transform 0.15s ease-in-out, box-shadow 0.7s ease-in-out;
  &:active {
    transform: translateY(10px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    transition-delay: 0.05s;
  }
`;

const Indicators = styled.div`
  background: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 768px) {
    justify-content: center; // redugimos 400 a ambas width y height
    display: none;
  }
`;

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndicator, setActiveIndicator] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
    setActiveIndicator(newIndex);
  };

  return (
    <CarouselContainer>
      <Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {items.map((item) => {
          return <CarouselItem item={item} key={item.title} />;
        })}
      </Inner>
      <CarouselButtons>
        <ButtonArrowL
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className={`material-symbols-outlined`}>arrow_back_ios</span>
        </ButtonArrowL>
        <Indicators>
          {items.map((item, index) => {
            return (
              <IndicatorButtons
                activeIndicator={activeIndicator}
                index={index}
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
        <ButtonArrowR
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className={`material-symbols-outlined`}>arrow_forward_ios</span>
        </ButtonArrowR>
      </CarouselButtons>
    </CarouselContainer>
  );
};

export default Carousel;
