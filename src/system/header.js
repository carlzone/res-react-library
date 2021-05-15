import React, { Component } from "react";
import NaviBar, {NaviBrand,NaviCollapse,NaviBarContainer,NaviItem} from "./navi/navibar";

/* 
This will create header for the page and will return a target page.

PROPS LIST
- returnPage (callback function)
*/
class Header extends Component {
  render() {
    return (
      <header>
        <NaviBar
          id="top-navigation"
          breakpoint="md"
          variant="light"
          bgcolor="light"
          class="border border-dark border-top-0 border-start-0 border-end-0"
        >
          <NaviBrand id="site-brand" link="/" class="ms-2">
            <h1 className="m-0 p-0">Title</h1>
          </NaviBrand>
          <NaviCollapse id="menu-list">
            <NaviBarContainer position="right">
              <NaviItem
                name="Test"
                link="/test"
                class="p-1 px-2 me-2 text-dark"
              />
              <NaviItem
                name="Register"
                link="/register"
                class="p-1 px-2 me-2 text-dark"
              />
            </NaviBarContainer>
          </NaviCollapse>
        </NaviBar>
      </header>
    );
  }
}

export default Header;
