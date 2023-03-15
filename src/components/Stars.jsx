import React, { useContext } from "react";
import { useSprings, animated } from "react-spring";
import styled from "styled-components";
import { StarsContext } from "../App";

const AnimatedDiv = styled(animated.div)`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0;
`;

const Stars = () => {
  const stars = useContext(StarsContext);

  // Validar que stars tenga un valor antes de crear las animaciones
  if (!stars || !stars.length) {
    return null;
  }

  const springs = useSprings(
    stars.length,
    stars.map(({ x, y }) => ({
      from: { x, y, opacity: 1 },
      to: async (next) => {
        await next({ opacity: 0.6 });
        while (true) {
          await next({
            x: x + Math.random() * 20 - 10,
            y: y + Math.random() * 20 - 10,
          });
        }
      },
      config: { mass: 5, tension: 120, friction: 40 },
      delay: Math.random() * 2000,
    }))
  );

  return (
    <>
      {springs.map((props, index) => (
        <AnimatedDiv key={index} style={props} {...stars[index]} />
      ))}
    </>
  );
};

export default Stars;
