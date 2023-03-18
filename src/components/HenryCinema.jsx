import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border-spacing: 170px 70px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: whitesmoke;
  text-shadow: 5px;
`;

const Td = styled.td`
  padding: 5px;
  text-align: center;
`;

const DivImage = styled.div`
  img {
    animation: zoom2 10s ease-in-out infinite;
  }

  @keyframes zoom2 {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const DivText = styled.div`
  padding-top: 10px;
  text-align: center;
  opacity: 0.6;
`;

const HenryCinema = () => {
  return <div>Henry Cinema</div>;
};

export default HenryCinema;
