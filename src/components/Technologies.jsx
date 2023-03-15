import React from "react";
import expressLogo from "../public/images/express.png";
import sassLogo from "../public/images/sass.png";
import githubLogo from "../public/images/github.png";
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

const DivImage = styled.div``;

const DivText = styled.div`
  padding-top: 10px;
  text-align: center;
  opacity: 0.6;
`;

const Technologies = () => {
  return (
    <div>
      <Table align="center">
        <tr>
          <Td align="center" width="100">
            <DivImage>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                width="85"
                height="85"
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
                width="85"
                height="85"
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
                width="85"
                height="85"
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
                width="85"
                height="85"
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
                width="85"
                height="85"
                alt="CSS3"
              />
            </DivImage>
            <br />
            <DivText>CSS3</DivText>
          </Td>
          <Td align="center" width="100">
            <DivImage>
              <img src={sassLogo} width="85" height="85" alt="Soon" />
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
                width="85"
                height="85"
                alt="NodeJS"
              />
            </DivImage>
            <br />
            <DivText>Node.js</DivText>
          </Td>
          <Td align="center" width="100">
            <DivImage>
              <img src={expressLogo} width="85" height="85" alt="JavaScript" />
            </DivImage>
            <br />
            <DivText>Express</DivText>
          </Td>
          <Td align="center" width="100">
            <DivImage>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                width="85"
                height="85"
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
                width="85"
                height="85"
                alt="HTML5"
              />
            </DivImage>
            <br />
            <DivText>Git</DivText>
          </Td>
          <Td align="center" width="100">
            <DivImage>
              <img src={githubLogo} width="85" height="85" alt="CSS3" />
            </DivImage>
            <br />
            <DivText>Github</DivText>
          </Td>
          <Td align="center" width="100">
            <DivImage>
              <img
                src="https://cdn.worldvectorlogo.com/logos/es6.svg"
                width="85"
                height="85"
                alt="JavaScript"
              />
            </DivImage>
            <br />
            <DivText>ES6</DivText>
          </Td>
        </tr>
      </Table>
    </div>
  );
};

export default Technologies;
