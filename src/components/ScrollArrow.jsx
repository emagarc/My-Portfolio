import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const ScrollArrowContainer = styled(animated.div)`
  .scroll-arrow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);

    span {
      width: 25px;
      height: 25px;
      border: solid #da4ea2;
      border-width: 0 4px 4px 0;
      transform: rotate(45deg);
      margin-bottom: 2px;
      transition: all 1s ease;
      border-color: #da4ea2;
      opacity: 0.5;
    }

    span:last-child {
      margin-bottom: 0;
    }

    &:hover span {
      transform: translateX(5px) rotate(45deg);
    }

    &:active span {
      transform: translateX(10px) rotate(45deg);
    }
  }
`;

const ScrollArrow = ({ hasScrolled }) => {
  const arrowAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 3500,
    config: { duration: 1000 },
    loop: true,
  });

  return (
    <ScrollArrowContainer style={arrowAnimation}>
      <div className={`scroll-arrow ${hasScrolled ? "hide" : ""}`}>
        <span></span>
        <span></span>
      </div>
    </ScrollArrowContainer>
  );
};

export default ScrollArrow;
