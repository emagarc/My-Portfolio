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
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    span {
      width: 50px;
      height: 50px;
      border: solid #ffffff;
      border-width: 0 4px 4px 0;
      transform: rotate(45deg);
      margin-bottom: 1px;
      transition: all 0.5s ease-out;
      border-color: #ffffff;
      opacity: 0.2;
    }

    span:last-child {
      margin-bottom: 0;
    }

    animation: fadeInOut 3s ease-in-out infinite;

    @keyframes fadeInOut {
      0%,
      80% {
        opacity: 0.2;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.2;
      }
    }

    &:hover span {
      transform: translateX(5px) rotate(45deg);
      transition: all 0.5s ease-in-out;
    }

    &:active span {
      transform: translateX(10px) rotate(45deg);
      transition: all 0.5s ease-in-out;
    }
  }
`;

const ScrollArrow = ({ hasScrolled }) => {
  const arrowAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-0px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 3000,
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
