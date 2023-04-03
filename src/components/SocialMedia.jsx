import React from "react";
import styled from "styled-components";
import Linkedin from "../public/images/Social Media/linkedin.png";
import Instagram from "../public/images/Social Media/instagram.png";
import Gmail from "../public/images/Social Media/gmail.png";
import Github from "../public/images/Technologies/github.png";

const Table = styled.table`
  border-spacing: 200px 50px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: whitesmoke;
  text-shadow: 5px;
  margin: auto;
  @media only screen and (max-width: 768px) {
    border-spacing: 40px 0px;
    margin-top: 750px;
  }
`;

const Container = styled.div`
  height: 100vh; /* Establecer la altura del contenedor en una unidad de medida relativa */
  display: flex; /* Usar display: flex para poder centrar verticalmente la tabla */
  align-items: center; /* Centrar verticalmente la tabla */
  margin-left: 40px;
  margin-top: 40px;
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 500px;
  }
`;

const Td = styled.td`
  padding: 5px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const DivImage = styled.div`
  img {
    transition: transform 0.5s ease;
    &:hover {
      transform: scale(1.2);
      animation: zoom 0.5s ease forwards;
      animation-delay: 1s;
    }
  }

  @keyframes zoom {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    10% {
      transform: translateX(-10px);
    }
    20% {
      transform: translateX(10px);
    }
    30% {
      transform: translateX(-10px);
    }
    40% {
      transform: translateX(10px);
    }
    50% {
      transform: translateX(-10px);
    }
    60% {
      transform: translateX(10px);
    }
    70% {
      transform: translateX(-10px);
    }
    80% {
      transform: translateX(10px);
    }
    90% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @media only screen and (max-width: 768px) {
    @keyframes zoom {
      0% {
        transform: scale(0.5);
      }
      100% {
        transform: scale(0.8);
      }
    }
    @keyframes shake {
      0% {
        transform: translateX(0);
      }
      10% {
        transform: translateX(-5px);
      }
      20% {
        transform: translateX(5px);
      }
      30% {
        transform: translateX(-5px);
      }
      40% {
        transform: translateX(5px);
      }
      50% {
        transform: translateX(-5px);
      }
      60% {
        transform: translateX(5px);
      }
      70% {
        transform: translateX(-5px);
      }
      80% {
        transform: translateX(5px);
      }
      90% {
        transform: translateX(-5px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`;

const DivText = styled.div`
  padding-top: 10px;
  text-align: center;
  opacity: 0.6;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
    padding-top: 1px;
  }
`;

const SocialMedia = () => {
  return (
    <Container>
      <Table align="center">
        <tr>
          <Td align="center" width="100">
            <DivImage>
              <a href="https://www.linkedin.com/in/emanuel-garc%C3%ADa-226108116">
                <img src={Linkedin} width="80" height="80" alt="Linkedin" />
              </a>
            </DivImage>
            <br />
            <DivText>Linkedin</DivText>
          </Td>
          <Td align="center" width="100">
            <DivImage>
              <a href="https://www.instagram.com/emagarc/">
                <img src={Instagram} width="80" height="80" alt="Instagram" />
              </a>
            </DivImage>
            <br />
            <DivText>Instagram</DivText>
          </Td>
        </tr>
        <tr>
          <Td align="center" width="100">
            <DivImage>
              <a href="mailto:mr.emanuel.garcia93@gmail.com">
                <img src={Gmail} width="80" height="80" alt="Gmail" />
              </a>
            </DivImage>
            <br />
            <DivText>Gmail</DivText>
          </Td>
          <Td align="center" width="100">
            <DivImage>
              <a href="https://github.com/emagarc">
                <img src={Github} width="80" height="80" alt="GitHub" />
              </a>
            </DivImage>
            <br />
            <DivText>Github</DivText>
          </Td>
        </tr>
      </Table>
    </Container>
  );
};

export default SocialMedia;
