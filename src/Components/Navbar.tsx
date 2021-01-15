import React, { useState } from "react";
import styled from "styled-components";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Nav>
      <Logo>Foodish</Logo>
      <NavGroup>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Developer</NavItem>
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
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
          <MenuItem>Developer</MenuItem>
        </Menu>
      )}
    </Nav>
  );
};

const Nav = styled.div`
  height: 70px;
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

const MenuItem = styled.div`
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
`;

const NavGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
`;

const NavItem = styled.div`
  margin: 0.5rem 1rem;
  font-weight: 500;
  @media (max-width: 800px) {
    display: none;
  }
`;
