import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import FoodsWebsite from "./FoodsWebsite";
import HenryCinema from "./HenryCinema";
import { StarsContext } from "../App";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  z-index: 9999;

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
    content: "X";
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
          <Button onClick={onBackClick}>{""}</Button>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right showStars={showStars}>
          <TransitionGroup>
            <CSSTransition key={Work} classNames="fade" timeout={300}>
              {Work === "Henry Cinema" ? (
                <HenryCinema />
              ) : Work === "Foods Website" ? (
                <FoodsWebsite />
              ) : (
                <HenryCinema />
              )}
            </CSSTransition>
          </TransitionGroup>
        </Right>
      </Container>
    </Section>
  );
};

export default WorksList;
