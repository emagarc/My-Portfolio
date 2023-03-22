import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import FoodsWebsite from "./FoodsWebsite";
import HenryCinema from "./HenryCinema";
import { StarsContext } from "../App";
import line from "../public/images/Wallpapers/line.png";

const data = ["Henry Cinema", "Foods Website"];

const Section = styled.div`
  min-height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  height: auto;
  .fade-enter {
    opacity: 0;
    transform: translateY(0px);
  }

  .fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 500ms ease-in-out, transform 500ms ease-in-out-cubic;
  }

  .fade-exit {
    opacity: 0;
    transform: translateY(0);
  }

  .fade-exit-active {
    opacity: 0;
    transform: translateY(0px);
    transition: opacity 200ms ease-in-out, transform 200ms ease-in-out-cubic;
  }
`;

const Container = styled.div`
  width: 1550px;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
`;

const Top = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 30px;
  align-self: flex-start;
`;

const LineAndSub = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: flex-start;
`;

const Line = styled.img`
  height: 5px;
`;

const SubTitle = styled.h2`
  color: #da4ea2;
`;

const Left = styled.div`
  margin-left: 100px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: justify;
`;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

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

  ${(props) =>
    props.showStars &&
    css`
      background: url("https://i.ibb.co/BzF0V8K/stars.png") no-repeat center
        center fixed;
      background-size: cover;
    `}
`;

const Button = styled.button`
  margin-top: 2px;
  box-shadow: inset 0px 0px 0px 2.5px rgba(0, 0, 0, 0.4);
  position: relative;
  background-color: #da4ea2;
  color: #f2f2f2;
  font-weight: 500;
  font-size: 10px;
  width: 35px;
  height: 25px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 9999;

  &::before {
    content: "<<";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 15px;
  }

  &:active {
    top: 2px;
  }
`;

const WorksList = ({ onBackClick }) => {
  const [Work, setWork] = useState("Henry Cinema");
  const { showStars } = useContext(StarsContext);

  return (
    <Section>
      <Container>
        <Left>
          <Top>
            <LineAndSub>
              <Line src={line} />
              <SubTitle>Explore my web portfolio</SubTitle>
            </LineAndSub>
            <Button onClick={onBackClick}>{""}</Button>
          </Top>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right showStars={showStars}>
          {Work === "Henry Cinema" ? (
            <HenryCinema />
          ) : Work === "Foods Website" ? (
            <FoodsWebsite />
          ) : (
            <HenryCinema />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default WorksList;
