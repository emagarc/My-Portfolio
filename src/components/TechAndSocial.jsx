import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import SocialMedia from "./SocialMedia";
import Technologies from "./Technologies";
import { StarsContext } from "../App";

const data = ["Technologies", "Social Media"];

const Section = styled.div`
  min-height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  height: auto;
  @media only screen and (max-width: 768px) {
    height: 200vh;
    justify-content: center;
  }
  .fade-enter {
    opacity: 0;
    transform: translateY(0px);
  }

  .fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms ease-in-out,
      transform 500ms cubic-bezier(0.42, 0, 0.58, 1);
  }

  .fade-exit {
    opacity: 0;
    transform: translateY(0);
  }

  .fade-exit-active {
    opacity: 0;
    transform: translateY(0px);
    transition: opacity 300ms ease-in-out,
      transform 50ms cubic-bezier(0.42, 0, 0.58, 1);
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: -500px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: flex-start;
    padding-top: 1000px;
    margin-bottom: -700px;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media only screen and (max-width: 768px) {
    text-align: left;
    gap: 25px;
    flex-direction: row;
    padding-bottom: 30px;
  }
`;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  @media only screen and (max-width: 768px) {
    font-size: 25px;
    z-index: 100000;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  z-index: 9999;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    align-self: flex-start;
    padding-bottom: 1000px;
  }

  ${(props) =>
    props.showStars &&
    css`
      background: url("https://i.ibb.co/BzF0V8K/stars.png") no-repeat center
        center fixed;
      background-size: cover;
    `}
`;

const TechAndSocial = () => {
  const [Thing, setThing] = useState("Technologies");
  const { showStars } = useContext(StarsContext);

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setThing(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right showStars={showStars}>
          {Thing === "Technologies" ? (
            <Technologies />
          ) : Thing === "Social Media" ? (
            <SocialMedia />
          ) : (
            <Technologies />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default TechAndSocial;
