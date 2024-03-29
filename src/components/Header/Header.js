import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          <img
            src="/logo.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="stats">
            Stats
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <Logo>
            <img
              src="/resume.png"
              alt="logo"
            />
          </Logo>
        </NavBtn>
        <Bars onClick={toggle} />
        <img style={{ position: "absolute", right: 160, top: 20 }} src="https://visitor-badge.laobi.icu/badge?page_id=adeziio.2" alt="visitors" />
      </Nav>
    </div>
  );
};

export default Header;
