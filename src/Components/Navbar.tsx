import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  return (
    <Nav>
      <Logo onClick={() => history.push("/")}>Foodish</Logo>
      <NavGroup>
        <NavItem onClick={() => history.push("/")}>Home</NavItem>
        <NavItem onClick={() => history.push("/trivia")}>Trivia</NavItem>
        <NavItem onClick={() => history.push("/jokes")}>Jokes</NavItem>
        <NavItem onClick={() => history.push("/dev")}>Developer</NavItem>
        {!showMenu && (
          <MenuBtn
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            ☰
          </MenuBtn>
        )}
      </NavGroup>

      {showMenu && (
        <Menu>
          <MenuBtn
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            X
          </MenuBtn>
          <MenuItem
            onClick={() => {
              history.push("/");
              setShowMenu(false);
            }}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => {
              history.push("/trivia");
              setShowMenu(false);
            }}
          >
            Trivia
          </MenuItem>
          <MenuItem
            onClick={() => {
              history.push("/jokes");
              setShowMenu(false);
            }}
          >
            Jokes
          </MenuItem>
          <MenuItem
            onClick={() => {
              history.push("/dev");
              setShowMenu(false);
            }}
          >
            Developer
          </MenuItem>
        </Menu>
      )}
    </Nav>
  );
};

const Nav = styled.div`
  height: 70px;
  z-index: 2000;
  width: calc(100% - 2rem);
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 7px #fdfdfd;
  background: rgb(0 73 231 / 60%);
  position: fixed;
  top: 0;
  backdrop-filter: blur(5px);
`;

const MenuItem = styled.a`
  marin: 1rem;
  color: white;
`;

const Menu = styled.div`
  z-index: 100;
  width: 200px;
  right: 0;
  top: 0;
  height: 100vh;
  position: fixed;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  background: #5d5d5d;
  @media (min-width: 800px) {
    display: none;
  }
`;

const MenuBtn = styled.button`
  text-align: end;
  outline: none;
  border: none;
  background: none;
  color: white;
  font-weight: 600;
  @media (min-width: 800px) {
    display: none;
  }
`;

const Logo = styled.div`
  font-family: "Potta One", cursive;
  color: #fff;
  font-size: 2rem;
  cursor: default;
`;

const NavGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
`;

const NavItem = styled.a`
  margin: 0.5rem 1rem;
  font-weight: 500;
  @media (max-width: 800px) {
    display: none;
  }
`;
