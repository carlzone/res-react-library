import React, { Component } from "react";

/* 
This will create a branding for the navigation bar
in text or image format. Any child element will be link

PROPS LIST
- id
- class
- link
*/
class NaviBrand extends Component {
  render() {
    const customclass = this.props.class ? this.props.class : "";
    return (
      <a
        id={this.props.id}
        className={"navbar-brand " + customclass}
        href={this.props.link}
      >
        {this.props.children}
      </a>
    );
  }
}

export default NaviBrand;
