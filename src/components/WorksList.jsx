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
  justify-content: center;
  min-height: 100vh;
  @media only screen and (max-width: 768px) {
    padding-top: 545px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
  }
`;

const Top = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 30px;
  align-self: flex-start;
  background-color: #2c065d;
  opacity: 1;
  z-index: 999999;
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

const LineAndSub = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: flex-start;
`;

const Line = styled.img`
  height: 5px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SubTitle = styled.h2`
  color: #da4ea2;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    padding-top: 20px;
  }
`;

const Left = styled.div`
  margin-left: 100px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: flex-start;
    margin-rigth: 500px;
    padding-right: 280px;
    padding-top: 500px;
    height: 1000px;
    margin-bottom: -90px;
    gap: 0px;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: justify;
  @media only screen and (max-width: 768px) {
    text-align: left;
    gap: 25px;
    flex-direction: row;
    padding-bottom: 30px;
  }
`;

const ListItem = styled.li`
  font-size: ${(props) => (props.isActive ? "55px" : "47px")};
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#da4ea2" : "whitesmoke")};
  opacity: ${(props) => (props.isActive ? 1 : 0.3)};
  -webkit-text-stroke: 0.5px red;
  position: relative;
  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
  z-index: 999999
`;

const ListItemContainer = styled.div`
background-color:${(props) => (props.isActive ? "#2c065d" : "transparent")};
opacity: 1;
z-index: 999999;
padding: 10px;
border-radius: 10px;
`

const Right = styled.div`
  flex: 1;

  ${(props) =>
    props.showStars &&
    css`
      background: url("https://i.ibb.co/BzF0V8K/stars.png") no-repeat center
        center fixed;
      background-size: cover;
    `}
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    align-self: flex-start;
    padding-bottom: 1000px;
  }
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
  @media only screen and (max-width: 768px) {
    margin-top: 20px;
    border-radius: 15px;
    width: 40px;
    height: 30px;
    font-size: 20px;
  }

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
              <ListItemContainer isActive={Work === item}>
              <ListItem 
              key={item} 
              text={item}
              isActive={Work === item} 
              onClick={() => setWork(item)}
              >
                {item}
              </ListItem>
              </ListItemContainer>
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
