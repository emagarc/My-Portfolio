import React, { useState } from "react";
import styled from "styled-components";
import IntroWorks from "./IntroWorks";
import WorksList from "./WorksList";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Works = () => {
  const [Intro, setIntro] = useState("IntroWorks");

  const handleBackClick = () => {
    setIntro("IntroWorks");
  };

  return (
    <Section>
      {Intro === "IntroWorks" ? (
        <IntroWorks setIntro={setIntro} />
      ) : Intro === "WorkList" ? (
        <WorksList onBackClick={handleBackClick} />
      ) : (
        <IntroWorks setIntro={setIntro} />
      )}
    </Section>
  );
};

export default Works;
