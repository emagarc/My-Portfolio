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
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ListItem = styled.li`
  font-size: 90px;
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

const Works = () => {
  const [Work, setWork] = useState("Web Design");
  const { showStars } = useContext(StarsContext);

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right showStars={showStars}>
          {Work === "Technologies" ? (
            <Technologies />
          ) : Work === "Social Media" ? (
            <SocialMedia />
          ) : (
            <Technologies />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
