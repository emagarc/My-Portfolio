import React, { useRef, useEffect, useState } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMediaQuery } from "@material-ui/core";

const Cube = ({ isSmallScreen }) => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );

  const [cubeSize, setCubeSize] = useState([1.2, 1.2, 1.2]);

  useEffect(() => {
    if (isSmallScreen) {
      setCubeSize([0.7, 0.7, 0.7]);
    } else {
      setCubeSize([1.2, 1.2, 1.2]);
    }
  }, [isSmallScreen]);

  return (
    <mesh>
      <boxGeometry args={cubeSize} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#da4ea2"]} />
          <Text ref={textRef} fontSize={1} color="#ffffff">
            My Works
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
