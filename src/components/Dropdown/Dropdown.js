import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import { Link as ScrollLink } from "react-scroll";
import { Logo } from "./../Header/HeaderElements";

const SiderBar = styled.div`
  background: #151418;
  position: fixed;
  height: 100%;
  width: 100%;
  /* top: 0; */
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;
export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: #fff;
  cursor: pointer;
  font-size: 1.7rem;

  &:hover {
    transform: scale(1.1);
    -moz-box-shadow: 0 0 100px #099FFF;
    -webkit-box-shadow: 0 0 100px #099FFF;
    box-shadow: 0px 0px 100px #099FFF;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.7rem;
`;

function Dropdown({ isOpen, toggle }) {
  return (
    <SiderBar isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <NavMenu>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="about"
        >
          About
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="projects"
        >
          Projects
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="contact"
        >
          Contact
        </NavLink>
      </NavMenu>
      <NavBtn onClick={toggle}>
        <a
          href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1uyviIHz89b5G8LTWmABypK-EnwzLsr2M/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo >
            <img
              src="/resume.png"
              alt="logo"
            />
          </Logo>
        </a>
      </NavBtn>
    </SiderBar>
  );
}

export default Dropdown;
