import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./NavBar";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import meToon2 from "../public/images/meToon2.png";
import ScrollArrow from "./ScrollArrow";
import Intro from "./Intro";
import AboutMe from "./AboutMe";

const Section = styled.div`
  height: 100%;
  min-height: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  min-height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  margin-top: -50px;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  z-index: 9999;
  height: 100%;
`;

const Img = styled.img`
  transform: rotate(5deg);
  width: 550px;
  height: 350px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  filter: drop-shadow(0 0 30px #da4ea2);
  animation: float 3s ease-in-out infinite;
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
`;
const Hero = () => {
  const containerRef = useRef();
  const [currentContent, setCurrentContent] = useState("Intro");

  const handleBackClick = () => {
    setCurrentContent("Intro");
  };

  return (
    <Section ref={containerRef}>
      <Navbar />
      <Container>
        <Left>
          {currentContent === "Intro" ? (
            <Intro onClick={() => setCurrentContent("AboutMe")} />
          ) : currentContent === "AboutMe" ? (
            <AboutMe onBackClick={handleBackClick} />
          ) : (
            <Intro />
          )}
        </Left>
        <Right>
          <Canvas shadowMap>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} castShadow />
            <Sphere args={[1, 100, 200]} scale={2} castShadow>
              <MeshDistortMaterial
                color="#3D1C56"
                attach={"material"}
                distort={0.4}
                speed={1.4}
              />
            </Sphere>
            <mesh receiveShadow>
              <planeBufferGeometry args={[10, 10]} />
              <shadowMaterial opacity={0.3} />
            </mesh>
          </Canvas>
          <Img src={meToon2} />
        </Right>
      </Container>
      <ScrollArrow />
    </Section>
  );
};

export default Hero;
