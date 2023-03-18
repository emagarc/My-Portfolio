import React, { useState } from "react";
import styled from "styled-components";
import line from "../public/images/line.png";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  z-index: 9999;
`;

const Title = styled.h1`
  font-size: 74px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
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
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const IntroWorks = ({ setIntro }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
    setIntro("WorkList");
  };

  return (
    <Container>
      <Left>
        <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Cube />
        </Canvas>
      </Left>
      <Right>
        <Title>Think outside the square space</Title>
        <WhatWeDo>
          <Line src={line} />
          <SubTitle>Who I am</SubTitle>
        </WhatWeDo>
        <Desc>a creative developer with a passion for the arts.</Desc>
        {!buttonClicked && <Button onClick={handleClick}>See my works</Button>}
      </Right>
    </Container>
  );
};

export default IntroWorks;
