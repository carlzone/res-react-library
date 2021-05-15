import React, { Component } from "react";

/* 
This will create a collapsable navigation content list to make it
a dropdown when the size of the screen gets small

PROPS LIST
-id (reqired)
-classtoggler (optional) [A class for the button]
-classcontainer (optional) [A class for the collapsable container]
*/
class NaviCollapse extends Component {
  render() {
    const cclass_toggler = this.props.classtoggler
      ? this.props.classtoggler
      : "";
    const cclass_container = this.props.classcontainer
      ? this.props.classcontainer
      : "";

    return (
      <>
        <button
          className={"navbar-toggler " + cclass_toggler}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + this.props.id}
          aria-controls={this.props.id}
          aria-expanded="false"
          aria-label="Navigation toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={"collapse navbar-collapse " + cclass_container}
          id={this.props.id}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

export default NaviCollapse;
