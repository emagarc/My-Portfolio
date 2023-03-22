import React from "react";
import styled from "styled-components";
import logoEG from "../public/images/Nav/logoEG.png";

const Section = styled.div`
  display: flex;
  justify-content: center;
  background-color: #3d1c56;
  z-index: 9999;
  background-color: #2c065d;
  border: 0.5px solid #da4ea2;
  border-radius: 5px;
  z-index: 9999;
`;

const Container = styled.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const Links = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 50px;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
const ListItem = styled.li`
  cursor: pointer;
`;

const Icon = styled.img`
  width: 130px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Icon src={logoEG} />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
