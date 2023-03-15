import React, { useRef } from "react";
import styled from "styled-components";
import Navbar from "./NavBar";
import line from "../public/images/line.png";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import meToon2 from "../public/images/meToon2.png";

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
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const SubTitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: whitesmoke;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src={line} />
            <SubTitle>What I Do</SubTitle>
          </WhatWeDo>
          <Desc>
            I enjoy creating deligthful, human-centered digital experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.1}>
              <MeshDistortMaterial
                color="#3D1C56"
                attach={"material"}
                distort={0.5}
                speed={1.6}
              />
            </Sphere>
          </Canvas>
          <Img src={meToon2} />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
