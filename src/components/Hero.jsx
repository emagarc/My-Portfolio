import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import meToon2 from "../public/images/Me/meToon2.png";
import IntroHero from "./IntroHero";
import AboutMe from "./AboutMe";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useMediaQuery } from "@material-ui/core";

const Section = styled.div`
  height: 100%;
  min-height: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  user-select: none;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }

  img {
    pointer-events: none; /* añadir propiedad pointer-events para deshabilitar el arrastre de imágenes con el mouse */
  }

  .fade-enter {
    opacity: 0;
    transform: translateY(50px);
  }

  .fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms ease-in-out,
      transform 500ms cubic-bezier(0.42, 0, 0.58, 1);
  }

  .fade-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-exit-active {
    opacity: 0;
    transform: translateY(-50px);
    transition: opacity 300ms ease-in-out,
      transform 500ms cubic-bezier(0.42, 0, 0.58, 1);
  }
`;

const Container = styled.div`
  min-height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  margin-top: -50px;
  margin-left: 100px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
  }
`;

const Left = styled.div`
  margin-left: 35px;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: flex-end;
    margin-top: 650px;
    height: 0px;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  z-index: 9999;
  height: 100%;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    align-self: flex-start;
    padding-bottom: 100px;
  }
`;

const ImgH = styled.img`
  transform: rotate(5deg) scale(1);
  width: 390px;
  height: 290px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  filter: drop-shadow(0 0 30px #da4ea2);
  animation: float 3s ease-in-out infinite;
  animation-name: float, aumento;
  animation-duration: 3s, 10s;
  animation-timing-function: ease-in-out, linear;
  animation-iteration-count: infinite, infinite;

  @media only screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
    padding-bottom: 85px;
  }

  @keyframes float {
    0% {
      transform: rotate(5deg) translateY(0);
    }
    50% {
      transform: rotate(5deg) translateY(-10px);
    }
    100% {
      transform: rotate(5deg) translateY(0);
    }
  }

  @keyframes aumento {
    0% {
      transform: rotate(5deg) scale(1);
    }
    50% {
      transform: rotate(5deg) scale(1.05);
    }
    100% {
      transform: rotate(5deg) scale(1);
    }
  }
`;

const Hero = () => {
  const containerRef = useRef();
  const [currentContent, setCurrentContent] = useState("Intro");

  const handleBackClick = () => {
    setCurrentContent("Intro");
  };

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Section ref={containerRef}>
      <Container>
        <Left>
          <TransitionGroup>
            <CSSTransition key={currentContent} classNames="fade" timeout={300}>
              {currentContent === "Intro" ? (
                <IntroHero onClick={() => setCurrentContent("AboutMe")} />
              ) : currentContent === "AboutMe" ? (
                <AboutMe onBackClick={handleBackClick} />
              ) : (
                <IntroHero />
              )}
            </CSSTransition>
          </TransitionGroup>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1 * (isSmallScreen ? 1 : 2), 100, 200]}>
              <MeshDistortMaterial
                color="#3D1C56"
                attach={"material"}
                distort={0.25}
                speed={1.5}
              />
            </Sphere>
            <mesh receiveShadow>
              <planeBufferGeometry args={[10, 10]} />
              <shadowMaterial opacity={0.1} />
            </mesh>
          </Canvas>
          <ImgH src={meToon2} />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
