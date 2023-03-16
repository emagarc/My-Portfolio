import React from "react";
import styled from "styled-components";
import Linkedin from "../public/images/linkedin.png";
import Instagram from "../public/images/instagram.png";
import Gmail from "../public/images/gmail.png";
import Github from "../public/images/github.png";

const Table = styled.table`
  border-spacing: 100px 70px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: whitesmoke;
  text-shadow: 5px;
  margin: auto;
`;

const Container = styled.div`
  height: 100vh; /* Establecer la altura del contenedor en una unidad de medida relativa */
  display: flex; /* Usar display: flex para poder centrar verticalmente la tabla */
  align-items: center; /* Centrar verticalmente la tabla */
`;

const Td = styled.td`
  padding: 5px;
  text-align: center;
`;

const DivImage = styled.div``;

const DivText = styled.div`
  padding-top: 10px;
  text-align: center;
  opacity: 0.6;
`;

const DivTextGit = styled.div`
  padding-top: 0px;
  text-align: center;
  opacity: 0.6;
`;

const SocialMedia = () => {
  return (
    <Container>
      <Table align="center">
        <tr>
          <Td align="center" width="100">
            <DivImage>
              <a href="https://www.linkedin.com/in/emanuel-garc%C3%ADa-226108116">
                <img src={Linkedin} width="85" height="85" alt="Linkedin" />
              </a>
            </DivImage>
            <br />
            <DivText>Linkedin</DivText>
          </Td>
          <Td align="center" width="100">
            <DivImage>
              <a href="https://www.instagram.com/emagarc/">
                <img src={Instagram} width="85" height="85" alt="Instagram" />
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
                <img src={Gmail} width="85" height="85" alt="Gmail" />
              </a>
            </DivImage>
            <br />
            <DivText>Gmail</DivText>
          </Td>
          <Td align="center" width="100">
            <DivImage>
              <a href="https://github.com/emagarc">
                <img src={Github} width="100" height="100" alt="GitHub" />
              </a>
            </DivImage>
            <br />
            <DivTextGit>Github</DivTextGit>
          </Td>
        </tr>
      </Table>
    </Container>
  );
};

export default SocialMedia;
