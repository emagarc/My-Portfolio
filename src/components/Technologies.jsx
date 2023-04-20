import React from "react";
import expressLogo from "../public/images/Technologies/express.png";
import sassLogo from "../public/images/Technologies/sass.png";
import githubLogoT from "../public/images/Technologies/github.png";
import styled from "styled-components";

const Table = styled.table`
  margin-top: 130px;
  border-spacing: 100px 1px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: whitesmoke;
  text-shadow: 5px;
  @media only screen and (max-width: 768px) {
    border-spacing: 40px 0px;
    margin-top: 750px;
  }
`;

const Td = styled.td`
  padding: 5px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    padding: 1px;
  }
`;

const DivImage = styled.div`
  img {
    animation: zoom2 10s ease-in-out infinite;
  }

  @keyframes zoom2 {
    0% {
      transform: scale(0.6);
    }
    50% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(0.6);
    }
  }
  @media only screen and (max-width: 768px) {
    @keyframes zoom2 {
      0% {
        transform: scale(0.7);
      }
      50% {
        transform: scale(0.9);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

const DivText = styled.div`
  padding-top: 0px;
  text-align: center;
  opacity: 0.6;
  @media only screen and (max-width: 768px) {
    font-size: 18px;

  }
`;

const Technologies = () => {
  return (
    <div>
      <Table align="center">
        <tbody>
          <tr>
            <Td align="center" width="100">
              <DivImage>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                  width="80"
                  height="80"
                  alt="JavaScript"
                />
              </DivImage>
              <br />
              <DivText>JavaScript</DivText>
            </Td>
            <Td align="center" width="100">
              <DivImage>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                  width="80"
                  height="80"
                  alt="JavaScript"
                />
              </DivImage>
              <br />
              <DivText>React</DivText>
            </Td>
            <Td align="center" width="100">
              <DivImage>
                <img
                  src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/redux.png"
                  width="80"
                  height="80"
                  alt="Redux"
                />
              </DivImage>
              <br />
              <DivText>Redux</DivText>
            </Td>
          </tr>
          <tr>
            <Td align="center" width="100">
              <DivImage>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                  width="80"
                  height="80"
                  alt="HTML5"
                />
              </DivImage>
              <br />
              <DivText>HTML5</DivText>
            </Td>
            <Td align="center" width="100">
              <DivImage>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                  width="80"
                  height="80"
                  alt="CSS3"
                />
              </DivImage>
              <br />
              <DivText>CSS3</DivText>
            </Td>
            <Td align="center" width="100">
              <DivImage>
                <img src={sassLogo} width="80" height="80" alt="Soon" />
              </DivImage>
              <br />
              <DivText>Sass</DivText>
            </Td>
          </tr>
          <tr>
            <Td align="center" width="100">
              <DivImage>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                  width="80"
                  height="80"
                  alt="NodeJS"
                />
              </DivImage>
              <br />
              <DivText>Node.js</DivText>
            </Td>
            <Td align="center" width="100">
              <DivImage>
                <img
                  src={expressLogo}
                  width="80"
                  height="80"
                  alt="JavaScript"
                />
              </DivImage>
              <br />
              <DivText>Express</DivText>
            </Td>
            <Td align="center" width="100">
              <DivImage>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  width="80"
                  height="80"
                  alt="JavaScript"
                />
              </DivImage>
              <br />
              <DivText>PostgresSQL</DivText>
            </Td>
          </tr>
          <tr>
            <Td align="center" width="100">
              <DivImage>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  width="80"
                  height="80"
                  alt="HTML5"
                />
              </DivImage>
              <br />
              <DivText>Git</DivText>
            </Td>
            <Td align="center" width="100">
              <DivImage>
                <img src={githubLogoT} width="80" height="80" alt="CSS3" />
              </DivImage>
              <br />
              <DivText>Github</DivText>
            </Td>
            <Td align="center" width="100">
              <DivImage>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/es6.svg"
                  width="80"
                  height="80"
                  alt="JavaScript"
                />
              </DivImage>
              <br />
              <DivText>ES6</DivText>
            </Td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Technologies;
