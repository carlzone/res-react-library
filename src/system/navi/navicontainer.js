import React, { Component } from "react";

/* 
This will create the container for the list of the item

PROPS LIST
-position [left,right,center]
-customclass [additional class for the container]
*/
class NaviBarContainer extends Component {
  render() {
    const position = this.itemPosition();
    const customclass = this.props.customclass ? this.props.customclass : "";

    return (
      <ul className={"navbar-nav " + position + " " + customclass}>
        {this.props.children}
      </ul>
    );
  }

  itemPosition = () => {
    var position;
    switch (this.props.position) {
      case "left":
        position = "me-auto align-items-start";
        break;
      case "right":
        position = "ms-auto align-items-end";
        break;
      case "center":
        position = "m-auto align-items-center";
        break;
      default:
        position = "";
    }
    return position;
  };
}

export default NaviBarContainer;
