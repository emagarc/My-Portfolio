import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMediaQuery } from "@material-ui/core";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <mesh>
      <boxGeometry args={isSmallScreen ? [0.7, 0.7, 0.7] : [1.2, 1.2, 1.2]} />
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
